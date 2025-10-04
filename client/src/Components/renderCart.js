import { getCart } from "../Provider/addtocart";

const subtotalEl = document.querySelector("#subtotalEl");
const totalEl = document.querySelector("#total");
const container = document.querySelector("#cartItemsContainer");

const updateTotals = () => {
  const cart = getCart();
  const subtotal = cart.reduce(
    (sum, item) => sum + item.discount * item.qty,
    0
  );

  subtotalEl && (subtotalEl.textContent = `$${subtotal.toFixed(2)}`);
  totalEl && (totalEl.textContent = `$${subtotal.toFixed(2)}`);
};

const renderCart = () => {
  const cart = getCart();
  container &&
    (container.innerHTML = cart
      .map(
        (item) => `
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <img  src="http://localhost:1337${
          item?.image?.url
        }" class="w-16 h-16 object-cover rounded" />
        <span>${item.title} x ${item.qty}</span>
      </div>
      <span>$${(item.discount * item.qty).toFixed(2)}</span>
    </div>
  `
      )
      .join(""));

  updateTotals();
};

export default renderCart;
