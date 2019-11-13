var favourites = [];
function saveList(btn) {
    let i = 0;
    for (i; i<24;i++){
        let box = document.getElementsByClassName('selectTen')[i];
        console.log(box);
        if (box.checked){
        favourites.push(box.parentElement.textContent);
        //checking if input box is checked, and appending to list
    } else{
        if(favourites.includes(box.parentElement.textContent)){
        var index = favourites.indexOf(box.parentElement.textContent);
        favourites.splice(index, 1);
        }
        //uncheked box will be removed from the list
    }}
    if (favourites.length === 0){
        alert('List cannot be empty!');
        return false;
        //user must select at least one favourite comic
    } else if (favourites.length > 10) {
        alert('You can only select ten favourite comics!');
        //only ten comics can be selected at max
    } else {
        btn.disabled = true;
        alert('Your favourite list has been created');
        var showlist = document.getElementById('createlist_area');
        //getting list area in html Doc
        for (var j = 0; j<favourites.length; j++){
            if( j === 0){
                if(favourites[j] === favourites[favourites.length-1]){
                    showlist.insertAdjacentHTML('afterbegin','<h1 style="color: white;">Your Current List</h1><ol id = "favList"></ol>')
                listEl = document.getElementById('favList'); 
                listEl.insertAdjacentHTML('beforeend','<li style="color: yellow;">'+favourites[j]+'</li>');
                listEl.insertAdjacentHTML('afterend','<h2 id="share" style="margin-left: 350px; font: italic 2em Georgia, Times, serif;"><b>Share Your List!!</b></h2>');
                headingEl = document.getElementById('share'); 
                headingEl.insertAdjacentHTML('afterend','<span class="navLogo" style="margin-left: 350px;"><img style="margin-left: 25px; margin-right 25px;" src="Resources\\Logos\\facebookicon.PNG">'+
                                                               '<img style="margin-left: 25px; margin-right 25px;" src="Resources\\Logos\\instaicon.PNG">'+
                                                               '<img style="margin-left: 25px; margin-right 25px;" src="Resources\\Logos\\twitterlogo.PNG">'+
                                                                '</span>');
                break;
                }
                showlist.insertAdjacentHTML('afterbegin','<h1 style="color: white;">Your Current List</h1><ol id = "favList"></ol>')
                listEl = document.getElementById('favList'); 
                listEl.insertAdjacentHTML('afterbegin','<li style="color: yellow; ">'+favourites[j]+'</li>');
                //inserting new html to update the page dynamically with the list
                
           } else if (favourites[j] === favourites[favourites.length-1]){
                listEl.insertAdjacentHTML('beforeend','<li style="color: yellow;">'+favourites[j]+'</li>');
                listEl.insertAdjacentHTML('afterend','<h2 id="share" style="margin-left: 380px; font: italic 2em Georgia, Times, serif;"><b>Share Your List!!</b></h2>');
                headingEl = document.getElementById('share'); 
                headingEl.insertAdjacentHTML('afterend','<span class="navLogo" style="margin-left: 350px;"><a href="https://facebook.com"><img style="margin-left: 25px; margin-right 25px;" src="Resources\\Logos\\facebookicon.PNG"></a>'+
                                                               '<a href="https://instagram.com" ><img style="margin-left: 25px; margin-right 25px;" src="Resources\\Logos\\instaicon.PNG"></a>'+
                                                               '<a href="https://twitter.com"><img style="margin-left: 25px; margin-right 25px;" src="Resources\\Logos\\twitterlogo.PNG"></a>'+
                                                                '</span>');
            } else {
                listEl.insertAdjacentHTML('beforeend','<li style="color: yellow;">'+favourites[j]+'</li>');
            }
            
        }
        document.body.scrollTop = 40;
        document.documentElement.scrollTop = 40;
    }
}

window.onload = function(){
    //document is now ready and loaded
    var topButton = document.getElementById('backTop');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        topButton.style.display = 'block';
            //setting the top button visible
        } else { topButton.style.display = 'none';}
        //hiding the top button
    
    window.onscroll = function() {scroll()};
        //anonymous function to detect scroll events
    function scroll(){
        if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
            topButton.style.display = 'block';
            //setting the top button visible
        } else { topButton.style.display = 'none';}
        //hiding the top button
    }
}
function toTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    //top button is clicked and page is moved up.
}


//creating the function to handle the map
//gathering needed information


function initMap() {
  var myLatLng, latitude, longitude;
  $.getJSON("http://freegeoip.app/json/", function(data) {
     latitude = parseFloat(data.latitude);
     longitude = parseFloat(data.longitude);
  })
  myLatLng = {lat: latitude, lng: longitude}
  var locations = [
    ['Cosmic Comics<br>\
    287 Acacia Rd, Blackheath, Randburg, 2195<br>\
   <a href="https://goo.gl/maps/TchE15QExVFPr76Y9">Get Directions</a>',   -26.133720, 27.974497],
    ['Attic Comics<br>\
    31 Voortrekker Ave, Edenvale, 1609<br>\
   <a href="https://goo.gl/maps/vUCpW2DwW5EYdjaf8">Get Directions</a>', -26.145955, 28.157656],
    ['The Batman Comics N Games<br>\
    Shop 120, Oxford Village, 9 Old Man Road, Durban, 3610<br>\
    <a href="https://goo.gl/maps/6smaS1UweuWdrA8f9">Get Directions</a>', -29.788393, 30.772895],
    ['The New 52<br>\
    162 President Brand Road, Benoni, 1501<br>\
    <a href="https://goo.gl/maps/WkvZscFsEvfM4Zn38">Get Directions</a>', -26.145558, 28.318558],
    ['SmallVille Comics<br>\
    41St Aubyn Road, New Redruth, Alberton, 1449<br>\
   <a href="https://goo.gl/maps/zzqDgQBek1SggBgG9">Get Directions</a>', -26.267654, 28.116483],
    ['DragonTown<br>\
    Shop 20 & 21 Hennopsview Shopping Centre, Blackwood Road, Centurion, 0157<br>\
   <a href="">Get Directions</a>', -25.854862, 28.169207]
  ];
var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    center: {lat: -26.8, lng: 28}
  });
var infowindow =  new google.maps.InfoWindow({});
var marker, count;
for (count = 0; count < locations.length; count++) {
    if (count == 1){
        //creating a marker that will indicate where the user is
        console.log(1);
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(latitude, longitude),
          map: map,
          title: locations[count][0]
    });
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(locations[count][1], locations[count][2]),
          map: map,
          title: locations[count][0]
    });

    } else{
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[count][1], locations[count][2]),
      map: map,
      title: locations[count][0]
    });
    google.maps.event.addListener(marker, 'click', (function (marker, count) {
      return function () {
        infowindow.setContent(locations[count][0]);
        infowindow.open(map, marker);
      }
    })(marker, count));
  }}}
