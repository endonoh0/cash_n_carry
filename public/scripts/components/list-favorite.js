$(document).ready(function () {

    $.ajax({
        method: 'GET',
        url: '/api/favorites',
    }).done((data) => {
        renderProducts(data.data);
    });
});

// Insert the products into the DOM
const renderProducts = function (products) {
    const $container = $('.container').empty();
  
    products.forEach(function (product) {
        $container.prepend(createProductElement(product));
    });
  };
  
  // Insert products inputs into html template
  const createProductElement = function (product) {
     let element = `
      <div class="column">
        <img class="card-img" src="${product.cover_photo_url}" alt="Card image cap">
        <div class="column-content">
          <h4 class="card-title">${product.title} $${product.price}</h4>
          <p class="info">${product.description}</p>
    `;
   if (product.active === true) {
      element += `
         </div>
            <a href="/products/${product.product_id}" class="btn float-r">Buy</a>
          </div>
          `;
     } else {
      element += `
      </div>
         <a class="btn float-r sold">Sold</a>
       </div>
       `;
     }
     return element;
  };