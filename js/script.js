//navbar fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  const toTop = document.getElementById('toTop');

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed')
    toTop.classList.remove('hidden');
    toTop.classList.add('flex');
  } else {
    header.classList.remove('navbar-fixed')
    toTop.classList.remove('flex');
    toTop.classList.add('hidden');
  }
}

//hambuerger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
})


window.addEventListener('click', function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
})

// dark mode toggle
const darkToggle = document.getElementById('dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
  if (darkToggle.checked) {
    html.classList.add('dark');
    localStorage.theme = "dark";
  } else {
    html.classList.remove('dark');
    localStorage.theme = "light";
  }
});

const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark" || (!currentTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  document.documentElement.classList.add("dark");
  darkToggle.checked = true; 
} else {
  document.documentElement.classList.remove("dark");
  darkToggle.checked = false; 
}