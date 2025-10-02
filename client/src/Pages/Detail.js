import HttpServices from "../Api/http";
import { addToCart } from "../Provider/addtocart";

const DETAIL_WRAPPER = document.querySelector("#detailWrapper");
const PRODUCT_NAME = document.querySelector("#productName");

const detailPage = () => {
  const id = new URLSearchParams(window.location.search).get("id");
  const api = new HttpServices("http://localhost:1337/api/");

  api.getData(`/products?filters[id]=${id}&populate=*`).then((res) => {
    const product = res?.data?.[0];
    if (!product) return;

    let quantity = 1;

    let renderHtml = `  
        <div
            class="grid grid-cols-1 lg:grid-cols-2 gap-[50px] bg-white rounded-lg  p-6"
          >
            <div class="relative">
              <span
                class="absolute top-4 left-4 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold"
              >
                SALE
              </span>
              <img
                   src="http://localhost:1337${product?.image?.url}"
                alt="${product?.title}"
                class="w-full rounded-lg object-cover"
              />
            </div>

            <div class="flex flex-col justify-between">
              <div>
                <p class="text-[#333333] font-medium leading-[1.875em] mb-[30px] font-manrope">
                  The development of neural networks is a specialized task that
                  requires expertise and experience. Our team of skilled
                  professionals excels in designing and implementing neural
                  network architectures tailored to your specific business
                  needs.
                </p>

                <div class="space-y-3 mb-6">
                  <div
                    class="flex items-center text-gray-800 hover:text-red-500 cursor-pointer transition"
                  >
                    <svg
                      class="w-5 h-5 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <span class="font-medium">Cotton</span>
                  </div>
                  <div
                    class="flex items-center text-gray-800 hover:text-red-500 cursor-pointer transition"
                  >
                    <svg
                      class="w-5 h-5 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <span class="font-medium">Polyester</span>
                  </div>
                  <div
                    class="flex items-center text-gray-800 hover:text-red-500 cursor-pointer transition"
                  >
                    <svg
                      class="w-5 h-5 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <span class="font-medium">Wool</span>
                  </div>
                  <div
                    class="flex items-center text-gray-800 hover:text-red-500 cursor-pointer transition"
                  >
                    <svg
                      class="w-5 h-5 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <span class="font-medium">Blends</span>
                  </div>
                </div>

                <div class="flex items-center gap-3 mb-4">
                /
                    ${
                      product.discount
                        ? `<span class="text-[#f14f44] text-[18px] leading-[30px] font-medium font-manrope">$${
                            product.discount
                          }</span>
         ${
           product.price
             ? `<span class="text-[#9b9b9b] text-[18px] leading-[30px] line-through">$${product.price}</span>`
             : ""
         }`
                        : product.price
                        ? `<span class="text-[#111111] font-bold">$${product.price}</span>`
                        : ""
                    }
                    /
                </div>

                <div class="flex items-center gap-4 mb-8">
                  <div
                    class="flex items-center border border-gray-300 rounded-full"
                  >
                    <button
                      id="decreaseBtn"
                      class="px-2 py-2 hover:bg-gray-100 rounded-l-full transition"
                    >
                      −
                    </button>
                    <input
                      id="quantityInput"
                      type="number"
                      value="1"
                      class="w-16 text-center "
                      readonly
                    />
                    <button
                      id="increaseBtn"
                      class="px-2 py-2 hover:bg-gray-100 rounded-r-full transition"
                    >
                      +
                    </button>
                     <button
                    id="addToCartBtn"
                    class="bg-gray-800 text-white p-4 rounded-full hover:bg-gray-700 transition"
                  >
                    <svg
                      class="w-[15px] h-[15px]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </button>
                  </div>
                 
                </div>
              </div>

              <div class="border-t pt-6 space-y-3">
                <div class="flex">
                  <span class="font-semibold text-gray-800 w-32">SKU:</span>
                  <span class="text-gray-600">12564789-11</span>
                </div>
                <div class="flex">
                  <span class="font-semibold text-gray-800 w-32"
                    >Category:</span
                  >
                  <span class="text-gray-600">Dresses & skirts</span>
                </div>
                <div class="flex">
                  <span class="font-semibold text-gray-800 w-32">Tags:</span>
                  <span class="text-gray-600">clothes / hoody / red /</span>
                </div>
              </div>
            </div>
          </div>`;

    DETAIL_WRAPPER.innerHTML = renderHtml;
    if (PRODUCT_NAME) PRODUCT_NAME.innerText = product.title || "";

    const decreaseBtn = document.querySelector("#decreaseBtn");
    const increaseBtn = document.querySelector("#increaseBtn");
    const quantityInput = document.querySelector("#quantityInput");
    const addToCartBtn = document.querySelector("#addToCartBtn");

    decreaseBtn.addEventListener("click", () => {
      if (quantity > 1) {
        quantity--;
        quantityInput.value = quantity;
      }
    });

    increaseBtn.addEventListener("click", () => {
      quantity++;
      quantityInput.value = quantity;
    });

    addToCartBtn.addEventListener("click", () => {
      const productWithQty = { ...product, qty: quantity };
      addToCart(productWithQty);
    });
  });
};

export default detailPage;
