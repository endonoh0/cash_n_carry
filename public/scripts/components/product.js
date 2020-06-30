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
    const $container = $('#products-container').empty();
    let id = $('.id').text().trim();


    $container.prepend(createProductElement(products[id]));
};

// Insert products inputs into html template
const createProductElement = function(product) {
    return $(`
    <div id="wrapper">
        <div class="column" id="product-header">
            <div class="flexbox">
                <div>
                    <button class="">Reply</button>
                    <button <i class="fa fa-heart"></i></button>
                </div>
                <span>Posted 10 days ago...</span>
              </div>
            <h3>${product.title} (${product.location})</h3>
            <img class="w-full" src="https://images.craigslist.org/00505_lEAVJNgFcBf_0dy0dy_600x450.jpg" alt="">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
            book.</p>
        </div>
    </div>
`);
};