$(document).ready(function () {

    $.ajax({
        method: 'GET',
        url: '/api/favorites',
    }).done((data) => {
        console.log(data);
        renderProducts(data.data);
    });
});
