$(document).ready(function() {
    console.log('Client-side code running');

    // if (!localStorage.favorited) {
    //     $(this).addClass(localStorage.favorited);
    // }


    $(document.body).on("click", ".fa-heart", function(e) {
        e.preventDefault();

        const $product_id = $('.product_id').text();
        
        localStorage.fav = "favorited";
        // $.post(`/api/favorite/`, {$product_id});

        if (!$(this).hasClass('favorited')) {
            $.post(`/api/favorite/`, {$product_id});
            $(this).addClass('favorited');
            // localStorage.favorited = 'favorited';
        } else {
            $(this).removeClass('favorited');
            // localStorage.favorited = 'favorited';
        }
    });

});