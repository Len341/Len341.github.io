//creating the function to handle the map
//gathering needed information
function initMap() {
    var myLatLng, latitude, longitude;
    $.ajax({
        url: "http://freegeoip.app/json/",
        dataType: 'json',
        async: false,
        success: function (data) {
            latitude = parseFloat(data["latitude"]);
            longitude = parseFloat(data["longitude"]);
        }
    });
    myLatLng = { lat: latitude, lng: longitude };
    console.log("latitude is: " + latitude, "longitude is: " + longitude);
    var locations = [
        ['Cosmic Comics<br>\287 Acacia Rd, Blackheath, Randburg, 2195<br>\<a href="https://goo.gl/maps/TchE15QExVFPr76Y9">Get Directions</a>', -26.133720, 27.974497],
        ['Attic Comics<br>\31 Voortrekker Ave, Edenvale, 1609<br>\<a href="https://goo.gl/maps/vUCpW2DwW5EYdjaf8">Get Directions</a>', -26.145955, 28.157656],
        ['The Batman Comics N Games<br>\Shop 120, Oxford Village, 9 Old Man Road, Durban, 3610<br>\<a href="https://goo.gl/maps/6smaS1UweuWdrA8f9">Get Directions</a>', -29.788393, 30.772895],
        ['The New 52<br>\162 President Brand Road, Benoni, 1501<br>\<a href="https://goo.gl/maps/WkvZscFsEvfM4Zn38">Get Directions</a>', -26.145558, 28.318558],
        ['SmallVille Comics<br>\41St Aubyn Road, New Redruth, Alberton, 1449<br>\<a href="https://goo.gl/maps/zzqDgQBek1SggBgG9">Get Directions</a>', -26.267654, 28.116483],
        ['DragonTown<br>\Shop 20 & 21 Hennopsview Shopping Centre, Blackwood Road, Centurion, 0157<br>\<a href="">Get Directions</a>', -25.854862, 28.169207],
        ['You are here', myLatLng.lat, myLatLng.lng]
    ];
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: { lat: -26.8, lng: 28 }
    });
    var infowindow = new google.maps.InfoWindow({});
    var marker, count;
    //creating a marker that will indicate where the user is
    console.log(1);

    for (count = 0; count < locations.length; count++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[count][1], locations[count][2]),
            map: map,
            title: locations[count][0]
        });

        google.maps.event.addListener(marker, 'click', (function (marker, count) {
            return function () {
                infowindow.setContent(locations[count][0]);
                infowindow.open(map, marker);
            };
        })(marker, count));
    }
}