// Create an array to hold the sequence "red", "blue", "green", "yellow" .
var buttonColors = ["red", "blue", "green", "yellow"];

// Create a new empty array gamePattern to fiil it with random color.
var gamePattern = [];

// Create a new empty array userClickedPattern to fiil it with clicked button's ids (colors). 
var userClickedPattern = [];

var started = false;

var level = 0;

$(document).keypress(function() {
   if (!started) {
 
     //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
     $("#level-title").text("Level " + level);
     nextSequence();
     started = true;
   }
 });

// Add function to fill empty array with random color
function nextSequence() {

   userClickedPattern = [];

  level++;

  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColor = buttonColors[randomNumber];

  gamePattern.push(randomChosenColor);

  // Use jQuery to animate a flash to the button selected 

  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

   playSound(randomChosenColor);
};


function checkAnswer (currentLevel) {
   if(gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      console.log('succes!');

      if(userClickedPattern.length === gamePattern.length) {
         setTimeout(function () {
            nextSequence();
         }, 1000);
      }
   } else {
      playSound('wrong');
      $('body').addClass("game-over");
      setTimeout(function () {
      $('body').removeClass("game-over");
      }, 200);
      $("#level-title").text("Game Over, Press Any Key to Restart");
      startOver();
   }
}

// Add function to play sound based on which button was pressed
function playSound (name) {
   var audio = new Audio(name + ".mp3");
   audio.play();
};


// Add function to animate button that was pressed
function animatePress(currentColor) {

   $("#" + currentColor).addClass("pressed");

   setTimeout(function () {
	$("#" + currentColor).removeClass("pressed");
   }, 100);

};

// Add function to define which button was clicked and put consistently it's ids into new array userClickedPattern
$('.btn').click(function(event){
   var userChosenColor = $(this).attr('id');
   userClickedPattern.push(userChosenColor);
   console.log(userClickedPattern);

   playSound(userChosenColor);
   animatePress(userChosenColor);

   checkAnswer(userClickedPattern.length - 1);
});

function startOver () {
   level = 0;
   gamePattern = [];
   started = false;
}
