import HttpServices from "../Api/http";

const BLOG_WRAPPER = document.querySelector("#blogWrapper");
const api = new HttpServices("http://localhost:1337/api/");
const blogPage = () => {
  api.getData(`blogs?populate=*`).then((data) => {
    let renderHTML = data?.data
      ?.map(
        (item) => ` <a href="./blogDetail.html?id=${item?.id}" class="block">
  <div class="rounded-[25px] overflow-hidden cursor-pointer">
  <div class="image relative">
    <img
      src="http://localhost:1337${item?.img?.url}"
      alt="${item?.title}"
      class="w-full h-[220px] sm:h-[280px] md:h-[320px] lg:h-[380px] object-cover"
    />

    <div
      class="bg-white rounded-t-[20px] px-4 pb-1 pt-2 absolute -bottom-1 left-1"
    >
      <h2
        class="leading-[1.8em] font-medium text-[12px] sm:text-[13px] md:text-[14px] text-[#9b9b9b]"
      >
        5 Jan 2024 / andrew
      </h2>
    </div>
  </div>
  </div>

  <div
    class="body px-4 sm:px-6 md:px-8 border border-gray-200 rounded-b-[25px] pb-6"
  >
    <h2
      class="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[25px] leading-[26px] sm:leading-[30px] md:leading-[34px] lg:leading-[35px] mt-6 tracking-[-.03em] text-[#111111] font-normal font-sora"
    >
      ${item?.title}
    </h2>

    <span
      class="flex flex-wrap items-center gap-1 text-[#9b9b9b] text-[12px] sm:text-[13px] md:text-[14px] leading-[1.8em] font-medium mt-4"
    >
      /${item?.tags} /
    </span>
  </div>
  </div>
</a>
`
      )
      .join("");
    BLOG_WRAPPER && (BLOG_WRAPPER.innerHTML = renderHTML);
  });
};

export default blogPage;
