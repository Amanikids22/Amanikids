/**
 * AMANI KIDS — ANIMATIONS & INTERACTIVE FEATURES (Vanilla JS)
 * IntersectionObserver scroll reveals, animated number counters, and interactive values switcher.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Check for prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 1. Scroll-triggered Fade In (IntersectionObserver)
  const fadeElements = document.querySelectorAll('.fade-up');
  
  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    const fadeObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    fadeElements.forEach(el => fadeObserver.observe(el));
  } else {
    // If reduced motion is requested, immediately show all elements
    fadeElements.forEach(el => el.classList.add('visible'));
  }

  // 2. Animated Counter for Impact Metrics
  const counterElements = document.querySelectorAll('[data-counter-target]');
  
  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-counter-target'), 10);
          const suffix = el.getAttribute('data-counter-suffix') || '';
          const duration = 1800; // milliseconds
          const frameDuration = 1000 / 60;
          const totalFrames = Math.round(duration / frameDuration);
          let frame = 0;

          const timer = setInterval(() => {
            frame++;
            // Ease out cubic
            const progress = frame / totalFrames;
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.round(target * easeOutProgress);

            el.textContent = currentVal + suffix;

            if (frame >= totalFrames) {
              clearInterval(timer);
              el.textContent = target + suffix;
            }
          }, frameDuration);

          observer.unobserve(el);
        }
      });
    }, { threshold: 0.25 });

    counterElements.forEach(el => counterObserver.observe(el));
  } else {
    counterElements.forEach(el => {
      const target = el.getAttribute('data-counter-target');
      const suffix = el.getAttribute('data-counter-suffix') || '';
      el.textContent = target + suffix;
    });
  }

  // 3. Interactive Values Typographic Composition
  const valueButtons = document.querySelectorAll('.value-pill-btn');
  const valueTitle = document.getElementById('active-value-title');
  const valueTag = document.getElementById('active-value-tag');
  const valueText = document.getElementById('active-value-text');

  const valuesData = {
    peace: {
      tag: 'Core Identity • Lingala & Swahili: Amani',
      title: 'Peace (Amani)',
      text: 'Amani is our foundation. For families who have traversed conflict, displacement, and resettlement, peace is not merely the absence of crisis; it is the presence of dignity, safety, restful belonging, and mutual understanding.'
    },
    love: {
      tag: 'Guiding Principle • Upendo',
      title: 'Love',
      text: 'Unconditional care in every interaction. We meet every child and parent as kin, welcoming them with warmth, patience, and authentic companionship throughout their transition.'
    },
    joy: {
      tag: 'Celebration of Life • Bisakana',
      title: 'Joy',
      text: 'Celebrated through laughter, music, storytelling, and play. Joy is our resistance to hardship and the catalyst that sparks children’s natural brilliance and resilience.'
    },
    respect: {
      tag: 'Honoring Heritage • Heshima',
      title: 'Respect',
      text: 'Deep reverence for the lived experiences, wisdom, cultures, and traditions that African newcomer families bring with them to Charlotte.'
    },
    diversity: {
      tag: 'Strength in Unity • Umoja',
      title: 'Diversity',
      text: 'Embracing the rich multitude of nations, languages, and ethnic traditions across the African continent and diaspora without flattening our multifaceted cultures.'
    },
    inclusion: {
      tag: 'An Open Table • Kukaribisha',
      title: 'Inclusion',
      text: 'Ensuring every newcomer feels recognized, heard, and valued. No family is left to navigate complex school or healthcare systems in isolation.'
    },
    equity: {
      tag: 'Systemic Opportunity • Usawa',
      title: 'Equity',
      text: 'Breaking systemic language, educational, and economic barriers so every African child has equal access to thrive, lead, and fulfill their boundless potential.'
    }
  };

  if (valueButtons.length > 0 && valueTitle && valueText) {
    valueButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const valKey = btn.getAttribute('data-value-key');
        if (!valuesData[valKey]) return;

        // Toggle active button state
        valueButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Smooth transition of text
        const displayCard = document.querySelector('.value-display-card');
        if (displayCard) {
          displayCard.style.opacity = '0';
          displayCard.style.transform = 'translateY(8px)';

          setTimeout(() => {
            valueTag.textContent = valuesData[valKey].tag;
            valueTitle.textContent = valuesData[valKey].title;
            valueText.textContent = valuesData[valKey].text;

            displayCard.style.opacity = '1';
            displayCard.style.transform = 'translateY(0)';
          }, 180);
        }
      });
    });
  }
});
