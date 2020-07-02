$(document).ready(function () {

  const url = window.location.href;

  const element = $('nav ul.panels a');

  element.filter(function () {
    return $(this).prop('href') === url;
  }).addClass('active');
});
