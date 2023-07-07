const slidesContainer = document.querySelector(".slides");
const slides = document.querySelectorAll(".slide");
const slideWidth = slides[0].offsetWidth;
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let totalSlides = slides.length;
let currentSlide = 0;

function updateSlider() {
  slidesContainer.style.transform = `translateX(-${
    currentSlide * slideWidth
  }px)`;
}

nextBtn.addEventListener("click", function () {
  if (currentSlide < totalSlides - 1) {
    currentSlide++;
  } else {
    currentSlide = 0;
  }
  updateSlider();
});

prevBtn.addEventListener("click", function () {
  if (currentSlide > 0) {
    currentSlide--;
  } else {
    currentSlide = totalSlides - 1;
  }
  updateSlider();
});
