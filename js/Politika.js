let Политика = document.querySelector(".Политика");
let Search = document.querySelector(".Searcha");
let input = document.querySelector(".input");
let discount_span = document.querySelector(".discount_span");

console.log(input);

function getPRO(data = products) {
  Политика.innerHTML = "";

  if (data.length === 0) {
    const noResults = document.createElement("img");
    noResults.src = "../img/home/7Fmb.gif";
    noResults.style = ` 
   max-width: 200px;
   border-radius: 12px;
   border: 6px solid red;`;
    const p = document.createElement("p");
    p.textContent = "Mahsulot topilmadi !";
    p.style = `
   font-size: 20px; 
   color: red;
   text-transform: uppercase;
   `;
    Политика.append(noResults, p);
  } else {
    data.forEach((item) => {
      const card = getCard(item, "dw", "dsa");
      Политика.append(card);
    });
  }
  discount_span.textContent = data.length;
}

getPRO();
input.addEventListener("input", function () {
  let search = this.value.trim().toLowerCase();
  let SearchPro = products.filter(
    (el) =>
      el.name.toLowerCase().includes(search) ||
      el.description.toLowerCase().includes(search)
  );

  getPRO(SearchPro);
});
