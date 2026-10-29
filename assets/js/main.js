/**
 * Main Interactive Script
 * Anggraini Triyas Utami - CV & Portfolio Website
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initCopyButtons();
  initScrollTop();
  initExperienceFilter();
  initSkillFilter();
  initContactForm();
});

/* -------------------------------------------------------------
   1. Dark / Light Theme Manager
   ------------------------------------------------------------- */
function initTheme() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  if (!themeToggleBtn) return;

  const savedTheme = localStorage.getItem('theme-mode') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  applyTheme(savedTheme);

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
    localStorage.setItem('theme-mode', newTheme);
    showToast(`Mode ${newTheme === 'dark' ? 'Gelap 🌙' : 'Terang ☀️'} diaktifkan`, 'info');
  });

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      if (themeIcon) themeIcon.className = 'bi bi-sun-fill text-warning';
    } else {
      document.documentElement.removeAttribute('data-theme');
      if (themeIcon) themeIcon.className = 'bi bi-moon-stars-fill text-primary';
    }
  }
}

/* -------------------------------------------------------------
   2. Change Profile Avatar Dynamically
   ------------------------------------------------------------- */
function initAvatarUpload() {
  const avatarInput = document.getElementById('avatarFileInput');
  const avatarImg = document.getElementById('profileAvatarImg');
  const btnChangeAvatar = document.getElementById('btnChangeAvatar');

  // Load cached custom avatar if available
  const cachedAvatar = localStorage.getItem('custom-profile-avatar');
  if (cachedAvatar && avatarImg) {
    avatarImg.src = cachedAvatar;
  }

  if (btnChangeAvatar && avatarInput) {
    btnChangeAvatar.addEventListener('click', () => {
      avatarInput.click();
    });
  }

  if (avatarInput && avatarImg) {
    avatarInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        if (!file.type.startsWith('image/')) {
          showToast('Harap pilih file gambar (JPG/PNG)!', 'danger');
          return;
        }
        const reader = new FileReader();
        reader.onload = function(evt) {
          avatarImg.src = evt.target.result;
          try {
            localStorage.setItem('custom-profile-avatar', evt.target.result);
          } catch(err) {
            console.warn('Image too large for localStorage, showing in session');
          }
          showToast('Foto profil berhasil diperbarui! 🎉', 'success');
        };
        reader.readAsDataURL(file);
      }
    });
  }
}

/* -------------------------------------------------------------
   3. Copy to Clipboard Utility
   ------------------------------------------------------------- */
function initCopyButtons() {
  const copyButtons = document.querySelectorAll('[data-copy]');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const text = btn.getAttribute('data-copy');
      const label = btn.getAttribute('data-copy-label') || text;
      
      navigator.clipboard.writeText(text).then(() => {
        showToast(`Berhasil disalin: ${label}`, 'success');
      }).catch(() => {
        showToast('Gagal menyalin ke clipboard', 'danger');
      });
    });
  });
}

/* -------------------------------------------------------------
   4. Experience Filter
   ------------------------------------------------------------- */
function initExperienceFilter() {
  const expFilters = document.querySelectorAll('.exp-filter-btn');
  const expCards = document.querySelectorAll('.timeline-item');
  if (!expFilters.length) return;

  expFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      expFilters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');
      expCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category.includes(filterValue)) {
          card.style.display = 'block';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* -------------------------------------------------------------
   5. Skill Filter (Semua / Hard / Soft)
   ------------------------------------------------------------- */
function initSkillFilter() {
  const skillFilters = document.querySelectorAll('.skill-filter-btn');
  const skillBoxes = document.querySelectorAll('.skill-item-box');
  if (!skillFilters.length) return;

  skillFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      skillFilters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      skillBoxes.forEach(box => {
        const type = box.getAttribute('data-skill-type');
        if (filter === 'all' || type === filter) {
          box.style.display = 'block';
        } else {
          box.style.display = 'none';
        }
      });
    });
  });
}

/* -------------------------------------------------------------
   6. Contact Form Validation & Submission
   ------------------------------------------------------------- */
function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('senderName')?.value.trim();
    const email = document.getElementById('senderEmail')?.value.trim();
    const subject = document.getElementById('senderSubject')?.value.trim();
    const message = document.getElementById('senderMessage')?.value.trim();

    if (!name || !email || !message) {
      showToast('Mohon lengkapi nama, email, dan pesan Anda!', 'danger');
      return;
    }

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span> Mengirim...';
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      contactForm.reset();

      // Show success modal or toast
      showToast(`Terima kasih, ${name}! Pesan Anda telah terkirim.`, 'success');

      // WhatsApp direct option modal/dialog
      const waConfirm = confirm(`Pesan telah dicatat! Ingin mengirim langsung ke WhatsApp Anggraini Triyas Utami (+6285694158660)?`);
      if (waConfirm) {
        const waText = encodeURIComponent(`Halo Anggraini Triyas Utami, perkenalkan saya ${name} (${email}).\n\nSubjek: ${subject || 'Kontak dari Web CV'}\n\nPesan: ${message}`);
        window.open(`https://wa.me/6285694158660?text=${waText}`, '_blank');
      }
    }, 1000);
  });
}

/* -------------------------------------------------------------
   7. Back to Top Button
   ------------------------------------------------------------- */
function initScrollTop() {
  const scrollTopBtn = document.getElementById('btnBackToTop');
  if (!scrollTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      scrollTopBtn.classList.add('show');
    } else {
      scrollTopBtn.classList.remove('show');
    }
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* -------------------------------------------------------------
   8. Global Toast Notification Helper
   ------------------------------------------------------------- */
function showToast(message, type = 'info') {
  let toastContainer = document.getElementById('toastContainer');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toastContainer';
    toastContainer.className = 'toast-container position-fixed bottom-0 end-0 p-3';
    toastContainer.style.zIndex = '9999';
    document.body.appendChild(toastContainer);
  }

  const toastId = 'toast-' + Date.now();
  const bgClass = type === 'success' ? 'bg-success text-white' :
                  type === 'danger' ? 'bg-danger text-white' :
                  'bg-primary text-white';

  const toastHtml = `
    <div id="${toastId}" class="toast align-items-center ${bgClass} border-0 shadow-lg" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="d-flex">
        <div class="toast-body d-flex align-items-center gap-2">
          <i class="bi ${type === 'success' ? 'bi-check-circle-fill' : type === 'danger' ? 'bi-exclamation-triangle-fill' : 'bi-info-circle-fill'} fs-5"></i>
          <span>${message}</span>
        </div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
    </div>
  `;

  toastContainer.insertAdjacentHTML('beforeend', toastHtml);
  const toastElement = document.getElementById(toastId);
  const bsToast = new bootstrap.Toast(toastElement, { delay: 3500 });
  bsToast.show();

  toastElement.addEventListener('hidden.bs.toast', () => {
    toastElement.remove();
  });
}

// Global print CV helper
window.printCV = function() {
  window.print();
};
