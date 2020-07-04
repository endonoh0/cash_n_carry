$(document).ready(function() {
    // Fetch products
    $.ajax({
        method: 'GET',
        url: '/api/products',
    }).done((data) => {
        renderProducts(data.data);
    });
});

// Insert the products into the DOM
const renderProducts = function(products) {
    const $container = $('.container').empty();

    products.forEach(function(product) {
        $container.prepend(createProductElement(product));
    });
};

// Insert products inputs into html template
const createProductElement = function(product) {
    let element = `
    <div class="column">
      <img class="card-img btn-round" src="${product.cover_photo_url}" alt="Card image cap">
      <div class="column-content">
        <h4 class="card-title">${product.title} $${product.price}</h4>
        <p class="info">${product.description}</p>
  `;
    if (product.active === true) {
        element += `
       </div>
          <a href="/products/${product.id}" class="btn float-r btn-pill">Buy</a>
        </div>
        `;
    } else {
        element += `
    </div>
       <a class="btn float-r sold btn-pill">Sold</a>
     </div>
     `;
    }

    return element;
};
