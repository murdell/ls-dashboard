function initMap() {

    var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: {
            lat: 46.619261,
            lng: -33.134766
        }
    });


    var labels = 'ABCDEFGHIJKLMONPQRSTUVWXYZ';
    var locations = [
    {lat: 55.955717,  lng: -3.190061},
    {lat: 55.930627, lng:  -3.156742},
    {lat: 55.963205, lng: -3.220843},
    {lat: 55.945764, lng: -3.051505}
    ];




    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });


    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
    }