export const accardions = () => {
  const firstTab = document.querySelectorAll("#firstAcc");
  const ACC_CONTENT = document.querySelectorAll("#accardion_content");

  firstTab.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
      const acc = ACC_CONTENT[idx];
      acc.classList.toggle("max-h-0");
      acc.classList.toggle("max-h-50");
    });
  });
};
