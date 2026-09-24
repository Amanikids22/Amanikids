/**
 * AMANI KIDS — FORM CONTROLLER (Vanilla JS)
 * Accessible form validation, field interaction states, tactile donation amounts, and simulated submission feedback.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Tactile Donation Amount & Submit Text Controller
  const donationForm = document.getElementById('donation-form');
  if (donationForm) {
    const presetBtns = donationForm.querySelectorAll('.donation-preset-btn');
    const customInput = document.getElementById('custom-amount');
    const submitText = document.getElementById('donation-submit-text');
    const impactDesc = document.getElementById('donation-impact-desc');

    const impactMap = {
      '35': 'Provides a newcomer student with bilingual learning books and school supplies.',
      '75': 'Funds 1 month of after-school academic literacy coaching at Sauti Safe Space.',
      '150': 'Covers bus transit and translation support for a family attending medical appointments.',
      '500': 'Sponsors children’s games, drumming, and food stations at Bisakana Day festival.'
    };

    const updateSubmitButton = (val) => {
      const num = parseInt(val, 10);
      if (submitText) {
        if (!isNaN(num) && num > 0) {
          submitText.textContent = `Complete $${num} USD Donation`;
        } else {
          submitText.textContent = 'Complete Secure Donation';
        }
      }
    };

    const updateImpact = (val) => {
      if (!impactDesc) return;
      const num = parseInt(val, 10);
      if (impactMap[val]) {
        impactDesc.textContent = impactMap[val];
      } else if (!isNaN(num) && num >= 500) {
        impactDesc.textContent = `Generously sponsors cultural festival operations and family supplies ($${num} USD).`;
      } else if (!isNaN(num) && num >= 150) {
        impactDesc.textContent = `Covers vital medical transit, translation, and school coaching ($${num} USD).`;
      } else if (!isNaN(num) && num >= 75) {
        impactDesc.textContent = `Supports after-school mentoring and homework coaching ($${num} USD).`;
      } else if (!isNaN(num) && num >= 5) {
        impactDesc.textContent = `Supplies essential bilingual books and classroom materials ($${num} USD).`;
      } else {
        impactDesc.textContent = 'Empowers newcomer African refugee children with essential education and care.';
      }
    };

    presetBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        presetBtns.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        const amount = btn.getAttribute('data-amount');
        if (customInput) {
          customInput.value = amount;
        }
        updateSubmitButton(amount);
        updateImpact(amount);
      });
    });

    if (customInput) {
      customInput.addEventListener('input', () => {
        const val = customInput.value;
        presetBtns.forEach(btn => {
          if (btn.getAttribute('data-amount') === val) {
            btn.classList.add('is-active');
          } else {
            btn.classList.remove('is-active');
          }
        });
        updateSubmitButton(val);
        updateImpact(val);
      });
    }
  }

  // 2. Check for native return redirect (?submitted=...)
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('submitted') || urlParams.has('subscribed')) {
    const alert = document.querySelector('.form-alert');
    if (alert) {
      alert.className = 'form-alert success';
      alert.textContent = 'Thank you! Your information has been successfully received by info@amanikidsnc.org. We will be in touch shortly.';
      alert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  // 3. Universal Form Submission Handler -> info@amanikidsnc.org
  const forms = document.querySelectorAll('form[data-amani-form]');
  const RECIPIENT_EMAIL = 'info@amanikidsnc.org';

  forms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formType = form.getAttribute('data-amani-form');
      const alertContainer = form.querySelector('.form-alert');
      const submitBtn = form.querySelector('button[type="submit"]');

      // Simple validation
      let isValid = true;
      const requiredInputs = form.querySelectorAll('[required]');

      requiredInputs.forEach(input => {
        if (!input.value.trim()) {
          isValid = false;
          input.classList.add('input-error');
        } else {
          input.classList.remove('input-error');
        }
      });

      if (!isValid) {
        if (alertContainer) {
          alertContainer.className = 'form-alert error';
          alertContainer.textContent = 'Please fill in all required fields marked with an asterisk (*).';
          alertContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        return;
      }

      // Button loading state
      const originalHtml = submitBtn ? submitBtn.innerHTML : 'Submit';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending to info@amanikidsnc.org...';
      }

      // Collect form fields
      const formData = new FormData(form);
      const payload = {};

      formData.forEach((value, key) => {
        if (payload[key]) {
          if (Array.isArray(payload[key])) {
            payload[key].push(value);
          } else {
            payload[key] = [payload[key], value];
          }
        } else {
          payload[key] = value;
        }
      });

      // Join multi-value inputs like checkboxes into readable text
      Object.keys(payload).forEach(k => {
        if (Array.isArray(payload[k])) {
          payload[k] = payload[k].join(', ');
        }
      });

      const formTitles = {
        contact: 'New Contact Message',
        support: 'Urgent Family Support Request',
        volunteer: 'New Volunteer Application',
        partner: 'New Partnership Inquiry',
        event: 'New Event RSVP Confirmation',
        donate: 'Online Donation Pledge',
        receipt: 'Zelle Donation Tax Receipt Request',
        newsletter: 'New Newsletter Subscription'
      };

      if (!payload['_subject']) {
        payload['_subject'] = `[AMANI KIDS] ${formTitles[formType] || 'Website Inquiry'} - ${payload.name || payload.email || 'Visitor'}`;
      }
      payload['_template'] = 'table';
      payload['_captcha'] = 'false';

      try {
        const response = await fetch(`https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(payload)
        });

        const result = await response.json();

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalHtml;
        }

        form.reset();

        if (alertContainer) {
          alertContainer.className = 'form-alert success';
          if (formType === 'receipt') {
            alertContainer.textContent = 'Thank you! Your Zelle donation notification has been sent to info@amanikidsnc.org. An official IRS 501(c)(3) tax receipt will be issued to your email.';
          } else if (formType === 'donate') {
            alertContainer.textContent = 'Thank you deeply for your generous gift to AMANI KIDS! Your donation details have been delivered to info@amanikidsnc.org. An official IRS 501(c)(3) tax receipt will be sent to you.';
          } else if (formType === 'support') {
            alertContainer.textContent = 'Thank you for reaching out. Your request has been securely sent to info@amanikidsnc.org. An Amani Kids coordinator will contact you warmly within 24–48 hours.';
          } else if (formType === 'volunteer') {
            alertContainer.textContent = 'Thank you for stepping forward to serve! Your volunteer application has been sent to info@amanikidsnc.org. Our team will review your interest and reach out with orientation details.';
          } else if (formType === 'partner') {
            alertContainer.textContent = 'Thank you for your partnership inquiry. Your details have been delivered to info@amanikidsnc.org. We look forward to collaborating with your organization.';
          } else if (formType === 'event') {
            alertContainer.textContent = 'Thank you! Your event RSVP has been sent to info@amanikidsnc.org. We look forward to welcoming you and your family!';
          } else if (formType === 'newsletter') {
            alertContainer.textContent = 'Thank you for subscribing! Your email has been added to our community list at info@amanikidsnc.org.';
          } else {
            alertContainer.textContent = 'Message sent successfully to info@amanikidsnc.org. Thank you for connecting with Amani Kids!';
          }
          alertContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      } catch (err) {
        console.warn('AJAX submission failed, attempting native form submit:', err);
        // Fallback to native HTML form submission
        form.submit();
      }
    });
  });

  // 4. 1-Click Copy Zelle Details Controller
  document.querySelectorAll('.btn-copy-zelle').forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      const triggerCopiedState = () => {
        const originalHtml = btn.innerHTML;
        btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> <span>Copied!</span>`;
        btn.classList.add('copied');
        setTimeout(() => {
          btn.innerHTML = originalHtml;
          btn.classList.remove('copied');
        }, 2000);
      };

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(textToCopy).then(triggerCopiedState).catch(() => {
          fallbackCopyText(textToCopy, triggerCopiedState);
        });
      } else {
        fallbackCopyText(textToCopy, triggerCopiedState);
      }
    });
  });

  function fallbackCopyText(text, callback) {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    if (callback) callback();
  }
});
