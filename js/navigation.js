/**
 * AMANI KIDS — NAVIGATION CONTROLLER (Vanilla JS)
 * Handles sticky/floating header morphing, desktop dropdowns with automatic shifting/closing,
 * mobile drawer accordion with single-open shifting, and keyboard accessibility.
 */

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const mobileToggle = document.querySelector('.mobile-nav-toggle, .mobile-toggle-btn');
  const mobileClose = document.querySelector('.mobile-close-btn');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  const mobileBackdrop = document.querySelector('.mobile-drawer-backdrop');

  // --------------------------------------------------------------------------
  // 1. Scroll-based Header Morphing
  // --------------------------------------------------------------------------
  const handleScroll = () => {
    if (!header) return;
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // --------------------------------------------------------------------------
  // 2. Mobile Drawer Controls
  // --------------------------------------------------------------------------
  const openDrawer = () => {
    if (!mobileDrawer || !mobileBackdrop) return;
    mobileDrawer.classList.add('active');
    mobileBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
    mobileDrawer.setAttribute('aria-hidden', 'false');
    if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'true');
    if (mobileClose) mobileClose.focus();
  };

  const closeDrawer = () => {
    if (!mobileDrawer || !mobileBackdrop) return;
    mobileDrawer.classList.remove('active');
    mobileBackdrop.classList.remove('active');
    document.body.style.overflow = '';
    mobileDrawer.setAttribute('aria-hidden', 'true');
    if (mobileToggle) {
      mobileToggle.setAttribute('aria-expanded', 'false');
      mobileToggle.focus();
    }
  };

  if (mobileToggle) {
    mobileToggle.addEventListener('click', openDrawer);
  }

  if (mobileClose) {
    mobileClose.addEventListener('click', closeDrawer);
  }

  if (mobileBackdrop) {
    mobileBackdrop.addEventListener('click', closeDrawer);
  }

  // --------------------------------------------------------------------------
  // 3. Desktop Dropdown Shifting & Automatic Closing Logic
  // --------------------------------------------------------------------------
  const dropdownItems = document.querySelectorAll('.nav-item-dropdown');
  const standardNavLinks = document.querySelectorAll('.nav-links > .nav-link');
  let dropdownCloseTimeout = null;

  const closeAllDesktopDropdowns = (exceptItem = null) => {
    dropdownItems.forEach(item => {
      if (item !== exceptItem) {
        item.classList.remove('is-open');
        const toggle = item.querySelector('.nav-link-dropdown');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
      }
    });
  };

  dropdownItems.forEach(item => {
    const toggle = item.querySelector('.nav-link-dropdown');
    if (!toggle) return;

    // A. Click / Touch to toggle or shift
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const isAlreadyOpen = item.classList.contains('is-open');

      // Always close any other open dropdowns immediately
      closeAllDesktopDropdowns(item);

      if (isAlreadyOpen) {
        item.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('is-open');
        toggle.setAttribute('aria-expanded', 'true');
      }
    });

    // B. Mouse Enter: cancel pending close, close other dropdowns, open current
    item.addEventListener('mouseenter', () => {
      if (dropdownCloseTimeout) {
        clearTimeout(dropdownCloseTimeout);
        dropdownCloseTimeout = null;
      }
      closeAllDesktopDropdowns(item);
      item.classList.add('is-open');
      toggle.setAttribute('aria-expanded', 'true');
    });

    // C. Mouse Leave: close automatically after brief grace period (120ms)
    item.addEventListener('mouseleave', () => {
      dropdownCloseTimeout = setTimeout(() => {
        item.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }, 120);
    });

    // D. Keyboard support (Escape to close)
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        item.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });

    // E. Clicking any item inside the dropdown closes it
    const subItems = item.querySelectorAll('.nav-dropdown-item');
    subItems.forEach(sub => {
      sub.addEventListener('click', () => {
        closeAllDesktopDropdowns();
      });
    });
  });

  // When hovering or focusing standard direct nav links (e.g. Home, Album, Contact Us), close open dropdowns
  standardNavLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      closeAllDesktopDropdowns();
    });
    link.addEventListener('focus', () => {
      closeAllDesktopDropdowns();
    });
  });

  // Global click outside closes all desktop dropdowns
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-item-dropdown')) {
      closeAllDesktopDropdowns();
    }
  });

  // --------------------------------------------------------------------------
  // 4. Mobile Accordion Shifting & Automatic Closing Logic
  // --------------------------------------------------------------------------
  const mobileAccordionHeaders = document.querySelectorAll('.mobile-accordion-header');
  const mobileSimpleLinks = document.querySelectorAll('.mobile-nav-link-simple');

  const closeAllMobileAccordions = (exceptGroup = null) => {
    document.querySelectorAll('.mobile-nav-group').forEach(group => {
      if (group !== exceptGroup) {
        group.classList.remove('open');
        const headerBtn = group.querySelector('.mobile-accordion-header');
        if (headerBtn) headerBtn.setAttribute('aria-expanded', 'false');
      }
    });
  };

  mobileAccordionHeaders.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const parentGroup = btn.closest('.mobile-nav-group');
      if (!parentGroup) return;

      const isCurrentlyOpen = parentGroup.classList.contains('open');

      // Close all other groups immediately ("Ça devait shifter")
      closeAllMobileAccordions(parentGroup);

      if (isCurrentlyOpen) {
        parentGroup.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      } else {
        parentGroup.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // When tapping a simple mobile link (Home, Album, Contact), close any open accordion
  mobileSimpleLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeAllMobileAccordions();
      closeDrawer();
    });
  });

  // When tapping a submenu link inside an accordion, close drawer
  const mobileSubnavLinks = document.querySelectorAll('.mobile-subnav-link');
  mobileSubnavLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  // Close on Escape key (mobile drawer + desktop dropdowns)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllDesktopDropdowns();
      if (mobileDrawer && mobileDrawer.classList.contains('active')) {
        closeDrawer();
      }
    }
  });

  // --------------------------------------------------------------------------
  // 5. Highlight Current Active Nav Link & Parent Dropdown
  // --------------------------------------------------------------------------
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const allNavLinks = document.querySelectorAll('.nav-link, .nav-dropdown-item, .mobile-nav-link-simple, .mobile-subnav-link');

  allNavLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const cleanHref = href.split('#')[0];

    if (cleanHref === currentPath || (currentPath === '' && cleanHref === 'index.html')) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');

      // Highlight parent desktop dropdown toggle if inside one
      const parentDropdown = link.closest('.nav-item-dropdown');
      if (parentDropdown) {
        const dropdownToggle = parentDropdown.querySelector('.nav-link-dropdown');
        if (dropdownToggle) dropdownToggle.classList.add('active');
      }

      // Open parent mobile accordion if current page is inside it
      const parentMobileGroup = link.closest('.mobile-nav-group');
      if (parentMobileGroup) {
        parentMobileGroup.classList.add('open');
        const accordionBtn = parentMobileGroup.querySelector('.mobile-accordion-header');
        if (accordionBtn) {
          accordionBtn.classList.add('active');
          accordionBtn.setAttribute('aria-expanded', 'true');
        }
      }
    } else {
      link.classList.remove('active');
      link.removeAttribute('aria-current');
    }
  });

  // --------------------------------------------------------------------------
  // 6. Mobile Bottom App Bar Controller & Haptic Feedback
  // --------------------------------------------------------------------------
  const mobileBottomBar = document.querySelector('.mobile-bottom-bar');
  const mobileBottomTabs = document.querySelectorAll('.mobile-bottom-tab');

  if (mobileBottomBar && mobileBottomTabs.length > 0) {
    // A. Highlight Active Bottom Tab
    mobileBottomTabs.forEach(tab => {
      const href = tab.getAttribute('href');
      if (!href) return;
      const cleanHref = href.split('#')[0];

      if (cleanHref === currentPath || (currentPath === '' && cleanHref === 'index.html')) {
        tab.classList.add('active');
        tab.setAttribute('aria-current', 'page');
      } else {
        tab.classList.remove('active');
        tab.removeAttribute('aria-current');
      }
    });

    // B. Smart Scroll: smooth slide-down when scrolling down fast, slide-up on scroll up
    let lastScrollY = window.scrollY;
    let scrollTicking = false;

    window.addEventListener('scroll', () => {
      if (!scrollTicking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const scrollDelta = currentScrollY - lastScrollY;

          if (currentScrollY > 120 && scrollDelta > 12) {
            // Scrolling down fast -> hide dock smoothly
            mobileBottomBar.style.transform = 'translateY(110%)';
          } else if (scrollDelta < -6 || currentScrollY < 60) {
            // Scrolling up or near top -> show dock
            mobileBottomBar.style.transform = 'translateY(0)';
          }

          lastScrollY = currentScrollY;
          scrollTicking = false;
        });
        scrollTicking = true;
      }
    }, { passive: true });
  }

  // C. Subtle Haptic Feedback on interactive touch (if supported)
  const triggerHaptic = () => {
    if ('vibrate' in navigator && typeof navigator.vibrate === 'function') {
      try {
        navigator.vibrate(8);
      } catch (e) {
        // Silently ignore if not permitted by user agent
      }
    }
  };

  document.querySelectorAll('.btn, .mobile-bottom-tab, .mobile-nav-toggle, .lang-btn, .mobile-subnav-link').forEach(el => {
    el.addEventListener('touchstart', triggerHaptic, { passive: true });
  });
});
