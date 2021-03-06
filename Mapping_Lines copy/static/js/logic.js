// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
//  Changing coordinates to somewhere btwn LAX and SFO.
// let map = L.map('mapid').setView([36.1733, -120.1794], 7);

// Changed center of map to SFO and zoom to 5
// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([33.1975, -95.6664], 5);

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
let line = [
  [37.6213, -122.3790],
  [40.7899, -111.9791],
  [30.1975, -97.6664],
  [39.7169, -86.2956],
  [43.6777, -79.6248],
  [40.6413, -73.7781]
];
// Create a polyline using the line coordinates and make the line red.
// change line to yellow.
L.polyline(line, {
  // color: "red"
  color: 'blue',
  dashArray: '5, 10',
  weight: 4,
  fillOpacity: 0.5
}).addTo(map);

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
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data ?? <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// To change the map's style, change the map id using the list of Mapbox ids below:

// mapbox/streets-v11
// mapbox/outdoors-v11
// mapbox/light-v10
// mapbox/dark-v10
// mapbox/satellite-v9
// mapbox/satellite-streets-v11


