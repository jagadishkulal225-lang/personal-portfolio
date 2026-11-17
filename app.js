/**
 * Jagadish kulal (Jaggu) - Developer Portfolio JavaScript
 * Modern, accessible, zero-dependency client interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
  // ------------------------------------------------------------------------
  // 0. PROFILE PHOTO HANDLER & PERSISTENCE
  // ------------------------------------------------------------------------
  const profilePhotoUpload = document.getElementById('profile-photo-upload');
  const syncProfilePhotos = document.querySelectorAll('.sync-profile-photo');

  // Load custom photo if saved in localStorage
  try {
    const savedPhoto = localStorage.getItem('jaggu-profile-photo');
    if (savedPhoto) {
      syncProfilePhotos.forEach(img => {
        img.src = savedPhoto;
      });
    }
  } catch (err) {
    // LocalStorage read error guard
  }

  profilePhotoUpload?.addEventListener('change', (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        showToast('Please select a valid image file (JPG, PNG, WebP).');
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64Data = event.target?.result;
        if (base64Data) {
          syncProfilePhotos.forEach(img => {
            img.src = base64Data;
          });
          try {
            localStorage.setItem('jaggu-profile-photo', base64Data);
          } catch (storageErr) {
            console.warn('Image size too large for localStorage, displayed for session.');
          }
          showToast('Profile photo updated successfully!');
        }
      };
      reader.readAsDataURL(file);
    }
  });

  // ------------------------------------------------------------------------
  // 1. THEME MANAGEMENT (Light / Dark Mode)
  // ------------------------------------------------------------------------
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');
  
  // Check persisted theme or system preference. Default is 'light'.
  const savedTheme = localStorage.getItem('portfolio-theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  function applyTheme(isDark) {
    if (isDark) {
      document.documentElement.classList.add('dark');
      if (themeColorMeta) themeColorMeta.setAttribute('content', '#0b0f17');
      updateThemeIcons(true);
    } else {
      document.documentElement.classList.remove('dark');
      if (themeColorMeta) themeColorMeta.setAttribute('content', '#f97316');
      updateThemeIcons(false);
    }
  }

  function updateThemeIcons(isDark) {
    themeToggleBtns.forEach(btn => {
      btn.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
      const icon = btn.querySelector('svg');
      if (icon) {
        if (isDark) {
          // Render Sun icon
          icon.innerHTML = `
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          `;
        } else {
          // Render Moon icon
          icon.innerHTML = `
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          `;
        }
      }
    });
  }

  // Initial Theme Setup
  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark && false)) {
    applyTheme(true);
  } else {
    // Default requirement: Light Theme
    applyTheme(savedTheme === 'dark');
  }

  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
      applyTheme(isDark);
      showToast(isDark ? 'Switched to Dark Theme' : 'Switched to Light Theme');
    });
  });

  // ------------------------------------------------------------------------
  // 2. MOBILE DRAWER NAVIGATION
  // ------------------------------------------------------------------------
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const closeDrawerBtn = document.getElementById('close-drawer-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileDrawerOverlay = document.getElementById('mobile-drawer-overlay');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  function openDrawer() {
    if (mobileDrawer && mobileDrawerOverlay) {
      mobileDrawer.classList.add('active');
      mobileDrawerOverlay.classList.add('active');
      mobileDrawer.setAttribute('aria-hidden', 'false');
      mobileMenuBtn?.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeDrawer() {
    if (mobileDrawer && mobileDrawerOverlay) {
      mobileDrawer.classList.remove('active');
      mobileDrawerOverlay.classList.remove('active');
      mobileDrawer.setAttribute('aria-hidden', 'true');
      mobileMenuBtn?.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  }

  mobileMenuBtn?.addEventListener('click', openDrawer);
  closeDrawerBtn?.addEventListener('click', closeDrawer);
  mobileDrawerOverlay?.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  // ------------------------------------------------------------------------
  // 3. SCROLL SPY & STICKY HEADER
  // ------------------------------------------------------------------------
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  function updateActiveNavLink() {
    let scrollY = window.pageYOffset;
    
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
        drawerLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });

  // ------------------------------------------------------------------------
  // 4. ANIMATED SKILL METERS ON SCROLL
  // ------------------------------------------------------------------------
  const meterFills = document.querySelectorAll('.meter-fill');
  
  if ('IntersectionObserver' in window) {
    const meterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const percentage = target.getAttribute('data-percentage');
          if (percentage) {
            target.style.width = `${percentage}%`;
          }
          observer.unobserve(target);
        }
      });
    }, { threshold: 0.3 });

    meterFills.forEach(fill => {
      meterObserver.observe(fill);
    });
  } else {
    meterFills.forEach(fill => {
      const percentage = fill.getAttribute('data-percentage');
      if (percentage) fill.style.width = `${percentage}%`;
    });
  }

  // ------------------------------------------------------------------------
  // 5. PROJECT FILTERING TABS
  // ------------------------------------------------------------------------
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card-wrapper');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue || category?.includes(filterValue)) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // ------------------------------------------------------------------------
  // 6. RESUME MODAL & PRINT / DOWNLOAD
  // ------------------------------------------------------------------------
  const openResumeBtns = document.querySelectorAll('.open-resume-btn');
  const closeResumeBtn = document.getElementById('close-resume-modal');
  const resumeModalOverlay = document.getElementById('resume-modal-overlay');
  const printResumeBtn = document.getElementById('print-resume-btn');
  const downloadResumeTxtBtn = document.getElementById('download-resume-txt-btn');

  function openResumeModal() {
    if (resumeModalOverlay) {
      resumeModalOverlay.classList.add('active');
      resumeModalOverlay.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeResumeModal() {
    if (resumeModalOverlay) {
      resumeModalOverlay.classList.remove('active');
      resumeModalOverlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  openResumeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openResumeModal();
    });
  });

  closeResumeBtn?.addEventListener('click', closeResumeModal);
  resumeModalOverlay?.addEventListener('click', (e) => {
    if (e.target === resumeModalOverlay) {
      closeResumeModal();
    }
  });

  printResumeBtn?.addEventListener('click', () => {
    window.print();
  });

  downloadResumeTxtBtn?.addEventListener('click', () => {
    const resumeText = `========================================================================
RESUME: JAGADISH KULAL (JAGGU)
MCA Student | Aspiring Software Developer
Poornaprajna Institute of Management (PIM), Udupi, Karnataka
========================================================================

CONTACT INFORMATION:
- Full Name: Jagadish kulal (Jaggu)
- Location: Udupi, Karnataka, India
- Email: jagadishkulal225@gmail.com
- Phone: +91 6362011861
- LinkedIn: https://www.linkedin.com/in/jagadish-kulal-a0a44a402
- GitHub: https://github.com/jagadishkulal225-lang

PROFESSIONAL STATEMENT:
"I am currently pursuing my first year of MCA, with a strong interest in software development, problem-solving, and logical thinking. I enjoy exploring new technologies, improving my programming skills, and building solutions through code. I am passionate about continuous learning and growing as a software developer."

ACADEMIC EDUCATION:
1. Master of Computer Applications (MCA) - [2026 – 2028 | Pursuing]
   Poornaprajna Institute of Management (PIM), Udupi, Karnataka
   Specialization: Computer Applications & Software Development

2. Bachelor of Computer Applications (BCA) - [2023 – 2026 | Completed]
   Milagres College, Kallianpur (Karnataka)
   Specialization: Computer Applications
   Academic Score: 8.55 CGPA (Distinction)

PROGRAMMING LANGUAGES (VERIFIED SELF-ASSESSMENT):
- Python: Intermediate
- C: Basic
- Java: Basic

TECHNICAL SKILLS & TOOLS:
- Frontend: HTML, CSS, JavaScript
- Backend: Node.js
- Databases: MySQL, SQLite
- Developer Tools: Git, GitHub, Visual Studio Code, Google Antigravity
- Data Science: NumPy, Pandas
- Deployment: Vercel, GitHub Pages
- Core Fundamentals: Data Structures & Algorithms, OOP, Problem Solving, Testing & Debugging

PROJECTS:
[1] mediqueue-smart-clinic (Status: Completed)
    Category: Web Development
    Repository: https://github.com/jagadishkulal225-lang/mediqueue-smart-clinic
    Overview: A full-stack healthcare web application that digitizes clinic operations with real-time queue tracking, intelligent slot optimization, emergency prioritization, and predictive analytics.
    Problem Solved: Reduces patient waiting time, organizes appointments, and helps doctors manage patient queues efficiently.
    Role & Contribution: Frontend Development - Designed and developed the user interface using HTML, CSS, and JavaScript. Created responsive layouts, styled components, and implemented interactive clinic features.

CAREER OBJECTIVES & AMBITIONS:
- Target Roles: Software Developer, Web Developer
- Areas of Interest: Web Development, Full-Stack Development
- Natural Languages: English, Kannada
- Hobbies: Practicing coding and improving technical skills.
========================================================================`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const downloadAnchor = document.createElement('a');
    downloadAnchor.href = url;
    downloadAnchor.download = 'Jagadish_Kulal_Resume.txt';
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    document.body.removeChild(downloadAnchor);
    URL.revokeObjectURL(url);
    showToast('Resume downloaded successfully!');
  });

  // Global ESC Key Listener
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeResumeModal();
      closeDrawer();
    }
  });

  // ------------------------------------------------------------------------
  // 7. COPY TO CLIPBOARD BUTTONS
  // ------------------------------------------------------------------------
  const copyBtns = document.querySelectorAll('.copy-trigger');

  copyBtns.forEach(btn => {
    btn.addEventListener('click', async () => {
      const textToCopy = btn.getAttribute('data-copy');
      const label = btn.getAttribute('data-label') || 'Text';
      
      if (textToCopy) {
        try {
          await navigator.clipboard.writeText(textToCopy);
          showToast(`Copied ${label} to clipboard!`);
          
          // Temporary icon swap
          const icon = btn.querySelector('.copy-icon');
          if (icon) {
            const originalHTML = icon.innerHTML;
            icon.innerHTML = `<polyline points="20 6 9 17 4 12"></polyline>`;
            setTimeout(() => {
              icon.innerHTML = originalHTML;
            }, 2000);
          }
        } catch (err) {
          showToast(`Could not copy: ${textToCopy}`);
        }
      }
    });
  });

  // ------------------------------------------------------------------------
  // 8. INTERACTIVE CONTACT FORM & MAILTO GENERATOR
  // ------------------------------------------------------------------------
  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const senderName = document.getElementById('sender-name')?.value.trim();
      const senderEmail = document.getElementById('sender-email')?.value.trim();
      const senderSubject = document.getElementById('sender-subject')?.value.trim();
      const senderMessage = document.getElementById('sender-message')?.value.trim();

      if (!senderName || !senderEmail || !senderMessage) {
        showToast('Please fill in your name, email, and message.');
        return;
      }

      const recipient = 'jagadishkulal225@gmail.com';
      const subject = encodeURIComponent(senderSubject || `Portfolio Message from ${senderName}`);
      const body = encodeURIComponent(
        `Hi Jagadish,\n\n${senderMessage}\n\n---\nFrom: ${senderName}\nEmail: ${senderEmail}`
      );

      // Trigger mailto client
      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
      
      showToast('Opening your email client to send message...');
      contactForm.reset();
    });
  }

  // ------------------------------------------------------------------------
  // 9. TOAST NOTIFICATION UTILITY
  // ------------------------------------------------------------------------
  function showToast(message) {
    let toastContainer = document.getElementById('toast-container');
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.id = 'toast-container';
      toastContainer.className = 'toast-container';
      document.body.appendChild(toastContainer);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.setAttribute('role', 'alert');
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="12"></line>
        <line x1="12" y1="16" x2="12.01" y2="16"></line>
      </svg>
      <span>${escapeHTML(message)}</span>
    `;

    toastContainer.appendChild(toast);

    // Trigger enter animation
    setTimeout(() => {
      toast.classList.add('show');
    }, 10);

    // Auto dismiss after 3.5s
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, 3500);
  }

  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
    );
  }

  // ------------------------------------------------------------------------
  // 10. SMOOTH SCROLLING FOR LOCAL ANCHOR LINKS
  // ------------------------------------------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
});
