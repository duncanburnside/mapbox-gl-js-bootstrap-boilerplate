// Map via Mapbox GL

$(document).ready(init);

function init(jQuery) {
  CurrentYear();
  initMap();

  /*
  // user clicks some button
  $('#someButton').on('click', function () {
      // do something here
  });

  */
}

function CurrentYear() {
  var thisYear = new Date().getFullYear()
  $("#currentYear").text(thisYear);
}

var mapCoordinates = [42.885441,-78.878464];
var mapZoom = 11;

// the key from the Mapbox examples (not mine)
var mapAccessToken = "pk.eyJ1IjoibWV0cmljb24iLCJhIjoiY2l3eTQxMWl3MDBmYTJ6cWg3YmZtdjdsMSJ9.2vDbTw3ysscpy3YWkHo6aA";

var map = null;
var geocoder = null;

function initMap() {
  map = MapGL();
}

function MapGL() {
  mapboxgl.accessToken = mapAccessToken;

  // initialize map
  var newMap = new mapboxgl.Map({
      container: "map", // container id
      style: "mapbox://styles/mapbox/streets-v9", //stylesheet location
      center: [-77.04, 38.907], // starting position
      zoom: 11 // starting zoom
  });

  // geocoding
  newMap.addControl(new MapboxGeocoder({
    accessToken: mapboxgl.accessToken
  }));
  
  // event handlers
  newMap.on("load", mapLoaded);
    return newMap;
}

function mapLoaded() {
  // do stuff here
  
}