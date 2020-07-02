$(document).ready(function () {

  const url = window.location.href;

  const element = $('nav ul.panels a');

  let result = element.filter(function () {
    return $(this).prop('href') === url;
  }).addClass('active');
});
