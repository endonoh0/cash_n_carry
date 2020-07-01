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
    let id = $('.product_id').text().trim();
    console.log(id);
    console.log('PRODUCTS', products);
    const $container = $('#products-container');
    $container.prepend(createProductElement(products[id - 1]));
    // store cookie -> refacotor to helper function later
    const storageId = `productId${id}`
    if (localStorage.favorited && localStorage[storageId] === id) {
        $(".fa-heart").addClass('favorited');
    }
};

// Insert products inputs into html template
const createProductElement = function(product) {
    return $(`
    <div id="wrapper">
        <div class="column" id="product-header">
            <div class="flexbox">
                <div>
                    <button id="reply" class="reply">Reply</button>
                    <button><i class="fa fa-heart"></i></button>
                </div>
                <span>Posted 10 days ago...</span>
              </div>
            <h3>${product.title} (${product.location})</h3>
            <img class="w-full" src="${product.product_photo_url}" alt="">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
            book.</p>
        </div>
    </div>
`);
};

// $(document.body).on("click", "button", function(){
//     alert("test");
//     $("button").css("color","red");
// })