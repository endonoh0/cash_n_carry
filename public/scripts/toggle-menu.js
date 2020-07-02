$(function () {
    $('.menu-toggle').click(function (e) {
      // e.preventDefault();
      $('.menu-toggle').toggleClass('active');
      $('nav').toggleClass('active');

      // $('.active').removeClass('active');

      // $(this).addClass('active');

    });
});
