let katalog = document.querySelector(".katalog");
let h1 = document.createElement("h1");
let input = document.querySelector(".input");
let product_discount = document.querySelector(".discount_span");

h1.innerText = "Каталог";
katalog.before(h1);

function katalog_(el) {
  let div = document.createElement("div");
  let img = document.createElement("img");
  img.className = "img-1 katalog-img";
  img.src = el.img;
  let p = document.createElement("p");
  p.innerText = el.text;
  div.append(img, p);
  return div;
}

function getData(data = product) {
  katalog.innerHTML = "";
  data.forEach((el) => {
    let div = katalog_(el);
    katalog.append(div);
  });
  product_discount.innerText = data.length;
}

getData(product);

input.addEventListener("input", function () {
  let search = this.value.toLowerCase().trim();
  console.log(search);

  let searchProducts = product.filter((item) =>
    item.text.toLowerCase().includes(search)
  );
  getData(searchProducts);
});
