// let socket = io.connect(`${window.location.href}`, {transports: ['websocket'], upgrade: false});
$(function () {
    $('#reply').click(function () {
        $('#chat-circle').toggle('scale');
        $('.chat-box').toggle('scale');
        // socket.connect();
    });
    $('#chat-circle').click(function () {
        $('#chat-circle').toggle('scale');
        $('.chat-box').toggle('scale');
        // socket.connect();
    });

    $('.chat-box-toggle').click(function () {
        $('#chat-circle').toggle('scale');
        $('.chat-box').toggle('scale');
        // socket.disconnect();
    });
});
