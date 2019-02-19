// Create an array to hold the sequence "red", "blue", "green", "yellow" .
var buttonColors = ["red", "blue", "green", "yellow"];

// Create a new empty array gamePattern to fiil it with random color.
var gamePattern = [];

// Create a new empty array userClickedPattern to fiil it with clicked button's ids (colors). 
var userClickedPattern = [];

// Add function to fill empty array with random color
function nextSequence() {

  var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColor = buttonColors[randomNumber];

  gamePattern.push(randomChosenColor);

  // Use jQuery to animate a flash to the button selected 

  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);



  console.log(gamePattern);

};

// Add function to play sound based on which button was pressed
function playSound (name) {
   var audio = new Audio(name + ".mp3");
  
   audio.play();


};


// Add function to define which button was clicked and put consistently it's ids into new array userClickedPattern
$('.btn').click(function(event){

   var userChosenColor = $(this).attr('id');

   userClickedPattern.push(userChosenColor);

   console.log(userClickedPattern);

   playSound(userChosenColor);


});