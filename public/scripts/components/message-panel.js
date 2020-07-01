$(function() {
    let INDEX = 0;
    let socket = io();

    $("#chat-submit").click(function(e) {
        e.preventDefault(); // prevents page from refreshing
        // fire emit message event; send val 
        socket.emit('chat message', $('#chat-input').val());

        let msg = $("#chat-input").val();

        if (msg.trim() === '') {
            return false;
        }
    });


    const generate_message = function(msg, type) {
        INDEX++;
        // let str = "";
        let str = `
            <div id='cm-msg-${INDEX}' class="chat-msg ${type}">
                <span class='msg-avatar'>
                    <img src='https://cdn1.i-scmp.com/sites/default/files/styles/768x768/public/images/methode/2016/09/13/a4e70ee2-789a-11e6-aba3-c12eb464ff87_1280x720.jpg?itok=dzE-6DSF'>
                </span>
                <div class='cm-msg-text'>${msg}</div>
            </div>
        `;
        
        $(".chat-logs").append(str);
        $("#cm-msg-" + INDEX).hide().fadeIn(300);
        
        if (type === 'self') {
            $("#chat-input").val('');
        }
        $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight }, 1000);
    };

    // $(document).delegate(".chat-btn", "click", function() {
    //     let value = $(this).attr("chat-value");
    //     let name = $(this).html();
    //     $("#chat-input").attr("disabled", false);
    // });

    // listen for chat messenger emit 
    socket.on('chat message', function (msg) {
        // $('#messages').append($('<li>').text(str));
        generate_message(msg, 'self');
    });
});