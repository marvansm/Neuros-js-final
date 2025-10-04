const loadingScreen = () => {
  const LOADING = document.querySelector(".loading");
  setTimeout(() => {
    LOADING && LOADING.classList.add("hidden");
  }, 500);
};

export default loadingScreen;
