$(document).ready(function(){
  /*
  alert("I am loaded");
  console.log("Hello World");
  */
  var firstName = "Reed"
  console.log('Hello'+firstName)

  $.ajax({
    url: 'https://randomuser.me/api/?results=50',
    dataType: 'json',
    success: function(data) {
      console.log(data);
      $.each(data.results, function(key,person){
        console.log(person.name.title + ' ' + person.name.first + ' '+ person.name.last);
        $('#person').append('<div class="col-md-2">'+ person.name.title + ' ' + person.name.first + ' '+ person.name.last + '<img src="'+ person.picture.large + '"class=" img-fluid rounded-circle">'+ '<i class="fab fa-twitter-square"</i>' + '  ' + '<i class="fab fa-facebook"</i>'+'</div>');
      })
    }
  });

});



mapboxgl.accessToken = 'pk.eyJ1IjoicmVlZGdhbm5vbiIsImEiOiJja2FpZGEyc3YwYngyMndwYzN4ejFqNGMyIn0.ZeU0LataXoFh5s2DkpyzsA';
var map = new mapboxgl.Map({
    container: 'map',
    center: [40.794, -74.470],
    zoom: 12.89,
    style: 'mapbox://styles/jmezavin/ck4063g7e121s1cprqardiu2j'
    });

var markerLoui = new mapboxgl.Marker();
markerLoui.setLngLat([40.799,-74.481]);
markerLoui.addTo(map);

var markerBurger = new mapboxgl.Marker();
markerBurger.setLngLat([40.794,-74.478]);
markerBurger.addTo(map);

var markerClash = new mapboxgl.Marker();
markerClash.setLngLat([40.794,-74.478]);
markerClash.addTo(map);

var markerJunction = new mapboxgl.Marker();
markerJunction.setLngLat([40.792,-74.482]);
markerJunction.addTo(map);

var markerTor = new mapboxgl.Marker();
markerTor.setLngLat([40.797,-74.467]);
markerTor.addTo(map);

var markerReich = new mapboxgl.Marker();
markerReich.setLngLat([40.805,-74.474]);
markerReich.addTo(map);

map.on('click',function(e){
    console.log("the longitude of where the user's clicking is at " + e.lngLat.lng);
    console.log("the latitude of where the user's clicking is at " + e.lngLat.lat);
    console.log(e);
});
