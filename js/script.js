//navbar fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed')
    } else {
        header.classList.remove('navbar-fixed')
    }
}


//hambuerger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
})


//carosel
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const carousel = document.getElementById('carousel');
let offset = 0;
const slideWidth = document.querySelector('.swiper-slide').offsetWidth; // Mengambil lebar slide

// Fungsi untuk geser ke kiri
prevButton.addEventListener('click', () => {
  if (offset > 0) {
    offset -= slideWidth;
    carousel.style.transform = `translateX(-${offset}px)`;
  }
});

// Fungsi untuk geser ke kanan
nextButton.addEventListener('click', () => {
  const totalSlides = document.querySelectorAll('.swiper-slide').length;
  const maxOffset = slideWidth * (totalSlides - 3); // Menyesuaikan dengan 3 slide yang ditampilkan
  if (offset < maxOffset) {
    offset += slideWidth;
    carousel.style.transform = `translateX(-${offset}px)`;
  }
});