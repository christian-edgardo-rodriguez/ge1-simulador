function ClickDerecho () {
  var Imagen1 = $("#Imagen1").css('background-image');
  var Imagen2 = $("#Imagen2").css('background-image');
  var Imagen3 = $("#Imagen3").css('background-image');

  document.getElementById('Imagen1').style.backgroundImage = Imagen3;
  document.getElementById('Imagen2').style.backgroundImage = Imagen1;
  document.getElementById('Imagen3').style.backgroundImage = Imagen2;
}

function ClickIzquierdo () {
  var Imagen1 = $("#Imagen1").css('background-image');
  var Imagen2 = $("#Imagen2").css('background-image');
  var Imagen3 = $("#Imagen3").css('background-image');

  document.getElementById('Imagen1').style.backgroundImage = Imagen2;
  document.getElementById('Imagen2').style.backgroundImage = Imagen3;
  document.getElementById('Imagen3').style.backgroundImage = Imagen1;
}