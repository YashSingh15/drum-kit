let buttons = document.querySelectorAll(".drum");

function soundOutput(letter) {
    let audio;
    switch (letter) {
        case "w":
            audio = new Audio("sounds/crash.mp3");
            break;
        case "a":
            audio = new Audio("sounds/kick-bass.mp3");
            break;
        case "s":
            audio = new Audio("sounds/snare.mp3");
            break;
        case "d":
            audio = new Audio("sounds/tom-1.mp3");
            break;
        case "j":
            audio = new Audio("sounds/tom-2.mp3");
            break;
        case "k":
            audio = new Audio("sounds/tom-3.mp3");
            break;
        case "l":
            audio = new Audio("sounds/tom-4.mp3");
            break;
        default:
            console.log(letter);
            break;
    }
    return audio;
}

// Click

for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    button.addEventListener("click", function () {
        let buttonTextContent = this.textContent;

        let audio = soundOutput(buttonTextContent);
        audio.play();
        flashingAnimation(buttonTextContent);
    })
}

// Keyboard Press

document.addEventListener("keydown", function (event) {
    let keyPressed = event.key;

    let audio = soundOutput(keyPressed);
    audio.play();
    flashingAnimation(keyPressed);
})

function flashingAnimation(keyPressed) {
    let activeButton = document.querySelector("." + keyPressed);
    activeButton.classList.toggle("pressed");
    setTimeout(function () {
        activeButton.classList.toggle("pressed");
    }, 150);
}