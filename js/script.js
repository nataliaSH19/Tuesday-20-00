async function getProducts() {
  // Виконуємо запит до файлу "store_db.json" та очікуємо на відповідь
  let response = await fetch("store_db.json");
  // Очікуємо на отримання та розпакування JSON-даних з відповіді
  let products = await response.json();

  // Повертаємо отримані продукти
  return products;
}

// Генеруємо HTML-код для карточки товару
function getCardHTML(product) {
  // Створюємо JSON-строку з даними про товар і зберігаємо її в data-атрибуті
  let productData = JSON.stringify(product);
  return `
  <div class="card" style="width: 18rem;">
  <img src="images/${product.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${product.title}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        `;
}

getProducts().then(function (products) {
  let productsList = document.querySelector(".products-list");
  if (productsList) {
    products.forEach(function (product) {
      // Відображаємо товари на сторінці
      productsList.innerHTML += getCardHTML(product);
    });
  }
});
