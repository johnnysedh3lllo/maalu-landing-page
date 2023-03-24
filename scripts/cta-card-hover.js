"use strict";

//for the first card
const cardOne = document.querySelector(".cta__cw--one");
const headingOne = document.querySelector(".cta__card-heading-one");
const investorSpan = document.querySelector(".investor");
const parOne = document.querySelector(".cta__par-one");
const arrowWrapperOne = document.querySelector(".arrow-wrapper-one");
const arrowOne = document.querySelector(".arrow-one");
const arrowOnePath = document.querySelector(".path-one");

//for the second card
const cardTwo = document.querySelector(".cta__cw--two");
const headingTwo = document.querySelector(".cta__card-heading-two");
const parTwo = document.querySelector(".cta__par-two");
const arrowWrapperTwo = document.querySelector(".arrow-wrapper-two");
const arrowTwo = document.querySelector(".arrow-two");
const arrowTwoPath = document.querySelector(".path-two");

// *FUNCTIONS
const applyCardHover = (card, heading, par, arrowWrapper) => {
  card.classList.add("card--hover");
  heading.classList.add("txt-white-100");
  par.classList.add("txt-white-300");
  arrowWrapper.classList.add("arrow--grow");
};
const removeCardHover = (card, heading, par, arrowWrapper) => {
  card.classList.remove("card--hover");
  heading.classList.remove("txt-white-100");
  par.classList.remove("txt-white-300");
  arrowWrapper.classList.remove("arrow--grow");
};

// *MOUSE OVER
cardOne.addEventListener("mouseover", () => {
  applyCardHover(cardOne, headingOne, parOne, arrowWrapperOne);
  investorSpan.classList.add("txt-white-100");
  // arrowOne.setAttribute("src", "assets/arrow-top-right.svg");
  arrowOne.classList.add("arrow--rotate");
  arrowOnePath.classList.add("arrow--clr");
});

cardTwo.addEventListener("mouseover", () => {
  applyCardHover(cardTwo, headingTwo, parTwo, arrowWrapperTwo);
  // arrowTwo.setAttribute("src", "assets/arrow-top-right.svg");
  arrowTwo.classList.add("arrow--rotate");
  arrowTwoPath.classList.add("arrow--clr");
});

// *MOUSEOUT
cardOne.addEventListener("mouseout", () => {
  removeCardHover(cardOne, headingOne, parOne, arrowWrapperOne);
  investorSpan.classList.remove("txt-white-100");
  // arrowOne.setAttribute("src", "assets/arrow-left.svg");
  arrowOne.classList.remove("arrow--rotate");
  arrowOnePath.classList.remove("arrow--clr");
});

cardTwo.addEventListener("mouseout", () => {
  removeCardHover(cardTwo, headingTwo, parTwo, arrowWrapperTwo);
  // arrowTwo.setAttribute("src", "assets/arrow-left.svg");
  arrowTwo.classList.remove("arrow--rotate");
  arrowTwoPath.classList.remove("arrow--clr");
});