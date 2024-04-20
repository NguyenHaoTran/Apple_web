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
// document.addEventListener("DOMContentLoaded", function() {
//   let prevScrollpos = window.scrollY || window.pageYOffset;
//   window.onscroll = function() {
//     let currentScrollPos = window.scrollY || window.pageYOffset;
//     if (prevScrollpos > currentScrollPos) {
//       document.getElementById("header").style.top = "0";
//     } else {
//       document.getElementById("header").style.top = "-100px"; // Adjust as needed
//     }
//     prevScrollpos = currentScrollPos;
//   }
// });

// NAV - Show_hide
/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav_menu'),
      navToggle = document.getElementById('nav_toggle'),
      navClose = document.getElementById('nav_close')  

if(navToggle){
    navToggle.addEventListener('click', () =>{
            navMenu.classList.add('show_menu')
    })
}

if(navClose) {
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show_menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav_link')

const linkAction = () => {
    const navMenu = document.getElementById('nav_menu')
    //khi click vao se remove show-menu
    navMenu.classList.remove('show_menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


// ==============================
// Show Nav_searchbar
const searchbtn = document.getElementById('searchbtn')
const navSearch = document.getElementById('nav_search')
const closeSearch = document.getElementById('tempt_close')

const headerDark = document.getElementById('header')

if(searchbtn) {
    searchbtn.addEventListener('click', ()=>{
        navSearch.classList.add('show_search_bar')
        headerDark.classList.add('header_fulldark')
    })
}

if(closeSearch){
    closeSearch.addEventListener('click', ()=>{
        navSearch.classList.remove('show_search_bar')
        headerDark.classList.remove('header_fulldark')
    })   
}



