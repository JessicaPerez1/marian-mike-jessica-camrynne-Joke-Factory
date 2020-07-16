// Geolocation

var stateJokeBtn = $("#regional");
// When a user clicks a button

var apiKey = "e4a497ac65d9804f1a154098c8025426";

var queryURL = "http://api.ipstack.com/68.174.9.216?access_key=" + apiKey;

stateJokeBtn.on("click", function () {
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    // State Name
    var stateName = response.region_code;
    $(".regional-joke").text(stateName);
    console.log("State Name:", stateName);
  });
});

// if the user is in this region, coordinates with joke appear
// else if the user does not have coordinates a different joke appears
// Then a joke correlated to their location pops up
