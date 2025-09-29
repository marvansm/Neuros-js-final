const loadingScreen = () => {
  const LOADING = document.querySelector(".loading");
  setTimeout(() => {
    LOADING.classList.add("hidden");
  }, 2000);
};

export default loadingScreen;
