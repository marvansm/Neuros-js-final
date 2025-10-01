import { getCart } from "../Provider/addtocart.js";

const SUBTOTAL_WRAPPER = document.querySelector("#subtotal");

const subtotal = () => {
  const cart = getCart();
  if (!SUBTOTAL_WRAPPER) return;

  let sub = 0;
  if (cart.length > 0) {
    sub = cart.reduce((acc, item) => {
      const price = item.discount ?? item.price;
      return acc + price * (item.qty || 1);
    }, 0);
  }

  let shipping = 0;
  const checked = document.querySelector('input[name="shipping"]:checked');
  if (checked) {
    const labelText = checked.nextElementSibling?.textContent || "";
    if (labelText.includes("Flat rate")) shipping = 100;
    else if (labelText.includes("Local pickup")) shipping = 50;
    else shipping = 0;
  }

  const total = sub + shipping;

  const html = `
    <div class="bg-gray-50 rounded-3xl p-8 shadow-sm">
      <h2 class="text-3xl font-bold text-gray-900 mb-8">Cart totals</h2>

      <div class="flex justify-between items-center mb-6">
        <span class="text-lg text-gray-900">Subtotal:</span>
        <span class="text-lg font-semibold text-gray-900">$${sub.toFixed(
          2
        )}</span>
      </div>

      <div class="mb-6">
        <div class="text-lg text-gray-900 mb-4">Shipping:</div>

        <label class="flex items-center gap-3 mb-3 cursor-pointer">
          <input type="radio" name="shipping" class="w-5 h-5" ${
            shipping === 0 ? "checked" : ""
          }/>
          <span class="text-gray-900">Free shipping</span>
        </label>

        <label class="flex items-center gap-3 mb-3 cursor-pointer">
          <input type="radio" name="shipping" class="w-5 h-5" ${
            shipping === 100 ? "checked" : ""
          }/>
          <span class="text-gray-900">Flat rate: $100.00</span>
        </label>

        <label class="flex items-center gap-3 mb-4 cursor-pointer">
          <input type="radio" name="shipping" class="w-5 h-5" ${
            shipping === 50 ? "checked" : ""
          }/>
          <span class="text-gray-900">Local pickup: $50.00</span>
        </label>
      </div>

      <div class="mb-2">
        <span class="text-gray-900">Shipping to <strong>AL</strong>.</span>
      </div>

      <a href="#" class="text-red-500 hover:text-red-600 inline-block mb-6 pb-2 border-b border-gray-300 w-full">
        Change address
      </a>

      <div class="flex justify-between items-center mb-8 pt-4">
        <span class="text-lg font-semibold text-gray-900">Total:</span>
        <span class="text-lg font-bold text-gray-900">$${total.toFixed(
          2
        )}</span>
      </div>

      <a href="#" class="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-900 text-white font-medium py-4 px-8 rounded-full transition-colors">
        <span>→</span>
        <span>Proceed to checkout</span>
      </a>
    </div>
  `;

  SUBTOTAL_WRAPPER.innerHTML = html;

  SUBTOTAL_WRAPPER.querySelectorAll('input[name="shipping"]').forEach(
    (input) => {
      input.onchange = () => subtotal();
    }
  );
};

export default subtotal;
