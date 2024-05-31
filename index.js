var numberOfDrumButtons = document.querySelectorAll(".drum").length;

//button Click:

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML); //for button animation
  });
}

//keyboard Press:

document.addEventListener("keydown", function (event) {
  makeSound(event.key);

  buttonAnimation(event.key); //for button animation
});

//Make Sound function:

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      var kickbass = new Audio("sounds/kick-bass.mp3");
      kickbass.play();
      break;
    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentKey) {
  document.querySelector("." + currentKey).classList.add("pressed"); //function for pressing key animation

  setTimeout(function () {
    document.querySelector("." + currentKey).classList.remove("pressed"); //function for pressing key animation
  }, 100);
}
