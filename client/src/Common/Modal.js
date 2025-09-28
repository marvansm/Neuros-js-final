const MODAL_DISPLAY = document.querySelector("#contactModals");
const OPEN_MODAL = document.querySelector(".sideBarIcon");
const CLOSE_MODAL = document.querySelector(".ri-close-line");

const openModals = () => {
  OPEN_MODAL.addEventListener("click", () => {
    MODAL_DISPLAY.classList.remove("hidden");

    requestAnimationFrame(() => {
      MODAL_DISPLAY.classList.remove("opacity-0", "scale-95");
      MODAL_DISPLAY.classList.add("opacity-100", "scale-100", "flex");
    });
  });

  CLOSE_MODAL.addEventListener("click", () => {
    MODAL_DISPLAY.classList.remove("opacity-100", "scale-100");
    MODAL_DISPLAY.classList.add("opacity-0", "scale-95");

    setTimeout(() => {
      MODAL_DISPLAY.classList.remove("flex");
      MODAL_DISPLAY.classList.add("hidden");
    }, 300);
  });
};

export default openModals;
