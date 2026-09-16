/**
 * AMANI KIDS — MAIN CONTROLLER (Vanilla JS)
 * Core initialization, document utilities, and accessibility enhancements.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Update copyright year dynamically
  const yearElements = document.querySelectorAll('.current-year');
  const currentYear = new Date().getFullYear();
  yearElements.forEach(el => {
    el.textContent = currentYear;
  });

  // Log system readiness
  console.log('Amani Kids website initialized. Peace • Belonging • Community.');

  // Initialize Quick-Fire FAQ Accordion (Applied Pattern)
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const answer = item.querySelector('.faq-answer');
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';

      // Toggle current item
      if (isExpanded) {
        btn.setAttribute('aria-expanded', 'false');
        item.classList.remove('active');
        if (answer) answer.style.maxHeight = null;
      } else {
        btn.setAttribute('aria-expanded', 'true');
        item.classList.add('active');
        if (answer) answer.style.maxHeight = (answer.scrollHeight + 30) + 'px';
      }
    });
  });

  // Initialize Team Category Filtering (about.html)
  const filterButtons = document.querySelectorAll('.team-filter-btn');
  const teamCards = document.querySelectorAll('.team-card[data-category]');
  if (filterButtons.length && teamCards.length) {
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        const filter = btn.getAttribute('data-filter');
        teamCards.forEach(card => {
          const categories = (card.getAttribute('data-category') || '').split(' ');
          if (filter === 'all' || categories.includes(filter)) {
            card.classList.remove('filtered-out');
            card.style.opacity = '0';
            setTimeout(() => {
              card.style.transition = 'opacity 0.25s ease';
              card.style.opacity = '1';
            }, 30);
          } else {
            card.classList.add('filtered-out');
          }
        });
      });
    });
  }
});

