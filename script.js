const header = document.querySelector("[data-header]");
const year = document.querySelector("[data-year]");
const navLinks = [...document.querySelectorAll(".site-nav a")];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if (year) {
  year.textContent = new Date().getFullYear();
}

function updateHeader() {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
}

function updateActiveNav() {
  const offset = window.innerHeight * 0.35;
  let activeId = "";

  for (const section of sections) {
    if (section.getBoundingClientRect().top <= offset) {
      activeId = section.id;
    }
  }

  navLinks.forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === `#${activeId}`);
  });
}

updateHeader();
updateActiveNav();
window.addEventListener("scroll", () => {
  updateHeader();
  updateActiveNav();
});
