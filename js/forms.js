/**
 * AMANI KIDS — FORM CONTROLLER (Vanilla JS)
 * Accessible form validation, field interaction states, and simulated submission feedback.
 */

document.addEventListener('DOMContentLoaded', () => {
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
      const originalText = submitBtn ? submitBtn.textContent : 'Submit';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Submitting...';
      }

      // Simulate network request
      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
        }

        form.reset();

        if (alertContainer) {
          alertContainer.className = 'form-alert success';
          if (formType === 'support') {
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
