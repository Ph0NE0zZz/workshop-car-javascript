// JavaScript Here

function toggleHamburgerIcon(el) {
  el.classList.toggle("change");
}
//--------Toggle mobile menu when hamburger Icon is clicked===//

let hamburgerIcon = document.getElementById("hamburgerIcon");

if(hamburgerIcon) {
  hamburgerIcon.addEventListener("click", function() {
    let mobileMenu = document.getElementById("mobileMenu");
    if(mobileMenu) {
      if (mobileMenu.style.display === "block") {
        mobileMenu.style.display = "none";
      } else {
        mobileMenu.style.display = "block";
      }
    } else {
      console.error("Mobile menu element not found.");
    }
  });
}else{
    console.error("Mobile menu element not found.");
}
//--------Banner slide script===//
let slideIndex = 1;
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("banner-wrapper");
  console.log(slides.length);
  if (n>slides.length) {slideIndex = 1}
  if (n<1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "flex";
}

showSlides(slideIndex);

//--------Cars img model script===//
let model = document.getElementById("myModal");
let modalImg = document.getElementById("img01");
let imgs = document.getElementsByClassName("MyImg");
for (let i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("click", function() {
    model.style.display = "block";
    modalImg.src = this.src;
  });
}

let closebtn = document.getElementsByClassName("close")[0];
closebtn.addEventListener("click", function() {
  model.style.display = "none";
});

//--------Cars grid info script===//
let cardesc=document.getElementsByClassName("cars-grid-item-desc");
let carBtn=document.getElementsByClassName("cars-grid-item-btn");
let carcloseDescBtn=document.getElementsByClassName("cars-grid-item-desc-x");
for (let i = 0; i < carBtn.length; i++) {
  carBtn[i].addEventListener("click", function() {
    cardesc[i].style.display = "block";
  });
}
for (let i = 0; i < carcloseDescBtn.length; i++) {
  carcloseDescBtn[i].addEventListener("click", function() {
    cardesc[i].style.display = "none";
  });
}

//--------Cars accordian info script===//
let acc = document.getElementsByClassName("accordion-btn");
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

//--------Get the button to top script===//

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}