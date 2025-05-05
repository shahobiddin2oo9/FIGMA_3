let cardElements = document.querySelector(".cards");
let cards_1 = document.querySelector(".cards-1");
let cards_2 = document.querySelector(".card-2");
let two_cardsssss = document.querySelector(".aside-sdaasds");
let karzDsc = document.querySelectorAll(".dis-countsdasdas");
function getCard(
  { images, name, discount, id, price, description },
  type,
  dsaa
) {
  let checkBtn = karzCount.find((pro) => pro.id == id);

  let card = document.createElement("div");
  card.className = "card";

  let card__body = document.createElement("div");
  card__body.className = "card--body";

  let body_a = document.createElement("a");
  body_a.href = "./tavar.html";
  body_a.target = "_blank";
  let body_a_img = document.createElement("img");
  body_a_img.src = images[1];
  body_a_img.alt = name;
  body_a.append(body_a_img);

  let body_span = document.createElement("span");
  body_span.className = "discount";
  body_span.innerHTML = `- ${discount} %`;

  let body_love = document.createElement("div");
  body_love.className = "love";
  let body_love_con__like = document.createElement("div");
  body_love_con__like.className = "con-like";

  let body_love_con__like__input = document.createElement("input");
  body_love_con__like__input.type = "checkbox";
  body_love_con__like__input.id = `heart${id}`;
  body_love_con__like__input.className = "like";

  // Laykni o'zgartirish
  body_love_con__like__input.addEventListener("change", (e) => {
    const heart = e.target.nextElementSibling;
    if (e.target.checked) {
      heart.style.color = "red";
      localStorage.setItem(`heart${id}`, "liked");
    } else {
      heart.style.color = "gray";
      localStorage.setItem(`heart${id}`, "unliked");
    }
  });

  const savedLikeStatus = localStorage.getItem(`heart${id}`);
  const heartLabel = document.createElement("label");
  heartLabel.htmlFor = body_love_con__like__input.id;
  heartLabel.className = "heart";
  heartLabel.innerHTML = "❤";

  if (savedLikeStatus === "liked") {
    heartLabel.style.color = "red";
    body_love_con__like__input.checked = true;
  } else {
    heartLabel.style.color = "gray";
  }

  body_love_con__like.append(body_love_con__like__input, heartLabel);

  body_love.append(body_love_con__like);
  card__body.append(body_a, body_span, body_love);

  // card__footer > item
  let card__footer = document.createElement("div");
  card__footer.className = "card-footer";

  let footer_prise = document.createElement("div");
  footer_prise.className = "card--footer_prise";

  let footer_prise__h6 = document.createElement("h6");
  footer_prise__h6.innerHTML = `${name}`;

  if (dsaa === "salom") {
    let footer_prise__p = document.createElement("p");
    footer_prise__p.innerHTML = `${price} $`;
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
  footer_information__p.innerHTML = `${description}`;

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
      localStorage.setItem(`rating-${id}`, i);
      alert(`Siz ${i} ta yulduzni tanladingiz`);
    });

    stars.push(star);
    rating.appendChild(star);
  }
  const savedRating = parseInt(localStorage.getItem(`rating-${id}`), 10);
  if (savedRating) {
    stars.forEach((s, index) => {
      s.style.color = index < savedRating ? starColorActive : starColorInactive;
    });
  }
  //
  let btn = document.createElement("button");
  btn.textContent = "В корзину";
  btn.onclick = () => adddToCard(`${id}`);
  btn.className = `${checkBtn ? "check-btn" : ""}`;
  btn.onclick = () => {
    adddToCard(`${id}`);
    btn.classList.add("check-btn");
    btn.textContent = "Добавлено";
  };

  card__footer.append(
    footer_prise,
    footer_info,
    footer_information__p,
    rating,
    btn
  );
  card.append(card__body, card__footer);

  return card;
}

let cardJSon = localStorage.getItem("cart");
let karzCount = JSON.parse(cardJSon) || [];

function getKarzCOunt() {
  karzDsc.forEach((item) => (item.textContent = karzCount.length));
}
getKarzCOunt();

function adddToCard(id) {
  let prodct = products.find((pro) => pro.id == id);
  let checkIn = karzCount.find((pro) => pro.id == id);
  if (checkIn) {
    karzCount = karzCount.map((pro) => {
      if (pro.id == id) {
        pro.quantity++;
      }
      return pro;
    });
  } else {
    prodct.quantity = 1;
    karzCount.push(prodct);
  }
  localStorage.setItem("cart", JSON.stringify(karzCount));
  getKarzCOunt();
}

function getNewsCard(news) {
  let card = document.createElement("div");
  card.className = "aside-card";

  let body = document.createElement("div");
  body.className = "aside-cards--body";
  let img = document.createElement("img");
  img.src = news.img;
  body.appendChild(img);

  let footer = document.createElement("div");
  footer.className = "aside-card--footer";

  let date = document.createElement("span");
  date.textContent = news.span;

  let h6 = document.createElement("h6");
  h6.textContent = news.h1_text;

  let p = document.createElement("p");
  p.textContent = news.p_text;

  let btn = document.createElement("button");
  btn.textContent = "Подробнее";

  footer.append(date, h6, p, btn);
  card.append(body, footer);
  return card;
}

if (cardElements) {
  products
    .filter((a) => a.discount > 0)
    .slice(-4)
    .map((item) => {
      const card = getCard(item, "aksiya", "salom");
      cardElements.append(card);
    });
}

if (cards_1) {
  products.slice(-4).map((item) => {
    const card = getCard(item, "dw", "dsa");
    cards_1.append(card);
  });
}

if (cards_2) {
  products
    .toSorted((a, b) => a.rating - b.rating)
    .slice(0, 4)
    .map((item) => {
      const card = getCard(item, "dw", "ds");
      cards_2.append(card);
    });
}

if (two_cardsssss) {
  asideCards.map((news) => {
    let card = getNewsCard(news);
    two_cardsssss.append(card);
  });
}
