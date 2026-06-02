/* ==========================================================================
   PERSONAL PORTFOLIO WEBPAGE - MAIN JAVASCRIPT
   Features: Typewriter effect, Mobile Hamburger Drawer, Shrinking Sticky Nav,
             IntersectionObserver Section Tracking, Skills animation triggers,
             Click-to-copy handlers, Validated Contact Form with Toast alerts.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all components factually
  initTypewriter();
  initMobileMenu();
  initStickyHeaderFallback();
  initActiveSectionTracker();
  initSkillsAnimation();
  initContactForm();
  initScrollProgress();
  initScrollRevealFallback();
});

/* --------------------------------------------------------------------------
   1. HERO TYPEWRITER EFFECT
   -------------------------------------------------------------------------- */
function initTypewriter() {
  const element = document.querySelector('.typing-text');
  if (!element) return;

  const roles = JSON.parse(element.getAttribute('data-roles') || '["Developer", "Designer", "Problem Solver"]');
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let delay = 150;

  function type() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
      // Deleting character
      element.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      delay = 75; // Faster deletion
    } else {
      // Adding character
      element.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      delay = 150; // Normal typing speed
    }

    // Finished typing entire role word
    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      delay = 2000; // Pause at full word
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      delay = 500; // Pause before typing next word
    }

    setTimeout(type, delay);
  }

  // Trigger typewriter cycle
  setTimeout(type, 1000);
}

/* --------------------------------------------------------------------------
   2. MOBILE NAVIGATION DRAWER
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!hamburger || !navMenu) return;

  // Toggle drawer open/close
  function toggleMenu() {
    const isOpen = hamburger.classList.toggle('active');
    navMenu.classList.toggle('active', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  }

  function closeMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
  }

  hamburger.addEventListener('click', toggleMenu);

  // Close drawer on click of links
  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close drawer on clicking outside the drawer area
  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('active') && 
        !navMenu.contains(e.target) && 
        !hamburger.contains(e.target)) {
      closeMenu();
    }
  });

  // Close drawer on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
      closeMenu();
    }
  });
}

/* --------------------------------------------------------------------------
   3. STICKY HEADER SHRINK (FALLBACK FOR FIREFOX/OLDER BROWSERS)
   -------------------------------------------------------------------------- */
function initStickyHeaderFallback() {
  // If native scroll-driven animations are supported, let CSS handle it
  if (CSS.supports('(animation-timeline: scroll()) and (animation-range: 0% 100%)')) {
    return;
  }

  const header = document.querySelector('header');
  if (!header) return;

  let ticking = false;

  function checkScroll() {
    if (window.scrollY > 50) {
      header.classList.add('shrinked');
    } else {
      header.classList.remove('shrinked');
    }
    ticking = false;
  }

  // Run on scroll throttled by requestAnimationFrame
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(checkScroll);
      ticking = true;
    }
  }, { passive: true });

  // Initial check
  checkScroll();
}

/* --------------------------------------------------------------------------
   4. SCROLL PROGRESS BAR INDICATOR
   -------------------------------------------------------------------------- */
function initScrollProgress() {
  const progressBar = document.querySelector('.scroll-progress');
  if (!progressBar) return;

  let ticking = false;

  function updateProgress() {
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (scrollHeight > 0) {
      const scrollPercent = (window.scrollY / scrollHeight) * 100;
      progressBar.style.width = `${scrollPercent}%`;
    } else {
      progressBar.style.width = '0%';
    }
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateProgress);
      ticking = true;
    }
  }, { passive: true });

  // Initial update
  updateProgress();
}

/* --------------------------------------------------------------------------
   5. NAVIGATION LINK HIGH-PERFORMANCE ACTIVE TRACKING
   -------------------------------------------------------------------------- */
function initActiveSectionTracker() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  if (sections.length === 0 || navLinks.length === 0) return;

  const observerOptions = {
    root: null,
    // Root margin creates a bounding box offset of active trigger zone
    rootMargin: '-30% 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const activeId = entry.target.getAttribute('id');
        
        navLinks.forEach(link => {
          const href = link.getAttribute('href').substring(1);
          if (href === activeId) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

/* --------------------------------------------------------------------------
   6. SKILLS PROGRESS BAR TRANSITIONS
   -------------------------------------------------------------------------- */
function initSkillsAnimation() {
  const skillsSection = document.getElementById('skills');
  const progressFills = document.querySelectorAll('.progress-bar-fill');
  if (!skillsSection || progressFills.length === 0) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        progressFills.forEach(fill => {
          const percentage = fill.getAttribute('data-percentage');
          fill.style.width = `${percentage}%`;
        });
        // Disconnect once animation fires once
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  observer.observe(skillsSection);
}

/* --------------------------------------------------------------------------
   7. CONTACT DETAILS COPY & SECURE FORM SUBMISSIONS TOASTS
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('portfolioContactForm');
  const toast = document.getElementById('formToast');
  
  // Custom Clipboard Utility Click Listeners
  const copyItems = document.querySelectorAll('.copyable');
  copyItems.forEach(item => {
    item.style.cursor = 'pointer';
    item.setAttribute('title', 'Click to copy');

    item.addEventListener('click', async () => {
      const textToCopy = item.getAttribute('data-copy-val') || item.textContent.trim();
      try {
        await navigator.clipboard.writeText(textToCopy);
        showToast('Info Copied', 'Success! Contact info copied to your clipboard.');
      } catch (err) {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        textarea.style.position = 'fixed'; // Avoid scrolling view
        document.body.appendChild(textarea);
        textarea.select();
        try {
          document.execCommand('copy');
          showToast('Info Copied', 'Success! Contact info copied to your clipboard.');
        } catch (copyErr) {
          console.error('Could not copy contact value', copyErr);
        }
        document.body.removeChild(textarea);
      }
    });
  });

  if (!form) return;

  // Intercept submit
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Check validity state
    if (!form.checkValidity()) {
      showToast('Validation Error', 'Please check your form inputs and try again.');
      return;
    }

    const submitBtn = form.querySelector('.btn-submit');
    if (!submitBtn) return;

    // Loading states
    submitBtn.classList.add('loading');
    submitBtn.setAttribute('disabled', 'disabled');

    // Simulate secure request delay
    setTimeout(() => {
      submitBtn.classList.remove('loading');
      submitBtn.removeAttribute('disabled');

      // Reset values
      form.reset();
      
      // Toast notification alert trigger
      showToast('Message Sent', 'Thank you! Your message was sent successfully.');
    }, 2000);
  });

  // Custom Toast Display cycle
  let toastTimeout;
  function showToast(title, message) {
    if (!toast) return;

    const toastTitle = toast.querySelector('.toast-title');
    const toastBody = toast.querySelector('.toast-body');

    if (toastTitle) toastTitle.textContent = title;
    if (toastBody) toastBody.textContent = message;

    toast.classList.add('show');

    // Clear active timeout resets
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  }
}

/* --------------------------------------------------------------------------
   8. SCROLL ENTRY REVEALS FALLBACKS
   -------------------------------------------------------------------------- */
function initScrollRevealFallback() {
  // If native view-driven scroll timeline is supported, let browser handle performantly
  if (CSS.supports('(animation-timeline: view()) and (animation-range: entry)')) {
    return;
  }

  const revealElements = document.querySelectorAll('.scroll-reveal');
  if (revealElements.length === 0) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.05
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => observer.observe(el));
}
