let karzinka_card_one = document.querySelector(".karzinka_card_one");
let input__checkbox = document.querySelector(".input__checkbox");
let vseDeleteBtn = document.querySelector(".VseDelet");
let karzinka_card_twoMenu = document.querySelector(".karzinka_card_twoMenu");
function getKarzinka({ id, images, name, description: desc, price, quantity }) {
  return `
   <div class="karzinka_card_one_" data-id="${id}">
      <div class="karzinka_card_one_pg">
        <div class="karzinka_card_one_img">
          <input
            class="karzinka_card_one_img_check"
            type="checkbox"
          />
          <img src="${images[0]}" alt="${name}" />
        </div>
        <div class="karzinka_card_one__a">
          <p>${desc}</p>
          <p>${price}$</p>
        </div>
      </div>
      <div class="inc__dec_prise">
        <div class="inc_dec">
          <button onclick="decremenyQuantity(${id})">-</button>
          <span>${quantity}</span>
          <button onclick="incrementQuantity(${id})">+</button>
        </div>
        <a href="#">${(price * quantity).toFixed(2)}$</a>
      </div>
      <div class="clickDelaete">
        <img onclick="deleteItem(${id})" src="../img/karzinka/bin.png" alt="delete no" />
      </div>
    </div>`;
}

function getKarzinkaEmpty() {
  let totalPrice = 0;
  let countDiscount = 0;

  karzCount.forEach((el) => {
    totalPrice += el.price * el.quantity;
    countDiscount += ((el.price * (el.discount || 0)) / 100) * el.quantity;
  });

  let jami = totalPrice - countDiscount;

  return `
    <div class="karzinka_card_twoMenu_top">
      <label class="switch">
        <input type="checkbox" class="checkbox" />
        <div class="slider"></div>
      </label>
      <a href="#">Списать 200 ₽ </a>
    </div>
    <div class="karzinka_card_twoMenu_text">
      <p>На карте накоплено 200 ₽</p>
    </div>
    <div class="karzinka_card_twoMenu_TavarPrise">
      <a href="#">${karzCount.length} товара</a>
      <p>${totalPrice.toFixed(2)} ₽</p>
    </div>
    <div class="karzinka_card_twoMenu_discount">
      <a href="#">Скидка</a>
      <b>-${countDiscount.toFixed(2)} ₽</b>
    </div>
    <div class="karzinka_card_twoMenu_Itog">
      <a href="#">Итог</a>
      <h2>${jami.toFixed(2)} ₽</h2>
    </div>
    <button>Оформить заказ</button>
  `;
}

karzinka_card_twoMenu.innerHTML = getKarzinkaEmpty();

//  checkbox ni belgilash
input__checkbox.addEventListener("change", () => {
  let allCards = document.querySelectorAll(".karzinka_card_one_");
  let allCheckboxes = document.querySelectorAll(".karzinka_card_one_img_check");

  allCards.forEach((card, index) => {
    if (input__checkbox.checked) {
      card.classList.add("active");
      allCheckboxes[index].checked = true;
    } else {
      card.classList.remove("active");
      allCheckboxes[index].checked = false;
    }
  });
});

// o‘chirish
vseDeleteBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let selectedCheckboxes = document.querySelectorAll(
    ".karzinka_card_one_img_check:checked"
  );

  selectedCheckboxes.forEach((checkbox) => {
    let parentCard = checkbox.closest(".karzinka_card_one_");
    let id = +parentCard.getAttribute("data-id");
    deleteItem(id);
  });
});

//

function getQuantity() {
  karzinka_card_one.innerHTML = "";
  karzCount.forEach((element) => {
    karzinka_card_one.innerHTML += getKarzinka(element);
  });
  karzinka_card_twoMenu.innerHTML = getKarzinkaEmpty();
}

getQuantity();

function incrementQuantity(id) {
  karzCount = karzCount.map((pro) => {
    if (pro.id == id) {
      pro.quantity++;
    }
    return pro;
  });
  localStorage.setItem("cart", JSON.stringify(karzCount));
  getQuantity();
}

function decremenyQuantity(id) {
  let product = karzCount.find((pro) => pro.id === id);

  if (product.quantity == 1) {
    isDelete = confirm(`Do you want to delete this basket?`);
    if (isDelete) {
      karzCount = karzCount.filter((pro) => pro.id !== id);
    }
  } else {
    karzCount = karzCount.map((pro) => {
      if (pro.id == id) {
        pro.quantity--;
      }
      return pro;
    });
  }
  localStorage.setItem("cart", JSON.stringify(karzCount));
  getQuantity();
}

function deleteItem(id) {
  karzCount = karzCount.filter((pro) => pro.id !== id);
  localStorage.setItem("cart", JSON.stringify(karzCount));
  getQuantity();
}
