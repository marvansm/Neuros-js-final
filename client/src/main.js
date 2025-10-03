import { accardions, projectAcc } from "./Common/Accardion";
import DropDownFunction from "./Common/DropDown";
import loadingScreen from "./Common/Loading";
import openModals from "./Common/Modal";
import priceRange from "./Common/priceRange";

import scrollAction from "./Common/scroll";
import toTopScroll from "./Common/toTop";
import renderBasket from "./Components/basketUI";
import {
  categoryRender,
  popularProducts,
  sorting,
  tagRender,
} from "./Components/filter";

import subtotal from "./Components/subTotal";
import blogPage from "./Pages/blog";
import cart from "./Pages/cart";
import detailPage from "./Pages/Detail";
import productsRender from "./Pages/products";
import counterUP from "./Utils/counterUP";

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
  projectAcc();
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
  detailPage();
  blogPage();
  counterUP();
});
