//Dimas Rinarso's API access token for HackedHarvard
L.mapbox.accessToken = 'pk.eyJ1IjoiZGltYmkiLCJhIjoiVUpReWhTdyJ9.FRVv3inmPiOElbdqenDnMQ'; 

//load map
var map = L.mapbox.map('map-canvas')
    .setView([-6.144224, 106.848733], 12)
    .addLayer(L.mapbox.tileLayer('dimbi.no5ejclo'));
//	.featureLayer.setGeoJSON(students);

console.log('map init FINISH');

var markers = new L.MarkerClusterGroup();

L.geoJson(students, {
        style: function(feature) {
        var marker = L.marker([feature.geometry.coordinates[1], feature.geometry.coordinates[0]], {
		    icon: L.mapbox.marker.icon({
        		'marker-size': 'large',
        		'marker-symbol': 'school',
        		'marker-color': '#fa0'
    		})
		});

		marker.bindPopup(
              '<h1 style="color:#000000;">'
              +'</h1><p class="light" style="color:#000000;">Students : '
              + (Math.floor((Math.random() * 10) + 1))
              +' people</p>'
        );
	
	    markers.addLayer(marker);
   }
});
map.addLayer(markers);


