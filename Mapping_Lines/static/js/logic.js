// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center at the San Francisco airport.
// let map = L.map('mapid').setView([36.1733, -120.1794], 4);

// Create the map object with center at the Lincoln, NE.
let map = L.map('mapid').setView([40.81929736572066, -96.69244674396548], 5);

// Coordinates for each point to be used in the line.
// let line = [
//     [33.9416, -118.4085],
//     [37.6213, -122.3790],
//     [40.7899, -111.9791],
//     [47.4502, -122.3088]
//   ];

  let line = [
    [33.9416, -118.4085],
    [30.197461808930132, -97.66638508867351],
    [43.67776413597291, -79.62500209209627],
    [40.64134364357871, -73.77823566148446]
  ];


  // Create a polyline using the line coordinates and make the line red.
    L.polyline(line, {
    color: "blue",
    opacity: .5,
    weight: 4,
    dashArray: '5,7'
  }).addTo(map);


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
