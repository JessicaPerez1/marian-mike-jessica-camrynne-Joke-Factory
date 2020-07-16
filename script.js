// Geolocation
// When a user clicks a button

var regionalJokes = $("#regional-joke");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    regionalJokes.text("You are not found joke");
  }
}

var apiKey = "bbfa444193f64b9eb5224b986b66c7e3";

var queryURL =
  "https://api.opencagedata.com/geocode/v1/json?q=LAT+LNG&key=" + apiKey;
// //
// function showPosition(position) {
//   console.log(position);
//   regionalJokes.text(
//     "Latitude: " +
//       position.coords.latitude +
//       "<br>Longitude: " +
//       position.coords.longitude
//   );
// }

getLocation();

console.log(getLocation);

// Create an event listener
$("#regional").click(getLocation);

// if the user is in this region, coordinates with joke appear
// else if the user does not have coordinates a different joke appears
// Then a joke correlated to their location pops up
