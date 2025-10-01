import accardions from "./Common/Accardion";
import DropDownFunction from "./Common/DropDown";
import loadingScreen from "./Common/Loading";
import openModals from "./Common/Modal";
import priceRange from "./Common/priceRange";
import scrollAction from "./Common/scroll";
import toTopScroll from "./Common/toTop";
import renderBasket from "./Components/basketUI";
import cart from "./Components/cart";
import {
  categoryRender,
  popularProducts,
  sorting,
  tagRender,
} from "./Components/filter";

import productsRender from "./Components/products";
import subtotal from "./Components/subTotal";

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
  priceRange();
  loadingScreen();
  productsRender();
  categoryRender();
  popularProducts();
  tagRender();
  sorting();
  renderBasket();
  cart();
  subtotal();
});
