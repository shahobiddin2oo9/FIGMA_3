let katalog = document.querySelector(".katalog");
let h1 = document.createElement("h1");
h1.innerText = "Каталог";
katalog.before(h1);
product.map((el) => {
  let div = document.createElement("div");

  let img = document.createElement("img");
  img.className = "img-1 katalog-img";
  img.src = el.img;
  let p = document.createElement("p");
  p.innerText = el.text;
  div.append(img, p);
  katalog.append(div);
});
