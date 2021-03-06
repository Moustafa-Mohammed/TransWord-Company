const backToTopbtn = document.querySelector('#fixed-btn');
const navbar = document.querySelector('header');

const navToggler = document.querySelector('.nav-toggler');
const nav = document.querySelector('nav');
const navIcon = document.querySelectorAll('.nav-icon');
const barsIcon = document.querySelector('#barsIcon');

const navLinks = document.querySelectorAll('li a');


backToTopbtn.style.display = 'none';

// show scroll button using event listner 
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopbtn.style.display = 'block';
  } else {
    backToTopbtn.style.display = 'none';
  }
});

// scroll to the top of the page
backToTopbtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});


// Add click event to the nav toggler div
navToggler.addEventListener('click', () => {
  nav.classList.toggle('open');
  navIcon.forEach(icon => {
    icon.classList.toggle('hidden');
  });
});

// hide the nav when the window is greater than mobile size
window.addEventListener('resize', () => {
  if(document.body.clientWidth > 768) {
    nav.classList.remove('open');
    navIcon.forEach(icon => {
      icon.classList.add('hidden');
    });
    barsIcon.classList.remove('hidden');
  }

});

// hide the nav when clicking a nav link
navLinks.forEach(navLink => {
  navLink.addEventListener('click', () => {
    nav.classList.remove('open');
  })
});