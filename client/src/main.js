import accardions from "./Common/Accardion";
import DropDownFunction from "./Common/DropDown";
import loadingScreen from "./Common/Loading";
import openModals from "./Common/Modal";
import scrollAction from "./Common/scroll";
import toTopScroll from "./Common/toTop";

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

document.addEventListener("DOMContentLoaded", () => {
  DropDownFunction();
  openModals();
  toTopScroll();
  scrollAction();
  accardions();
  loadingScreen();
});
