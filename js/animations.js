/**
 * AMANI KIDS — ANIMATIONS & INTERACTIVE FEATURES (Vanilla JS)
 * IntersectionObserver scroll reveals, animated number counters, and bilingual interactive values switcher.
 */

document.addEventListener('DOMContentLoaded', () => {
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
          const duration = 1800;
          const frameDuration = 1000 / 60;
          const totalFrames = Math.round(duration / frameDuration);
          let frame = 0;

          const timer = setInterval(() => {
            frame++;
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

  // 3. Interactive Values Typographic Composition (Bilingual EN / FR)
  const valueButtons = document.querySelectorAll('.value-pill-btn');
  const valueTitle = document.getElementById('active-value-title');
  const valueTag = document.getElementById('active-value-tag');
  const valueText = document.getElementById('active-value-text');

  const valuesDataByLang = {
    en: {
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
    },
    fr: {
      peace: {
        tag: 'Identité Fondamentale • Lingala & Swahili : Amani',
        title: 'Paix (Amani)',
        text: 'Amani est notre fondation. Pour les familles qui ont traversé les conflits, le déplacement et la réinstallation, la paix n’est pas seulement l’absence de crise ; c’est la présence de la dignité, de la sécurité, d’un sentiment d’appartenance apaisant et de la compréhension mutuelle.'
      },
      love: {
        tag: 'Principe Directeur • Upendo',
        title: 'Amour',
        text: 'Une bienveillance inconditionnelle dans chaque interaction. Nous accueillons chaque enfant et chaque parent comme un membre de la famille, avec chaleur, patience et un accompagnement authentique tout au long de leur transition.'
      },
      joy: {
        tag: 'Célébration de la Vie • Bisakana',
        title: 'Joie',
        text: 'Célébrée par le rire, la musique, les contes et le jeu. La joie est notre résistance face aux épreuves et le catalyseur qui éveille l’éclat naturel et la résilience des enfants.'
      },
      respect: {
        tag: 'Honorer l’Héritage • Heshima',
        title: 'Respect',
        text: 'Une profonde considération pour les expériences vécues, la sagesse, les cultures et les traditions que les familles africaines nouvellement arrivées apportent avec elles à Charlotte.'
      },
      diversity: {
        tag: 'La Force dans l’Unité • Umoja',
        title: 'Diversité',
        text: 'Embrasser la riche multitude de nations, de langues et de traditions à travers le continent africain et la diaspora en valorisant chacune de nos identités culturelles.'
      },
      inclusion: {
        tag: 'Une Table Ouverte • Kukaribisha',
        title: 'Inclusion',
        text: 'Veiller à ce que chaque nouvel arrivant se sente reconnu, écouté et valorisé. Aucune famille n’est laissée seule face à la complexité des systèmes scolaires ou médicaux.'
      },
      equity: {
        tag: 'Égalité des Chances • Usawa',
        title: 'Équité',
        text: 'Lever les barrières linguistiques, éducatives et économiques systémiques afin que chaque enfant africain dispose des mêmes chances de s’épanouir, de diriger et de réaliser son plein potentiel.'
      }
    }
  };

  const getLang = () => (document.documentElement.getAttribute('lang') === 'fr' ? 'fr' : 'en');

  const renderActiveValue = (valKey, animate = true) => {
    const dict = valuesDataByLang[getLang()] || valuesDataByLang.en;
    if (!dict[valKey] || !valueTitle || !valueText) return;

    const displayCard = document.querySelector('.value-display-card');
    if (animate && displayCard) {
      displayCard.style.opacity = '0';
      displayCard.style.transform = 'translateY(8px)';

      setTimeout(() => {
        if (valueTag) valueTag.textContent = dict[valKey].tag;
        valueTitle.textContent = dict[valKey].title;
        valueText.textContent = dict[valKey].text;

        displayCard.style.opacity = '1';
        displayCard.style.transform = 'translateY(0)';
      }, 180);
    } else {
      if (valueTag) valueTag.textContent = dict[valKey].tag;
      valueTitle.textContent = dict[valKey].title;
      valueText.textContent = dict[valKey].text;
    }
  };

  if (valueButtons.length > 0 && valueTitle && valueText) {
    valueButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const valKey = btn.getAttribute('data-value-key');
        valueButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderActiveValue(valKey, true);
      });
    });

    window.addEventListener('amani:languageChanged', () => {
      const activeBtn = document.querySelector('.value-pill-btn.active') || valueButtons[0];
      if (activeBtn) {
        renderActiveValue(activeBtn.getAttribute('data-value-key'), false);
      }
    });
  }
});
