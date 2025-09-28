const scrollBtn = document.querySelector("#scrollBtn");
const toTopScroll = () => {
  scrollBtn &&
    scrollBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
};

export default toTopScroll;
