var newQueryURL = "https://api.jokes.one/jod";

$("#btn-day-question").on("click", function () {
  $.ajax({
    url: newQueryURL,
    method: "GET",
  }).then(function (response) {
    var randomJoke = response.contents.jokes[0].joke.text;
    var jokeQuestion = randomJoke.split("?")[0] + "?";
    var punchLine = randomJoke.split("?")[1];
    $("#day-question").text(jokeQuestion);
    $("#btn-day-answer").on("click", function () {
      $("#day-answer").text(punchLine);
    });
  });
});

var settings = {
  async: true,
  crossDomain: true,
  url: "https://joke3.p.rapidapi.com/v1/joke",
  method: "GET",
  headers: {
    "x-rapidapi-host": "joke3.p.rapidapi.com",
    "x-rapidapi-key": "1aa855e579msh3cc56d7cd98d205p163c23jsn746e5b8443b5",
  },
};
$("#btn-random-question").on("click", function () {
  $.ajax(settings).done(function (response) {
    $("#random-answer").empty();
    var fullJoke = response.content;
    var newQuestion = response.content.split("?")[0] + "?";
    var newAnswer = response.content.split("?")[1];
    if (fullJoke.includes("?")) {
      $("#random-question").text(newQuestion);
      $("#btn-random-answer").on("click", function () {
        $("#random-answer").text(newAnswer);
      });
    } else {
      $("#random-question").text(fullJoke);
    }
  });
});

$("#btn-dad").on("click", function () {
  $.ajax({
    url: "https://icanhazdadjoke.com/",
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  }).then(function (outcome) {
    var dadJoke = outcome.joke;
    $("#dad-joke-display").text(dadJoke);
  });
});

var chuckSettings = {
  async: true,
  crossDomain: true,
  url: "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random",
  method: "GET",
  headers: {
    "x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
    "x-rapidapi-key": "1aa855e579msh3cc56d7cd98d205p163c23jsn746e5b8443b5",
    accept: "application/json",
  },
};

$("#chuck-joke").on("click", function () {
  $.ajax(chuckSettings).done(function (chuck) {
    // console.log(response);
    console.log(chuck.value);
    var chuckJoke = chuck.value;
    $("#chuck-norris-display").text(chuckJoke);
  });
});

var alabamaJoke = {
  state: "alabama",
  question: "Why did O. J. Simpson want to move to Alabama?",
  answer: "Everyone has the same DNA.",
};

var alaskaJoke = {
  state: "alaska",
  question:
    "Why couldn't the Anchorage school district buy enough buses for children?",
  answer: "Because they had to buy the Zambonis first!",
};

var arkansasJoke = {
  state: "arkansas",
  question:
    "Why do folks in Arkansas go to the movie theater in groups of 18 or more?",
  answer: "Cuz 17 and under not admitted.",
};

var arizonaJoke = {
  state: "arizona",
  question: "How hot is it in Arizona?",
  answer: "The cows are giving evaporated milk.",
};

var californiaJoke = {
  state: "california",
  question: "What happens when the smog lifts over Los Angeles?",
  answer: "UCLA",
};

var coloradoJoke = {
  state: "colorado",
  question:
    "What do you call a good looking girl on the University of Colorado campus?",
  answer: "A vistor.",
};

var connecticutJoke = {
  state: "connecticut",
  question:
    "What does the average Connecticut State University student get on his SAT?",
  answer: "Drool",
};

var delawareJoke = {
  state: "delaware",
  question:
    "Did you hear about the fire in University of Delaware's football dorm that destroyed 20 books?",
  answer: "The real tragedy was that 15 hadn't been colored yet.",
};

var floridaJoke = {
  state: "florida",
  question: "Where do bakers go on vacation?",
  answer: "Orlandough",
};

var georgiaJoke = {
  state: "georgia",
  question: "Why couldn't the baby Jesus be born in Georgia?",
  answer: "Because they couldn't find 3 wise men or a virgin.",
};
var hawaiiJoke = {
  state: "hawaii",
  question: "What do you get when you cross a hula hoop and a boxer?",
  answer: "Hawaiian Punch.",
};

var idahoJoke = {
  state: "idaho",
  question:
    "If Idaho had its own space program, what would be the name of the first satellite?",
  answer: "Spudnik 1.",
};

var illinoisJoke = {
  state: "illinois",
  question: "Did you hear the one about the Chicago Businessman?",
  answer: "He was Illinoyed by higher taxes.",
};

var indianaJoke = {
  state: "indiana",
  question:
    "How many Indiana State freshman does it take to change a light bulb?",
  answer: "None - it's a sophomore course.",
};

var iowaJoke = {
  state: "iowa",
  question: "What's the most popular pick-up line in Iowa?",
  answer: "Nice tooth.",
};

var kansasJoke = {
  state: "kansas",
  question: "How do you know the toothbrush was invented in Kansas?",
  answer:
    "If it was invented anywhere else, it would have been called a teethbrush.",
};

var kentuckyJoke = {
  state: "kentucky",
  question: "What separates a terrible team from a great team?",
  answer: "The Kentucky-Ohio border.",
};

var louisianaJoke = {
  state: "louisiana",
  question: "Why did LSU disband its water polo team?",
  answer: "All the horses drowned",
};

var maineJoke = {
  state: "maine",
  question: "What happened when a Maine fisherman was late to work?",
  answer: "She lobster job.",
};

var marylandJoke = {
  state: "maryland",
  question: "What happens when blondes move from Virginia to Maryland?",
  answer: "Both states become smarter!",
};

var massachusettsJoke = {
  state: "massachusetts",
  question: "What do Harvard grads use for birth control?",
  answer: "Their personalities.",
};

var michiganJoke = {
  state: "michigan",
  question: "What's the best thing to ever come out of Michigan?",
  answer: "US-23",
};

var minnesotaJoke = {
  state: "minnesota",
  question: "Why don't Minnesota Golden Gophers sink in the Great Lakes?",
  answer: "Because crap floats.",
};

var mississippiJoke = {
  state: "mississippi",
  question: "What do you call a stoner's wife?",
  answer: "Mississippi (Mrs. Hippy)",
};

var missouriJoke = {
  state: "missouri",
  question: "Why do Missouri State students have such beautiful noses?",
  answer: "They're hand picked.",
};

var montanaJoke = {
  state: "montana",
  question: "Why did Montana raise the minimum drinking age to 25?",
  answer: "They wanted to keep alcohol out of the high schools!",
};

var nebraskaJoke = {
  state: "nebraska",
  question: "How do you get a Cornhuskers fan to laugh all weekend long?",
  answer: "Tell him a joke Monday morning.",
};

var nevadaJoke = {
  state: "nevada",
  question:
    "What is the only way to keep your money from the casinos in Vegas?",
  answer: "When you get off the plane, walk into the propellars.",
};

var newHampshireJoke = {
  state: "new hampshire",
  question: "Why do all trees in Vermont lean east?",
  answer: "Because New Hampshire sucks.",
};

var newJerseyJoke = {
  state: "new jersey",
  question: "How is a Newark girl different from a bowling ball?",
  answer: "A bowling ball is sometimes hard to pick up.",
};

var newMexicoJoke = {
  state: "new mexico",
  question: "Why do New Mexico students have TGIF on their shoes?",
  answer: "Toes go in first!",
};

var newYorkJoke = {
  state: "new york",
  question: "Why did Eve want to move to New York?",
  answer: "She fell for the Big Apple.",
};

var northCarolinaJoke = {
  state: "north carolina",
  question:
    "What's the difference between an North Carolina Tarheels fan and a carp?",
  answer: "One is a bottom-feeding, scum sucker, and the other is a fish.",
};

var northDakotaJoke = {
  state: "north dakota",
  question:
    "Why do only 98 percent of Americans feel economic hardship because of $4/gallon gas?",
  answer: "The other 2 percent live in North Dakota.",
};

var ohioJoke = {
  state: "ohio",
  question: "What happens when Ohio State chokes?",
  answer: "The go blue.",
};

var oklahomaJoke = {
  state: "oklahoma",
  question: "How does a man from Oklahoma hold up his pants?",
  answer: "With a bible belt.",
};

var oregonJoke = {
  state: "oregon",
  question: "What's the difference between Autzen Stadium and a cactus?",
  answer: "A cactus has its pricks on the outside.",
};

var pennsylvaniaJoke = {
  state: "pennsylvania",
  question: "Which colonists told the most jokes?",
  answer: "Punsylvanians",
};

var rhodeIslandJoke = {
  state: "rhode island",
  question: "Do you live in Rhode Island?",
  answer: "No you can't fit a house in it.",
};

var southCarolinaJoke = {
  state: "south carolina",
  question: "Why are there so many unsolved murders in South Carolina?",
  answer: "There are no dental records and everyone has the same DNA",
};

var southDakotaJoke = {
  state: "south dakota",
  question: "Why did the Dakota State grad cross the road?",
  answer: "Wait - how'd he get out of jail??",
};

var tennesseeJoke = {
  state: "tennessee",
  question: "What did Tennes-See?",
  answer: "The same thing Arkan-saw.",
};

var texasJoke = {
  state: "texas",
  question:
    "Why do Texas A&M Aggies basketball players use body heat activated deodorant?",
  answer: "Because it's the closest they will come to getting a 'Degree'.",
};

var utahJoke = {
  state: "utah",
  question: "How do you get a Utah State grad off your front porch?",
  answer: "Pay him for the pizza.",
};

var vermontJoke = {
  state: "vermont",
  question: "What does a girl from Vermont do if she's not in bed by 10pm?",
  answer: "Go home.",
};

var virginiaJoke = {
  state: "virginia",
  question:
    "What's harder than a loner Korean getting admission to Virginia Tech?",
  answer: "Nothing.",
};

var washingtonJoke = {
  state: "washington",
  question:
    "Why did the Washington regents decide to cover Husky Stadium in cardboard?",
  answer: "Because they Huskies always look better on paper.",
};

var westVirginiaJoke = {
  state: "west virginia",
  question:
    "Did you hear that the governor's mansion in West Virginia burned down?",
  answer: "Almost took out a whole trailer park.",
};

var wisconsinJoke = {
  state: "wisconsin",
  question: "What do people in Wisconsin eat for dessert?",
  answer: "Milwaukey Lime Pie",
};

var wyomingJoke = {
  state: "wyoming",
  question: "Why should the Wyoming Cowboys change their uniforms to Orange?",
  answer:
    "So they can play the game, direct traffic, and pick up trash without changing.",
};

var statesArray = [
  alabamaJoke,
  alaskaJoke,
  arkansasJoke,
  arizonaJoke,
  californiaJoke,
  coloradoJoke,
  connecticutJoke,
  delawareJoke,
  floridaJoke,
  georgiaJoke,
  hawaiiJoke,
  idahoJoke,
  illinoisJoke,
  indianaJoke,
  iowaJoke,
  kansasJoke,
  kentuckyJoke,
  louisianaJoke,
  maineJoke,
  marylandJoke,
  massachusettsJoke,
  michiganJoke,
  minnesotaJoke,
  mississippiJoke,
  missouriJoke,
  montanaJoke,
  nebraskaJoke,
  nevadaJoke,
  newHampshireJoke,
  newJerseyJoke,
  newMexicoJoke,
  newYorkJoke,
  northCarolinaJoke,
  northDakotaJoke,
  ohioJoke,
  oklahomaJoke,
  oregonJoke,
  pennsylvaniaJoke,
  rhodeIslandJoke,
  southCarolinaJoke,
  southDakotaJoke,
  tennesseeJoke,
  texasJoke,
  utahJoke,
  vermontJoke,
  virginiaJoke,
  washingtonJoke,
  westVirginiaJoke,
  wisconsinJoke,
  wyomingJoke,
];

var stateJokeBtn = $("#btn-show-state");
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
    $("#state-display").text(stateName);
    console.log("State Name:", stateName);
    $("#btn-state").on(
      "click",
      function () {
        // var userState = $("#current-state").val();
        var stateLower = stateName.toLowerCase();
        for (var i = 0; i < statesArray.length; i++) {
          console.log(stateLower);
          if (stateLower == statesArray[i].state) {
            var question = statesArray[i].question;
            var answer = statesArray[i].answer;
            console.log(question);
            console.log(answer);
            $("#state-display-question").text(question);
            $("#state-display-answer").text(answer);
          }
        }
      }

      // console.log(userState);
    );
  });
});
