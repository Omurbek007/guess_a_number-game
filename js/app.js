const game = document.querySelector("#game");
let pressBtn = document.querySelector("#guess-btn");
const value = document.querySelector("#guess-input");


game.addEventListener("submit", playGame);
let x = 0;
function playGame (event) {
    
    const target = event.target;
    
    const message = document.querySelector(".message");
    const number = Math.random() * 5 + 1;
    const randomNumber = Math.round(number)
    console.log(randomNumber);

    message.style.color = "red";
    
      x += 1;   
    if (value.value == randomNumber) {
        message.textContent = "Correct You Win";
        message.style.color = "green";

    } else if (value.value == false) {
        message.textContent = "Insert a number";
        message.style.color = "blue";
        x = 0;
    }
    else if (x == 1) {
        message.textContent = "Incorrect You have two more attempts";
    } else if (x == 2) {
        message.textContent = "Incorrect You have one more attempts";
    } else if (x == 3) {
        pressBtn.textContent = "New Game!";
        message.textContent = "You lose!";
        value.disabled = true;
    } else if (x == 0) {
        message.textContent = "";
    } 
     else {
        message.textContent = "Incorrect";
    }

    value.value = "";

    event.preventDefault();
}

pressBtn.addEventListener("click", () => {
    if (x == 3) {
        pressBtn.textContent = "Play!";
        value.disabled = false;
        x = -1;
        // console.log(x);

}
// console.log(x);
})
