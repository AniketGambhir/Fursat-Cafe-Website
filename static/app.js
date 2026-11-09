// CLIENT SETUP: replace this placeholder with the cafe's WhatsApp number,
// including country code and digits only, e.g. 919876543210.
const WHATSAPP_NUMBER = "91XXXXXXXXXX";

const menuItems = [
  {name:"House Espresso",category:"coffee",description:"A balanced, rich shot with a smooth finish.",price:110,tag:"SIGNATURE"},
  {name:"Flat White",category:"coffee",description:"Velvety microfoam poured over a double espresso.",price:160,tag:"BARISTA PICK"},
  {name:"Iced Spanish Latte",category:"coffee",description:"Chilled espresso, milk and a touch of sweetness.",price:190,tag:"COLD FAVOURITE"},
  {name:"Slow Brew Pour Over",category:"coffee",description:"A clean, aromatic cup brewed to order.",price:180,tag:"SLOW BAR"},
  {name:"Masala Chai",category:"tea",description:"A comforting cup with warming spices.",price:90,tag:"CLASSIC"},
  {name:"Iced Matcha",category:"tea",description:"Earthy matcha shaken smooth and served cold.",price:170,tag:"FRESH"},
  {name:"Avocado Toast",category:"bites",description:"Sourdough toast with a bright, savoury topping.",price:230,tag:"ALL DAY"},
  {name:"Grilled Cheese Melt",category:"bites",description:"Golden toasted bread with a gooey cheese centre.",price:190,tag:"COMFORT"},
  {name:"Butter Croissant",category:"sweet",description:"Flaky, buttery layers baked until golden.",price:120,tag:"BAKED FRESH"}
];

let activeFilter = "all";
const grid = document.querySelector("#menu-grid");
const search = document.querySelector("#menu-search");

function renderMenu() {
  const term = search.value.trim().toLowerCase();
  const visible = menuItems.filter(item =>
    (activeFilter === "all" || item.category === activeFilter) &&
    (item.name.toLowerCase().includes(term) || item.description.toLowerCase().includes(term))
  );
  grid.innerHTML = visible.length ? visible.map(item => `
    <article class="menu-card">
      <div><div class="menu-card-top"><span class="menu-tag">${item.tag}</span><span class="menu-price">₹${item.price}</span></div>
      <h3>${item.name}</h3><p>${item.description}</p></div>
      <div class="menu-card-top"><span class="menu-tag">${item.category}</span><button class="add-order" data-item="${item.name}">ENQUIRE ↗</button></div>
    </article>`).join("") : '<p class="section-note">No matching items. Try another search.</p>';
}

function sendWhatsApp(message) {
  if (!/^\d{10,15}$/.test(WHATSAPP_NUMBER)) {
    const status = document.querySelector("#form-status");
    if (status) status.textContent = "Demo mode is active. Add the cafe's WhatsApp number in static/app.js to send enquiries.";
    alert("This is a portfolio demo. Add the cafe's WhatsApp number in static/app.js to enable this action.");
    return;
  }
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
}

document.querySelectorAll(".filter").forEach(button => button.addEventListener("click", () => {
  document.querySelectorAll(".filter").forEach(item => item.classList.remove("active"));
  button.classList.add("active");
  activeFilter = button.dataset.filter;
  renderMenu();
}));
search.addEventListener("input", renderMenu);
grid.addEventListener("click", event => {
  const button = event.target.closest("[data-item]");
  if (!button) return;
  const item = menuItems.find(entry => entry.name === button.dataset.item);
  sendWhatsApp(`Hello! I'd like to enquire about ${item.name}. Could you please confirm availability and the current price?`);
});

document.querySelector("#booking-form").addEventListener("submit", event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const message = [
    "Hello! I'd like to enquire about a table.",
    `Name: ${data.get("name")}`,
    `Phone: ${data.get("phone")}`,
    `Guests: ${data.get("guests")}`,
    `Date: ${data.get("date") || "Flexible"}`,
    `Time: ${data.get("time") || "Flexible"}`,
    `Note: ${data.get("message") || "None"}`,
    "Please confirm availability. I understand this is a request, not a confirmed reservation."
  ].join("\n");
  sendWhatsApp(message);
});

const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
navToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.textContent = open ? "×" : "☰";
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.textContent = "☰";
}));

const lightbox = document.querySelector("#lightbox");
const lightboxImg = lightbox.querySelector("img");
document.querySelectorAll(".gallery-photo").forEach(photo => photo.addEventListener("click", () => {
  lightboxImg.src = photo.dataset.full;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
}));
function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImg.removeAttribute("src");
}
lightbox.querySelector("button").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", event => { if (event.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", event => { if (event.key === "Escape") closeLightbox(); });
document.querySelector("#year").textContent = new Date().getFullYear();
renderMenu();