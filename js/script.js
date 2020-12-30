//botones sticky
$('#sobremi').click(function() {
    $('html, body').animate({
        scrollTop: $("#sect2").offset().top - 100
    }, 1000);
});

$('#experiencia').click(function() {
    $('html, body').animate({
        scrollTop: $("#sect3").offset().top - 100
    }, 1000);
});

$('#mistrabajos').click(function() {
    $('html, body').animate({
        scrollTop: $("#sect4").offset().top - 100
    }, 1000);
});

$('#contacto').click(function() {
    $('html, body').animate({
        scrollTop: $("#sect5").offset().top - 100
    }, 1000);
});


$('#stk-funcionamiento').click(function() {
    $('html, body').animate({
        scrollTop: $("#seccion2").offset().top -100
    }, 1000);
});

$('#stk-beneficios').click(function() {
    $('html, body').animate({
        scrollTop: $("#seccion3").offset().top -100
    }, 1000);
});


$('#stk-planes').click(function() {
    $('html, body').animate({
        scrollTop: $("#seccion4").offset().top -100
    }, 1000);
});

$('#stk-testimonios').click(function() {
    $('html, body').animate({
        scrollTop: $("#seccion5").offset().top -100
    }, 1000);
});


// botones al final
$("#tellamamos").click(function() {
    $('html, body').animate({
        scrollTop: $("#seccion1").offset().top
    }, 1000);
});


$(document).ready(function () {
  $('#carrusel').carousel({
    interval: 3000
  });
});
