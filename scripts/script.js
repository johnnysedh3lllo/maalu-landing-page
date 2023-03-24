"use strict";

const questionAnswer = document.querySelectorAll(".question-answer-wrapper");
const answer = document.querySelectorAll(".answer")

questionAnswer.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
    faq.classList.toggle("active--section");
  });
});
