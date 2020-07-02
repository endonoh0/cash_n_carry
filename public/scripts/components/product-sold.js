$(function() {

    $(document.body).on("click", "#button-container", function(e) {
        e.preventDefault();

        let product_id = $('.product_id').text().trim();

        $.post(`/products/${product_id}`);

        // $.ajax({
        //     method: 'POST',
        //     url: `/products/${id}`,
        // }).done((data) => {
        //     console.log(data);
        //     renderProducts(data.data);
        // });
        // const $product_id = $('.product_id').text();
        

        // // $.post(`/api/favorite/`, {$product_id});

        // if (!$(this).hasClass('favorited')) {
        //     $.post(`/api/favorite/`, {$product_id});
        //     $(this).addClass('favorited');

        //     const id = `productId${$product_id}`

        //     localStorage.favorited = 'favorited';
        //     localStorage[id] = $product_id;
        // } else {
        //     $(this).removeClass('favorited');
        // }
    });


    
    // const test = function () {
    //     const $button = $('button');
    //     $button.click(function () {
    //         alert('solddddd');
    //     });
    // }
    // test();
});