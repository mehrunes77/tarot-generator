/* JavaScript file containing all tarot card data */

/* Create an array (list) of tarot cards */
const tarotCards = [
    // The Fool
    {
        id: 0,
        name: "The Fool",
        description: "A new beginning, taking a leap of faith, uncertainty, embarking on a new path.",
        image: "cards/the_fool.svg"
        /* Reference to the image file for this card */
    },
    
    // The Magician
    {
        id: 1,
        name: "The Magician",
        description: "Power, resourcefulness, ability, concentration, action, initiative.",
        image: "cards/the_magician.svg"
    },
    
    // The High Priestess
    {
        id: 2,
        name: "The High Priestess",
        description: "Intuition, divine feminine, the subconscious, sacred knowledge, inner voice.",
        image: "cards/the_high_priestess.svg"
    },
    
    // The Empress
    {
        id: 3,
        name: "The Empress",
        description: "Fertility, feminine power, beauty, abundance, nature, creativity.",
        image: "cards/the_empress.svg"
    },
    
    // The Emperor
    {
        id: 4,
        name: "The Emperor",
        description: "Authority, structure, control, power, stability, leadership.",
        image: "cards/the_emperor.svg"
    },
    
    // The Hierophant
    {
        id: 5,
        name: "The Hierophant",
        description: "Tradition, conformity, morality, ethics, religion, beliefs.",
        image: "cards/the_hierophant.svg"
    },
    
    // The Lovers
    {
        id: 6,
        name: "The Lovers",
        description: "Love, harmony, relationships, choices, alignment, destiny.",
        image: "cards/the_lovers.svg"
    },
    
    // The Chariot
    {
        id: 7,
        name: "The Chariot",
        description: "Control, willpower, determination, ambition, movement forward.",
        image: "cards/the_chariot.svg"
    },
    
    // Strength
    {
        id: 8,
        name: "Strength",
        description: "Inner strength, courage, patience, control, compassion, self-confidence.",
        image: "cards/strength.svg"
    },
    
    // The Hermit
    {
        id: 9,
        name: "The Hermit",
        description: "Introspection, inner guidance, isolation, meditation, searching for truth.",
        image: "cards/the_hermit.svg"
    },
    
    // Wheel of Fortune
    {
        id: 10,
        name: "Wheel of Fortune",
        description: "Good luck, destiny, a turning point, cycles, change, karma.",
        image: "cards/wheel_of_fortune.svg"
    },
    
    // Justice
    {
        id: 11,
        name: "Justice",
        description: "Justice, fairness, accountability, cause and effect, truth, balance.",
        image: "cards/justice.svg"
    },
    
    // The Hanged Man
    {
        id: 12,
        name: "The Hanged Man",
        description: "Suspension, restriction, perspective, delay, seeing things differently.",
        image: "cards/the_hanged_man.svg"
    },
    
    // Death
    {
        id: 13,
        name: "Death",
        description: "Endings, beginnings, change, cycles, rebirth, transformation.",
        image: "cards/death.svg"
    },
    
    // Temperance
    {
        id: 14,
        name: "Temperance",
        description: "Balance, moderation, patience, partnership, harmony, blending.",
        image: "cards/temperance.svg"
    },
    
    // The Devil
    {
        id: 15,
        name: "The Devil",
        description: "Bondage, detachment, materialism, playfulness, lust, shadow.",
        image: "cards/the_devil.svg"
    },
    
    // The Tower
    {
        id: 16,
        name: "The Tower",
        description: "Upheaval, sudden change, revelation, disaster, crisis, destruction.",
        image: "cards/the_tower.svg"
    },
    
    // The Star
    {
        id: 17,
        name: "The Star",
        description: "Hope, faith, renewal, spirituality, healing, optimism, guidance.",
        image: "cards/the_star.svg"
    },
    
    // The Moon
    {
        id: 18,
        name: "The Moon",
        description: "Illusion, fear, unconscious, intuition, dreams, mystery, secrets.",
        image: "cards/the_moon.svg"
    },
    
    // The Sun
    {
        id: 19,
        name: "The Sun",
        description: "Success, vitality, happiness, positivity, joy, abundance, radiance.",
        image: "cards/the_sun.svg"
    },
    
    // Judgement
    {
        id: 20,
        name: "Judgement",
        description: "Awakening, renewal, reckoning, absolution, inner calling, decision.",
        image: "cards/judgement.svg"
    },
    
    // The World
    {
        id: 21,
        name: "The World",
        description: "Completion, wholeness, fulfillment, closure, success, achievement.",
        image: "cards/the_world.svg"
    },

    // MINOR ARCANA - CUPS (Emotions, Relationships, Creativity)
    
    // Ace of Cups
    {
        id: 22,
        name: "Ace of Cups",
        description: "New emotion, love, relationships, new opportunity in feelings.",
        image: "cards/ace_of_cups.svg"
    },
    
    // Two of Cups
    {
        id: 23,
        name: "Two of Cups",
        description: "Partnership, love, intimacy, close relationships, commitment.",
        image: "cards/two_of_cups.svg"
    },
    
    // Three of Cups
    {
        id: 24,
        name: "Three of Cups",
        description: "Celebration, gathering, community, friendship, joy, abundance.",
        image: "cards/three_of_cups.svg"
    },
    
    // Four of Cups
    {
        id: 25,
        name: "Four of Cups",
        description: "Apathy, meditation, disconnection, contemplation, reevaluation.",
        image: "cards/four_of_cups.svg"
    },
    
    // Five of Cups
    {
        id: 26,
        name: "Five of Cups",
        description: "Grief, loss, sadness, regret, disappointment, sorrow.",
        image: "cards/five_of_cups.svg"
    },
    
    // Six of Cups
    {
        id: 27,
        name: "Six of Cups",
        description: "Nostalgia, innocence, past happiness, simplicity, healing.",
        image: "cards/six_of_cups.svg"
    },
    
    // Seven of Cups
    {
        id: 28,
        name: "Seven of Cups",
        description: "Illusions, choices, wishful thinking, desires, confusion.",
        image: "cards/seven_of_cups.svg"
    },
    
    // Eight of Cups
    {
        id: 29,
        name: "Eight of Cups",
        description: "Abandonment, walking away, leaving, searching for meaning.",
        image: "cards/eight_of_cups.svg"
    },
    
    // Nine of Cups
    {
        id: 30,
        name: "Nine of Cups",
        description: "Happiness, satisfaction, gratification, wishes fulfilled, abundance.",
        image: "cards/nine_of_cups.svg"
    },
    
    // Ten of Cups
    {
        id: 31,
        name: "Ten of Cups",
        description: "Harmony, happiness, family, completion, joy, alignment.",
        image: "cards/ten_of_cups.svg"
    },
    
    // Page of Cups
    {
        id: 32,
        name: "Page of Cups",
        description: "Creative, dreamer, sensitive, emotionally intelligent youth.",
        image: "cards/page_of_cups.svg"
    },
    
    // Knight of Cups
    {
        id: 33,
        name: "Knight of Cups",
        description: "Romantic, sensitive, creative, charming, emotional maturity.",
        image: "cards/knight_of_cups.svg"
    },
    
    // Queen of Cups
    {
        id: 34,
        name: "Queen of Cups",
        description: "Intuitive, compassionate, nurturing, emotional stability.",
        image: "cards/queen_of_cups.svg"
    },
    
    // King of Cups
    {
        id: 35,
        name: "King of Cups",
        description: "Emotionally balanced, wise, creative leader, control of feelings.",
        image: "cards/king_of_cups.svg"
    },

    // MINOR ARCANA - WANDS (Action, Growth, Energy, Passion)
    
    // Ace of Wands
    {
        id: 36,
        name: "Ace of Wands",
        description: "New passion, growth, opportunity, creative spark, inspiration.",
        image: "cards/ace_of_wands.svg"
    },
    
    // Two of Wands
    {
        id: 37,
        name: "Two of Wands",
        description: "Planning, making decisions, leaving comfort zone, potential.",
        image: "cards/two_of_wands.svg"
    },
    
    // Three of Wands
    {
        id: 38,
        name: "Three of Wands",
        description: "Foresight, exploration, expansion, progress, enterprise.",
        image: "cards/three_of_wands.svg"
    },
    
    // Four of Wands
    {
        id: 39,
        name: "Four of Wands",
        description: "Celebration, rest, satisfaction, harmony, happy home.",
        image: "cards/four_of_wands.svg"
    },
    
    // Five of Wands
    {
        id: 40,
        name: "Five of Wands",
        description: "Conflict, struggle, tension, chaos, competition, disagreement.",
        image: "cards/five_of_wands.svg"
    },
    
    // Six of Wands
    {
        id: 41,
        name: "Six of Wands",
        description: "Victory, recognition, success, confidence, public acclaim.",
        image: "cards/six_of_wands.svg"
    },
    
    // Seven of Wands
    {
        id: 42,
        name: "Seven of Wands",
        description: "Perseverance, courage, standing ground, challenges, defense.",
        image: "cards/seven_of_wands.svg"
    },
    
    // Eight of Wands
    {
        id: 43,
        name: "Eight of Wands",
        description: "Movement, speed, progress, action, communication, haste.",
        image: "cards/eight_of_wands.svg"
    },
    
    // Nine of Wands
    {
        id: 44,
        name: "Nine of Wands",
        description: "Resilience, persistence, boundaries, tests, challenges overcome.",
        image: "cards/nine_of_wands.svg"
    },
    
    // Ten of Wands
    {
        id: 45,
        name: "Ten of Wands",
        description: "Burden, stress, responsibility, exhaustion, completion of cycle.",
        image: "cards/ten_of_wands.svg"
    },
    
    // Page of Wands
    {
        id: 46,
        name: "Page of Wands",
        description: "Enthusiastic, courageous, energetic, adventurous young person.",
        image: "cards/page_of_wands.svg"
    },
    
    // Knight of Wands
    {
        id: 47,
        name: "Knight of Wands",
        description: "Energetic, passionate, impulsive, adventurous, free-spirited.",
        image: "cards/knight_of_wands.svg"
    },
    
    // Queen of Wands
    {
        id: 48,
        name: "Queen of Wands",
        description: "Confident, independent, passionate, charismatic, determined.",
        image: "cards/queen_of_wands.svg"
    },
    
    // King of Wands
    {
        id: 49,
        name: "King of Wands",
        description: "Leadership, vision, big picture, bold decisions, entrepreneurial.",
        image: "cards/king_of_wands.svg"
    },

    // MINOR ARCANA - SWORDS (Communication, Truth, Clarity, Conflict)
    
    // Ace of Swords
    {
        id: 50,
        name: "Ace of Swords",
        description: "Truth, clarity, new ideas, breakthroughs, communication.",
        image: "cards/ace_of_swords.svg"
    },
    
    // Two of Swords
    {
        id: 51,
        name: "Two of Swords",
        description: "Stalemate, difficult decisions, information imbalance, confusion.",
        image: "cards/two_of_swords.svg"
    },
    
    // Three of Swords
    {
        id: 52,
        name: "Three of Swords",
        description: "Heartbreak, difficult times, sorrow, separation, conflict.",
        image: "cards/three_of_swords.svg"
    },
    
    // Four of Swords
    {
        id: 53,
        name: "Four of Swords",
        description: "Rest, recovery, contemplation, pause, restoration, truce.",
        image: "cards/four_of_swords.svg"
    },
    
    // Five of Swords
    {
        id: 54,
        name: "Five of Swords",
        description: "Defeat, loss, arguments, tension, loss of power.",
        image: "cards/five_of_swords.svg"
    },
    
    // Six of Swords
    {
        id: 55,
        name: "Six of Swords",
        description: "Moving on, transition, journey, escape, departure.",
        image: "cards/six_of_swords.svg"
    },
    
    // Seven of Swords
    {
        id: 56,
        name: "Seven of Swords",
        description: "Betrayal, deception, lies, theft, sneakiness, cunning.",
        image: "cards/seven_of_swords.svg"
    },
    
    // Eight of Swords
    {
        id: 57,
        name: "Eight of Swords",
        description: "Restriction, confusion, powerlessness, entrapment, limited view.",
        image: "cards/eight_of_swords.svg"
    },
    
    // Nine of Swords
    {
        id: 58,
        name: "Nine of Swords",
        description: "Anxiety, nightmares, despair, cruelty, mental anguish.",
        image: "cards/nine_of_swords.svg"
    },
    
    // Ten of Swords
    {
        id: 59,
        name: "Ten of Swords",
        description: "Ending, defeat, betrayal, loss, hitting bottom, completion.",
        image: "cards/ten_of_swords.svg"
    },
    
    // Page of Swords
    {
        id: 60,
        name: "Page of Swords",
        description: "Curious, intellectual, communicative, observant young person.",
        image: "cards/page_of_swords.svg"
    },
    
    // Knight of Swords
    {
        id: 61,
        name: "Knight of Swords",
        description: "Analytical, intellectual, quick-witted, argumentative, logical.",
        image: "cards/knight_of_swords.svg"
    },
    
    // Queen of Swords
    {
        id: 62,
        name: "Queen of Swords",
        description: "Clear-thinking, honest, independent, intellectual, perceptive.",
        image: "cards/queen_of_swords.svg"
    },
    
    // King of Swords
    {
        id: 63,
        name: "King of Swords",
        description: "Intellectual authority, logical, analytical, truth-seeking.",
        image: "cards/king_of_swords.svg"
    },

    // MINOR ARCANA - PENTACLES (Wealth, Material, Work, Practicality)
    
    // Ace of Pentacles
    {
        id: 64,
        name: "Ace of Pentacles",
        description: "New opportunities, prosperity, abundance, gifts, new job.",
        image: "cards/ace_of_pentacles.svg"
    },
    
    // Two of Pentacles
    {
        id: 65,
        name: "Two of Pentacles",
        description: "Balance, juggling, adaptability, flexibility, managing resources.",
        image: "cards/two_of_pentacles.svg"
    },
    
    // Three of Pentacles
    {
        id: 66,
        name: "Three of Pentacles",
        description: "Teamwork, collaboration, learning, craftmanship, planning.",
        image: "cards/three_of_pentacles.svg"
    },
    
    // Four of Pentacles
    {
        id: 67,
        name: "Four of Pentacles",
        description: "Holding on, conservatism, control, stability, possessiveness.",
        image: "cards/four_of_pentacles.svg"
    },
    
    // Five of Pentacles
    {
        id: 68,
        name: "Five of Pentacles",
        description: "Hardship, loss, poverty, abandonment, exile, isolation.",
        image: "cards/five_of_pentacles.svg"
    },
    
    // Six of Pentacles
    {
        id: 69,
        name: "Six of Pentacles",
        description: "Generosity, charity, sharing, fair dealing, help.",
        image: "cards/six_of_pentacles.svg"
    },
    
    // Seven of Pentacles
    {
        id: 70,
        name: "Seven of Pentacles",
        description: "Assessment, patience, investment, improvement, growth.",
        image: "cards/seven_of_pentacles.svg"
    },
    
    // Eight of Pentacles
    {
        id: 71,
        name: "Eight of Pentacles",
        description: "Skill, practice, expertise, diligence, apprenticeship, crafting.",
        image: "cards/eight_of_pentacles.svg"
    },
    
    // Nine of Pentacles
    {
        id: 72,
        name: "Nine of Pentacles",
        description: "Abundance, luxury, independence, security, self-sufficiency.",
        image: "cards/nine_of_pentacles.svg"
    },
    
    // Ten of Pentacles
    {
        id: 73,
        name: "Ten of Pentacles",
        description: "Inheritance, legacy, family, generational wealth, completion.",
        image: "cards/ten_of_pentacles.svg"
    },
    
    // Page of Pentacles
    {
        id: 74,
        name: "Page of Pentacles",
        description: "Studious, practical, responsible, dedicated young person.",
        image: "cards/page_of_pentacles.svg"
    },
    
    // Knight of Pentacles
    {
        id: 75,
        name: "Knight of Pentacles",
        description: "Responsible, reliable, hardworking, practical, honest.",
        image: "cards/knight_of_pentacles.svg"
    },
    
    // Queen of Pentacles
    {
        id: 76,
        name: "Queen of Pentacles",
        description: "Nurturing, practical, resourceful, grounded, financial security.",
        image: "cards/queen_of_pentacles.svg"
    },
    
    // King of Pentacles
    {
        id: 77,
        name: "King of Pentacles",
        description: "Abundance, prosperity, leadership, security, abundance.",
        image: "cards/king_of_pentacles.svg"
    }
];

/* 
This array now contains all 78 tarot cards:
- 22 Major Arcana cards (0-21)
- 14 Cups cards (22-35)
- 14 Wands cards (36-49)
- 14 Swords cards (50-63)
- 14 Pentacles cards (64-77)
*/
