/* JavaScript file containing all tarot card data */
/* Thoth Tarot Deck by Aleister Crowley (AGM-Urania) */
/* Images sourced from: https://steve-p.org/cards/Thot.html */
/* Meanings include planetary associations, zodiac signs, and Qabalistic correspondences */

const tarotCards = [
    // MAJOR ARCANA - TRUMPS (0-21)
    
    {
        id: 0,
        name: "The Fool",
        description: "Folly, mania, intoxication, ecstasy. Divine madness, recklessness, irresponsibility. Beginning before all beginning. Corresponds to Aleph and Air. Planet: Uranus. Path 11.",
        image: "https://steve-p.org/cards/Thot-T-00.webp"
    },
    
    {
        id: 1,
        name: "The Magus",
        description: "Will, thought, creative power, communication. Mercury - swift intellect and speech. Corresponds to Beth and Mercury. Zodiac: Virgo. Path 12. Divine name: Beni Elohim.",
        image: "https://steve-p.org/cards/Thot-T-01.webp"
    },
    
    {
        id: 2,
        name: "The Priestess",
        description: "The High Priestess, wisdom, secret knowledge, illusion, hidden mysteries. Moon - the subconscious. Corresponds to Gimel and Luna. Element: Water. Path 13.",
        image: "https://steve-p.org/cards/Thot-T-02.webp"
    },
    
    {
        id: 3,
        name: "The Empress",
        description: "Abundance, fertility, beauty, nature, material prosperity. Venus - pleasure and material form. Corresponds to Daleth and Venus. Zodiac: Taurus. Path 14. Divine name: Elohim.",
        image: "https://steve-p.org/cards/Thot-T-03.webp"
    },
    
    {
        id: 4,
        name: "The Emperor",
        description: "Authority, power, control, dominion, father figure, leadership. Aries - the warrior. Corresponds to Heh and Aries. Element: Fire. Path 15.",
        image: "https://steve-p.org/cards/Thot-T-04.webp"
    },
    
    {
        id: 5,
        name: "The Hierophant",
        description: "Spiritual authority, conventional wisdom, religious teaching, tradition. Taurus - material/earthly manifestation. Corresponds to Vau and Taurus. Element: Earth. Path 16. Divine name: Vau.",
        image: "https://steve-p.org/cards/Thot-T-05.webp"
    },
    
    {
        id: 6,
        name: "The Lovers",
        description: "Love, choice, connection, passion, union of opposites. Gemini - duality, twins. Corresponds to Zayin and Gemini. Element: Air. Path 17. Planet: Mercury.",
        image: "https://steve-p.org/cards/Thot-T-06.webp"
    },
    
    {
        id: 7,
        name: "The Chariot",
        description: "Control, willpower, victory, movement, conquest, determination. Cancer - emotional control through will. Corresponds to Cheth and Cancer. Element: Water. Path 18.",
        image: "https://steve-p.org/cards/Thot-T-07.webp"
    },
    
    {
        id: 8,
        name: "Adjustment",
        description: "Balance, justice, equilibrium, karma, cause and effect. Libra - weighing and measuring. Corresponds to Lamed and Libra. Element: Air. Path 22. Planet: Venus.",
        image: "https://steve-p.org/cards/Thot-T-08.webp"
    },
    
    {
        id: 9,
        name: "The Hermit",
        description: "Solitude, wisdom, introspection, self-sufficiency, search for light. Virgo - analysis and purification. Corresponds to Yodh and Virgo. Element: Earth. Path 19.",
        image: "https://steve-p.org/cards/Thot-T-09.webp"
    },
    
    {
        id: 10,
        name: "Fortune",
        description: "Destiny, cycles, chance, karma, fortune's wheel, cyclical change. Jupiter - expansion and cycles. Corresponds to Kaph and Jupiter. Element: Fire. Path 20.",
        image: "https://steve-p.org/cards/Thot-T-10.webp"
    },
    
    {
        id: 11,
        name: "Lust",
        description: "Strength, passion, power, desire, creative force. Leo - the beast and creative power. Corresponds to Teth and Leo. Element: Fire. Path 21.",
        image: "https://steve-p.org/cards/Thot-T-11.webp"
    },
    
    {
        id: 12,
        name: "The Hanged Man",
        description: "Suspension, reversal, sacrifice, perspective shift, initiation. Water - dissolution of ego. Corresponds to Mem and Water. Element: Water. Path 23. Planet: Neptune.",
        image: "https://steve-p.org/cards/Thot-T-12.webp"
    },
    
    {
        id: 13,
        name: "Death",
        description: "Transformation, endings, rebirth, regeneration, scorpion's sting. Scorpio - death and regeneration. Corresponds to Nun and Scorpio. Element: Water. Path 24.",
        image: "https://steve-p.org/cards/Thot-T-13.webp"
    },
    
    {
        id: 14,
        name: "Art",
        description: "Alchemy, harmony, integration of opposites, blending. Sagittarius - the archer and transformation. Corresponds to Samekh and Sagittarius. Element: Fire. Path 25.",
        image: "https://steve-p.org/cards/Thot-T-14.webp"
    },
    
    {
        id: 15,
        name: "The Devil",
        description: "Bondage, materiality, lust, fear, addiction, shadow self. Capricorn - material manifestation. Corresponds to Ayin and Capricorn. Element: Earth. Path 26.",
        image: "https://steve-p.org/cards/Thot-T-15.webp"
    },
    
    {
        id: 16,
        name: "The Tower",
        description: "Disruption, sudden change, breaking down of illusions, catharsis. Mars - destruction and conflict. Corresponds to Peh and Mars. Element: Fire. Path 27.",
        image: "https://steve-p.org/cards/Thot-T-16.webp"
    },
    
    {
        id: 17,
        name: "The Star",
        description: "Hope, inspiration, spiritual guidance, clarity, aspiration. Aquarius - the water-bearer. Corresponds to Tsade and Aquarius. Element: Air. Path 28.",
        image: "https://steve-p.org/cards/Thot-T-17.webp"
    },
    
    {
        id: 18,
        name: "The Moon",
        description: "Illusion, dreams, imagination, the subconscious, fear. Pisces - dissolving into the infinite. Corresponds to Qoph and Pisces. Element: Water. Path 29.",
        image: "https://steve-p.org/cards/Thot-T-18.webp"
    },
    
    {
        id: 19,
        name: "The Sun",
        description: "Illumination, success, joy, truth, vitality, enlightenment. Sun - the divine light. Corresponds to Resh and Sun. Element: Fire. Path 30.",
        image: "https://steve-p.org/cards/Thot-T-19.webp"
    },
    
    {
        id: 20,
        name: "Aeon",
        description: "Renewal, new era, manifestation, the child, divine child Horus. Pluto - transformation and rebirth. Corresponds to Shin and Fire/Spirit. Path 31.",
        image: "https://steve-p.org/cards/Thot-T-20.webp"
    },
    
    {
        id: 21,
        name: "The Universe",
        description: "Completion, fulfillment, wholeness, totality, unity. Saturn - limitation and completion. Corresponds to Tau and Saturn. Element: Earth. Path 32.",
        image: "https://steve-p.org/cards/Thot-T-21.webp"
    },

    // MINOR ARCANA - CUPS (Emotions, Relationships, Creativity)
    
    {
        id: 22,
        name: "Ace of Cups",
        description: "New beginning of love, birth of desire, pure emotion. Elemental Water in its perfection. Divine name: Heh final in Atziluth.",
        image: "https://steve-p.org/cards/Thot-C-0A.webp"
    },
    
    {
        id: 23,
        name: "Two of Cups",
        description: "Love, partnership, union of souls. Mercury in Water. Gain, harmony in relationships. The sacred marriage.",
        image: "https://steve-p.org/cards/Thot-C-02.webp"
    },
    
    {
        id: 24,
        name: "Three of Cups",
        description: "Abundance, celebration, community, artistic expression. Venus in Water. Beauty and social joy. The feast of emotion.",
        image: "https://steve-p.org/cards/Thot-C-03.webp"
    },
    
    {
        id: 25,
        name: "Four of Cups",
        description: "Luxury, satisfaction, complacency, stagnation. Sun in Water. Temporary truce, dissatisfaction beneath surface. Comforts that cloy.",
        image: "https://steve-p.org/cards/Thot-C-04.webp"
    },
    
    {
        id: 26,
        name: "Five of Cups",
        description: "Disappointment, regret, loss of love, sorrow. Mars in Water. Emotional strife, quarrels. Heart's wounds.",
        image: "https://steve-p.org/cards/Thot-C-05.webp"
    },
    
    {
        id: 27,
        name: "Six of Cups",
        description: "Pleasure, happiness, innocent love, past memories. Mercury in Water. Pleasure of sense, gentle emotions. Past happiness.",
        image: "https://steve-p.org/cards/Thot-C-06.webp"
    },
    
    {
        id: 28,
        name: "Seven of Cups",
        description: "Illusion, false hope, wishful thinking, dreams, fantasies. Venus in Water. Temptation, dissolution, deceptive pleasures.",
        image: "https://steve-p.org/cards/Thot-C-07.webp"
    },
    
    {
        id: 29,
        name: "Eight of Cups",
        description: "Abandonment, walking away, leaving, search for deeper meaning. Saturn in Water. Withdrawal, seeking higher truth. Indifference.",
        image: "https://steve-p.org/cards/Thot-C-08.webp"
    },
    
    {
        id: 30,
        name: "Nine of Cups",
        description: "Happiness, contentment, material comfort, wishes granted. Jupiter in Water. Success, luxury, abundance, satisfaction.",
        image: "https://steve-p.org/cards/Thot-C-09.webp"
    },
    
    {
        id: 31,
        name: "Ten of Cups",
        description: "Completion of emotional cycle, divine love, harmony, family unity. Mars in Water. Perfect completion, abundant realization of love.",
        image: "https://steve-p.org/cards/Thot-C-10.webp"
    },
    
    {
        id: 32,
        name: "Princess of Cups",
        description: "Youth, innocence, beauty, dreaminess, creativity. Earth in Water. Messenger of emotions, sensual innocence. The water nymph.",
        image: "https://steve-p.org/cards/Thot-C-PS.webp"
    },
    
    {
        id: 33,
        name: "Prince of Cups",
        description: "Artistic sensitivity, charm, pleasure-seeking, romantic nature. Air in Water. The artistic messenger, eloquent and dreamy.",
        image: "https://steve-p.org/cards/Thot-C-PN.webp"
    },
    
    {
        id: 34,
        name: "Queen of Cups",
        description: "Intuition, compassion, creativity, nurturing, emotional wisdom. Water in Water. The perfect emotional being, fluid and responsive.",
        image: "https://steve-p.org/cards/Thot-C-QU.webp"
    },
    
    {
        id: 35,
        name: "Knight of Cups",
        description: "Idealism, adventure, creativity, poetic soul, emotional depth. Fire in Water. The lover and artist, passionate and idealistic.",
        image: "https://steve-p.org/cards/Thot-C-KN.webp"
    },

    // MINOR ARCANA - WANDS (Action, Growth, Energy, Passion)
    
    {
        id: 36,
        name: "Ace of Wands",
        description: "Birth of pure creative force, divine fire, inspiration. Elemental Fire in its perfection. Divine name: Heh final in Atziluth.",
        image: "https://steve-p.org/cards/Thot-W-0A.webp"
    },
    
    {
        id: 37,
        name: "Two of Wands",
        description: "Dominion, command, will, strength, creativity exercised. Mars in Fire. Strength and determination. The lord of dominion.",
        image: "https://steve-p.org/cards/Thot-W-02.webp"
    },
    
    {
        id: 38,
        name: "Three of Wands",
        description: "Virtue, creative expression, manifestation, growth, expansion. Sun in Fire. Culmination and brightness. The lord of virtue.",
        image: "https://steve-p.org/cards/Thot-W-03.webp"
    },
    
    {
        id: 39,
        name: "Four of Wands",
        description: "Completion, establishment, rest after labor, peace, fulfillment. Venus in Fire. Harmony and beauty in creative work.",
        image: "https://steve-p.org/cards/Thot-W-04.webp"
    },
    
    {
        id: 40,
        name: "Five of Wands",
        description: "Strife, conflict, competition, energetic struggle, competition. Saturn in Fire. Stagnation through conflict and frustration.",
        image: "https://steve-p.org/cards/Thot-W-05.webp"
    },
    
    {
        id: 41,
        name: "Six of Wands",
        description: "Victory, success, strength, conquest, triumph over obstacles. Jupiter in Fire. Honour and reward. The lord of victory.",
        image: "https://steve-p.org/cards/Thot-W-06.webp"
    },
    
    {
        id: 42,
        name: "Seven of Wands",
        description: "Valor, courage, struggle, defense of what one has. Mars in Fire. Valour and competition, standing one's ground.",
        image: "https://steve-p.org/cards/Thot-W-07.webp"
    },
    
    {
        id: 43,
        name: "Eight of Wands",
        description: "Swiftness, speed, action, haste, rapid change, movement. Mercury in Fire. Extreme swiftness and change. Messages.",
        image: "https://steve-p.org/cards/Thot-W-08.webp"
    },
    
    {
        id: 44,
        name: "Nine of Wands",
        description: "Strength, resilience, power, persistence, defensibility. Moon in Fire. Great strength and power. Completion of struggle.",
        image: "https://steve-p.org/cards/Thot-W-09.webp"
    },
    
    {
        id: 45,
        name: "Ten of Wands",
        description: "Oppression, burden, weight, exhaustion, completion of cycle. Saturn in Fire. Oppression, heavy burden, exhaustion.",
        image: "https://steve-p.org/cards/Thot-W-10.webp"
    },
    
    {
        id: 46,
        name: "Princess of Wands",
        description: "Youth, beauty, enthusiasm, loyalty, potential. Earth in Fire. Messenger of energy and enthusiasm.",
        image: "https://steve-p.org/cards/Thot-W-PS.webp"
    },
    
    {
        id: 47,
        name: "Prince of Wands",
        description: "Generosity, courage, freedom, adventure, travel. Air in Fire. The swift messenger, energetic and passionate.",
        image: "https://steve-p.org/cards/Thot-W-PN.webp"
    },
    
    {
        id: 48,
        name: "Queen of Wands",
        description: "Confidence, independence, domination, passionate authority. Water in Fire. The thrones of energy, confident control.",
        image: "https://steve-p.org/cards/Thot-W-QU.webp"
    },
    
    {
        id: 49,
        name: "Knight of Wands",
        description: "Nobility, leadership, action, movement, adventure, passion. Fire in Fire. The perfected flame, swift and victorious.",
        image: "https://steve-p.org/cards/Thot-W-KN.webp"
    },

    // MINOR ARCANA - SWORDS (Communication, Truth, Clarity, Conflict)
    
    {
        id: 50,
        name: "Ace of Swords",
        description: "Truth, clarity, new ideas, divine intellect, understanding. Elemental Air in its perfection. Divine name: Heh final in Atziluth.",
        image: "https://steve-p.org/cards/Thot-S-0A.webp"
    },
    
    {
        id: 51,
        name: "Two of Swords",
        description: "Peace, truce, balance of intellect, equilibrium, decision-making. Mercury in Air. Intellectual balance, careful decision.",
        image: "https://steve-p.org/cards/Thot-S-02.webp"
    },
    
    {
        id: 52,
        name: "Three of Swords",
        description: "Sorrow, heartache, painful truth, separation, mental anguish. Saturn in Air. Sorrow and tears, mental suffering.",
        image: "https://steve-p.org/cards/Thot-S-03.webp"
    },
    
    {
        id: 53,
        name: "Four of Swords",
        description: "Rest, recovery, meditation, truce, recuperation, respite. Jupiter in Air. Rest and recovery after strife.",
        image: "https://steve-p.org/cards/Thot-S-04.webp"
    },
    
    {
        id: 54,
        name: "Five of Swords",
        description: "Defeat, loss, broken contracts, unfair advantage, conquest. Venus in Air. Defeat and loss of power, humiliation.",
        image: "https://steve-p.org/cards/Thot-S-05.webp"
    },
    
    {
        id: 55,
        name: "Six of Swords",
        description: "Journey, travel, passage, movement of thought, change. Mercury in Air. Journey and change, passage through trials.",
        image: "https://steve-p.org/cards/Thot-S-06.webp"
    },
    
    {
        id: 56,
        name: "Seven of Swords",
        description: "Deception, treachery, lies, cunning, unfair advantage. Moon in Air. Illusion and deception, futility.",
        image: "https://steve-p.org/cards/Thot-S-07.webp"
    },
    
    {
        id: 57,
        name: "Eight of Swords",
        description: "Restriction, confusion, imprisonment, powerlessness, limited view. Jupiter in Air. Interference and restriction.",
        image: "https://steve-p.org/cards/Thot-S-08.webp"
    },
    
    {
        id: 58,
        name: "Nine of Swords",
        description: "Despair, mental anguish, nightmare, anxiety, loss of hope. Mars in Air. Cruelty and loss of power, despair.",
        image: "https://steve-p.org/cards/Thot-S-09.webp"
    },
    
    {
        id: 59,
        name: "Ten of Swords",
        description: "Ruin, annihilation, ending, piercing truth, ultimate loss. Sun in Air. Ruin and desolation, completion of cycle.",
        image: "https://steve-p.org/cards/Thot-S-10.webp"
    },
    
    {
        id: 60,
        name: "Princess of Swords",
        description: "Youth, intelligence, keen observation, clarity, innocence. Earth in Air. Messenger of intellectual truth.",
        image: "https://steve-p.org/cards/Thot-S-PS.webp"
    },
    
    {
        id: 61,
        name: "Prince of Swords",
        description: "Logic, analysis, intellectual power, authority, rigor. Fire in Air. The swift minded, clever and perceptive.",
        image: "https://steve-p.org/cards/Thot-S-PN.webp"
    },
    
    {
        id: 62,
        name: "Queen of Swords",
        description: "Clarity of mind, truth, intellectual authority, severity. Water in Air. The intellectual, clear-eyed and just.",
        image: "https://steve-p.org/cards/Thot-S-QU.webp"
    },
    
    {
        id: 63,
        name: "Knight of Swords",
        description: "Logic, reason, intellectual combat, speed of mind, defense of truth. Air in Air. The perfected intellect, swift and victorious.",
        image: "https://steve-p.org/cards/Thot-S-KN.webp"
    },

    // MINOR ARCANA - DISKS/PENTACLES (Wealth, Material, Work, Practicality)
    
    {
        id: 64,
        name: "Ace of Disks",
        description: "Birth of material manifestation, pure wealth, potential prosperity. Elemental Earth in its perfection. Divine name: Heh final in Atziluth.",
        image: "https://steve-p.org/cards/Thot-D-0A.webp"
    },
    
    {
        id: 65,
        name: "Two of Disks",
        description: "Change, flexibility, exchange, balance of forces, harmony. Mercury in Earth. Fluctuation and readjustment of material affairs.",
        image: "https://steve-p.org/cards/Thot-D-02.webp"
    },
    
    {
        id: 66,
        name: "Three of Disks",
        description: "Work, craft, cooperation, creation, accomplishment. Venus in Earth. Works and accomplishment, cooperation.",
        image: "https://steve-p.org/cards/Thot-D-03.webp"
    },
    
    {
        id: 67,
        name: "Four of Disks",
        description: "Stability, foundation, material security, earthly power. Sun in Earth. Stable wealth and power, security achieved.",
        image: "https://steve-p.org/cards/Thot-D-04.webp"
    },
    
    {
        id: 68,
        name: "Five of Disks",
        description: "Material loss, poverty, hardship, destitution, need. Mercury in Earth. Disaster in matter, loss and privation.",
        image: "https://steve-p.org/cards/Thot-D-05.webp"
    },
    
    {
        id: 69,
        name: "Six of Disks",
        description: "Charity, generosity, sharing, fair dealing, reciprocity. Moon in Earth. Success in wealth, plenty and generosity.",
        image: "https://steve-p.org/cards/Thot-D-06.webp"
    },
    
    {
        id: 70,
        name: "Seven of Disks",
        description: "Assessment, investment, caution, evaluation of resources, delay. Saturn in Earth. Assessment of material gain, wise delay.",
        image: "https://steve-p.org/cards/Thot-D-07.webp"
    },
    
    {
        id: 71,
        name: "Eight of Disks",
        description: "Skill, labor, craft, apprenticeship, expertise, practical ability. Mercury in Earth. Practical ability and skill in material work.",
        image: "https://steve-p.org/cards/Thot-D-08.webp"
    },
    
    {
        id: 72,
        name: "Nine of Disks",
        description: "Abundance, material wealth, luxury, independence, security, harvest. Venus in Earth. Gain and riches, attainment.",
        image: "https://steve-p.org/cards/Thot-D-09.webp"
    },
    
    {
        id: 73,
        name: "Ten of Disks",
        description: "Inheritance, legacy, family wealth, completion, generational abundance. Mercury in Earth. Material completion and inheritance.",
        image: "https://steve-p.org/cards/Thot-D-10.webp"
    },
    
    {
        id: 74,
        name: "Princess of Disks",
        description: "Youth, beauty, practicality, skill, grounded energy. Earth in Earth. Messenger of material truth and usefulness.",
        image: "https://steve-p.org/cards/Thot-D-PS.webp"
    },
    
    {
        id: 75,
        name: "Prince of Disks",
        description: "Stability, trustworthiness, responsibility, honest dealing, practical skill. Air in Earth. The capable one, skilled and productive.",
        image: "https://steve-p.org/cards/Thot-D-PN.webp"
    },
    
    {
        id: 76,
        name: "Queen of Disks",
        description: "Nurturing abundance, generosity, prosperity, grounded wisdom. Water in Earth. The throne of fertility and plenty.",
        image: "https://steve-p.org/cards/Thot-D-QU.webp"
    },
    
    {
        id: 77,
        name: "Knight of Disks",
        description: "Endurance, reliability, practicality, material security, steadiness. Fire in Earth. The protector of riches, swift in practical matters.",
        image: "https://steve-p.org/cards/Thot-D-KN.webp"
    }
];
