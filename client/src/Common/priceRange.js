const priceRange = () => {
  const slider = document.getElementById("slider");
  if (!slider) {
    console.error("⚠️ #slider tapılmadı, priceRange başlamadı.");
    return;
  }

  noUiSlider.create(slider, {
    start: [0, 171],
    connect: true,
    range: {
      min: 0,
      max: 171,
    },
  });

  const min = document.getElementById("min");
  const max = document.getElementById("max");

  slider.noUiSlider.on("update", (values) => {
    min.textContent = Math.floor(values[0]);
    max.textContent = Math.floor(values[1]);
  });
};

export default priceRange;
