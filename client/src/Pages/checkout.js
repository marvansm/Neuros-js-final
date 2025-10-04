import HttpServices from "../Api/http";

const SUBMIT_FORM = document.querySelector("#submitForm");
const FIRST_NAME = document.querySelector("#firstName");
const LAST_NAME = document.querySelector("#lastName");
const COMPANY_NAME = document.querySelector("#companyName");
const EMAIL = document.querySelector("#email");
const PHONE = document.querySelector("#phone");
const api = new HttpServices("http://localhost:1337/api/");

const checkout = () => {
  SUBMIT_FORM &&
    SUBMIT_FORM.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = {
        firstname: FIRST_NAME.value,
        lastname: LAST_NAME.value,
        companyName: COMPANY_NAME.value,
        email: EMAIL.value,
        phone: PHONE.value,
        items: JSON.parse(localStorage.getItem("cart")) || [],
        total: localStorage.getItem("subtotal") || 0,
      };

      api
        .postData("orders", { data: formData })
        .then((res) => {
          if (res) {
            console.log("Order submitted successfully:", res);
            localStorage.removeItem("cart");
            localStorage.removeItem("subtotal");

            window.location.href = "/";
          }
        })
        .catch((err) => {
          if (err.response) {
            console.error("Strapi error data:", err.response.data);
          } else {
            console.error(err);
          }
        });
    });
};

export default checkout;
