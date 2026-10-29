/**
 * Dokumentasi & Viewer Script (View Only)
 * Anggraini Triyas Utami - CV & Portofolio
 */

const DOKUMENTASI_ITEMS = [
  {
    id: 'tari-1',
    title: 'Foto Pertama: Tari Katumbiri (Acara Wisuda Perpisahan)',
    category: 'tari',
    categoryName: 'Seni Tari',
    image: 'assets/img/tari/tari-1-katumbiri-wisuda.jpg',
    description: 'Sedang mengisi acara wisuda perpisahan dengan menarikan Tarian Katumbiri.'
  },
  {
    id: 'tari-2',
    title: 'Foto Kedua: Tari Renggong Nyentrik (Lomba di Sekolah Jakarta)',
    category: 'tari',
    categoryName: 'Kompetisi Tari',
    image: 'assets/img/tari/tari-2-renggong-sekolah.jpg',
    description: 'Sedang lomba di sebuah sekolah di Jakarta dengan menarikan Tarian Renggong Nyentrik.'
  },
  {
    id: 'tari-3',
    title: 'Foto Ketiga: Tari Renggong Nyentrik (Lomba Online)',
    category: 'tari',
    categoryName: 'Kompetisi Online',
    image: 'assets/img/tari/tari-3-renggong-online.jpg',
    description: 'Sedang lomba secara online dengan menarikan Tarian Renggong Nyentrik.'
  },
  {
    id: 'tari-4',
    title: 'Foto Keempat: Tari Sekar Puri (Acara Pernikahan)',
    category: 'tari',
    categoryName: 'Pertunjukan Tari',
    image: 'assets/img/tari/tari-4-sekar-puri-nikah.jpg',
    description: 'Sedang mengisi acara pernikahan dengan menarikan Tarian Sekar Puri.'
  },
  {
    id: 'tari-5',
    title: 'Foto Kelima: Juara 2 Tingkat Nasional (Tari Enggang Kalimantan)',
    category: 'tari',
    categoryName: 'Prestasi Juara 2',
    image: 'assets/img/tari/tari-5-enggang-juara2.jpg',
    description: 'Dokumentasi setelah lomba Juara 2 Tingkat Nasional dengan Tarian Enggang Kalimantan.'
  },
  {
    id: 'kegiatan-1',
    title: 'Dokumentasi Kegiatan Outdoor (Pos 1 Mencrang)',
    category: 'kegiatan',
    categoryName: 'Kegiatan Outdoor',
    image: 'assets/img/kegiatan/kegiatan-1-pos1.jpg',
    description: 'Dokumentasi kegiatan pendakian dan latihan fisik di Pos 1 Mencrang. Melatih ketahanan fisik, fokus, kemandirian, dan kedisiplinan.'
  },
  {
    id: 'kegiatan-3',
    title: 'Dokumentasi Eksplorasi Kawah Ratu',
    category: 'kegiatan',
    categoryName: 'Eksplorasi Alam',
    image: 'assets/img/kegiatan/kegiatan-3-kawah-solo.jpg',
    description: 'Dokumentasi observasi lapangan dan perjalanan di kawasan vulkanik aktif Kawah Ratu 1437 MDPL.'
  },
  {
    id: 'kegiatan-4',
    title: 'Kebersamaan Tim di Kawah Ratu 1437 MDPL',
    category: 'kegiatan',
    categoryName: 'Kolaborasi Tim',
    image: 'assets/img/kegiatan/kegiatan-4-kawah-tim.jpg',
    description: 'Dokumentasi kekompakan kelompok, sinergi, solidaritas, dan kerjasama tim mencapai puncak Kawah Ratu 1437 MDPL.'
  },
  {
    id: 'kegiatan-2',
    title: 'Panorama Lanskap Alam Pegunungan',
    category: 'kegiatan',
    categoryName: 'Fotografi Alam',
    image: 'assets/img/kegiatan/kegiatan-2-alam.jpg',
    description: 'Dokumentasi visual keindahan lanskap pegunungan dan panorama alam terbuka sepanjang rute perjalanan.'
  },
  {
    id: 'cert-1',
    title: 'Juara 2 Lomba Tari Kreasi Nusantara 2025',
    category: 'sertifikasi',
    categoryName: 'Piagam Penghargaan',
    image: 'assets/img/certificates/cert-tari-2025.jpg',
    description: 'Piagam Penghargaan Juara 2 Kelompok/Group Kategori SMA (Sanggar Tari Ikoja) pada Lomba Tari Kreasi Nusantara 2025 "Satu Panggung Milenial" diselenggarakan oleh SVARAETNIKA bekerja sama dengan Suku Dinas Kebudayaan Kota Adm. Jakarta Utara di Bay Walk Mall Pluit, Jakarta (11–12 Januari 2025).'
  },
  {
    id: 'cert-5',
    title: 'Juara II Tari Enggang Tingkat Nasional 2023',
    category: 'sertifikasi',
    categoryName: 'Tingkat Nasional',
    image: 'assets/img/certificates/cert-tari-enggang-2023.jpg',
    description: 'Piagam Penghargaan Juara II Tari "Enggang" pada Lomba Tari Kreasi Daerah Nusantara Tingkat Nasional yang diselenggarakan oleh Yayasan Putri Nawangsari Indonesia di Plasa Cibubur (Agustus 2023).'
  },
  {
    id: 'cert-2',
    title: 'Sertifikat Kuliah Umum Cyber Security',
    category: 'sertifikasi',
    categoryName: 'Sertifikat IT',
    image: 'assets/img/certificates/cert-cybersecurity-2025.jpg',
    description: 'Sertifikat Peserta Kuliah Umum "Cyber Security: Guardians of Cyber Galaxy" yang diselenggarakan oleh Fakultas Teknologi Informasi Universitas Budi Luhur, Jakarta (17 Oktober 2025).'
  },
  {
    id: 'cert-3',
    title: 'Sertifikat Webinar Cloud Journey with Openstack',
    category: 'sertifikasi',
    categoryName: 'Sertifikat Cloud IT',
    image: 'assets/img/certificates/cert-cloud-openstack-2025.jpg',
    description: 'Sertifikat Partisipasi Webinar "Own Your Cloud Journey with Openstack" diselenggarakan oleh ID-Networkers (Indonesian IT Expert Factory - IDN.ID) pada 20 Oktober 2025.'
  },
  {
    id: 'cert-4',
    title: 'Juara 3 Lomba Video Narasi Hari Pahlawan',
    category: 'sertifikasi',
    categoryName: 'Prestasi Juara',
    image: 'assets/img/certificates/cert-video-narasi-2023.jpg',
    description: 'Sertifikat Penghargaan Juara 3 Lomba Video Narasi dalam rangka Hari Pahlawan yang diselenggarakan oleh SMAN 6 Kota Tangerang (10 November 2023).'
  },
  {
    id: 'vid-narasi',
    title: 'Karya Video Editing (Lomba Video Narasi)',
    category: 'video',
    categoryName: 'Video Editing',
    image: 'assets/img/certificates/cert-video-narasi-2023.jpg',
    videoSrc: 'assets/video/video-narasi-lomba.mp4',
    isVideo: true,
    description: 'Salah satu contoh video editing yang digunakan untuk lomba video narasi. Menampilkan penggabungan narasi cerita, takarir subtitle, audio sync, dan ritme pemotongan video dinamis.'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  initDokumentasiSystem();
});

function initDokumentasiSystem() {
  const galleryGrid = document.getElementById('galleryColumnsGrid');
  if (!galleryGrid) return;

  renderDokumentasiGrid(DOKUMENTASI_ITEMS);
  initCategoryFilters();
}

function renderDokumentasiGrid(items) {
  const grid = document.getElementById('galleryColumnsGrid');
  if (!grid) return;

  grid.innerHTML = '';

  if (items.length === 0) {
    grid.innerHTML = `
      <div class="col-12 text-center py-5">
        <i class="bi bi-folder2-open display-4 text-muted"></i>
        <p class="mt-3 text-muted">Belum ada dokumentasi dalam kategori ini.</p>
      </div>
    `;
    return;
  }

  items.forEach(item => {
    const col = document.createElement('div');
    col.className = 'col-lg-6 col-md-6 col-12 gallery-item-col mb-4';
    col.setAttribute('data-category', item.category);

    const isVideo = !!item.isVideo;
    const actionClick = isVideo 
      ? `viewVideoLightbox('${escapeQuotes(item.title)}', '${item.videoSrc}', '${escapeQuotes(item.description)}', '${item.categoryName}')`
      : `viewImageLightbox('${escapeQuotes(item.title)}', '${item.image}', '${escapeQuotes(item.description)}', '${item.categoryName}')`;

    const overlayIcon = isVideo ? '<i class="bi bi-play-circle-fill text-warning fs-1"></i>' : '<i class="bi bi-zoom-in"></i>';
    const buttonText = isVideo ? '<i class="bi bi-play-circle me-1"></i> Putar Video Karya' : '<i class="bi bi-eye me-1"></i> Baca Detail Dokumentasi';

    col.innerHTML = `
      <div class="gallery-column-card">
        <div class="gallery-img-container" style="cursor: pointer;" onclick="${actionClick}">
          <img src="${item.image}" alt="${item.title}" loading="lazy" onerror="this.src='assets/img/certificates/cert-video-narasi-2023.jpg'">
          ${isVideo ? '<span class="badge bg-warning text-dark position-absolute top-0 start-0 m-3 fw-bold shadow-sm"><i class="bi bi-film me-1"></i>Video Karya</span>' : ''}
          <div class="gallery-overlay">
            <button class="gallery-action-btn" title="${isVideo ? 'Putar Video' : 'Perbesar Gambar'}">
              ${overlayIcon}
            </button>
          </div>
        </div>
        <div class="p-3 d-flex flex-column flex-grow-1">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <span class="badge badge-custom">${item.categoryName}</span>
            <small class="text-secondary fw-semibold"><i class="${isVideo ? 'bi bi-camera-reels' : 'bi bi-eye'} me-1"></i>${isVideo ? 'Video Editing' : 'Dokumentasi'}</small>
          </div>
          <h5 class="fs-6 fw-bold mb-2 text-truncate" title="${item.title}">${item.title}</h5>
          <p class="text-secondary small mb-3 flex-grow-1 fw-medium" style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; line-height: 1.6;">
            ${item.description}
          </p>
          <button class="btn btn-sm btn-outline-primary w-100 fw-bold" onclick="${actionClick}">
            ${buttonText}
          </button>
        </div>
      </div>
    `;

    grid.appendChild(col);
  });
}

function escapeQuotes(str) {
  if (!str) return '';
  return str.replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

/* -------------------------------------------------------------
   Category Filters
   ------------------------------------------------------------- */
function initCategoryFilters() {
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');

      if (filterVal === 'all') {
        renderDokumentasiGrid(DOKUMENTASI_ITEMS);
      } else {
        const filtered = DOKUMENTASI_ITEMS.filter(item => item.category === filterVal);
        renderDokumentasiGrid(filtered);
      }
    });
  });
}

/* -------------------------------------------------------------
   Lightbox Modal Viewer (Read / View Only)
   ------------------------------------------------------------- */
window.viewImageLightbox = function(title, imgSrc, desc, category) {
  let lightboxModal = document.getElementById('imageLightboxModal');
  if (!lightboxModal) {
    const modalHtml = `
      <div class="modal fade" id="imageLightboxModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content custom-card overflow-hidden">
            <div class="modal-header border-0 pb-0">
              <span class="badge badge-custom" id="lightboxCategory">Kategori</span>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body text-center p-3">
              <div style="background-color: var(--bg-surface-alt); border-radius: 14px; padding: 12px; max-height: 520px; display: flex; align-items: center; justify-content: center; overflow: hidden; border: 1px solid rgba(0, 210, 255, 0.3);">
                <img id="lightboxImg" src="" alt="" class="img-fluid rounded shadow-sm" style="max-height: 480px; object-fit: contain;">
              </div>
              <h4 id="lightboxTitle" class="mt-3 mb-2 text-start fw-bold text-main"></h4>
              <p id="lightboxDesc" class="text-secondary text-start mb-0 fw-medium" style="font-size: 1rem; line-height: 1.7;"></p>
            </div>
            <div class="modal-footer border-0 pt-0">
              <button type="button" class="btn btn-secondary-custom btn-sm px-4" data-bs-dismiss="modal">Tutup</button>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    lightboxModal = document.getElementById('imageLightboxModal');
  }

  document.getElementById('lightboxTitle').textContent = title;
  document.getElementById('lightboxImg').src = imgSrc;
  document.getElementById('lightboxDesc').textContent = desc;
  document.getElementById('lightboxCategory').textContent = category;

  const bsModal = new bootstrap.Modal(lightboxModal);
  bsModal.show();
};

/* -------------------------------------------------------------
   Video Lightbox Modal Viewer
   ------------------------------------------------------------- */
window.viewVideoLightbox = function(title, videoSrc, desc, category) {
  let videoModal = document.getElementById('videoLightboxModal');
  if (!videoModal) {
    const modalHtml = `
      <div class="modal fade" id="videoLightboxModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content custom-card overflow-hidden">
            <div class="modal-header border-0 pb-0">
              <span class="badge badge-custom" id="videoLightboxCategory">Video Editing</span>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body p-3">
              <div class="video-showcase-container">
                <video id="lightboxVideoPlayer" controls playsinline class="video-custom-player" style="background:#000;">
                  <source id="lightboxVideoSource" src="" type="video/mp4">
                  Browser Anda tidak mendukung pemutar video HTML5.
                </video>
              </div>
              <h4 id="videoLightboxTitle" class="mt-3 mb-2 fw-bold text-main"></h4>
              <p id="videoLightboxDesc" class="text-secondary mb-0 fw-medium" style="font-size: 0.95rem; line-height: 1.7;"></p>
            </div>
            <div class="modal-footer border-0 pt-0">
              <button type="button" class="btn btn-secondary-custom btn-sm px-4" data-bs-dismiss="modal">Tutup</button>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    videoModal = document.getElementById('videoLightboxModal');

    // Pause video when modal is closed
    videoModal.addEventListener('hidden.bs.modal', () => {
      const vid = document.getElementById('lightboxVideoPlayer');
      if (vid) {
        vid.pause();
      }
    });
  }

  document.getElementById('videoLightboxTitle').textContent = title;
  document.getElementById('videoLightboxDesc').textContent = desc;
  document.getElementById('videoLightboxCategory').textContent = category;

  const vidPlayer = document.getElementById('lightboxVideoPlayer');
  const vidSrc = document.getElementById('lightboxVideoSource');
  vidSrc.src = videoSrc;
  vidPlayer.load();

  const bsModal = new bootstrap.Modal(videoModal);
  bsModal.show();
};
