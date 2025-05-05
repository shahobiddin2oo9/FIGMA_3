document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".hamburger-btn");
  const menu = document.querySelector(".burger-icon--menu");
  const closeBtn = document.querySelector(".close-btn");

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      toggles.forEach((btn) => btn.classList.toggle("active"));
      menu.classList.toggle("active");
      document.body.classList.toggle("menu-open");
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      toggles.forEach((btn) => btn.classList.remove("active"));
      menu.classList.remove("active");
      document.body.classList.remove("menu-open");
    });
  }

  menu.addEventListener("click", (e) => {
    if (e.target === menu) {
      toggles.forEach((btn) => btn.classList.remove("active"));
      menu.classList.remove("active");
      document.body.classList.remove("menu-open");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.classList.contains("active")) {
      toggles.forEach((btn) => btn.classList.remove("active"));
      menu.classList.remove("active");
      document.body.classList.remove("menu-open");
    }
  });
});
