$(function () {
    let INDEX = 0;
    let socket = io();

    $('#chat-submit').click(function (e) {
        e.preventDefault(); // prevents page from refreshing
        // fire emit message event; send val
        socket.emit('chat message', $('#chat-input').val());

        let msg = $('#chat-input').val();
        $('#chat-input').val('');

        if (msg.trim() === '') {
            return false;
        }
    });

    const generate_message = function (data, type) {
        const msg = data.message;
        let url;
        if (type === 'self') {
            url =
                'https://cdn1.i-scmp.com/sites/default/files/styles/768x768/public/images/methode/2016/09/13/a4e70ee2-789a-11e6-aba3-c12eb464ff87_1280x720.jpg?itok=dzE-6DSF';
        } else {
            url =
                'https://static.vibe.com/files/2011/11/vibevixen-biggieversace-compressed.jpg';
        }
        INDEX++;
        // let str = "";
        let str = `
            <div id='cm-msg-${INDEX}' class="chat-msg ${type}">
                <span class='msg-avatar'>
                    <img src=${url}>
                </span>
                <div class='cm-msg-text'>${msg}</div>
            </div>
        `;

        $('.chat-logs').append(str);
        $('#cm-msg-' + INDEX)
            .hide()
            .fadeIn(300);

        if (type === 'self') {
            $('#chat-input').val('');
        }
        $('.chat-logs')
            .stop()
            .animate({ scrollTop: $('.chat-logs')[0].scrollHeight }, 1000);
    };

    // listen for chat messenger emit
    socket.on('chat message', function (data) {
        let type;
        if (data.username === socket.id) {
            type = 'self';
        } else {
            type = 'user';
        }
        generate_message(data, type);
    });
});
