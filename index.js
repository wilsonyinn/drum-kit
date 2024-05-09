document.addEventListener("keydown", function(event) {
    playSound(event.key);
})

function playSound(key) {
    switch (key) {
        case "w":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            buttonAnimation(key);
            break;

        case "a":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            buttonAnimation(key);
            break;

        case "s":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            buttonAnimation(key);
            break;

        case "d":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            buttonAnimation(key);
            break;

        case "j":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            buttonAnimation(key);
            break;

        case "k":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            buttonAnimation(key);
            break;

        case "l":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            buttonAnimation(key);
            break;

        default:
            console.log(button);
        }
}

function buttonAnimation(key) {
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed"); 
    }, 100);
}