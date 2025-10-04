import HttpServices from "../Api/http";
const MEMBERS_TOP_WRAPPER = document.querySelector("#membersTop");
const api = new HttpServices("http://localhost:1337/api/");
const teams = () => {
  api.getData("teams?populate=*").then((data) => {
    let renderHTML = data?.data
      ?.map(
        (
          item
        ) => `  <div class="w-[345px] h-[476px] flex justify-end mt-19 items-end">
              <div
                class="box rounded-[25px] overflow-hidden border border-gray-300 w-full h-full group relative"
              >
                <div class="boxImg relative overflow-hidden bg-[#E3E3E3]">
                  <a href="./teamDetail.html?id=${item?.id}">
                    <img
 src="http://localhost:1337${item?.image?.url}"
                      alt=""
                      class="w-full h-[314px] object-cover rounded-[25px] transform group-hover:translate-x-8 duration-500"
                    />
                    <div
                      class="absolute z-[888] inset-0 bg-gradient-to-t from-red-600/80 via-red-100/20 to-transparent opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 duration-500"
                    ></div>
                  </a>
                  <div class="absolute right-0 bottom-0">
                    <h2
                      class="vertical-text font-sora font-semibold text-[80px] tracking-[-.05em] leading-[.6em] text-white rotate-180"
                    >
                      Neural
                    </h2>
                  </div>
                </div>

                <div
                  class="bg-white rounded-t-[50%] min-h-[65px] min-w-[65px] absolute bottom-[120px] z-[999] left-[11%] flex items-center justify-center"
                >
                  <div
                    class="addtocart min-h-[50px] min-w-[50px] flex items-center justify-center bg-[#333333] hover:bg-[#F14F44] duration-300 cursor-pointer rounded-[50%]"
                  >
                    <i class="ri-share-fill text-white"></i>
                  </div>
                  <div
                    class="absolute bottom-0 transform translate-y-[80px] opacity-0 group-hover:opacity-100 duration-300 group-hover:translate-y-[0px]"
                  >
                    <ul class="text-white">
                      <li
                        class="min-h-[40px] min-w-[50px] flex items-center justify-center bg-[#333333] hover:text-[#F14F44] duration-300 cursor-pointer rounded-t-[50%]"
                      >
                        <i class="ri-youtube-fill"></i>
                      </li>
                      <li
                        class="min-h-[40px] min-w-[50px] flex items-center justify-center bg-[#333333] hover:text-[#F14F44] duration-300 cursor-pointer"
                      >
                        <i class="ri-linkedin-fill"></i>
                      </li>
                      <li
                        class="min-h-[40px] min-w-[50px] flex items-center justify-center bg-[#333333] hover:text-[#F14F44] duration-300 cursor-pointer"
                      >
                        <i class="ri-twitter-fill"></i>
                      </li>
                      <li
                        class="min-h-[40px] min-w-[50px] flex items-center justify-center bg-[#333333] hover:text-[#F14F44] duration-300 cursor-pointer rounded-b-[50%]"
                      >
                        <i class="ri-facebook-fill"></i>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="boxBody px-[40px] py-[36px] min-h-[91px]">
                  <h2
                    class="text-[20px] leading-[1.4em] tracking-[-0.03em] text-[#111111] font-sora"
                  >
                  ${item?.name}
                  </h2>
                  <div
                    class="price mt-[9px] text-[14px] leading-[30px] font-manrope flex items-center gap-2 text-gray-400"
                  >
                    /
                    <h2>${item?.job}</h2>
                    /
                  </div>
                </div>
              </div>
            </div>`
      )
      .join("");
    MEMBERS_TOP_WRAPPER && (MEMBERS_TOP_WRAPPER.innerHTML = renderHTML);
  });
};

export default teams;
