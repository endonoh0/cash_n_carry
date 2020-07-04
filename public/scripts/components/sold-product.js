$(function () {
    $(document.body).on('click', '#button-container', function (e) {
        e.preventDefault();

        let product_id = $('.product_id').text().trim();

        $.post(`/products/${product_id}`);
    });
});
