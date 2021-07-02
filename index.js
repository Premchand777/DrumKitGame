//Below code is to Detect Buttons that which one got pressed
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var whichBtn = this.innerHTML;
    makeSound(whichBtn);
    buttonAnime(whichBtn);
  });

}
// Below code is to detect keyboard keys that which one got pressed
document.addEventListener("keydown", function (eventTrigger) {
  var whichKey = eventTrigger.key;
  makeSound(whichKey);
  buttonAnime(whichKey);
});
// Below code is common method of identifying which sound has to play
//to both keyboard keys and button clicks
function makeSound(parameter) {
  switch (parameter) {
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
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "l":
      var kick_bass = new Audio("sounds/kick-bass.mp3");
      kick_bass.play();
      break;
    default:
      console.log(this.innerHTML);
  }
}

function buttonAnime(currentKeyOrBtnActive) {
  var btnActivated = document.querySelector("."+currentKeyOrBtnActive);
  btnActivated.classList.add("pressed");

  setTimeout(function(){
    btnActivated.classList.remove("pressed");
  }, 200);
}
// below same but another way for for loop
/* for(var i = 0; i < 7; i++) {
  document.getElementsByClassName("drum")[i].addEventListener("click", uponClick);
}
function uponClick() {
  alert("Click Done!")
} */

/* Below comments are just for the sake of audio oject creation
   and accessing play method with that object as an Example.*/
// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();
