// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
//  Changing coordinates to somewhere btwn LAX and SFO.
// let map = L.map('mapid').setView([36.1733, -120.1794], 7);

// Changed center of map to SFO and zoom to 5
// Create the map object with center at the San Francisco airport.
// let map = L.map('mapid').setView([33.1975, -95.6664], 5);

// Create the map object with center at the San Francisco airport.
// let map = L.map('mapid').setView([37.5, -122.5], 10);

// Create the map object with center and zoom level.  Changing for section 5.3
//  GeoJSON.  Moving center of map the geographical center of Earth.
//let map = L.map('mapid').setView([30, 30], 2);

// Create the map object with a center and zoom level. This is an alternative to "setview"
// let map = L.map("mapid", {
//   center: [40.7, -94.5],
//   zoom: 4
// });

// Coordinates for each point to be used in the line.
// let line = [
//   [33.9416, -118.4085],
//   [37.6213, -122.3790]
// ];

// Coordinates for each point to be used in the polyline.
//  This "line" variable includes SLC and SEA airports.
// let line = [
//   [33.9416, -118.4085],
//   [37.6213, -122.3790],
//   [40.7899, -111.9791],
//   [47.4502, -122.3088]
// ];

// Chnage line from SFO, AUS, YYZ, JFK.
// let line = [
//   [37.6213, -122.3790],
//   [40.7899, -111.9791],
//   [30.1975, -97.6664],
//   [39.7169, -86.2956],
//   [43.6777, -79.6248],
//   [40.6413, -73.7781]
// ];

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "state":"California",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

// Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport).addTo(map);

// Grabbing our GeoJSON data, Using "pointToLayer" call back function.
// L.geoJSON(sanFranAirport, {
//   // We turn each feature into a marker on the map.
//   pointToLayer: function(feature, latlng) {
//     console.log(feature);
//     return L.marker(latlng)
//     .bindPopup("<h2>" + feature.properties.name + "</h2> <hr> <h3>" + feature.properties.city + ","  + feature.properties.country + "</h3>")
//   }

// }).addTo(map);

// Grabbing our GeoJSON data, Using "onEachFeature" call back function.
L.geoJSON(sanFranAirport, {
  onEachFeature: function(feature, layer) {
    console.log(layer);
    layer.bindPopup("<h2>Airport code: " + feature.properties.faa + "</h2> <hr> <h3>Airport name: " + feature.properties.name + "</h3>");
  }
})
// have to close out to enable the multiple layers in 5.4
// }).addTo(map);



// Create a polyline using the line coordinates and make the line red.
// change line to yellow.
// L.polyline(line, {
//   // color: "red"
//   color: 'blue',
//   dashArray: '5, 10',
//   weight: 4,
//   fillOpacity: 0.5
// }).addTo(map);

// Code on line 8 is an alternative to using "setView()" on line 5.  
// Code on line 9 is useful for to add multiple tile layers or background image.
// Create the map object with a center and zoom level.
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });

//  Add a marker to the map for Los Angeles, California.
//   Code on line 20 is used for single location.

// L.circleMarker([34.0522, -118.2437], {
//     radius: 300,
//     color: "black",
//     fillColor: 'lightyellow'
//  }).addTo(map);

 // To add more markers to the map, the latitudes and longitudes are
 //   usually nested in an array.  To add a marker for each location
 //   we have to iterate through the array and add each latitude and 
 //   longitude to the map,
 // Code on line 30 replaces code on line 20.
//  // An array containing each city's location, state, and population.
// let cities = [{
//     location: [40.7128, -74.0059],
//     city: "New York City",
//     state: "NY",
//     population: 8398748
//   },
//   {
//     location: [41.8781, -87.6298],
//     city: "Chicago",
//     state: "IL",
//     population: 2705994
//   },
//   {
//     location: [29.7604, -95.3698],
//     city: "Houston",
//     state: "TX",
//     population: 2325502
//   },
//   {
//     location: [34.0522, -118.2437],
//     city: "Los Angeles",
//     state: "CA",
//     population: 3990456
//   },
//   {
//     location: [33.4484, -112.0740],
//     city: "Phoenix",
//     state: "AZ",
//     population: 1660272
//   }
//   ];

// Get data from cities.js
// This code replaces "cities array" on line 32 
var cityData = cities;

  // Loop(iterate) through the cities array and create one marker for each city,
  //  can also use "for (let i = 0; i < cities.length; i++)"
// Loop through the cities array and create one marker for each city.

// cityData.forEach(function(city) {
//   console.log(city)
//   L.marker(city.location)
//   .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population + "</h3>")
// .addTo(map);
// });

//  Changed popup markers to show populatin formatted with thousands separator.
// cityData.forEach(function(city) {
//   console.log(city)
//   L.marker(city.location)
//   .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
// .addTo(map);
// });

// Change marker for each city to a circle that has a radius equivalent to city's population.
// if radii is to large divide by a value.  We are using 100,000.
// cityData.forEach(function(city) {
//   console.log(city)
//   L.circleMarker(city.location, {
//     radius: city.population/200000, 
//     color: 'orange',
//     weight: 4
//   }) 
//   .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
// .addTo(map);
// });

// We create the tile layer that will be the background of our map.
// Changed map style to "satellite-streets-v11"
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data ?? <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data ?? <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  Dark: dark,
  Light: light
};

// // Create the map object with center, zoom level and default layer.
// let map = L.map('mapid', {
//   center: [30, 30],
//   zoom: 2,
//   layers: [light]
// })

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [44, -80.0],
  zoom: 2,

  layers: [dark]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

// To change the map's style, change the map id using the list of Mapbox ids below:

// mapbox/streets-v11
// mapbox/outdoors-v11
// mapbox/light-v10
// mapbox/dark-v10
// mapbox/satellite-v9
// mapbox/satellite-streets-v11

// Accessing the airport GeoJSON URL
//  Putting large datasets after the "tileLayer()" ensures the map gets loaded before data is added.
let airportData = "https://raw.githubusercontent.com/bradrobe/Mapping_Earthquakes/Mapping_GeoJSON_Points/majorAirports.json";

// Accessing the Toronto airline routes GeoJSON URL.
let torontoData = "https://raw.githubusercontent.com/bradrobe/Mapping_Earthquakes/Mapping_GeoJSON_Linestrings/torontoRoutes.json";
// Grabbing our GeoJSON data, Using "d3.json" call back function with "then()" method.

// d3.json(airportData).then(function(data) {
//   console.log(data);

  //layer.bindPopup("<h2>Airport code: " + Feature.properties.faa + "</h2> <hr> <h3>Airport name: " + feature.properties.name + "</h3>");

  // Creating a GeoJSON layer with the retrieved data.
// L.geoJSON(data).addTo(map);
// L.geoJSON(data, {
//   onEachFeature: function(feature, layer) {
//     console.log(layer);
//     layer.bindPopup("<h2>Airport code: " + feature.properties.faa + "</h2> <hr> <h3>Airport name: " + feature.properties.name + "</h3>");
//   }  
// }).addTo(map);
// });

// Create a style for the lines.  This code makes it easier to read.
let myStyle = {
  color: "#ffffa1",
  weight: 2
}

//  Edit for torontoRoutes.json
d3.json(torontoData).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJSON(data, {
  style: myStyle,
  onEachFeature: function(feature, layer) {
        console.log(layer);
        layer.bindPopup("<h2>Airline: " + feature.properties.airline + "</h2> <hr> <h3>Destination: " + feature.properties.dst + "</h3>");
      } 
}).addTo(map);
});

