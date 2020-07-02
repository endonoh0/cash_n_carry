$(() => {
    $.ajax({
        method: 'GET',
        url: '/api/users',
    }).done((users) => {
        for (user of users.data) {
            $('<div>').text(user.name).appendTo($('body'));
        }
    });
});
