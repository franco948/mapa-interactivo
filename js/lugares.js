lugaresModulo = (function () {
  var servicioLugares // Servicio para obtener lugares cercanos e información de lugares(como fotos, puntuación del lugar,etc).

    // Completa las direcciones ingresadas por el usuario a y establece los límites
    // con un círculo cuyo radio es de 20000 metros.
  function autocompletar () {
        /* Completar la función autocompletar(): autocompleta los 4 campos de texto de la
        página (las direcciones ingresables por el usuario).
        Para esto creá un círculo con radio de 20000 metros y usalo para fijar
        los límites de la búsqueda de dirección. El círculo no se debe ver en el mapa. */

        var inputDireccion = document.getElementById('direccion')
        var inputDesde = document.getElementById('desde')
        var inputHasta = document.getElementById('hasta')
        var inputAgregar = document.getElementById('agregar')

        var circulo = new google.maps.Circle({
          center: mapa.getCenter(),
          radius: 20000
        })

        var options = {
          bounds: circulo.getBounds()
        }

        new google.maps.places.Autocomplete(inputDireccion, options);
        new google.maps.places.Autocomplete(inputDesde, options);
        new google.maps.places.Autocomplete(inputHasta, options);
        new google.maps.places.Autocomplete(inputAgregar, options);
  }

    // Inicializo la variable servicioLugares y llamo a la función autocompletar
  function inicializar () {
    servicioLugares = new google.maps.places.PlacesService(mapa)
    autocompletar()
  }

    // Busca lugares con el tipo especificado en el campo de TipoDeLugar

  function buscarCerca (posicion) {
        /* Completar la función buscarCerca  que realice la búsqueda de los lugares
    del tipo (tipodeLugar) y con el radio indicados en el HTML cerca del lugar
    pasado como parámetro y llame a la función marcarLugares. */
    var tipoDeLugar = $('#tipoDeLugar').children("option:selected").val();
    var radioIndicado = $('#radio').val();

    var request = {
      location: posicion,
      radius: radioIndicado,
      type: [tipoDeLugar]
    };

    servicio = new google.maps.places.PlacesService(mapa);
    servicio.nearbySearch(request, marcadorModulo.marcarLugares);
  }
  return {
    inicializar,
    buscarCerca
  }
})()
