// Add console.log to check to see if our code is working.
console.log("working");


// We create the tile layer that will be the background of our map.
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-guidance-day-v2/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-guidance-night-v2/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  "Day Navigation": light,
  "Night Navigation": dark
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [44.0, -80.0],
  zoom: 2,
  layers: [light]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// // Accessing the airport GeoJSON URL
// let airportData = "https://raw.githubusercontent.com/PGL50/Mapping_Earthquakes/main/majorAirports.json";
// Accessing the Toronto airline routes GeoJSON URL.
let torontoData = "https://raw.githubusercontent.com/PGL50/Mapping_Earthquakes/main/torontoRoutes.json";

// Grabbing our GeoJSON data.
d3.json(torontoData).then(function(data) {
  console.log(data) ;

// Create a style for the lines.
let myStyle = {
  color: "#ffffa1",
  weight: 2
}

// Creating a GeoJSON layer with the retrieved data.
L.geoJson(data, {
  style: myStyle,
  onEachFeature: function(feature, layer) {
    layer.bindPopup("<h3> Airline: " + feature.properties.airline + "</h3> <hr> <h3>" + "Destination: " + feature.properties.dst + "</h3>")  ;
  }
  }).addTo(map);
});

// Then we add our 'graymap' tile layer to the map.
light.addTo(map);

// function onEachFeatureMine(feature, layer) {
//     //  layer.bindPopup(feature.properties.faa)  ;
//      layer.bindPopup("<h3> Airline: " + feature.properties.airline + "</h3> <hr> <h3>" + "Destination: " + feature.properties.dst + "</h3>")  ;
// }
//  // onEachFeature: function(data) {
//   //   layer.bindPopup("<h3>" + " Airport code: " + feature.properties.faa + "</h3> <hr> <h3>" + "Airport name: " + feature.properties.name + "</h3>")  ;
//   // }