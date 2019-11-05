streetViewModulo = (function () {
  var paronama // 'Visor' de StreetView

  function inicializar () {
        /* Completar la función inicializar()  que crea un panorama
        en una posición y lo muestra en la página. */

        // var fenway = {lat: 42.345573, lng: -71.098326};
        var posicionInicial = posicionCentral

        // var mapa = new google.maps.Map(document.getElementById('map'), {
        //   center: fenway,
        //   zoom: 14
        // });

        panorama = new google.maps.StreetViewPanorama(
          document.getElementById('pano'), {
            position: posicionInicial,
            pov: {
              heading: 0,
              pitch: 0
            }
        });

        mapa.setStreetView(panorama);
  }

    // Actualiza la ubicación del Panorama
  function fijarStreetView (ubicacion) {
        /* Completar la función fijarStreetView que actualiza la posición
         de la variable panorama y cambia el mapa de modo tal que se vea
         el streetView de la posición actual. */
         panorama.setPosition(mapa.getCenter())
  }

  return {
    inicializar,
    fijarStreetView
  }
})()
