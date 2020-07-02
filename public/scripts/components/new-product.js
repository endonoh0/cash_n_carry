$(document).ready(function () {
  /**
   * Fetch all products
   */
  const pathname = window.location.pathname;
    $.ajax({
        method: 'GET',
        url: `/api${pathname}`,
    }).done((data) => {
      console.log(typeof data, data);
        renderProducts(data.data[0]);
    });
});

// Insert the products into the DOM
const renderProducts = function (products, sessionUser) {
    let id = products.id;
    const userId = Number(sessionUser);
    const $container = $('#products-container');
    const $button = $('#button-container');

    $container.prepend(createProductElement(products));

    // sold button append if product_id = user_id in session
    // sold button append if product's user_id = user's id in session
    if (products.user_id === userId) {
        $button.prepend('<button>SOLD</button>');
    }
    // store cookie -> refacotor to helper function later
    const storageId = `productId${id}`;
    if (localStorage.favorited && localStorage[storageId] === id) {
        $('.fa-heart').addClass('favorited');
    }
};

// Insert products inputs into html template
const createProductElement = function (product) {
    return $(`
    <div id="wrapper">
        <div class="column" id="product-header">
            <div class="flexbox">
                <div>
                    <button id="reply" class="reply">Reply</button>
                    <button><i class="fa fa-heart"></i></button>
                </div>
                <span>Posted on ${moment(product.created_at).format("ddd")}...</span>
              </div>
            <h3>${product.title} (${product.location})</h3>
            <img class="w-full" src="${product.product_photo_url}" alt="">
            <p>${product.description}</p>
        </div>
    </div>
`);
};
