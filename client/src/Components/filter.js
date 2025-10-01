import HttpServices from "../Api/http";
import productsRender from "./products";

const CATEGORY_WRAPPER = document.querySelector("#categroyWrapper");
const POPULAR_PRODUCTS_WRAPPER = document.querySelector("#popularsWrapper");
const TAG_WRAPPER = document.querySelector("#tagWrapper");
const SORT_SELECT = document.querySelector("select");
const api = new HttpServices("http://localhost:1337/api/");

export const categoryRender = () => {
  api.getData("categories").then((c) => {
    console.log(c);
    let renderC = c?.data
      ?.map(
        (
          item
        ) => `    <ul class="text-[18px]" data-id="${item.id}" data-type="categories">
                <li
                  class="mb-[1.1111em] flex items-center gap-1.5 text-[#9b9b9b] font-semibold font-manrope hover:text-[#333333] duration-300 cursor-pointer group"
                >
                  <i
                    class="ri-arrow-right-s-line hidden group-hover:flex duration-300"
                  ></i>
               ${item?.name}
                </li>
     
              </ul>`
      )
      .join("");
    CATEGORY_WRAPPER && (CATEGORY_WRAPPER.innerHTML = renderC);
    CATEGORY_WRAPPER.addEventListener("click", (e) => {
      const target = e.target.closest("[data-id]");
      if (!target) return;
      const id = target.dataset.id;
      productsRender(`&filters[categories][id][$eq]=${id}`);
    });
  });
};

export const popularProducts = () => {
  api.getData("products?populate=*").then((data) => {
    let renderPopulars = data?.data
      ?.slice(0, 3)
      .map(
        (item) => `      <ul class="flex flex-col items-start gap-5">
                  <li class="mb-5">
                    <div>
                      <div class="box flex items-start gap-4.5">
                        <div
                          class="boxImg w-[75px] h-auto rounded-[10px] overflow-hidden"
                        >
                          <img
                        src="http://localhost:1337${item?.image?.url}"
                            alt=""
                            class="w-full h-full object-cover"
                          />
                        </div>
                        <div class="boxBody">
                          <h2
                            class="text-[18px] leading-[1.38888em] tracking-[-0.03em] text-[#111111] font-sora font-normal"
                          >
                       ${item?.title}
                          </h2>
                          <div
                            class="price mt-[9px] text-[14px] leading-[30px] font-manrope flex items-center gap-1"
                          >
                            <span class="text-gray-400"> /</span>
                                   ${
                                     item?.price?.toFixed(2)
                                       ? `  <span class="text-[#9b9b9b]"> $ ${item?.price}</span>`
                                       : ""
                                   }
                  
                   ${
                     item?.discount?.toFixed(2)
                       ? ` <span class="text-[#f14f44]">$ ${item?.discount} </span>`
                       : ""
                   }
                            <span class="text-gray-400"> /</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>`
      )
      .join("");
    POPULAR_PRODUCTS_WRAPPER &&
      (POPULAR_PRODUCTS_WRAPPER.innerHTML = renderPopulars);
  });
};

export const tagRender = () => {
  api.getData("tags").then((data) => {
    let htmlRender = data?.data
      ?.map(
        (item) => `  <button
        data-id=${item?.id} data-type="tags"
                  class="bg-[#f0f2f4] hover:text-white duration-300 cursor-pointer text-[#333333] text-[14px] leading-[20px] font-medium py-[7.5px] px-[13px] rounded-[999px] font-manrope mx-[5px] my-[6px] hover:bg-[#333333]"
                >
                  / ${item?.name} /
                </button>`
      )
      .join("");
    TAG_WRAPPER && (TAG_WRAPPER.innerHTML = htmlRender);
    TAG_WRAPPER.addEventListener("click", (e) => {
      const target = e.target.closest("[data-id]");
      if (!target) return;
      const id = target.dataset.id;
      productsRender(`&filters[tags][id][$eq]=${id}`);
    });
  });
};

export const sorting = () => {
  SORT_SELECT.addEventListener("change", (e) => {
    const sortValue = e.target.value;
    const query = sortValue ? `&sort[0]=${sortValue}` : "";
    productsRender(query);
  });
};
