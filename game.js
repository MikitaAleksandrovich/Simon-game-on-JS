// Create an array to hold the sequence "red", "blue", "green", "yellow" .
var buttonColours = ["red", "blue", "green", "yellow"];

// Create a new empty array gamePattern to fiil it with random color.
var gamePattern = [];

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