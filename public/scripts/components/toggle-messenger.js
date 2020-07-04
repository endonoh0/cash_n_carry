$(function () {

    $(document.body).on('click', '#reply', function () {
        $('#chat-circle').toggle('scale');
        $('.chat-box').toggle('scale');
    });

    $('#chat-circle').click(function() {
        $('#chat-circle').toggle('scale');
        $('.chat-box').toggle('scale');
    });

    $('.chat-box-toggle').click(function() {
        $('#chat-circle').toggle('scale');
        $('.chat-box').toggle('scale');
    });
});
