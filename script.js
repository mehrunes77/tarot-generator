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


// Function to generate a random card
function shuffleCards() {
    // Safety check: prevent multiple clicks
    if (generateBtn.disabled) {
        return;
    }
    
    // Disable the button
    generateBtn.disabled = true;
    generateBtn.textContent = 'GENERATING...';
    
    // Wait 2 seconds then show card
    setTimeout(() => {
        // Generate random card index
        const randomIndex = Math.floor(Math.random() * tarotCards.length);
        const randomCard = tarotCards[randomIndex];
        
        // Display the card
        cardImage.src = randomCard.image;
        cardName.textContent = randomCard.name;
        cardDescription.textContent = randomCard.description;
        
        // Re-enable the button
        generateBtn.disabled = false;
        generateBtn.textContent = 'GENERATE CARD';
        
        // Log to console
        console.log(`Card generated: ${randomCard.name}`);
    }, 2000);
}


// Add an event listener to the button
generateBtn.addEventListener('click', shuffleCards);
/*
Explanation:
- addEventListener means "listen for an event"
- 'click' means "when the button is clicked"
- shuffleCards is the function to run when clicked
- So this line means: "When the button is clicked, run shuffleCards()"
*/


// Do NOT auto-generate a card on page load
/* 
The landing page now shows an empty card display until the user clicks the button.
This makes the experience more interactive and mysterious.
*/
