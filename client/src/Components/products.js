import HttpServices from "../Api/http";
import { addToCart } from "../Provider/addtocart";


const api = new HttpServices("http://localhost:1337/api/");
const PRODUCTS_WRAPPER = document.querySelector("#productWrapper");

const productsRender = (query = "") => {
  api.getData(`products?populate=*${query}`).then((data) => {
    if (!data?.data || !PRODUCTS_WRAPPER) return;

    PRODUCTS_WRAPPER.innerHTML = data.data
      .map((item) => {
        const price = item.discount ?? item.price;
        return `
        <div class="box rounded-[25px] overflow-hidden border border-gray-300">
          <div class="boxImg relative">
            <img src="http://localhost:1337${item?.image?.url}" alt="${
          item?.title
        }" class="w-full h-full object-cover rounded-[25px]" />
            
            <div class="bg-white rounded-t-[50%] min-h-[65px] min-w-[65px] absolute bottom-[-23px] right-[11%] flex items-center justify-center">
              <div class="addtocart min-h-[50px] min-w-[50px] flex items-center justify-center bg-[#333333] hover:bg-[#F14F44] duration-300 cursor-pointer rounded-[50%]" data-id="${
                item.id
              }">
                <i class="ri-shopping-cart-2-line text-[16px] text-white"></i>
              </div>
            </div>

            ${
              item?.sale
                ? `<div class="absolute top-[11px] left-[11px] bg-[#f14f44] h-[28px] text-[14px] leading-[28px] font-medium uppercase px-[14px] rounded-[25px] text-white">${item.sale}</div>`
                : ""
            }
          </div>

          <div class="boxBody px-[40px] py-[36px] min-h-[91px]">
            <h2 class="text-[20px] leading-[1.4em] tracking-[-0.03em] text-[#111111] font-sora">${
              item?.title
            }</h2>
            <div class="price mt-[9px] text-[14px] leading-[30px] font-manrope flex items-center gap-1">
              / <span class="text-[#9b9b9b]">$${item.price}</span> 
              ${
                item.discount
                  ? `<span class="text-[#f14f44]">$${item.discount}</span>`
                  : ""
              }
              /
            </div>
            <div class="stars mt-[12px] text-[12px] text-[#fac12e]">
              <i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill text-[#B9B9B9]"></i>
            </div>
          </div>
        </div>
      `;
      })
      .join("");

    PRODUCTS_WRAPPER.querySelectorAll(".addtocart").forEach((btn) => {
      btn.onclick = () => {
        const id = btn.dataset.id;
        const product = data.data.find((p) => String(p.id) === id);
        if (!product) return;

        addToCart(product);
        btn.style.backgroundColor = "#64d39d8a";

        setTimeout(() => {
          btn.style.backgroundColor = "#64D39E";
          btn.innerHTML = `<i class="ri-check-line text-[16px] font-bold text-white"></i>`;

          btn.onclick = () => {
            window.location.href = "/cart.html";
          };
        }, 1000);
      };
    });
  });
};

export default productsRender;
