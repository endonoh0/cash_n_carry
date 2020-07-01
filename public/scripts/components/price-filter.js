$(()=>{
    $('#range').on("input", function() {

        $('.output').val(this.value);
    }).trigger("change");

    $('#range').on("mouseup", function() {
        const $price = $('.output').val();
        $.ajax({
            method: 'GET',
            url: `/filter/${$price}`, //filter/:value
        }).done((data) => {
            console.log(data.data);
            renderProducts(data.data);
        });
    });
});