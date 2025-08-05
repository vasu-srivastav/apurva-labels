// Scroll to Top Button Logic
document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });
});
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Swiper Initialization Example (Hero Banner)
const heroSwiper = new Swiper(".hero-swiper", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  effect: "fade",
});

// Swiper Initialization Example (Testimonials)
var swiper = new Swiper(".testimonialSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
   loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const mobileProductsToggle = document.getElementById("mobile-products-toggle");
const mobileProductsList = document.getElementById("mobile-products-list");

// Toggle Mobile Menu
mobileMenuButton.addEventListener("click", () => {
  console.log("Mobile menu button clicked");
  mobileMenu.classList.toggle("hidden");
});

// Toggle Products Submenu in Mobile
mobileProductsToggle.addEventListener("click", () => {
  mobileProductsList.classList.toggle("hidden");
});

// Auto Close Mobile Menu when Link Clicked
document.querySelectorAll("#mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

// FAQ Toggle Logic
// Accordion Toggle Logic (One Open at a Time)
const faqButtons = document.querySelectorAll('.faq-toggle');

faqButtons.forEach(button => {
    button.addEventListener('click', () => {
        faqButtons.forEach(btn => {
            if (btn !== button) {
                btn.nextElementSibling.classList.add('hidden');
                btn.querySelector('span').classList.remove('rotate-45');
            }
        });

        const content = button.nextElementSibling;
        const icon = button.querySelector('span');

        content.classList.toggle('hidden');
        icon.classList.toggle('rotate-45');
    });
});