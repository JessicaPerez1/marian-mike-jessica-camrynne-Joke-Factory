// navbar burger
$(document).ready(function () {
  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function () {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });
});

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
var today = new Date();
// Wed Jul 15 2020 18:44:34 GMT-0500 (Central Daylight Time)
var time = today.getHours() + ":" + today.getMinutes();
console.log(time);
var date =
  today.getMonth() +
  "/" +
  today.getDate() +
  "/" +
  today.getFullYear() +
  "  " +
  time;
$("#date-time").text(date);
var dirtyJoke = [
  {
    question: "What did Cinderella do when she arrived at the ball?",
    answer: "She gagged",
  },
  {
    question: "What’s the difference between a tire and 365 used condoms?",
    answer: "One’s a Goodyear. The other’s a great year.",
  },
  {
    question: "What do you call the useless piece of skin on a dick?",
    answer: "The man.",
  },
  {
    question: "Why did the sperm cross the road?",
    answer: "Because I put on the wrong sock this morning.",
  },
  {
    question: "What does one boob say to the other boob?",
    answer: "If we don’t get support, people will think we’re nuts.",
  },
  {
    question: "How do you make your husband scream during sex?",
    answer: " Call him and let him hear it.",
  },
  {
    question: "What does the sign on an out-of-business brothel say?",
    answer: "Beat it. We’re closed.",
  },
  {
    question: "What do you call a lesbian dinosaur?",
    answer: "Lick-a-lotta-puss.",
  },
  {
    question: "What do a penis and a Rubik’s Cubes have in common?",
    answer: "The more you play with it, the harder it gets.",
  },
  {
    question: "What’s the best part about gardening?",
    answer: "Getting down and dirty with your hoes.",
  },
];

// for happy hour we will display a 'dirty' joke

// during 3pm-6pm add a button to the page that displays a 'dirty' joke.

$("#btn-happy-hour").on("click", function () {
  var randomDirtyJoke = dirtyJoke[Math.floor(Math.random() * dirtyJoke.length)];
  console.log(randomDirtyJoke);
  var randomQuestion = JSON.stringify(randomDirtyJoke.question);
  console.log(randomQuestion);
  var randomAnswer = JSON.stringify(randomDirtyJoke.answer);
  console.log(randomAnswer);
  $("#hh-question").html(randomQuestion.replace(/['"]+/g, ""));
  $("#hh-answer").html(randomAnswer.replace(/['"]+/g, ""));
});

// div for the hh container #hh-container
//  when it is happy hour add a div to the page
function hhJokeDisplay() {
  //  if 3pm-6pm display div
  var startTime = new Date().setHours(15);
  console.log(startTime);
  var endTime = new Date().setHours(23);
  console.log(endTime);
  console.log(today.getHours());
  if (today.getHours() < startTime && endTime < today.getHours()) {
    $("#happy-hour-display-cont").hide();
    $("#not-happy-hour").show();
    $("#btn-happy-hour").hide();
  }
  //    On div have a button
  //    When button selected, display one joke from the array
  //  else hide div
  else {
    $("#happy-hour-display-cont").show();
    $("#not-happy-hour").hide();
    $("#btn-happy-hour").show();
  }
}
hhJokeDisplay();
