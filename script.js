// Slider
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
    slides.forEach(slide => {
        slide.style.display = 'none';
    });
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    slides[slideIndex].style.display = 'block';
}

function nextSlide() {
    slideIndex++;
    showSlides();
}

function prevSlide() {
    slideIndex--;
    showSlides();
}

showSlides();

// Nav
document.addEventListener("DOMContentLoaded", function() {
  let prevScrollpos = window.scrollY || window.pageYOffset;
  window.onscroll = function() {
    let currentScrollPos = window.scrollY || window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("header").style.top = "0";
    } else {
      document.getElementById("header").style.top = "-100px"; // Adjust as needed
    }
    prevScrollpos = currentScrollPos;
  }
});





