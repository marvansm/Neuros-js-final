const projectAcc = () => {
  const items = document.querySelectorAll(".timeline-item");

  items.forEach((item) => {
    const header = item.querySelector(".timeline-header");
    const content = item.querySelector(".timeline-content");
    const icon = item.querySelector(".icon");

    header.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");

      // Tümünü kapat
      items.forEach((i) => {
        i.classList.remove("active");
        i.querySelector(".timeline-content").style.maxHeight = "0px";
        i.querySelector(".icon").style.transform = "rotate(0deg)";
      });

      // Tıklananı aç
      if (!isOpen) {
        item.classList.add("active");
        content.style.maxHeight = content.scrollHeight + "px";
        icon.style.transform = "rotate(90deg)";
      }
    });
  });
};

export default projectAcc;
