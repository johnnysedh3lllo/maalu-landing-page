"use strict";

const allSlides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
const dotsContainer = document.querySelector(".dots-container");
const dots = document.querySelectorAll(".dots");

const questionWrapper = document.querySelectorAll(".question-wrapper");
const question = document.querySelectorAll(".question");
const answer = document.querySelectorAll(".answer");
const faqSection = document.querySelector(".faq-content");

// Slider Component

// if (!s.classList.contains("one")) {
//   s.style.display = "none";
// }

let currentSlide = 0;
let numberOfSlides = allSlides.length;
const createDots = () => {
  allSlides.forEach((_, i) => {
    dotsContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots" data-slide="${i}"></button>`
    );
  });
};

const activateDots = (slide) => {
  document
    .querySelectorAll(".dots")
    .forEach((dot) => dot.classList.remove("dots--active"));

  document
    .querySelector(`.dots[data-slide="${slide}"]`)
    .classList.add("dots--active");
};

const goToSlide = (slide) => {
  allSlides.forEach((s, i) => {
    // if (!s.classList.contains("one")) {
    //   s.classList.add("nodisplay")
    // }
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};

const nextSlide = () => {
  if (currentSlide === numberOfSlides - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  goToSlide(currentSlide);
  activateDots(currentSlide);
};

createDots();

window.addEventListener("load", () => {
  const viewportWidth = window.innerWidth;
  const intervalCallback = () => nextSlide();
  if (viewportWidth < 768) {
    goToSlide(0);
    activateDots(0);
    setInterval(intervalCallback, 3000);
  } else {
    dotsContainer.remove()
  }
});

//event delegation, for opening and closing of FAQ section
faqSection.addEventListener("click", (e) => {
  const clicked = e.target;
  const parentOfClicked = clicked.closest(".question-wrapper");
  if (parentOfClicked) {
    parentOfClicked.classList.toggle("active--section");
    parentOfClicked.classList.toggle("active");
  }
});
