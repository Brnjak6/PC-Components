"use strict";

const burgerIcon = document.querySelector(".sidebar__burger");
const burgerIconArrs = document.querySelectorAll(".sidebar__burger-svg");
const burgerMenu = document.querySelector(".sidebar__open");
const burgerClose = document.querySelector(".sidebar__open-close-btn");
const burgerItems = document.querySelector(".sidebar__items");

// Events

const noScroll = () => {
  window.scrollTo(0, 0);
};

burgerIcon.addEventListener("mouseover", function () {
  burgerIconArrs.forEach((arr) => (arr.style.transform = "scale(1.1)"));
});
burgerIcon.addEventListener("mouseout", function () {
  burgerIconArrs.forEach((arr) => (arr.style.transform = "scale(1)"));
});

burgerIcon.addEventListener("click", function () {
  burgerMenu.classList.add("visible");
  window.addEventListener("scroll", noScroll);
});

burgerClose.addEventListener("click", function () {
  burgerMenu.classList.remove("visible");
  window.removeEventListener("scroll", noScroll);
});

//Tabbed component
const tabs = document.querySelectorAll(".adv-buttons--btn");
const tabsContainer = document.querySelector(".adv-buttons");
const tabsContent = document.querySelectorAll(".advantages--description");
const tabsLines = document.querySelectorAll(".advantages--description-line");

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".adv-buttons--btn");

  if (clicked) {
    tabs.forEach((t) => t.classList.remove("adv-buttons--active"));
    tabsContent.forEach((description) =>
      description.classList.remove("advantages--description-active")
    );
    tabsLines.forEach((line) =>
      line.classList.remove("advantages--description-line--active")
    );

    clicked.classList.add("adv-buttons--active");

    document
      .querySelector(`.advantages--description-${clicked.dataset.tab}`)
      .classList.add("advantages--description-active");

    document
      .querySelector(`.advantages--description-line-${clicked.dataset.tab}`)
      .classList.add("advantages--description-line--active");
  }
});

burgerItems.addEventListener("click", function (e) {
  e.preventDefault();

  window.removeEventListener("scroll", noScroll);

  if (e.target.classList.contains("sidebar__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    burgerMenu.classList.remove("visible");
  }
});

//Mouseover and mouseout
const footer = document.querySelector(".footer");

const footerFocus = function (e, opacity) {
  if (e.target.classList.contains("options__link")) {
    const link = e.target;
    const siblings = link
      .closest(".options")
      .querySelectorAll(".options__link");

    siblings.forEach((s) => {
      if (s !== link) s.style.opacity = opacity;
    });
  }
};

footer.addEventListener("mouseover", function (e) {
  footerFocus(e, 0.5);
});
footer.addEventListener("mouseout", function (e) {
  footerFocus(e, 1);
});
// Mouseover burgerMenu
const sidebarItems = document.querySelector(".sidebar__open");

const burgerItemFocus = function (e, opacity) {
  if (e.target.classList.contains("sidebar__link")) {
    const link = e.target;
    const siblings = link
      .closest(".sidebar__open")
      .querySelectorAll(".sidebar__link");

    siblings.forEach((s) => {
      if (s !== link) s.style.opacity = opacity;
    });
  }
};

sidebarItems.addEventListener("mouseover", function (e) {
  burgerItemFocus(e, 0.5);
});
sidebarItems.addEventListener("mouseout", function (e) {
  burgerItemFocus(e, 1);
});
