$(document).ready(function () {

    $.get('/products/featured', (data) => {
        renderCarousel(data.data);
    });
});

const renderCarousel = function (products) {
    const $container = $('.carousel-inner').empty();

    products.forEach((product, index) => {
        $container.append(createCarouselElement(product, index));
    });
};

const createCarouselElement = function (product, index) {
    let element = '';

    if (index === 0) {
        element += `<div class="carousel-item active">`;
    } else {
        element += `<div class="carousel-item">`;
    }

    element += `
            <a href='/products/${product.id}'><img class="d-block" src="${product.cover_photo_url}" alt="${product.title}"></a>
            <p class="price">$${product.price}</p>
        </div>
      `;
    return element;
};
