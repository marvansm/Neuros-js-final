import HttpServices from "../Api/http";

const TEAM_DETAIL_WRAPPER = document.querySelector("#teamdetailWrapper");

const teamDetail = () => {
  const id = new URLSearchParams(window.location.search).get("id");
  const api = new HttpServices("http://localhost:1337/api/");

  api.getData(`/teams?filters[id]=${id}&populate=*`).then((res) => {
    const teams = res?.data?.[0];
    if (!teams) return;

    let renderHtml = `  
             <div class="col-span-5">
            <div class="w-full h-full flex justify-end items-end">
              <div
                class="box rounded-[25px] overflow-hidden border border-gray-300 w-full h-full group relative"
              >
                <div class="boxImg relative overflow-hidden bg-[#E3E3E3]">
                  <a href="./Detail.html?id=${teams?.id}">
                    <img
                        src="http://localhost:1337${teams?.image?.url}"
                      alt=""
                      class="w-full h-full object-cover rounded-[25px] transform group-hover:translate-x-8 duration-500"
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

                <div class="boxBody px-[40px] py-[36px] min-h-[91px]">
                  <div class="">
                    <h2 class="text-xl font-semibold mb-2">
                      Contact information
                    </h2>
                    <div
                      class="text-gray-700 text-sm flex flex-col items-start gap-2.5"
                    >
                      <p>+1 (368) 567 89 54</p>
                      <p>+ 800 350 84 31</p>
                      <a
                        href="mailto:alan@neuro.com"
                        class="text-gray-700 hover:text-gray-900 underline"
                        >alan@neuro.com</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white col-span-7">
            <div class="mb-10">
              <p class="text-xs text-gray-500 mb-2">/ CEO Neuro /</p>
              <h1 class="text-5xl font-bold mb-6">${teams?.name}</h1>

              <div class="space-y-4 text-gray-800 text-sm leading-relaxed">
                <p>
                  Halosaur duckbilled barracudina, goosefish gar pleco, chum
                  salmon armoured catfish gudgeon sawfish whitefish orbicular
                  batfish mummichog paradise fish!
                </p>

                <p>
                  Triggerfish bluntnose knifefish upside-down catfish cobia
                  spookfish convict cichlid, "cat shark; saw shark trout cod."
                  Pacific hake false trevally queen parrotfish black prickleback
                  moss. Pacific hake false trevally queen parrotfish black
                  prickleback moss.
                </p>

                <p>
                  Knifefish upside-down catfish cobia spookfish convict cichlid,
                  "cat shark; saw shark trout cod." Pacific hake false trevally
                  queen parrotfish black prickleback moss. Pacific hake false
                  trevally queen parrotfish black prickleback moss
                </p>
              </div>
            </div>

            <div class="mt-12">
              <h2 class="text-3xl font-bold mb-8">
                My experience & years of education
              </h2>

              <div class="mb-10">
                <h3 class="text-xl font-bold mb-6">Education</h3>

                <div class="flex gap-4">
                  <div class="flex-shrink-0">
                    <span class="text-red-500 text-2xl font-bold">›</span>
                  </div>
                  <div>
                    <p class="text-lg font-bold mb-1">2004 - 2007</p>
                    <h4 class="text-base font-bold mb-2">ABMP University</h4>
                    <p class="text-gray-700 text-sm leading-relaxed">
                      Pacific hake false trevally queen parrotfish black
                      prickleback moss. Pacific hake false trevally queen
                      parrotfish black prickleback moss. Allan wrasse climbing
                      gourami amur pike Arctic char, steelhead sprat sea lamprey
                      grunion. Walleye poolfish sand goby butterfly ray stream
                      catfish jewfish.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 class="text-xl font-bold mb-6">Professional Experience</h3>

                <div class="flex gap-4 mb-8">
                  <div class="flex-shrink-0">
                    <span class="text-red-500 text-2xl font-bold">›</span>
                  </div>
                  <div>
                    <p class="text-lg font-bold mb-1">2012 - 2017</p>
                    <h4 class="text-base font-bold mb-2">Microsoft Inc.</h4>
                    <p class="text-gray-700 text-sm leading-relaxed">
                      Triggerfish bluntnose knifefish upside-down catfish cobia
                      spookfish convict cichlid cat shark saw shark trout cod.
                    </p>
                  </div>
                </div>

                <div class="flex gap-4">
                  <div class="flex-shrink-0">
                    <span class="text-red-500 text-2xl font-bold">›</span>
                  </div>
                  <div>
                    <p class="text-lg font-bold mb-1">2018 - 2023</p>
                    <h4 class="text-base font-bold mb-2">Neuro AI</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>`;

    TEAM_DETAIL_WRAPPER && (TEAM_DETAIL_WRAPPER.innerHTML = renderHtml);
  });
};

export default teamDetail;
