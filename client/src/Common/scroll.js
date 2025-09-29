const scrollAction = () => {
  window.addEventListener("scroll", function () {
    const header = document.getElementById("mainHeader");
    const toTop = document.querySelector(".scrollUp");
    if (window.scrollY > 100) {
      header.classList.add("scrolled");
      toTop.classList.remove("hidden");
    } else {
      header.classList.remove("scrolled");
      toTop.classList.add("hidden");
    }
  });
};

export default scrollAction;
