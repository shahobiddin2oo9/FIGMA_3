let backToTop = document.getElementById("backToTop");
let header = document.getElementById("header");

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    header.style.padding = "20px 0";
  } else {
    header.style.padding = "40px 0";
  }

  if (window.scrollY > 300) {
    backToTop.style.opacity = "1";
    backToTop.style.visibility = "visible";
  } else {
    backToTop.style.opacity = "0";
    backToTop.style.visibility = "hidden";
  }
});

backToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
