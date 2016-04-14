var $ = require('jquery');


//Al precionar el toggle le agrega a su padre la clase active
$(".toggle").on("click", function() {
  $(".toggle").parent().toggleClass('active');
});

///Codigo de la caja de razones a la pregunta
///¿Por que tener un sitio web?
$('#check1').on("click", function() {
	$("#check1").parent().toggleClass('shadow');
});

$('#check2').on("click", function() {
	$("#check2").parent().toggleClass('shadow');
});

$('#check3').on("click", function() {
	$("#check3").parent().toggleClass('shadow');
});

$('#check4').on("click", function() {
	$("#check4").parent().toggleClass('shadow');
});

$('#check5').on("click", function() {
	$("#check5").parent().toggleClass('shadow');
});
/////Fin del bloque