var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 0, lng: 0},
    zoom: 2
  });
}

function loadMapShapes(){
	map.data.loadGeoJson('states.json', {idPropertyName: 'STATE'});
}

//loadMapShapes();