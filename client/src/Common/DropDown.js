const DropDownFunction = () => {
  const pagesButton = document.getElementById("pagesButton");
  const pagesDropdown = document.getElementById("pagesDropdown");
  let closeTimeout;

  pagesButton.addEventListener("mouseenter", () => {
    clearTimeout(closeTimeout);
    pagesDropdown.classList.remove("invisible", "opacity-0");
    pagesDropdown.classList.add("visible", "opacity-100");
  });

  pagesButton.addEventListener("mouseleave", () => {
    delayedClose();
  });

  pagesDropdown.addEventListener("mouseenter", () => {
    clearTimeout(closeTimeout);
  });

  pagesDropdown.addEventListener("mouseleave", () => {
    delayedClose();
  });

  function delayedClose() {
    closeTimeout = setTimeout(() => {
      pagesDropdown.classList.remove("visible", "opacity-100");
      pagesDropdown.classList.add("opacity-0", "invisible");
    }, 200);
  }
};

export default DropDownFunction;
