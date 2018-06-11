 function addmarker() {
       var geocoder = new google.maps.Geocoder();
       var infowindow = new google.maps.InfoWindow();
       var myLatLng =  map.getCenter();

       var marker = new google.maps.Marker({
         position: myLatLng,
         map: map,
         title: marker,
         draggable:true,
       });


geocoder.geocode({'latLng': myLatlng }, function(results, status) {
if (status == google.maps.GeocoderStatus.OK) {
if (results[0]) {
$('#latitude,#longitude').show();
$('#address').val(results[0].formatted_address);
$('#latitude').val(marker.getPosition().lat());
$('#longitude').val(marker.getPosition().lng());
infowindow.setContent(results[0].formatted_address);
marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
}
}
});

google.maps.event.addListener(marker, 'dragend', function() {

geocoder.geocode({'latLng': marker.getPosition()}, function(results, status) {
if (status == google.maps.GeocoderStatus.OK) {
if (results[0]) {
$('#address').val(results[0].formatted_address);
$('#latitude').val(marker.getPosition().lat());
$('#longitude').val(marker.getPosition().lng());
infowindow.setContent(results[0].formatted_address);
marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
}
}
});
});

}





















 function addmarker() {


       var myLatLng =  map.getCenter();

       var marker = new google.maps.Marker({
         position: myLatLng,
         map: map,
         title: marker,
         draggable:true,
       });



geocoder.geocode({'latLng': myLatlng }, function(results, status) {
                    if (status != google.maps.GeocoderStatus.OK) {
                    alert(status);
                        if (results[0]) {
                            $('#address').val(results[0].formatted_address);
                            $('#latitude').val(marker.getPosition().lat());
                            $('#longitude').val(marker.getPosition().lng());
                            infowindow.setContent(results[0].formatted_address);
                            google.maps.event.addListener(marker, 'click', function() {
  infowindow.open(map,marker);
  });
}

                        }

                });


                google.maps.event.addListener(marker, 'dragend', function() {

                geocoder.geocode({'latLng': marker.getPosition()}, function(results,
status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        if (results[0]) {
                            $('#address').val(results[0].formatted_address);
                            $('#latitude').val(marker.getPosition().lat());
                            $('#longitude').val(marker.getPosition().lng());

                            infowindow.setContent(results[0].formatted_address);
                            infowindow.open(map, marker);
                        }
                    }
                });
            });

            }














