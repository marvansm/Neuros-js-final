import { getCart, removeFromCart, updateQty } from "../Provider/addtocart.js";

const PRODUCT_LIST = document.querySelector("#productList");

const cart = () => {
  const cartItems = getCart();
  if (!PRODUCT_LIST) return;

  if (!cartItems.length) {
    PRODUCT_LIST.innerHTML = `<div class="p-8 text-center text-gray-500">Sepetiniz boş.</div>`;
    return;
  }

  PRODUCT_LIST.innerHTML = cartItems
    .map((item) => {
      const price = item.discount ?? item.price;
      return `
      <div class="grid grid-cols-4 gap-4 px-8 py-6 border-b border-gray-200 items-center">
        <div class="flex items-center gap-4">
          <button class="text-gray-400 hover:text-red-500 text-xl remove-btn" data-id="${
            item.id
          }">×</button>
          <img src="http://localhost:1337${item?.image?.url}" alt="${
        item.title || ""
      }" class="w-24 h-24 rounded-lg object-cover" />
          <div>
            <h3 class="font-medium text-gray-900">${item.title || ""}</h3>
          </div>
        </div>
        <div class="text-center text-gray-600">/ $${price} /</div>
        <div class="flex justify-center">
          <div class="flex items-center border border-gray-300 rounded-full px-4 py-2">
            <button class="text-gray-600 hover:text-gray-900 px-2 qty-btn" data-id="${
              item.id
            }" data-action="decrease">−</button>
            <span class="px-4 text-gray-900">${item.qty || 1}</span>
            <button class="text-gray-600 hover:text-gray-900 px-2 qty-btn" data-id="${
              item.id
            }" data-action="increase">+</button>
          </div>
        </div>
        <div class="text-right text-gray-900 font-medium">/ $${(
          price * (item.qty || 1)
        ).toFixed(2)} /</div>
      </div>`;
    })
    .join("");

  PRODUCT_LIST.querySelectorAll(".remove-btn").forEach((btn) => {
    btn.onclick = () => {
      removeFromCart(btn.dataset.id);
      cart();
    };
  });

  PRODUCT_LIST.querySelectorAll(".qty-btn").forEach((btn) => {
    btn.onclick = () => {
      updateQty(btn.dataset.id, btn.dataset.action);
      cart();
    };
  });
};

export default cart;
