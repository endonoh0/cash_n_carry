$(() => {
    $('#range')
        .on('input', function() {
            $('.output').val(this.value);
        })
        .trigger('change');

    $('#range').on('mouseup', function() {
        const $price = $('.output').val();
        $.ajax({
            method: 'GET',
            url: `/filter/${$price}`,
        }).done((data) => {
            renderProducts(data.data);
            $('.output').val('$' + this.value);
        });
    });
});
