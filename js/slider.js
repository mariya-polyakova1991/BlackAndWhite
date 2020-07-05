let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let slides = document.querySelectorAll(".background-menu");

let slideIndex = 1;
showSlides(slideIndex);

next.addEventListener("click", function plusSlide() {
  showSlides((slideIndex += 1));
});

prev.addEventListener("click", function minusSlide() {
  showSlides((slideIndex -= 1));
});

function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  slides.forEach(function (elem) {
    elem.style.display = "none";
  });
  slides[slideIndex - 1].style.display = "block";
}
