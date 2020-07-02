$(document).ready(function () {
    console.log('Client-side code running');

    // $(".fa-heart").addClass('favorited');

    if (localStorage.favorited) {
        $('.fa-heart').addClass('favorited');
    }

    $(document.body).on('click', '.fa-heart', function (e) {
        e.preventDefault();

        const $product_id = $('.product_id').text();

        // $.post(`/api/favorite/`, {$product_id});

        if (!$(this).hasClass('favorited')) {
            $.post(`/api/favorite/`, { $product_id });
            $(this).addClass('favorited');

            const id = `productId${$product_id}`;

            localStorage.favorited = 'favorited';
            localStorage[id] = $product_id;
        } else {
            $(this).removeClass('favorited');
        }
    });
});
