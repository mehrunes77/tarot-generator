/* JavaScript file containing the main functionality of the tarot generator */

// Get references to HTML elements using their IDs
const generateBtn = document.getElementById('generateBtn');
// Find the button with id "generateBtn" and store it in a variable

const cardImage = document.getElementById('cardImage');
// Find the image element with id "cardImage" and store it

const cardName = document.getElementById('cardName');
// Find the heading with id "cardName" and store it

const cardDescription = document.getElementById('cardDescription');
// Find the paragraph with id "cardDescription" and store it


// Function to generate a random tarot card
function generateCard() {
    // Function definition: runs when button is clicked
    
    // Generate a random number between 0 and the total number of cards
    const randomIndex = Math.floor(Math.random() * tarotCards.length);
    /* 
    Explanation:
    - Math.random() gives a decimal between 0 and 0.999...
    - Multiply by tarotCards.length (22) to get 0-21.999...
    - Math.floor() rounds down to get a whole number: 0, 1, 2... 21
    - This ensures we get a valid card index
    */
    
    // Get the card object at the random index from the tarotCards array
    const selectedCard = tarotCards[randomIndex];
    /* Using the random number, we select a card from our data array */
    
    // Update the image element to show the selected card's image
    cardImage.src = selectedCard.image;
    /* 
    The src attribute controls what image is displayed.
    We're setting it to the image path from the card data.
    */
    
    // Update the card name heading to show the selected card's name
    cardName.textContent = selectedCard.name;
    /* textContent sets the text that appears on the page */
    
    // Update the description to show the selected card's description
    cardDescription.textContent = selectedCard.description;
    /* This updates the paragraph text with the card's meaning */
    
    // Console logging (optional - for debugging)
    console.log(`Generated card: ${selectedCard.name}`);
    /* This sends a message to the browser console for debugging */
}


// Add an event listener to the button
generateBtn.addEventListener('click', generateCard);
/*
Explanation:
- addEventListener means "listen for an event"
- 'click' means "when the button is clicked"
- generateCard is the function to run when clicked
- So this line means: "When the button is clicked, run generateCard()"
*/


// Optional: Generate a card automatically when the page first loads
generateCard();
/* This shows a card as soon as the user opens the page */
