$(document).ready(function() {
//     <div class="carousel-item active">
//     <a href='/products'><img class="d-block" src="https://loveincorporated.blob.core.windows.net/contentimages/gallery/b5cbf2b5-7e36-48f7-b239-d1429213839c-mafia-mansions-vincent-palermo-gangster.jpg" alt="First slide"></a>
//     <p>$5000</p>
//   </div>
    $.get('/products/featured', (data) => {
        renderCarousel(data.data);
    });
});

const renderCarousel = function(products) {
    const $container = $('.carousel-inner').empty();

    products.forEach((product, index) => {
        $container.append(createCarouselElement(product, index));
    });
};

const createCarouselElement = function(product, index) {
    let element = "";
    if (index === 0) {
        element += `<div class="carousel-item active">`;
    } else {
        element += `<div class="carousel-item">`;
    }

    element += `
            <a href='/products/${product.id}'><img class="d-block" src="${product.cover_photo_url}" alt="${product.title}"></a>
            <p>$${product.price}</p>
        </div>`;
    console.log(element);
    return element;
};