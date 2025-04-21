document.addEventListener("DOMContentLoaded", function () {
  const allStars = document.querySelectorAll(".rating input");

  allStars.forEach((star) => {
    star.addEventListener("change", function () {
      const cardRating = star
        .closest(".card")
        .querySelectorAll(".rating input");

      const index = [...cardRating].indexOf(star);

      cardRating.forEach((s, i) => {
        if (i <= index) {
          s.checked = true; // Active holatni belgilaymiz
        } else {
          s.checked = false; // Boshqa yulduzlarni tozalaymiz
        }
      });
    });
  });
});
