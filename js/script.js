//botones sticky
$('#stk-contacto').click(function() {
    $('html, body').animate({
        scrollTop: $("#seccion6").offset().top - 100
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

$('#formulario').submit(function(e){
  e.preventDefault();
  console.log('click en formulario')
  //do some verification
  $.ajax({
    url: 'php/contact.php',
    method: 'post',
    data: $(this).serialize(),
    dataType: 'json',
    success: function(data)
    {
      if(data.success){
        setTimeout(() => {
          window.location.replace('https://evaluaisapres.cl/gracias');
        }, 100)
      }

      if(data.error === true){
        $('#modal-text').empty();
        $('#modal-text').append('<div class="alert alert-danger" role="alert">'+data.message+'</div>');
        $('#formmodal').modal('toggle');
      }

    },
    error: function(){
      $('#modal-text').empty();
      $('#modal-text').append('<div class="alert alert-error" role="alert">Tenemos problemas para ingresar tu solicitud, intenta nuevamente más tarde.</div>');
      $('#formmodal').modal('toggle');
    }
  });
});

$(document).ready(function () {
  $('#carrusel').carousel({
    interval: 3000
  });
});

//BOTONES

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
// Give the parameter a variable name
var dynamicContent = getParameterByName('to');

setTimeout(function(){
  if(dynamicContent){
    let elem = document.getElementById(dynamicContent).offsetTop;
    console.log(elem)
    scroll({
      top: elem,
      behavior: "smooth"
    });
  }
}, 100)
