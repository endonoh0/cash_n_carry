$(document).ready(function () {
    if (localStorage.favorited) {
        $('.fa-heart').addClass('favorited');
    }

    $(document.body).on('click', '.fa-heart', function(e) {
        e.preventDefault();

        const $product_id = $('.product_id').text();
        const id = `productId${$product_id}`;

        // $.post(`/api/favorite/`, {$product_id});

        if (!$(this).hasClass('favorited')) {
            $.post(`/api/favorite/`, { $product_id });
            $(this).addClass('favorited');

            localStorage[id] = $product_id;
        } else {
            $(this).removeClass('favorited');
            $.post(`/api/unfavorite/`, { $product_id });
            localStorage.removeItem(id);
        }
    });
});
