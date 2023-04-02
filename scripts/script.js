"use strict";

const questionWrapper = document.querySelectorAll(".question-wrapper");
const question = document.querySelectorAll(".question");
const answer = document.querySelectorAll(".answer");

for (const item of questionWrapper) {
  item.addEventListener("click", () => {
    // console.log(item);
    // console.log(index, item);
    item.classList.toggle("active--section");
    item.classList.toggle("active");
  });
}

// question.forEach((faq) => {
//   faq.addEventListener("click", () => {
//     faq.classList.toggle("rotated");
//   });
// });
