import HttpServices from "../Api/http";

const LOGIN_FORM = document.querySelector("#loginForm");
const LOGIN_EMAIL = document.querySelector("#loginEmail");
const LOGIN_PASSWORD = document.querySelector("#loginPassword");
const api = new HttpServices("http://localhost:1337/api/");
const Login = () => {
  LOGIN_FORM &&
    LOGIN_FORM.addEventListener("submit", (e) => {
      e.preventDefault();
      const payload = {
        identifier: LOGIN_EMAIL.value,
        password: LOGIN_PASSWORD.value,
      };
      api.LoginAuth("auth/local", payload).then((data) => {
        if (data?.user) {
          localStorage.setItem("token", data?.jwt);
          localStorage.setItem("email", data?.user?.email);
          setTimeout(() => {
            window.location.href = "/";
          }, 800);
          Swal?.fire?.({ title: "Welcome", icon: "success", draggable: true });
        }
      });
    });
};

export default Login;
