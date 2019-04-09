// The function that determines that random number of the die.
const randomDiceNumber = () => Math.floor((Math.random() * 6) + 1);

// Two variables to store the random numbers
const player1Img = randomDiceNumber();
const player2Img = randomDiceNumber();

// The code that actually changes the images by changing the src text of the images
document.getElementById("player1-img").src = `/images/dice${player1Img}.png`;
document.getElementById("player2-img").src = `/images/dice${player2Img}.png`;


// Depending on which player has the higher number, show the appropriate heading letting
// them know who won or if it is a draw.
if (player1Img > player2Img) {
    document.getElementById("title").innerText = "Player 1 Wins!";
} else if (player2Img > player1Img) {
    document.getElementById("title").innerText = "Player 2 Wins!";
} else {
    document.getElementById("title").innerText = "It's a Draw!";
}