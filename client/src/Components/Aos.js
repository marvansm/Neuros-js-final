import AOS from "aos";
import "aos/dist/aos.css";

const aosPlugin = () => {
  AOS.init({
    duration: 2000,
    once: true,
  });
};

export default aosPlugin;
