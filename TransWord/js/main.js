const backToTopbtn = document.querySelector('#fixed-btn');
const navbar = document.querySelector("nav");



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




window.onscroll = () => {
  const showcase = document.querySelector("#showcase")

  if (window.scrollY > (showcase.offsetTop + showcase.offsetHeight)) {
    navbar.classList.add("bg-dark");
  } else {
    navbar.classList.remove("bg-dark");
  }
};

   