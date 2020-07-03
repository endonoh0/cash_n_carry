$(function() {
    let INDEX = 0;
    let socket = io();
    let currentUser = "";
    let productId;


    const path = `/api/messages`;
    const $productId = $('.product_id').text();
    $.get(path, { productId: $productId })
        .done(data => {
            productId = $productId;
            currentUser = data.currentUser;
            starter(data);
        });

    $('#chat-submit').click(function(e) {
        e.preventDefault(); // prevents page from refreshing
        // fire emit message event; send val
        socket.emit('chat message', {message : $('#chat-input').val(), id: currentUser});

        let msg = $('#chat-input').val();
        $('#chat-input').val('');

        if (msg.trim() === '') {
            return false;
        }
        $.post('/messages/store', {msg, productId});
    });

    const generate_message = function(data) {
        console.log(data.user_id);
        const msg = data.body;
        let url = data.avatar_url;

        if (data.user_id === Number(currentUser)) {
            data.type = "self";
        } else {
            data.type = "user";
        }


        INDEX++;
        // let str = "";
        let str = `
            <div id='cm-msg-${INDEX}' class="chat-msg ${data.type}">
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

        if (data.type === 'self') {
            $('#chat-input').val('');
        }
        $('.chat-logs')
            .stop()
            .animate({ scrollTop: $('.chat-logs')[0].scrollHeight }, 1000);
    };

    socket.on('chat message', function(msg) {
        $.get('/api/users', { userId: msg.username })
            .done(result => {
                console.log(result.data[0]);
                let message = { ...result.data[0], user_id: result.data[0].id, body: msg.message};
                generate_message(message);
            });

    });

    const starter = function(messages) {
        for (const message of messages.data) {
            console.log(message);
            generate_message(message);
        }
    };
});