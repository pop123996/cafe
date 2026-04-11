let cart = [];

const cartItems = document.getElementById("cartItems");
const totalEl = document.getElementById("total");
const cartDiv = document.getElementById("cart");

// Toggle Cart
document.getElementById("cartToggle").addEventListener("click", () => {
  cartDiv.classList.toggle("hidden");
});


// Add to Cart
document.querySelectorAll(".add-to-cart").forEach(btn => {
  btn.addEventListener("click", () => {

    const name = btn.getAttribute("data-name");
    const price = parseInt(btn.getAttribute("data-price"));

    let existing = cart.find(item => item.name === name);

    if (existing) {
      existing.qty++;
    } else {
      cart.push({ name, price, qty: 1 });
    }

    updateCart();
  });
});


// Update Cart UI
function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.qty;

    const li = document.createElement("li");
    li.classList.add("cart-item");

    li.innerHTML = `
      <span>${item.name}</span>
      <div>
        <button class="qty-btn" onclick="changeQty(${index}, -1)">-</button>
        ${item.qty}
        <button class="qty-btn" onclick="changeQty(${index}, 1)">+</button>
        <span class="remove-btn" onclick="removeItem(${index})">❌</span>
      </div>
    `;

    cartItems.appendChild(li);
  });

  totalEl.innerText = total;
}


// Change Quantity
function changeQty(index, change) {
  cart[index].qty += change;

  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }

  updateCart();
}


// Remove Item
function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}


// Checkout
document.getElementById("checkoutBtn").addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Cart is empty ❗");
    return;
  }

  alert("Order placed 🎉 Total: ₹" + totalEl.innerText);

  cart = [];
  updateCart();
});
