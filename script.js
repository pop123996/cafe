// Fade Animation
const elements = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    const pos = el.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});


// Order Button
document.getElementById("orderBtn").addEventListener("click", () => {
  alert("Order feature coming soon 🚀");
});


// Contact Form
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const inputs = form.querySelectorAll("input, textarea");
  let valid = true;

  inputs.forEach(input => {
    if (input.value === "") valid = false;
  });

  if (!valid) {
    alert("Fill all fields ❗");
    return;
  }

  alert("Message Sent ✅");
  form.reset();
});