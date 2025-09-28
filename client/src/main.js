import DropDownFunction from "./Common/DropDown";
import openModals from "./Common/Modal";

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

document.addEventListener("DOMContentLoaded", () => {
  DropDownFunction();
  openModals();
});
