import HttpServices from "../Api/http";

const SUBMIT_REGISTER = document.querySelector("#submitRegister");
const REGSITER_USERNAME = document.querySelector("#username");
const REGSITER_EMAIL = document.querySelector("#email");
const REGSITER_PASSWORD = document.querySelector("#password");
const api = new HttpServices("http://localhost:1337/api/");
const Register = () => {
  SUBMIT_REGISTER &&
    SUBMIT_REGISTER.addEventListener("submit", (e) => {
      e.preventDefault();
      const payload = {
        username: REGSITER_USERNAME.value,
        email: REGSITER_EMAIL.value,
        password: REGSITER_PASSWORD.value,
      };
      api.LoginAuth("auth/local/register", payload).then((data) => {
        if (data?.user) {
          localStorage.setItem("email", data?.user?.email);
          setTimeout(() => {
            window.location.href = "./login.html";
          }, 800);
          Swal?.fire?.({
            title: "Registered",
            icon: "success",
            draggable: true,
          });
        }
      });
    });
};

export default Register;
