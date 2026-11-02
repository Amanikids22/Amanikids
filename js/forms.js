/**
 * AMANI KIDS — FORM CONTROLLER (Vanilla JS)
 * Accessible form validation, field interaction states, tactile donation amounts, and bilingual EN/FR submission feedback.
 */

document.addEventListener('DOMContentLoaded', () => {
  const getLang = () => (document.documentElement.getAttribute('lang') === 'fr' ? 'fr' : 'en');

  const formI18n = {
    en: {
      impactMap: {
        '35': 'Provides a newcomer student with bilingual learning books and school supplies.',
        '75': 'Funds 1 month of after-school academic literacy coaching at Sauti Safe Space.',
        '150': 'Covers bus transit and translation support for a family attending medical appointments.',
        '500': 'Sponsors children’s games, drumming, and food stations at Bisakana Day festival.'
      },
      impact500: (num) => `Generously sponsors cultural festival operations and family supplies ($${num} USD).`,
      impact150: (num) => `Covers vital medical transit, translation, and school coaching ($${num} USD).`,
      impact75: (num) => `Supports after-school mentoring and homework coaching ($${num} USD).`,
      impact5: (num) => `Supplies essential bilingual books and classroom materials ($${num} USD).`,
      impactDefault: 'Empowers newcomer African refugee children with essential education and care.',
      submitAmount: (num) => `Complete $${num} USD Donation`,
      submitDefault: 'Complete Secure Donation',
      redirectSuccess: 'Thank you! Your information has been successfully received by info@amanikidsnc.org. We will be in touch shortly.',
      validationError: 'Please fill in all required fields marked with an asterisk (*).',
      sendingText: 'Sending to info@amanikidsnc.org...',
      successReceipt: 'Thank you! Your Zelle donation notification has been sent to info@amanikidsnc.org. An official IRS 501(c)(3) tax receipt will be issued to your email.',
      successDonate: 'Thank you deeply for your generous gift to AMANI KIDS! Your donation details have been delivered to info@amanikidsnc.org. An official IRS 501(c)(3) tax receipt will be sent to you.',
      successSupport: 'Thank you for reaching out. Your request has been securely sent to info@amanikidsnc.org. An Amani Kids coordinator will contact you warmly within 24–48 hours.',
      successVolunteer: 'Thank you for stepping forward to serve! Your volunteer application has been sent to info@amanikidsnc.org. Our team will review your interest and reach out with orientation details.',
      successPartner: 'Thank you for your partnership inquiry. Your details have been delivered to info@amanikidsnc.org. We look forward to collaborating with your organization.',
      successEvent: 'Thank you! Your event RSVP has been sent to info@amanikidsnc.org. We look forward to welcoming you and your family!',
      successNewsletter: 'Thank you for subscribing! Your email has been added to our community list at info@amanikidsnc.org.',
      successDefault: 'Message sent successfully to info@amanikidsnc.org. Thank you for connecting with Amani Kids!',
      copiedText: 'Copied!'
    },
    fr: {
      impactMap: {
        '35': 'Offre à un élève nouvellement arrivé des livres bilingues et des fournitures scolaires.',
        '75': 'Finance 1 mois d’accompagnement scolaire et de lecture après l’école à l’Espace Sauti.',
        '150': 'Couvre le transport en bus et l’interprétation pour une famille lors de rendez-vous médicaux.',
        '500': 'Parraine les jeux pour enfants, les percussions et les repas lors du festival Bisakana Day.'
      },
      impact500: (num) => `Parraine généreusement les opérations du festival culturel et l’aide aux familles (${num} $ USD).`,
      impact150: (num) => `Couvre le transport médical essentiel, la traduction et le suivi scolaire (${num} $ USD).`,
      impact75: (num) => `Soutient le mentorat après l’école et l’aide aux devoirs (${num} $ USD).`,
      impact5: (num) => `Fournit des livres bilingues essentiels et du matériel pédagogique (${num} $ USD).`,
      impactDefault: 'Soutient les enfants réfugiés africains nouvellement arrivés par l’éducation et la bienveillance.',
      submitAmount: (num) => `Confirmer le don de ${num} $ USD`,
      submitDefault: 'Confirmer le don sécurisé',
      redirectSuccess: 'Merci ! Vos informations ont bien été reçues par info@amanikidsnc.org. Nous vous contacterons très prochainement.',
      validationError: 'Veuillez remplir tous les champs obligatoires marqués d’un astérisque (*).',
      sendingText: 'Envoi en cours à info@amanikidsnc.org...',
      successReceipt: 'Merci ! Votre notification de don Zelle a été transmise à info@amanikidsnc.org. Un reçu fiscal officiel 501(c)(3) vous sera envoyé par courriel.',
      successDonate: 'Merci infiniment pour votre don généreux à AMANI KIDS ! Vos informations ont été transmises à info@amanikidsnc.org. Un reçu fiscal officiel 501(c)(3) vous sera adressé.',
      successSupport: 'Merci de nous avoir contactés. Votre demande confidentielle a bien été envoyée à info@amanikidsnc.org. Un coordinateur d’Amani Kids vous répondra avec bienveillance sous 24 à 48 heures.',
      successVolunteer: 'Merci pour votre engagement bénévole ! Votre candidature a été envoyée à info@amanikidsnc.org. Notre équipe vous contactera rapidement pour la séance d’accueil.',
      successPartner: 'Merci pour votre proposition de partenariat. Vos coordonnées ont été transmises à info@amanikidsnc.org. Nous avons hâte de collaborer avec votre organisation.',
      successEvent: 'Merci ! Votre inscription à l’événement a bien été envoyée à info@amanikidsnc.org. Nous avons hâte de vous accueillir avec votre famille !',
      successNewsletter: 'Merci pour votre inscription ! Votre adresse courriel a été ajoutée à notre liste communautaire.',
      successDefault: 'Votre message a bien été envoyé à info@amanikidsnc.org. Merci d’avoir contacté Amani Kids !',
      copiedText: 'Copié !'
    }
  };

  // 1. Tactile Donation Amount & Submit Text Controller
  const donationForm = document.getElementById('donation-form');
  if (donationForm) {
    const presetBtns = donationForm.querySelectorAll('.donation-preset-btn');
    const customInput = document.getElementById('custom-amount');
    const submitText = document.getElementById('donation-submit-text');
    const impactDesc = document.getElementById('donation-impact-desc');

    const updateSubmitButton = (val) => {
      const t = formI18n[getLang()];
      const num = parseInt(val, 10);
      if (submitText) {
        if (!isNaN(num) && num > 0) {
          submitText.textContent = t.submitAmount(num);
        } else {
          submitText.textContent = t.submitDefault;
        }
      }
    };

    const updateImpact = (val) => {
      if (!impactDesc) return;
      const t = formI18n[getLang()];
      const num = parseInt(val, 10);
      if (t.impactMap[val]) {
        impactDesc.textContent = t.impactMap[val];
      } else if (!isNaN(num) && num >= 500) {
        impactDesc.textContent = t.impact500(num);
      } else if (!isNaN(num) && num >= 150) {
        impactDesc.textContent = t.impact150(num);
      } else if (!isNaN(num) && num >= 75) {
        impactDesc.textContent = t.impact75(num);
      } else if (!isNaN(num) && num >= 5) {
        impactDesc.textContent = t.impact5(num);
      } else {
        impactDesc.textContent = t.impactDefault;
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

    window.addEventListener('amani:languageChanged', () => {
      const currentVal = customInput ? customInput.value : '';
      updateSubmitButton(currentVal);
      updateImpact(currentVal);
    });
  }

  // 2. Check for native return redirect (?submitted=...)
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('submitted') || urlParams.has('subscribed')) {
    const alert = document.querySelector('.form-alert');
    if (alert) {
      alert.className = 'form-alert success';
      alert.setAttribute('data-alert-state', 'redirectSuccess');
      alert.textContent = formI18n[getLang()].redirectSuccess;
      alert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  // Re-translate active form alerts when language is switched
  window.addEventListener('amani:languageChanged', () => {
    const t = formI18n[getLang()];
    document.querySelectorAll('.form-alert[data-alert-state]').forEach(alertEl => {
      const stateKey = alertEl.getAttribute('data-alert-state');
      if (stateKey && t[stateKey]) {
        alertEl.textContent = t[stateKey];
      }
    });
  });

  // 3. Universal Form Submission Handler -> info@amanikidsnc.org
  const forms = document.querySelectorAll('form[data-amani-form]');
  const RECIPIENT_EMAIL = 'info@amanikidsnc.org';

  forms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const t = formI18n[getLang()];

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
          alertContainer.setAttribute('data-alert-state', 'validationError');
          alertContainer.textContent = t.validationError;
          alertContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        return;
      }

      // Button loading state
      const originalHtml = submitBtn ? submitBtn.innerHTML : 'Submit';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = t.sendingText;
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

        await response.json();

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalHtml;
          if (window.amaniI18n) window.amaniI18n.applyLanguage(getLang(), false);
        }

        form.reset();

        if (alertContainer) {
          alertContainer.className = 'form-alert success';
          const stateMap = {
            receipt: 'successReceipt',
            donate: 'successDonate',
            support: 'successSupport',
            volunteer: 'successVolunteer',
            partner: 'successPartner',
            event: 'successEvent',
            newsletter: 'successNewsletter'
          };
          const stateKey = stateMap[formType] || 'successDefault';
          alertContainer.setAttribute('data-alert-state', stateKey);
          alertContainer.textContent = formI18n[getLang()][stateKey];
          alertContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      } catch (err) {
        console.warn('AJAX submission failed, attempting native form submit:', err);
        form.submit();
      }
    });
  });

  // 4. 1-Click Copy Zelle Details Controller (Bilingual EN / FR)
  document.querySelectorAll('.btn-copy-zelle').forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      const triggerCopiedState = () => {
        const t = formI18n[getLang()];
        const originalHtml = btn.innerHTML;
        btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> <span>${t.copiedText}</span>`;
        btn.classList.add('copied');
        setTimeout(() => {
          btn.innerHTML = originalHtml;
          btn.classList.remove('copied');
          if (window.amaniI18n) window.amaniI18n.applyLanguage(getLang(), false);
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
