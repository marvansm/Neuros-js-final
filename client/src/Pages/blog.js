import HttpServices from "../Api/http";

const BLOG_WRAPPER = document.querySelector("#blogWrapper");
const api = new HttpServices("http://localhost:1337/api/");
const blogPage = () => {
  api.getData(`blogs?populate=*`).then((data) => {
    let renderHTML = data?.data
      ?.map(
        (item) => `  <div class="rounded-[25px] overflow-hidden cursor-pointer">
            <div class="image relative">
              <img
                src="http://localhost:1337${item?.img?.url}"
                alt=""
                class="w-full h-full object-cover"
              />

              <div
                class="bg-[#ffffff] rounded-t-[25px] px-[24px] pb-[3px] pt-[10px] absolute -bottom-1 left-0.5"
              >
                <h2
                  class="leading-[2.1428em] font-medium text-[14px] text-[#9b9b9b]"
                >
                  5 Jan 2024 / andrew
                </h2>
              </div>
            </div>

            <div
              class="body px-[40px] border border-gray-300 rounded-b-[25px] pb-[28px]"
            >
              <h2
                class="text-[25px] leading-[35px] mt-[28px] tracking-[-.03em] text-[#111111] font-normal font-sora w-[350px]"
              >
               ${item?.title}
              </h2>

              <span
                class="flex items-center gap-[3px] text-[#9b9b9b] text-[14px] leading-[2.1428em] font-medium mt-[22px]"
              >
            /${item?.tags} /
              </span>
            </div>
          </div>`
      )
      .join("");
    BLOG_WRAPPER && (BLOG_WRAPPER.innerHTML = renderHTML);
  });
};

export default blogPage;
