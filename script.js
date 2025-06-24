// Navbar page state
document.addEventListener('DOMContentLoaded', function () {
  // Ambil semua link di navbar
  const navLinks = document.querySelectorAll('.nav-link');

  // Fungsi untuk menandai link yang aktif
  function setActiveLink() {
    // Ambil path dari URL
    const currentPage = window.location.pathname;

    // Loop melalui semua link dan tambahkan event listener
    navLinks.forEach(link => {
      const linkPath = link.getAttribute('href');

      // Pencocokan URL path antara link dan halaman yang sedang dibuka
      if (currentPage === "/" && linkPath === "#") {
        link.classList.add('active');
      } else if (currentPage === linkPath) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  // Panggil setActiveLink untuk memastikan link yang sesuai diberi kelas active
  setActiveLink();

  // Loop melalui semua link dan tambahkan event listener untuk menambahkan kelas active saat diklik
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      // Hapus kelas 'active' dari semua link
      navLinks.forEach(link => link.classList.remove('active'));

      // Tambahkan kelas 'active' pada link yang diklik
      this.classList.add('active');
    });
  });
});




/* // Navbar page state
document.addEventListener('DOMContentLoaded', function () {
  // Ambil semua link di navbar
  const navLinks = document.querySelectorAll('.nav-link');

  // Fungsi untuk menandai link yang aktif
  function setActiveLink() {
    // Ambil path dari URL
    const currentPage = window.location.pathname;

    // Loop melalui semua link dan tambahkan event listener
    navLinks.forEach(link => {
      const linkPath = link.getAttribute('href');

      // Pencocokan URL path antara link dan halaman yang sedang dibuka
      if (currentPage === "/" && linkPath === "#") {
        link.classList.add('active');
      } else if (currentPage === linkPath) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
})

 /* // Panggil setActiveLink untuk memastikan link yang sesuai diberi kelas active
  setActiveLink();

  // Loop melalui semua link dan tambahkan event listener untuk menambahkan kelas active saat diklik
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      // Hapus kelas 'active' dari semua link
      navLinks.forEach(link => link.classList.remove('active'));

      // Tambahkan kelas 'active' pada link yang diklik
      this.classList.add('active');
    });
  });
});*/

/* // Testimonials slider
const track = document.querySelector('.testimonial-track');
const cards = document.querySelectorAll('.testimonial-card');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const gap = 16;
const cardsToShow = 2;
const cardWidth = cards[0].offsetWidth + gap;
let currentIndex = 1; // start at first real card
let allowShift = true;

// set initial position
track.style.transform = `translateX(${-cardWidth * currentIndex}px)`;

// Next button click
nextBtn.addEventListener('click', () => {
  if (allowShift) {
    currentIndex++;
    shiftSlide();
  }
});

// Prev button click
prevBtn.addEventListener('click', () => {
  if (allowShift) {
    currentIndex--;
    shiftSlide();
  }
});

function shiftSlide() {
  allowShift = false;
  track.style.transition = 'transform 0.4s ease';
  track.style.transform = `translateX(${-cardWidth * currentIndex}px)`;
}

track.addEventListener('transitionend', () => {
  if (cards[currentIndex].classList.contains('clone-last')) {
    track.style.transition = 'none';
    currentIndex = cards.length - 2;
    track.style.transform = `translateX(${-cardWidth * currentIndex}px)`;
  }
  if (cards[currentIndex].classList.contains('clone-first')) {
    track.style.transition = 'none';
    currentIndex = 1;
    track.style.transform = `translateX(${-cardWidth * currentIndex}px)`;
  }
  allowShift = true;
}); 

const track = document.querySelector('.testimonial-track');
const cards = document.querySelectorAll('.testimonial-card');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const gap = 16;
const cardsToShow = 2;
const cardWidth = cards[0].offsetWidth + gap;
let currentIndex = 1; // start at first real card
let allowShift = true;

// set initial position
track.style.transform = `translateX(${-cardWidth * currentIndex}px)`;

// Next button click
nextBtn.addEventListener('click', () => {
  if (allowShift) {
    currentIndex++;
    shiftSlide();
  }
});

// Prev button click
prevBtn.addEventListener('click', () => {
  if (allowShift) {
    currentIndex--;
    shiftSlide();
  }
});

function shiftSlide() {
  allowShift = false;
  track.style.transition = 'transform 0.4s ease';
  track.style.transform = `translateX(${-cardWidth * currentIndex}px)`;
}

track.addEventListener('transitionend', () => {
  if (cards[currentIndex].classList.contains('clone-last')) {
    track.style.transition = 'none';
    currentIndex = cards.length - 2;
    track.style.transform = `translateX(${-cardWidth * currentIndex}px)`;
  }
  if (cards[currentIndex].classList.contains('clone-first')) {
    track.style.transition = 'none';
    currentIndex = 1;
    track.style.transform = `translateX(${-cardWidth * currentIndex}px)`;
  }
  allowShift = true;
});


document.addEventListener("DOMContentLoaded", function () {
    // Ambil semua tombol tab
    const tabs = document.querySelectorAll(".faq-tab-button");
    
    // Menambahkan event listener ke setiap tombol tab
    tabs.forEach((tab) => {
        tab.addEventListener("click", function () {
            // Menghapus kelas aktif dari semua tab
            tabs.forEach((t) => t.classList.remove("active"));
            // Menambahkan kelas aktif ke tab yang diklik
            tab.classList.add("active");
        });
    });
});


const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slider = document.querySelector('.slider');
let currentIndex = 0;

function showSlide(index) {
  const totalSlides = document.querySelectorAll('.card').length;
  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  }
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextBtn.addEventListener('click', () => {
  currentIndex++;
  showSlide(currentIndex);
});

prevBtn.addEventListener('click', () => {
  currentIndex--;
  showSlide(currentIndex);
});
