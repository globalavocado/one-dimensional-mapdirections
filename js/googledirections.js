// set up the map  
      function initMap() {

        var directionsDisplay = new google.maps.DirectionsRenderer;
        var directionsService = new google.maps.DirectionsService;
        
        // center the map
        var map = new google.maps.Map(document.getElementById('map_canvas'), {
          zoom: 14,
          center: {lat: 51.52, lng: -0.07}
        });
        
        directionsDisplay.setMap(map);

        directionsDisplay.setPanel(document.getElementById('directionspanel'));

        var onClickHandler = function() {
          calculateAndDisplayRoute(directionsService, directionsDisplay);
        };
        document.getElementById('end').addEventListener('change', onClickHandler);
      }

// calculating the route

      function calculateAndDisplayRoute(directionsService, directionsDisplay) {

        var start = '51.517300, -0.073449';
        var end = document.getElementById('end').value;
        directionsService.route({
          origin: start,
          destination: end,
          travelMode: 'WALKING'
        }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
          } 
          else {
            window.alert('Directions request failed due to ' + status);
          }
        });
      }