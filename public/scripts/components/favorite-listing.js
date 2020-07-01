$(document).ready(function () {
    // Fetch products
    $.ajax({
        method: 'GET',
        url: '/api/favorites',
    }).done((data) => {
        console.log(data);
        renderProducts(data.data);
    });
});
