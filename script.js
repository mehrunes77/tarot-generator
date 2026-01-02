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


// Function to shuffle through random cards with animation
function shuffleCards() {
    // Function that creates a shuffling effect
    
    // Safety check: prevent multiple clicks
    if (generateBtn.disabled) {
        return;
    }
    
    // Disable the button while shuffling
    generateBtn.disabled = true;
    /* Prevent clicking multiple times during shuffle */
    
    // Change button text to show it's shuffling
    generateBtn.textContent = 'SHUFFLING...';
    
    // Number of times to change the card during shuffle (faster = more dramatic)
    const shuffleCount = 20;
    /* We'll show 20 different random cards during the shuffle */
    
    // Duration of the entire shuffle in milliseconds
    const shuffleDuration = 5000;
    /* 5 seconds = 5000 milliseconds */
    
    // Time between each card flip during shuffle
    const timeBetweenFlips = shuffleDuration / shuffleCount;
    /* Divide 5 seconds by 20 flips to get time per flip */
    
    // Loop counter for the shuffle effect
    let currentFlip = 0;
    /* Starts at 0, counts up to shuffleCount */
    
    // Create an interval that changes cards repeatedly
    const shuffleInterval = setInterval(() => {
        // Each time this runs, show a random card
        
        // Generate random index
        const randomIndex = Math.floor(Math.random() * tarotCards.length);
        
        // Get the random card
        const randomCard = tarotCards[randomIndex];
        
        // Update image
        cardImage.src = randomCard.image;
        
        // Update name
        cardName.textContent = randomCard.name;
        
        // Update description
        cardDescription.textContent = randomCard.description;
        
        // Increment the flip counter
        currentFlip++;
        /* Count how many flips we've done */
    }, timeBetweenFlips);
    /* This runs every (timeBetweenFlips) milliseconds */
    
    // After 5 seconds, stop the shuffle and show final card
    setTimeout(() => {
        // This runs after 5000 milliseconds (5 seconds)
        
        // Stop the shuffling interval
        clearInterval(shuffleInterval);
        /* clearInterval stops the repeated function from running */
        
        // Generate the final card with a fresh random number
        const finalIndex = Math.floor(Math.random() * tarotCards.length);
        /* Use Math.random() one more time for the final card */
        
        const finalCard = tarotCards[finalIndex];
        
        // Display the final card
        cardImage.src = finalCard.image;
        cardName.textContent = finalCard.name;
        cardDescription.textContent = finalCard.description;
        
        // Re-enable the button
        generateBtn.disabled = false;
        /* User can now click again */
        
        // Change button text back to normal
        generateBtn.textContent = 'GENERATE CARD';
        
        // Log final card to console
        console.log(`Final card: ${finalCard.name}`);
    }, shuffleDuration);
    /* shuffleDuration = 5000 milliseconds */
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
