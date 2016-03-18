function initMap () {
	

var myLatLng = new google.maps.LatLng(38.255576, -85.738291);

var mapOptions = {
  zoom: 15,
  center: myLatLng,
  mapTypeId: google.maps.MapTypeId.ROADMAP
};

var map = new google.maps.Map(document.getElementById("map"),
    mapOptions);

var marker = new google.maps.Marker ({
	position: myLatLng,
	map: map,
	title: 'Edison Cafe'
});

}