let cardElements = document.querySelector(".cards");
let cards_1 = document.querySelector(".cards-1");
let cards_2 = document.querySelector(".card-2");
let input = document.querySelector(".input");
let product_discount = document.querySelector(".discount_span");
function getCard(item, type, prise) {
  let card = document.createElement("div");
  card.className = "card";

  let card__body = document.createElement("div");
  card__body.className = "card--body";

  let body_a = document.createElement("a");
  body_a.href = "./tavar.html";
  body_a.target = "_blank";
  let body_a_img = document.createElement("img");
  body_a_img.src = item.images[1];
  body_a_img.alt = item.name;
  body_a.append(body_a_img);

  let body_span = document.createElement("span");
  body_span.className = "discount";
  body_span.innerHTML = `- ${item.discount} %`;

  let body_love = document.createElement("div");
  body_love.className = "love";
  let body_love_con__like = document.createElement("div");
  body_love_con__like.className = "con-like";

  let body_love_con__like__input = document.createElement("input");
  body_love_con__like__input.type = "checkbox";
  body_love_con__like__input.id = `heart${item.id}`;
  body_love_con__like__input.className = "like";

  body_love_con__like__input.addEventListener("change", (e) => {
    const heart = e.target.nextElementSibling;
    if (e.target.checked) {
      heart.style.color = "red";
    } else {
      heart.style.color = "gray";
    }
  });

  let body_love_con__like__label = document.createElement("label");
  body_love_con__like__label.htmlFor = body_love_con__like__input.id;
  body_love_con__like__label.className = "heart";
  body_love_con__like__label.innerHTML = "❤";

  body_love_con__like.append(
    body_love_con__like__input,
    body_love_con__like__label
  );
  body_love.append(body_love_con__like);
  card__body.append(body_a, body_span, body_love);

  // card__footer > item
  let card__footer = document.createElement("div");
  card__footer.className = "card-footer";

  let footer_prise = document.createElement("div");
  footer_prise.className = "card--footer_prise";

  let footer_prise__h6 = document.createElement("h6");
  footer_prise__h6.innerHTML = `${item.name}`;

  if (prise === "salom") {
    let footer_prise__p = document.createElement("p");
    footer_prise__p.innerHTML = `${item.price} $`;
    footer_prise.append(footer_prise__h6, footer_prise__p);
  }

  // card__footer > two_span text
  let footer_info = document.createElement("div");
  footer_info.className = "two_span";

  if (type === "aksiya") {
    let footer_info__span = document.createElement("span");
    footer_info__span.innerHTML = "С картой";

    let footer_info__span2 = document.createElement("span");
    footer_info__span2.innerHTML = "Обычная";
    footer_info.append(footer_info__span, footer_info__span2);
  }

  let footer_information__p = document.createElement("p");
  footer_information__p.innerHTML = item.description;

  // yuldizcha
  let rating = document.createElement("div");
  rating.className = "rating";

  const starColorInactive = "gray";
  const starColorActive = "#FF6633";

  const stars = [];

  for (let i = 1; i <= 5; i++) {
    const star = document.createElement("span");
    star.dataset.value = i;
    star.textContent = "★";
    star.style.color = starColorInactive;
    star.style.cursor = "pointer";

    star.addEventListener("click", () => {
      stars.forEach((s, index) => {
        s.style.color = index < i ? starColorActive : starColorInactive;
      });
      alert(`Siz ${i} ta yulduzni tanladingiz`);
    });

    stars.push(star);
    rating.appendChild(star);
  }
  //
  let a1 = document.createElement("a");
  a1.href = "./karzinka.html";
  a1.target = "_blank";
  let btn = document.createElement("button");
  let a2 = document.createElement("a");
  a2.href = "./karzinka.html";
  a2.target = "_blank";
  a2.textContent = "В корзину";
  btn.appendChild(a2);
  a1.appendChild(btn);

  card__footer.append(
    footer_prise,
    footer_info,
    footer_information__p,
    rating,
    a1
  );
  card.append(card__body, card__footer);

  return card;
}

products
  .filter((a) => a.discount > 0)
  .slice(-4)
  .map((item) => {
    const card = getCard(item, "aksiya", "salom");
    cardElements.append(card);
  });

products.slice(-4).map((item) => {
  const card = getCard(item, "dw", "dsa");
  cards_1.append(card);
});

function getData(data = product) {
  katalog.innerHTML = "";
  data.forEach((el) => {
    let div = getCard(el);
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
