// Create an array to hold the sequence "red", "blue", "green", "yellow" .
var buttonColours = ["red", "blue", "green", "yellow"];

// Create a new empty array gamePattern to fiil it with random color.
var gamePattern = [];

// Create a new empty array userClickedPattern to fiil it with clicked button's ids (colors). 
var userClickedPattern = [];

// Add function to fill empty array with random color
function nextSequence() {

  var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

  // Use jQuery to animate a flash to the button selected 

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);



  // Play the sound for the button colour selected in step 1.

  var audio = new Audio(randomChosenColour + ".mp3");
  
  audio.play();

  console.log(gamePattern);

};


// Add function to define which button was clicked and put consistently it's ids into new array userClickedPattern
$('.btn').click(function(event){

   var userChosenColor = $(this).attr('id');

   userClickedPattern.push(userChosenColor);

   console.log(userClickedPattern);
});