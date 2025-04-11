let checkbox = document.querySelector(
  ".button--katolog input[type='checkbox']"
);
let burgerIcon = document.querySelector(".burger-icon--menu");

checkbox.addEventListener("change", function () {
  if (checkbox.checked) {
    burgerIcon.classList.add("active");
  } else {
    burgerIcon.classList.remove("active");
  }
});

let link = document.querySelector(".burger-icon--menu a");
link.addEventListener("click", function (event) {
  if (checkbox.checked) {
    checkbox.checked = false;
    burgerIcon.classList.remove("active");
  }
});
