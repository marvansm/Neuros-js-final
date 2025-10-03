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

export const projectAcc = () => {
  const items = document.querySelectorAll(".timeline-item");

  items.forEach((item) => {
    const header = item.querySelector(".timeline-header");
    const content = item.querySelector(".timeline-content");
    const icon = item.querySelector(".icon");

    header.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");

      items.forEach((i) => {
        i.classList.remove("active");
        i.querySelector(".timeline-content").style.maxHeight = "0px";
        i.querySelector(".icon").style.transform = "rotate(0deg)";
      });

      if (!isOpen) {
        item.classList.add("active");
        content.style.maxHeight = content.scrollHeight + "px";
        icon.style.transform = "rotate(90deg)";
      }
    });
  });
};
