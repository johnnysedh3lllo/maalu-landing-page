"use strict";

//GENERAL SELECTIONS
const sections = document.querySelectorAll(".observe-section");
const navLinkContainer = document.querySelector(".navbar__list");

//TEAM CAROUSEL
const wrapper = document.querySelector(".team__grid-wrapper");
const teamGrid = document.querySelector(".team__grid");
const oneCardWidth = document.querySelector(".member-card").offsetWidth;
const cards = [...document.querySelectorAll(".member-card")];

//FAQ SECTION
const questionWrapper = document.querySelectorAll(".question-wrapper");
const question = document.querySelectorAll(".question");
const answer = document.querySelectorAll(".answer");
const faqSection = document.querySelector(".faq-content");

///////////////////
//*PAGE NAVIGATION
navLinkContainer.addEventListener("click", (e) => {
  e.preventDefault();
  const clicked = e.target;
  if (clicked.classList.contains("navbar__link")) {
    const id = clicked.getAttribute("href");

    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  }
});

///////////////////
//*NAV MENU DISPLAY
const navMenuButton = document.querySelector(".nav-menu-button");
const navMenu = document.querySelector(".nav-menu");

navMenuButton.addEventListener("click", function (e) {
  const clicked = e.target;
  if (clicked.classList.contains("nav-menu-button")) {
    navMenu.classList.add("nav-menu-display");
  }
});

navMenu.addEventListener("click", function (e) {
  e.preventDefault();

  const clicked = e.target.closest(".nav-menu__item");
  if (clicked) {
    const id = clicked.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });

    setTimeout(() => {
      navMenu.classList.remove("nav-menu-display");
    }, 1000);
  }
});

/////////////////
//*TEAM CAROUSEL
wrapper.addEventListener("click", (e) => {
  const clicked = e.target;
  if (clicked.classList.contains("btn-container")) return;
  if (clicked.id === "right") {
    teamGrid.scrollLeft += oneCardWidth;
  } else {
    teamGrid.scrollLeft += -oneCardWidth;
  }
});

//*FAQ SECTION
//event delegation, for opening and closing of FAQ section
faqSection.addEventListener("click", (e) => {
  const clicked = e.target;
  const parentOfClicked = clicked.closest(".question-wrapper");
  if (parentOfClicked) {
    parentOfClicked.classList.toggle("active--section");
    parentOfClicked.classList.toggle("active");
  }
});

//* REVEAL SECTIONS ON SCROLL
const callback = (entries) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return; //Guard Clause
  if (entry.isIntersecting) entry.target.classList.add("display");

  sectionObserver.unobserve(entry.target);
};

const configObject = {
  root: null,
  threshold: 0.1,
};

const sectionObserver = new IntersectionObserver(callback, configObject);

sections.forEach((section) => {
  sectionObserver.observe(section);
});
