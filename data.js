/* JavaScript file containing all tarot card data */

/* Create an array (list) of tarot cards */
const tarotCards = [
    // The Fool
    {
        id: 0,
        name: "The Fool",
        description: "A new beginning, taking a leap of faith, uncertainty, embarking on a new path.",
        image: "cards/the_fool.jpg"
        /* Reference to the image file for this card */
    },
    
    // The Magician
    {
        id: 1,
        name: "The Magician",
        description: "Power, resourcefulness, ability, concentration, action, initiative.",
        image: "cards/the_magician.jpg"
    },
    
    // The High Priestess
    {
        id: 2,
        name: "The High Priestess",
        description: "Intuition, divine feminine, the subconscious, sacred knowledge, inner voice.",
        image: "cards/the_high_priestess.jpg"
    },
    
    // The Empress
    {
        id: 3,
        name: "The Empress",
        description: "Fertility, feminine power, beauty, abundance, nature, creativity.",
        image: "cards/the_empress.jpg"
    },
    
    // The Emperor
    {
        id: 4,
        name: "The Emperor",
        description: "Authority, structure, control, power, stability, leadership.",
        image: "cards/the_emperor.jpg"
    },
    
    // The Hierophant
    {
        id: 5,
        name: "The Hierophant",
        description: "Tradition, conformity, morality, ethics, religion, beliefs.",
        image: "cards/the_hierophant.jpg"
    },
    
    // The Lovers
    {
        id: 6,
        name: "The Lovers",
        description: "Love, harmony, relationships, choices, alignment, destiny.",
        image: "cards/the_lovers.jpg"
    },
    
    // The Chariot
    {
        id: 7,
        name: "The Chariot",
        description: "Control, willpower, determination, ambition, movement forward.",
        image: "cards/the_chariot.jpg"
    },
    
    // Strength
    {
        id: 8,
        name: "Strength",
        description: "Inner strength, courage, patience, control, compassion, self-confidence.",
        image: "cards/strength.jpg"
    },
    
    // The Hermit
    {
        id: 9,
        name: "The Hermit",
        description: "Introspection, inner guidance, isolation, meditation, searching for truth.",
        image: "cards/the_hermit.jpg"
    },
    
    // Wheel of Fortune
    {
        id: 10,
        name: "Wheel of Fortune",
        description: "Good luck, destiny, a turning point, cycles, change, karma.",
        image: "cards/wheel_of_fortune.jpg"
    },
    
    // Justice
    {
        id: 11,
        name: "Justice",
        description: "Justice, fairness, accountability, cause and effect, truth, balance.",
        image: "cards/justice.jpg"
    },
    
    // The Hanged Man
    {
        id: 12,
        name: "The Hanged Man",
        description: "Suspension, restriction, perspective, delay, seeing things differently.",
        image: "cards/the_hanged_man.jpg"
    },
    
    // Death
    {
        id: 13,
        name: "Death",
        description: "Endings, beginnings, change, cycles, rebirth, transformation.",
        image: "cards/death.jpg"
    },
    
    // Temperance
    {
        id: 14,
        name: "Temperance",
        description: "Balance, moderation, patience, partnership, harmony, blending.",
        image: "cards/temperance.jpg"
    },
    
    // The Devil
    {
        id: 15,
        name: "The Devil",
        description: "Bondage, detachment, materialism, playfulness, lust, shadow.",
        image: "cards/the_devil.jpg"
    },
    
    // The Tower
    {
        id: 16,
        name: "The Tower",
        description: "Upheaval, sudden change, revelation, disaster, crisis, destruction.",
        image: "cards/the_tower.jpg"
    },
    
    // The Star
    {
        id: 17,
        name: "The Star",
        description: "Hope, faith, renewal, spirituality, healing, optimism, guidance.",
        image: "cards/the_star.jpg"
    },
    
    // The Moon
    {
        id: 18,
        name: "The Moon",
        description: "Illusion, fear, unconscious, intuition, dreams, mystery, secrets.",
        image: "cards/the_moon.jpg"
    },
    
    // The Sun
    {
        id: 19,
        name: "The Sun",
        description: "Success, vitality, happiness, positivity, joy, abundance, radiance.",
        image: "cards/the_sun.jpg"
    },
    
    // Judgement
    {
        id: 20,
        name: "Judgement",
        description: "Awakening, renewal, reckoning, absolution, inner calling, decision.",
        image: "cards/judgement.jpg"
    },
    
    // The World
    {
        id: 21,
        name: "The World",
        description: "Completion, wholeness, fulfillment, closure, success, achievement.",
        image: "cards/the_world.jpg"
    }
];

/* 
Note: This array contains only the Major Arcana (22 cards).
If you want to add Minor Arcana cards (Cups, Wands, Swords, Pentacles),
add them to this array following the same format.
Each card should have: id, name, description, and image path.
*/
