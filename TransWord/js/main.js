const backToTopbtn = document.querySelector('#fixed-btn');
const inputField = document.getElementsByName("input");


backToTopbtn.style.display = 'none';
// show scroll button 
window.onscroll = () => {
  if(window.pageYOffset > 300) {
    backToTopbtn.style.display = 'block';
  } else {
    backToTopbtn.style.display = 'none';
  }
}

// function scroll() {
//   window.scrollTo(0,0);
// }
backToTopbtn.addEventListener('click', () => {
  window.scrollTo({
    top:0,
    left:0,
    behavior: 'smooth'
  });
});
