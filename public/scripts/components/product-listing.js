$(() => {
  $.ajax({
    method: 'GET',
    url: '/api/products',
  }).done((products) => {
    console.log(products);
    // for (user of users.data) {
    //   $('<div>').text(user.title).appendTo($('body'));
    // }
  });
});
