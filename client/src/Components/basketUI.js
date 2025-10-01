import { getCart, removeFromCart, clearCart } from "../Provider/addtocart";

function renderBasket() {
  const cart = getCart();
  const basketUI = document.getElementById("basketUI");
  if (!basketUI) return;
  if (cart.length === 0) {
    basketUI.innerHTML = "<p>Sepetiniz boş.</p>";
    return;
  }
  basketUI.innerHTML = cart
    .map(
      (item) => `
        <div class="flex justify-between items-center py-2 border-b">
          <div class="box flex items-start gap-4.5">
            <div class="boxImg w-[75px] h-auto rounded-[10px] overflow-hidden">
              <img
                src="${
                  item.image?.url
                    ? "http://localhost:1337" + item.image.url
                    : item.image || ""
                }"
                alt="${item.title || ""}"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="boxBody">
              <h2 class="text-[18px] leading-[1.38888em] tracking-[-0.03em] text-[#111111] font-sora font-normal">
                ${item.title || ""}
              </h2>
              <div class="price mt-[2px] text-[14px] leading-[30px] font-manrope flex items-center gap-1">
                <span class="text-gray-400"> /</span>
                <span class="text-[#9b9b9b] quantity"> x${item.qty || 1}</span>
                <span class="text-gray-400">$${item.discount || 0}</span>
                <span class="text-gray-400"> /</span>
              </div>
            </div>
          </div>
          <span class="font-bold">$${(
            (item.discount ? item.discount : item.price) * (item.qty || 1)
          ).toFixed(2)}</span>
          <div>
            <button class="remove-btn" data-id="${item.id}">
              <i class="ri-close-line text-[20px] text-red-600"></i>
            </button>
          </div>
        </div>
      `
    )
    .join("");

  basketUI.querySelectorAll(".remove-btn").forEach((btn) => {
    btn.onclick = (e) => {
      e.preventDefault();
      const id = btn.getAttribute("data-id");
      removeFromCart(isNaN(Number(id)) ? id : Number(id));
      renderBasket();
    };
  });
}

export default renderBasket;
