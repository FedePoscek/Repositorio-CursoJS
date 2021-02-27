$(document).ready(function() {
    console.log("Test de que anda la conexión con JQuery!");
           // ANIMACION 01 --> caida en acordeón
       $("#enviarCalculo, #reiniciarCalculo, #enviarOtroCalculo").hide();
           $("#txtNombreUsuario, #txtApellidoUsuario, #txtMailUsuario, #numTelUsuario, #numCuotas, #numMonto, .Contacto-label").hide().slideDown(300, 'swing', function() {
               $("#enviarCalculo, #reiniciarCalculo").slideDown(100, 'swing')
               });
});

// Jquery para cambiar de color y tamaño en la selección de cuotas
$('select').on('change', function() {
    if ($(this).val()) {
      return $(this).css({
          'color': 'var(--color-principal-oscuro)',
          'font-size': '1em'
      });
    } 
});