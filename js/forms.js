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

  // 2. Universal Form Submission Handler
  const forms = document.querySelectorAll('form[data-amani-form]');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
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
        submitBtn.textContent = 'Processing securely...';
      }

      // Simulate network request
      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalHtml;
        }

        form.reset();

        if (alertContainer) {
          alertContainer.className = 'form-alert success';
          if (formType === 'donate') {
            alertContainer.textContent = 'Thank you deeply for your generous gift to AMANI KIDS! Your donation is 100% tax-deductible, and an official IRS 501(c)(3) tax receipt has been emailed to you.';
          } else if (formType === 'support') {
            alertContainer.textContent = 'Thank you for reaching out. An Amani Kids coordinator will contact you warmly within 24–48 hours to connect your family with trusted resources.';
          } else if (formType === 'volunteer') {
            alertContainer.textContent = 'Thank you for stepping forward to serve! Our team will review your volunteer interest and get in touch with orientation details.';
          } else if (formType === 'partner') {
            alertContainer.textContent = 'Thank you for your partnership inquiry. We look forward to collaborating with your organization to empower African diaspora families.';
          } else {
            alertContainer.textContent = 'Message sent successfully. Thank you for connecting with Amani Kids!';
          }
          alertContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }, 700);
    });
  });
});
