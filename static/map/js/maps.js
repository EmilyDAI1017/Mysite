      var map;
      var markers = [];

      function initMap() {
          map = new google.maps.Map(document.getElementById('map'), {
          zoom: 8,
          center: {lat: -36.852338, lng: 174.769107},
          mapTypeId: 'roadmap'

        });
      }

      // This example adds a search box to a map, using the Google Place Autocomplete
      // feature. People can enter geographical searches. The search box will return a
      // pick list containing a mix of places and predicted search terms.

      // This example requires the Places library. Include the libraries=places
      // parameter when you first load the API. For example:
      // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
      function initAutocomplete() {
        initMap();
        // Create the search box and link it to the UI element.
        var input = document.getElementById('pac-input');
        var searchBox = new google.maps.places.SearchBox(input);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        // Bias the SearchBox results towards current map's viewport.
        map.addListener('bounds_changed', function() {
          searchBox.setBounds(map.getBounds());
        });

        var markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener('places_changed', function() {
          var places = searchBox.getPlaces();

          if (places.length == 0) {
            return;
          }

          // Clear out the old markers.
          markers.forEach(function(marker) {
            marker.setMap(null);
          });
          markers = [];

          // For each place, get the icon, name and location.
          var bounds = new google.maps.LatLngBounds();
          places.forEach(function(place) {
            if (!place.geometry) {
              console.log("Returned place contains no geometry");
              return;
            }
            var icon = {
              url: place.icon,
              size: new google.maps.Size(71, 71),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17, 34),
              scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            markers.push(new google.maps.Marker({
              map: map,
              icon: icon,
              title: place.name,
              position: place.geometry.location
            }));

            if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          map.fitBounds(bounds);
        });
      }





      // Add a draggable marker.
      function addmarker() {
          var geocoder = new google.maps.Geocoder();
          var infowindow = new google.maps.InfoWindow();
          var myLatLng =  map.getCenter();
             var marker = new google.maps.Marker({
             position: myLatLng,
             title: 'new marker',
             draggable: true,
             map: map
           });
           markers.push(marker);

           geocoder.geocode({'latLng': myLatLng }, function(results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {

                        if (results[0]) {
                            $('#latitude,#longitude').show();
                            $('#address').val(results[0].formatted_address);
                            $('#latitude').val(marker.getPosition().lat());
                            $('#longitude').val(marker.getPosition().lng());
                            var html = "<table>" +
                 "<tr><td>Name:</td> <td><input type='text' id='name'/> </td> </tr>" +
                 "<tr><td>Address:</td> <td>"+results[0].formatted_address+"</td> </tr>"+
                 "<tr><td>Description:</td> <td><input type='text' id='description'/></td> </tr>" +
                 "<tr><td>Type:</td> <td><select id='type'>" +
                 "<option value='museum'>museum</option>" +
                 "<option value='school' SELECTED>school</option>" +
                 "<option value='restaurant'>restaurant</option>" +"<option value='others'>others</option>" +
                 "</select> </td></tr>" +
                 "<tr><td></td><td><input type='button' value='Save & Close' onclick='saveData()'/></td></tr>";
                            infowindow.setContent(html);
                            google.maps.event.addListener(marker, 'click', function() {
                                    infowindow.open(map,marker);

                                                         });
                        }

                        }

                });


                google.maps.event.addListener(marker, 'dragend', function() {

                geocoder.geocode({'latLng': marker.getPosition()}, function(results,status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        if (results[0]) {
                            $('#latitude,#longitude').show();
                            $('#address').val(results[0].formatted_address);
                            $('#latitude').val(marker.getPosition().lat());
                            $('#longitude').val(marker.getPosition().lng());

                            var html = $('.infowindow')[0].outerHTML;
                            infowindow.setContent(html);
                            google.maps.event.addListener(marker, 'click', function() {
                                    infowindow.open(map,marker);
                                            });
                        }
                    }
                });
            });


      }

      google.maps.event.addDomListener(window, 'load', initialize);



      function setMapOnAll(map) {
        for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(map);
        }
      }

      // Removes the markers from the map, but keeps them in the array.
      function clearMarkers() {
        setMapOnAll(null);
      }

      // Shows any markers currently in the array.
      function showMarkers() {
        setMapOnAll(map);
      }

      // Deletes all markers in the array by removing references to them.
      function deleteMarkers() {
        clearMarkers();
        markers = [];
      }















