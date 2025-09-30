const loadingScreen = () => {
  const LOADING = document.querySelector(".loading");
  setTimeout(() => {
    LOADING && LOADING.classList.add("hidden");
  }, 1000);
};

export default loadingScreen;
