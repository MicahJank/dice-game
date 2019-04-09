// The function that determines that random number of the die.
const randomDiceNumber = () => Math.floor((Math.random() * 6) + 1);

// Two variables to store the random numbers
const player1Img = randomDiceNumber();
const player2Img = randomDiceNumber();

// The code that actually changes the images by changing the src text of the images
 document.getElementById("player1-img").src = `/images/dice${player1Img}.png`;
 document.getElementById("player2-img").src = `/images/dice${player2Img}.png`;