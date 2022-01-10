const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close_modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn__scroll-to");
const section1 = document.querySelector("#section--1");
const nav = document.querySelector(".nav");
// const tabs = document.querySelectorAll(".operations__tab");
// const tabsContainer = document.querySelector(".operations__tab-container");
// const tabsContent = document.querySelectorAll(".operations__content");

//////////////////////////////////Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", openModal);

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

////////////////////////////////////////////
///Button scrolling
btnScrollTo.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log("Current scroll (X/Y)", window.pageXOffset, window.pageYOffset);

  console.log(
    "height/width viewport",
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  section1.scrollIntoView({ behavior: "smooth" });
});
/////////////////////////////////////////Page navigation

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
///////////////////
//Tabbed Component

const tabs = document.querySelectorAll(".operations__tab");

const tabsContainer = document.querySelector(".operations__tab-container");

const tabsContent = document.querySelectorAll(".operations__content");

tabs.foreach((s) => s.addEventListener("click", () => console.log("TAB")));

// tabsContainer.addEventListener("click", function (e) {
//   const clicked = e.target.closest(".operations__tab");

//   //Guard clause
//   if (!clicked) return;

//   //Remove active classes
//   tabs.forEach((t) => t.classList.remove("operations__content--active"));

//   //Activate tab
//   clicked.classList.add("operation__tab--active");

//   //Activate content area
//   document
//     .querySelector(`.operations__content--${clicked.dataset.tab}`)
//     .classList.add("operations__content--active");
// });

// // Reveal sections
// const allSections = document.querySelectorAll(".section");

// const revealSection = function (entries, observer) {
//   const [entry] = entries;
//   console.log(entry);

//   if (!entry.isIntersecting) return;

//   entry.target.classList.remove("section--hidden");
//   observer.unobserve(entry.target);
// };

// const sectionObserver = new IntersectionObserver(revealSection, {
//   root: null,
//   threshold: 0.15,
// });

// allSections.forEach(function (section) {
//   sectionObserver.observe(section);
//   section.classList.add("section--hidden");
// });
