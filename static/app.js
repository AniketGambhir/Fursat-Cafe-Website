const WHATSAPP_NUMBER = "918788881280"; // Confirm this number with the cafe owner before launch.
const menuItems = [
  {name:"Classic Margherita",category:"pizza",description:"A simple, comforting pizza with tomato and cheese.",price:219},
  {name:"Garden Fresh Pizza",category:"pizza",description:"A colourful veggie-inspired pizza for sharing.",price:269},
  {name:"Fursat Special Burger",category:"burgers",description:"A hearty cafe-style burger with a satisfying bite.",price:189},
  {name:"Crispy Veg Burger",category:"burgers",description:"A crunchy veggie patty stacked in a soft bun.",price:149},
  {name:"Grilled Cheese Sandwich",category:"sandwiches",description:"Golden toasted bread with a warm cheesy centre.",price:159},
  {name:"Classic Cold Coffee",category:"coffee",description:"A chilled coffee pick-me-up.",price:129},
  {name:"Cappuccino",category:"coffee",description:"A smooth espresso-style coffee with milk foam.",price:119}
];
let activeFilter = "all";
const grid = document.querySelector("#menu-grid");
const search = document.querySelector("#menu-search");
function renderMenu(){
  const term = search.value.trim().toLowerCase();
  const visible = menuItems.filter(item => (activeFilter==="all" || item.category===activeFilter) && (item.name.toLowerCase().includes(term) || item.description.toLowerCase().includes(term)));
  grid.innerHTML = visible.length ? visible.map(item => `<article class="menu-card"><div><div class="menu-card-top"><h3>${item.name}</h3><span class="menu-price">₹${item.price}</span></div><p>${item.description}</p></div><div class="menu-card-top"><span class="menu-tag">${item.category}</span><button class="add-order" data-item="${item.name}">Enquire on WhatsApp ↗</button></div></article>`).join("") : '<p class="muted">No matching items. Try another search.</p>';
}
document.querySelectorAll(".filter").forEach(button => button.addEventListener("click",()=>{
  document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));
  button.classList.add("active"); activeFilter=button.dataset.filter; renderMenu();
}));
search.addEventListener("input",renderMenu);
grid.addEventListener("click",event=>{
  const button=event.target.closest("[data-item]"); if(!button)return;
  const item=menuItems.find(entry=>entry.name===button.dataset.item);
  const message=`Hello Fursat Cafe! I'd like to enquire about ${item.name}. Could you please confirm availability and current price?`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,"_blank","noopener");
});
document.querySelector("#booking-form").addEventListener("submit",event=>{
  event.preventDefault();
  const data=new FormData(event.currentTarget);
  const message=[
    "Hello Fursat Cafe! I'd like to send an enquiry.",
    `Name: ${data.get("name")}`,
    `Mobile: ${data.get("phone")}`,
    `Request: ${data.get("type")}`,
    `People / quantity: ${data.get("count")}`,
    `Message: ${data.get("message") || "Not specified"}`,
    "Please confirm availability and details. I understand this is a request, not a confirmed booking."
  ].join("\n");
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,"_blank","noopener");
});
const navToggle=document.querySelector(".nav-toggle"), nav=document.querySelector(".nav");
navToggle.addEventListener("click",()=>{
  const open=nav.classList.toggle("open");navToggle.setAttribute("aria-expanded",String(open));navToggle.textContent=open?"×":"☰";
});
nav.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{nav.classList.remove("open");navToggle.setAttribute("aria-expanded","false");navToggle.textContent="☰"}));
const lightbox=document.querySelector("#lightbox"), lightboxImg=lightbox.querySelector("img");
document.querySelectorAll(".gallery-photo").forEach(photo=>photo.addEventListener("click",()=>{
  lightboxImg.src=photo.dataset.full;lightbox.classList.add("open");lightbox.setAttribute("aria-hidden","false");
}));
function closeLightbox(){lightbox.classList.remove("open");lightbox.setAttribute("aria-hidden","true");lightboxImg.removeAttribute("src")}
lightbox.querySelector("button").addEventListener("click",closeLightbox);
lightbox.addEventListener("click",event=>{if(event.target===lightbox)closeLightbox()});
document.addEventListener("keydown",event=>{if(event.key==="Escape")closeLightbox()});
document.querySelector("#year").textContent=new Date().getFullYear();
renderMenu();