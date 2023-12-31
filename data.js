const data = [
    {
        "name": "Jess",
        "objective": "Start your turn with a crystal under your control at each location.",
        "style": {
            "color": "#651460",
            "border": "groove"
        },
        "guide": [
            {
                "heading": "Jess' Objective",
                "body": [
                    "To achieve Jess' objective, you must start your turn with at least one Crystal under your control at each location. Crystals are Items in your Fate deck. In order to get a Crystal under your control, first it must be played from your Fate deck to the top of the board, then you must Grab it to bring it under your control."
                ]
            },
            {
                "heading": "Special Setup",
                "body": [
                    "Jess has four fate piles, one at each location. When the game starts, shuffle the Fate deck and deal the cards evenly across all 4 locations."
                ]
            },
            {
                "heading": "Fating Jess",
                "body": [
                    "When another player Fates Jess, that player must choose a location with a Fate deck. They then reveal the top 2 cards from that location's Fate Deck, play one to that location, and discard the other.",
                    "Once all four fate decks are empty, immediately shuffle the Fate discard pile and deal the cards evenly across all 4 locations.",
                    "Note: Fate cards must always be played to the same location as the deck they came from.",
                    "Beware: Fate Items cover the top two Actions at their location, just like Heros."
                ]
            },
            {
                "heading": "Controlling your Fate",
                "body": [
                    "Unlike other Villains, Jess can play and discard cards from her own Fate deck using Rummage Around, Deal with it Later, and Todo list. Using these cards will help you to reveal and play Crystals as soon as possible. Sneaky Peak also allows you to see which cards are in one of your Fate decks."
                ]
            },
            {
                "heading": "Grabbing & Moving Items",
                "body": [
                    "Hamster, Helping Hand, and Yoink! are cards that let you Grab Items. When you Grab an Item, move it to the bottom of your board. That Item is now under your control. Ignore its ability.",
                    "Hamster, Shimmy, and Backpack are cards that help you to move Items. They can be used to move Items under you control, but also Items that are not under your control.",
                    "Note: Move an Item or Ally Actions cannot be used to move Items that are not under your control."
                ]
            },
            {
                "heading": "Hamsters",
                "body": [
                    "The Hamsters are very useful Allies for moving and Grabbing Items. Whenever a Hamster is moved, you may move it to any location in your realm. When you do, you can also move an Item from Hamster's old location to its new one. In addition to this, you can Activate Hamster to Grab an Item at its location."
                ]
            },
            {
                "heading": "Foot Stool",
                "body": [
                    "Foot Stool allows you to perform actions that are covered by Items at its location. Can be handy when there are lots of Items in your Realm!"
                ]
            }
        ],
        "locations": [
            {
                "name": "Jess' Room",
                "upper": "Play Card         | Move Item or Ally",
                "lower": "Move Item or Ally | Gain 1           "
            },
            {
                "name": "The Lounge",
                "upper": "Gain 1 | Discard ",
                "lower": "Fate   | Activate"
            },
            {
                "name": "The Gym",
                "upper": "Play Card | Move Item or Ally",
                "lower": "Gain 3    | Play Card        "
            },
            {
                "name": "Newton Park Campus",
                "upper": "Gain 2    | Fate   ",
                "lower": "Play Card | Discard"
            }
        ],
        "villain_deck": [
            {
                "name": "Yoink!",
                "kind": "Effect",
                "ability": "Grab an Item at Jess' location.",
                "cost": 2,
                "copies": 3
            },
            {
                "name": "Yeet!",
                "kind": "Effect",
                "ability": "Discard an Item in Jess' Realm.",
                "cost": 0,
                "copies": 2
            },
            {
                "name": "It's Here Somewhere",
                "kind": "Effect",
                "ability": "Choose an Item or Effect from your discard pile and put it in your hand.",
                "cost": 2,
                "copies": 3
            },
            {
                "name": "Sneaky Peak",
                "kind": "Effect",
                "ability": "Choose one of your Fate decks. Look at all the cards. Shuffle and return them.",
                "cost": 2,
                "copies": 2
            },
            {
                "name": "Rummage Around",
                "kind": "Effect",
                "ability": "Choose a Fate pile. Reveal cards from the top of the pile until you reveal an Item. Play that Item. Discard the rest.",
                "cost": 0,
                "copies": 3
            },
            {
                "name": "ADHD",
                "ability": "Perform one available action at a location adjacent to Jess. ADHD cannot be used to perform Fate actions.",
                "kind": "Effect",
                "cost": 0,
                "copies": 3
            },
            {
                "name": "Hamster",
                "kind": "Ally",
                "ability": "When Hamster is moved, you may move it to any location. You may move an item from its old location to its new location./[Activate] : Pay 1 Power. Grab an Item at Hamster's location.",
                "cost": 3,
                "strength": 1,
                "copies": 2,
                "font": "small"
            },
            {
                "name": "Backpack",
                "kind": "Item",
                "ability": "When Backpack is moved, you may move up to two items from its old location to its new location.",
                "cost": 3
            },
            {
                "name": "Pretty Please",
                "kind": "Condition",
                "ability": "During their turn, if another player targets you with a Fate action, you may play Pretty Please. You choose which of your Fate decks they must draw from.",
                "copies": 2
            },
            {
                "name": "Helping Hand",
                "kind": "Condition",
                "ability": "During their turn, if another player has an Ally with Strength 4 or more, you may play Helping Hand. Grab an Item at Jess' location.",
                "copies": 2
            },
            {
                "name": "Shimmy",
                "kind": "Effect",
                "ability": "Move an Item or Ally to an adjacent location.",
                "cost": 1,
                "copies": 2
            },
            {
                "name": "Foot Stool",
                "kind": "Item",
                "ability": "If Jess is at Foot Stool's location, you may perform actions that are covered at that location.",
                "cost": 3
            },
            {
                "name": "Todo list",
                "kind": "Item",
                "ability": "[Activate] Choose a Fate pile. Reveal cards from the top of the pile until you reveal an Item. Play that card. Discard the rest.",
                "cost": 1,
                "copies": 2
            },
            {
                "name": "Deal with it Later",
                "kind": "Effect",
                "ability": "Choose a location. You may discard each Item at that location. Put the Fate discard pile into that location's Fate pile and shuffle it.",
                "cost": 2,
                "copies": 2
            },
            {
                "name": "Shiny Rocks",
                "kind": "Effect",
                "ability": "Gain 2 Power for each location in your Realm that has a Crystal.",
                "cost": 0,
                "copies": 2
            }
        ],
        "fate_deck": [
            {
                "name": "Trinket",
                "kind": "Item",
                "ability": "If Jess moves to Trinket's location, she immediately losses 1 power.",
                "copies": 4
            },
            {
                "name": "Laundry",
                "kind": "Item",
                "ability": "If Laundry is revealed during a Fate action, you may play both cards revealed during that action.",
                "copies": 4
            },
            {
                "name": "Crystal",
                "kind": "Item",
                "ability": "The cost to perform a Move an Item or Ally action is increased by 1 Power.",
                "copies": 4
            },
            {
                "name": "Appointment",
                "kind": "Effect",
                "ability": "Jess must move to this location at the start of her next turn, even if she is already at this location.",
                "copies": 2
            },
            {
                "name": "Demotivation",
                "kind": "Effect",
                "ability": "Jess looses 1 Power for each Item at this location.",
                "copies": 2
            },
            {
                "name": "Stuff of Nightmares",
                "kind": "Effect",
                "ability": "Discard an Item or Ally from Jess' Realm."
            },
            {
                "name": "Guitar",
                "kind": "Item",
                "ability": "Other Items at Guitar's location cannot be moved."
            }
        ]
    },
    {
        "name": "Eli",
        "objective": "Put on a Show or Flash Mob while the Camera is rolling on two Actors.",
        "style": {
            "color": "#600b0b",
            "border": "dotted"
        },
        "guide": [
            {
                "heading": "Eli's Objective",
                "body": [
                    "To achieve Eli's objective, you must unlock the Backstage with a Backstage Pass and play the Camera to the Backstage. Then, you must activate the Camera to set it rolling. If you play Put on a Show or Flash Mob while the Camera is rolling and there are at least two Actors at its location, you win the game. Once Activated, the Camera will keep rolling until the start of your next turn.",
                    "Note: You can play the Camera to Backstage while it is locked, but cannot move or Activate the Camera until the Backstage is unlocked."
                ]
            },
            {
                "heading": "Special Setup",
                "body": [
                    "Place a Lock Token on the Backstage, as that location is locked at the beginning of the game."
                ]
            },
            {
                "heading": "Actors",
                "body": [
                    "Actor is a card type unique to Eli. All Actors are also Allies. They are powerful cards that can all assist you in reaching your Objective. The four Actors are Travis, Winona, Ona, and Norah.",
                    "You're On is a card that let's you find any Ally and put them in your hand, which can be a handy way to play the Actors you need early on."
                ]
            },
            {
                "heading": "Winona",
                "body": [
                    "When Eli and Winona are at the same location, you can still perform actions that are covered by Heros.",
                    "Note: If Winona moves during your turn, you may perform covered actions at your location when and only when Winona is at your location."
                ]
            },
            {
                "heading": "Travis",
                "body": [
                    "Travis can be very useful for trying to move two Actors and the Camera to the same location. When you move Travis, you may also move an Item or Ally from their old location to their new one."
                ]
            },
            {
                "heading": "Norah",
                "body": [
                    "Using an Activate action, you may move Norah to any location."
                ]
            },
            {
                "heading": "Ona",
                "body": [
                    "Using an Activate action, Ona lets you take a card from your discard pile."
                ]
            },
            {
                "heading": "Backstage Pass",
                "body": [
                    "Playing the Backstage Pass is vital for being able to use the Camera. When you play a Backstage Pass for the first time, unlock the Backstage by removing the Lock Token from the location. Backstage is now unlocked for the rest of the game",
                    "Once you have played Backstage Pass, you may play an Actor and discard Backstage Pass instead of paying the Actor's cost. This allows you to get Actors into your Realm using less Power."
                ]
            },
            {
                "heading": "The Creatures",
                "body": [
                    "Bird, Little Mouse, and Snake are Allies that add extra action symbols to your Realm. After the Ally has been played to a location, you may perform the extra action in addition to the other available actions there."
                ]
            }
        ],
        "locations": [
            {
                "name": "Eli's Room",
                "upper": "Play Card | Gain 2 ",
                "lower": "Fate      | Discard"
            },
            {
                "name": "The Lounge",
                "upper": "Discard | Fate     ",
                "lower": "Gain 1  | Play Card"
            },
            {
                "name": "The Theatre",
                "upper": "Activate | Play Card",
                "lower": "Gain 3   | Play Card"
            },
            {
                "name": "Backstage",
                "upper": "Play Card | Activate         ",
                "lower": "Vanquish  | Move Item or Ally"
            }
        ],
        "villain_deck": [
            {
                "name": "Little Mouse",
                "kind": "Ally",
                "ability": "This location gains [Gain 1]",
                "strength": 2,
                "cost": 1
            },
            {
                "name": "Bird",
                "kind": "Ally",
                "ability": "This location gains [Move Item or Ally]",
                "strength": 3,
                "cost": 2
            },
            {
                "name": "Snake",
                "kind": "Ally",
                "ability": "This location gains [Activate]",
                "strength": 4,
                "cost": 3
            },
            {
                "name": "Travis",
                "kind": "Actor",
                "ability": "When Travis is moved, you may move an Item or Ally from Travis' old location to their new location.",
                "cost": 4,
                "strength": 4
            },
            {
                "name": "Winona",
                "kind": "Actor",
                "ability": "When Eli is at Winona's location, Eli may perform actions covered by Heros.",
                "cost": 4,
                "strength": 4
            },
            {
                "name": "Ona",
                "kind": "Actor",
                "ability": "[Activate] Take a card from your discard pile and put it in your hand.",
                "cost": 4,
                "strength": 4
            },
            {
                "name": "Norah",
                "kind": "Actor",
                "ability": "[Activate] Move Norah to any location.",
                "cost": 4,
                "strength": 4
            },
            {
                "name": "Backstage Pass",
                "kind": "Item",
                "ability": "When Backstage Pass is played, unlock Backstage./When you play an Actor, you may discard Backstage Pass instead of paying the Actor's cost.",
                "cost": 2,
                "copies": 2
            },
            {
                "name": "Manuscript",
                "kind": "Item",
                "ability": "When Manuscript is played, attach it to an Ally. That Ally gets +1 Strength. When that Ally would be discarded, discard this Item instead.",
                "copies": 4,
                "cost": 1,
                "strength": "+1"
            },
            {
                "name": "Camera",
                "kind": "Item",
                "ability": "Camera can only be played to Backstage, even if it is locked./[Activate] Start the Camera rolling. At the start of your next turn, the Camera will stop rolling.",
                "cost": 6
            },
            {
                "name": "Show Prep",
                "kind": "Effect",
                "ability": "Choose either Item or Ally. Reveal cards from the top of your deck until you reveal a card of the chosen type. Put that card into your hand. Discard the rest.",
                "copies": 3,
                "cost": 1
            },
            {
                "name": "You're on!",
                "kind": "Effect",
                "ability": "Find an Ally from your deck or discard pile and put them in your hand. Shuffle your deck.",
                "cost": 1,
                "copies": 3
            },
            {
                "name": "Put on a Show",
                "kind": "Effect",
                "ability": "If the Camera is rolling and there are at least two actors at Camera's location, you win the game.",
                "cost": 3,
                "copies": 2
            },
            {
                "name": "Musical Number",
                "kind": "Effect",
                "ability": "Choose a location. You may move each Item and Ally in an adjacent location to that location.",
                "cost": 2,
                "copies": 2
            },
            {
                "name": "Break a Leg",
                "kind": "Effect",
                "ability": "Gain 1 Power for each Ally in your realm, up to 4 Power.",
                "cost": 0,
                "copies": 2
            },
            {
                "name": "Flash Mob",
                "kind": "Condition",
                "ability": "During their turn, if another player gains 2 or more Power, you may play Flash Mob. If the Camera is rolling and there are at least two actors at Camera's location, you win the game.",
                "copies": 2
            },
            {
                "name": "Step in Time",
                "kind": "Condition",
                "ability": "During their turn, if another player moves an Item or Ally, you may play Step in Time. Move an Ally or Item in your realm.",
                "copies": 2
            },
            {
                "name": "Razzle Dazzle",
                "kind": "Effect",
                "ability": "Choose a Hero. That Hero gets -2 Strength until the end of your turn.",
                "cost": 1,
                "copies": 2
            }
        ],
        "fate_deck": [
            {
                "name": "Karen",
                "kind": "Hero",
                "ability": "Eli must defeat Karen before defeating other Heros.",
                "strength": 4
            },
            {
                "name": "Harsh Critic",
                "kind": "Hero",
                "ability": "Eli cannot Put on a Show.",
                "strength": 4
            },
            {
                "name": "Theatre Snob",
                "kind": "Hero",
                "ability": "When Theatre Snob is played, discard all Manuscripts from their location.",
                "strength": 2,
                "copies": 2
            },
            {
                "name": "No.1 Fan",
                "kind": "Hero",
                "ability": "When No.1 Fan is played, you may move an Actor to their location.",
                "strength": 2,
                "copies": 2
            },
            {
                "name": "Tourist",
                "kind": "Hero",
                "ability": "Tourist gains +2 Strength for each Actor at their location.",
                "strength": 2,
                "copies": 2
            },
            {
                "name": "Phone Interference",
                "kind": "Item",
                "ability": "When Phone Interference is played, attach it to a Hero. Eli cannot perform Activate actions.",
                "copies": 2
            },
            {
                "name": "Refunds",
                "kind": "Effect",
                "ability": "Eli looses up to 2 Power.",
                "copies": 2
            },
            {
                "name": "Secret Stage Hatch",
                "kind": "Effect",
                "ability": "Choose a location in Eli's realm. Move each Item and each Ally at that location to an adjacent location",
                "copies": 2
            },
            {
                "name": "From the Top",
                "kind": "Effect",
                "ability": "Choose a location in Eli's realm. Move up to three Allies to that location."
            }
        ]
    },
    {
        "name": "Moss",
        "objective": "Have an Ally at each location and successfully Feed the Frogs.",
        "style": {
            "color": "#513005",
            "border": "ridge"
        },
        "guide": [
            {
                "heading": "Moss' Objective",
                "body": [
                    "To achieve Moss' Objective, you must find and play Sunny to unlock Bristol Aquarium. Once you have, you must have at least one Ally at every location and then play Feed the Frogs. When you do, you will reveal and play the top card of your Fate deck. If after that, the total Strength of all Heros in your realm is less than the total Strength of all Allies in your Realm, you win the game.",
                    "Beware: If Shark is revealed as part of Feed the Frogs, you cannot win the game."
                ]
            },
            {
                "heading": "Special Setup",
                "body": [
                    "Place a Lock Token on Bristol Aquarium, as that location is locked at the beginning of the game."
                ]
            },
            {
                "heading": "Amphibians Abound!",
                "body": [
                    "Moss has many Allies they can use to achieve their goal and Vanquish Heros, including Big Frog, Little Guy, Poison Dart Frog, and Toad. The other Allies are Lizard and Sunny. You will need to make sure you have enough Allies to achieve your goal, but also to prevent your Heros from becoming unmanageable!"
                ]
            },
            {
                "heading": "Out of Control!",
                "body": [
                    "Moss is able to loose control of their Allies. When an Ally goes out of control, they are moved to the top of the board and are treated as a Hero with the same Strength. Similarly, Moss is able to gain control of Heros. When Moss gains control of a Hero, they are moved to the bottom of the board and are treated as an Ally with the same Strength.",
                    "Ignore the ability of out of control Allies. Ignore the ability of controlled Heros.",
                    "Note: When Moss looses or gains control of an Ally or Hero, discard any attached items on that Ally or Hero."
                ]
            },
            {
                "heading": "Sunny",
                "body": [
                    "Playing Sunny is an important step in winning the game. When you play Sunny, unlock Bristol Aquarium by removing the Lock Token from the location. Bristol Aquarium is now unlocked for the rest of the game.",
                    "Phone a Friend allows you to find an Ally from your deck or discard pile and put it in your hand. This can be a helpful way to find Sunny sooner."
                ]
            },
            {
                "heading": "X39",
                "body": [
                    "On each turn, X39 can move to an adjacent location before Moss moves. Whenever X39 moves, it can move an Ally from its old location to its new one. Handy for moving Allies around your board! (Assuming X39 is where you need it to be...)",
                    "Note: X39 cannot be played or moved to Moss' Room."
                ]
            }
        ],
        "locations": [
            {
                "name": "Moss' Room",
                "upper": "Play Card | Discard",
                "lower": "Gain 2    | Fate   "
            },
            {
                "name": "The Lounge",
                "upper": "Play Card | Move Item or Ally",
                "lower": "Gain 3    | Play Card        "
            },
            {
                "name": "Comfortable Place",
                "upper": "Play Card | Gain 1  ",
                "lower": "Discard   | Vanquish"
            },
            {
                "name": "Bristol Aquarium",
                "upper": "Fate      | Play Card        ",
                "lower": "Move Hero | Move Item or Ally"
            }
        ],
        "villain_deck": [
            {
                "name": "X39",
                "kind": "Item",
                "ability": "X39 cannot be moved to played to Moss' Room./Before Moss moves, you may move X39 to an adjacent location./When X39 is moved, you may move an Ally from its old location to its new location.",
                "cost": 3,
                "font": "small"
            },
            {
                "name": "Little Guy",
                "kind": "Ally",
                "cost": 2,
                "ability": "You may play any number of Little Guys as part of the same Play a Card action.",
                "strength": 2,
                "copies": 3
            },
            {
                "name": "Big Frog",
                "kind": "Ally",
                "ability": "When performing a Vanquish action, Big Frog may be used to defeat a Hero at their location or an adjacent location.",
                "strength": 3,
                "cost": 3,
                "copies": 3
            },
            {
                "name": "Poison Dart Frog",
                "kind": "Ally",
                "ability": "All Heros at Poison Dart Frog's location get -1 Strength.",
                "strength": 2,
                "cost": 2,
                "copies": 2
            },
            {
                "name": "Toad",
                "kind": "Ally",
                "ability": "When Toad is played, you may move each Hero or Ally at its location to an adjacent location.",
                "strength": 2,
                "cost": 2
            },
            {
                "name": "Lizard",
                "kind": "Ally",
                "ability": "When Lizard is moved, you may move it to any location.",
                "strength": 2,
                "cost": 2
            },
            {
                "name": "Sunny",
                "kind": "Ally",
                "ability": "When Sunny is played, unlock Bristol Aquarium./The cost to play Allies to Sunny's location is reduced by 1 Power./If Sunny is moved to the top of the board, discard them instead.",
                "strength": 4,
                "cost": 4,
                "font": "small"
            },
            {
                "name": "Feed the Frogs",
                "kind": "Effect",
                "ability": "If there is an Ally at each location, reveal and play the top card of your Fate deck. If the total Strength of all Heros in your Realm is less than the total Strength of all Allies in your Realm, you win the game. If not, gain 3 Power.",
                "cost": 4,
                "copies": 3,
                "font": "small"
            },
            {
                "name": "Crickets",
                "kind": "Item",
                "ability": "When Crickets is played, attach it to an Ally. That Ally gets +1 Strength. When that Ally would be discarded, discard this Item instead.",
                "strength": "+1",
                "cost": 1,
                "copies": 2
            },
            {
                "name": "Take a Chance",
                "kind": "Effect",
                "ability": "Choose either Item, Ally, or Effect. Shuffle your discard pile and reveal up to 4 cards at random. Put all cards of the chosen kind into your hand. Discard the rest.",
                "cost": 3,
                "copies": 2
            },
            {
                "name": "Gotcha!",
                "kind": "Effect",
                "ability": "Defeat a Hero with a Strength of 4 or less and move them to the bottom of your board. That Hero is now an Ally under your control. The cost to play Gotcha! is half the Hero's Strength rounded up.",
                "cost": "?",
                "copies": 3
            },
            {
                "name": "Wild Animals",
                "kind": "Effect",
                "ability": "Perform a Vanquish action. Move the Allies involved to the top of your board. Those Allies are now Heros out of your control.",
                "cost": 0,
                "copies": 3
            },
            {
                "name": "Get Back Here",
                "kind": "Condition",
                "ability": "During their turn, if another player targets you with a Fate action, you may play Get Back Here. Defeat a Hero with a Strength of 4 or less and move them to the bottom of your board. That Hero is now an Ally under your control.",
                "copies": 2,
                "font": "small"
            },
            {
                "name": "Reptile Shop",
                "kind": "Condition",
                "ability": "During their turn, if another player has two or more Allies in their Realm, you may play Reptile Shop. Play an Ally from your hand for free.",
                "copies": 2
            },
            {
                "name": "Phone a Friend",
                "kind": "Effect",
                "ability": "Search your deck or discard pile for any Ally. Put it in your hand. Shuffle your deck.",
                "cost": 3
            },
            {
                "name": "Aquarium Transfer",
                "kind": "Effect",
                "ability": "Defeat a Hero with a Strength of 7 or less and move them to the bottom of your board. That Hero is now an Ally under your control.",
                "cost": 4
            }
        ],
        "fate_deck": [
            {
                "name": "Sudden Noise",
                "kind": "Effect",
                "ability": "Move an Ally to the top of your board. That Ally is now a Hero out of Moss' control.",
                "copies": 3
            },
            {
                "name": "Octopus",
                "kind": "Hero",
                "ability": "When Octopus is played, you may move each Ally and Hero in Moss' realm to an adjacent location.",
                "strength": 6
            },
            {
                "name": "Clown Fish",
                "kind": "Hero",
                "ability": "If Moss moves to Clown Fish's location, Moss immediately loses 1 Power.",
                "strength": 2
            },
            {
                "name": "Shark",
                "kind": "Hero",
                "ability": "Moss cannot win.",
                "strength": 6
            },
            {
                "name": "Puffer Fish",
                "kind": "Hero",
                "ability": "If there is an Ally or Hero with a Strength of 3 or more at Puffer Fish's location, Puffer Fish gets +3 Strength.",
                "strength": 2
            },
            {
                "name": "Sunken Ship",
                "kind": "Effect",
                "ability": "Discard an Item in Moss' realm."
            },
            {
                "name": "Sardines",
                "kind": "Hero",
                "ability": "When Sardines is played, find all Sardines in Moss' Fate deck and play them to the same location. Shuffle Moss' Fate deck.",
                "strength": 1,
                "copies": 3
            },
            {
                "name": "Loose Crickets",
                "kind": "Item",
                "ability": "Attach Loose Crickets to a Hero. Moss must defeat Heroes with Loose Crickets attached to them before defeating other Heroes.",
                "copies": 2
            },
            {
                "name": "Fish Food",
                "kind": "Item",
                "ability": "When Fish Food is played, attach it to a Hero. That Hero gets +1 Strength.",
                "strength": "+1",
                "copies": 2
            }
        ]
    },
    {
        "name": "Jamie",
        "objective": "Start your turn with 10 Strength in the Painting Pile.",
        "style": {
            "color": "#053a14",
            "border": "outset"
        },
        "guide": [
            {
                "heading": "Jamie's Objective",
                "body": [
                    "Jamie does not have a Vanquish action in their Realm. Instead, they paint pictures of Heros to defeat them. To do this, they must collect Paint and then Paint a Picture at the Hero's location.",
                    "To achieve Jamie's Objective, you will need to play all three Supplies at least once, and then defeat Heros totalling 10 or more Strength."
                ]
            },
            {
                "heading": "Supplies",
                "body": [
                    "Supply is a card type unique to Jamie. Supplies function the same way as Effects, with one exception. The first time you play each Supply, after doing what it says, put it below your board. If you play a Supply that you've played before, do what it says, and then discard it.",
                    "As soon as you have played all three Supplies (Paint Brushes, Watercolours, and Sketchbook), any Heros you defeat will now go into the Painting Pile instead of the discard pile. Heros cannot leave the Painting Pile unless you are Fated.",
                    "Note: You must still discard any attached Items on a Hero when you defeat them."
                ]
            },
            {
                "heading": "Collecting Paint",
                "body": [
                    "Paint Mixing, Watercolours, and Sketchbook are all cards Jamie can use to collect Paint. When you collect Paint, put Power tokens on your board to indicate how much Paint you have.",
                    "Note: Paint is not considered Power. Paint may not be used to pay a card or Ability's Cost. Having Paint or collecting Paint from the Supply do not trigger Conditions that require having or gaining Power."
                ]
            },
            {
                "heading": "Paint a Picture",
                "body": [
                    "When you play Paint a Picture, Jamie must be at the same location as the Hero being defeated.",
                    "You must also pay Paint equal to the Hero's Strength, which may be modified by other cards in the Realm. Remove that many Paint from your board and return it to the Supply, and defeat the chosen Hero.",
                    "Note: If you do not have enough Paint to defeat a Hero, you may not play Paint a Picture."
                ]
            },
            {
                "heading": "Animal Watching",
                "body": [
                    "Jamie can play cards from their own Fate deck. Observation Kit is an Item that requires you to reveal a card from your Fate deck whenever you move to its location. Owl Noises is an Effect that allows you to play a Hero from your Fate deck. But beware, Heros played this way must be played to your location.",
                    "Note: You may discard Observation Kit each time you use it, but only if it is still under your control after the revealed Hero has been played."
                ]
            },
            {
                "heading": "Hawk",
                "body": [
                    "Hawk is a powerful Ally to play as early as possible. On each turn, before you move your Villain, you may move Hawk to any location and perform one action that is available at his new location.",
                    "Bird Trainer allows you to find a Hawk from your deck or discard pile and put him in your hand.",
                    "Note: Hawk may not perform Fate actions."
                ]
            }
        ],
        "locations": [
            {
                "name": "Jamie's Room",
                "upper": "Gain 1    | Move Hero",
                "lower": "Play Card | Fate     "
            },
            {
                "name": "The Lounge",
                "upper": "Gain 2    | Move Item or Ally",
                "lower": "Play Card | Discard          "
            },
            {
                "name": "Newton Park Campus",
                "upper": "Fate   | Move Hero",
                "lower": "Gain 1 | Play Card"
            },
            {
                "name": "The Falconry",
                "upper": "Play Card | Discard  ",
                "lower": "Gain 3    | Play Card"
            }
        ],
        "villain_deck": [
            {
                "name": "Paint a Picture",
                "kind": "Effect",
                "cost": 0,
                "ability": "Choose a Hero at Jamie's location. Pay paint equal to the Hero's Strength to defeat that Hero.",
                "copies": 4
            },
            {
                "name": "Hawk",
                "kind": "Ally",
                "ability": "Before Jamie moves, you may move Hawk to any location and perform one available action at his new location. Hawk cannot perform Fate actions.",
                "cost": 3,
                "strength": 4
            },
            {
                "name": "Owl Noises",
                "kind": "Effect",
                "ability": "Reveal cards from the top of your Fate deck until you reveal a Hero. Play that Hero to your location. Discard the rest.",
                "cost": 0,
                "copies": 2
            },
            {
                "name": "Watercolours",
                "kind": "Supply",
                "ability": "Collect 1 Paint for each Hero in your Realm.",
                "cost": 1,
                "copies": 3
            },
            {
                "name": "Paint Brushes",
                "kind": "Supply",
                "ability": "Choose an Effect or Supply from your discard pile and put it in your hand.",
                "cost": 1,
                "copies": 3
            },
            {
                "name": "Sketchbook",
                "kind": "Supply",
                "ability": "Collect 5 paint.",
                "cost": 3
            },
            {
                "name": "Repair Work",
                "kind": "Effect",
                "ability": "Choose an Item or Supply from your discard pile and put it into your hand.",
                "cost": 1
            },
            {
                "name": "Bird Trainer",
                "kind": "Effect",
                "ability": "If Hawk is in your realm, you may move each Hero with a Strength of 3 or less to an adjacent location. If not, find Hawk and put Hawk in your hand.",
                "cost": 3
            },
            {
                "name": "Observation Kit",
                "kind": "Item",
                "ability": "When Jamie moves to this location, reveal the top card of your fate deck. If it is a Hero, play it to this location. If not, discard it. You may then discard Observation Kit.",
                "cost": 2,
                "copies": 2
            },
            {
                "name": "Organised Drawers",
                "kind": "Item",
                "ability": "At the end of each turn, draw one extra card.",
                "cost": 3,
                "copies": 2
            },
            {
                "name": "A Way With Animals",
                "kind": "Effect",
                "ability": "On this turn, you may perform actions that are covered by a Hero at your location.",
                "cost": 0,
                "copies": 3
            },
            {
                "name": "Mischievous",
                "kind": "Condition",
                "ability": "During their turn, if another player has two or more Items in their Realm, you may play Mischievous. Reveal and play the top card of their Fate deck.",
                "copies": 2
            },
            {
                "name": "Charity Shopping",
                "kind": "Condition",
                "ability": "During their turn, if another player gains 3 power, you may play Shopping Spree. Draw four cards into your hand, then discard any four cards.",
                "copies": 2
            },
            {
                "name": "Paint Mixing",
                "kind": "Effect",
                "ability": "Collect up to 5 Paint. The cost to play Paint Mixing is equal to the amount of Paint collected.",
                "copies": 3,
                "cost": "?"
            }
        ],
        "fate_deck": [
            {
                "name": "Bear",
                "kind": "Hero",
                "ability": "When Bear is played, discard all Items from her location.",
                "strength": 6
            },
            {
                "name": "Owl",
                "kind": "Hero",
                "ability": "All other Heros gain +1 Strength.",
                "strength": 3
            },
            {
                "name": "Deer",
                "kind": "Hero",
                "ability": "When you play another Hero to this location, you may move Deer to an adjacent location.",
                "strength": 3
            },
            {
                "name": "Badger",
                "kind": "Hero",
                "ability": "Badger gains +2 Strength if there are other Heros at their location.",
                "strength": 3
            },
            {
                "name": "Frog",
                "kind": "Hero",
                "ability": "Jamie must defeat Frog before defeating other Heros.",
                "strength": 2
            },
            {
                "name": "Squirrel",
                "kind": "Hero",
                "ability": "If Squirrel is revealed during a Fate action, you may play both cards revealed during that action.",
                "strength": 2
            },
            {
                "name": "Rabbit",
                "kind": "Hero",
                "ability": "Rabbit gets -1 Strength if there are other Heros at her location.",
                "strength": 2
            },
            {
                "name": "Rainy Day",
                "kind": "Effect",
                "ability": "Jamie looses up to 2 Paint.",
                "copies": 2
            },
            {
                "name": "Berries",
                "kind": "Item",
                "ability": "When Berries is played, attach it to a Hero. That Hero gets +2 Strength.",
                "strength": "+2",
                "copies": 3
            },
            {
                "name": "Magpie",
                "kind": "Hero",
                "ability": "When Magpie is played, choose an Item at his location and attach it to him. Jamie cannot use the Item. When Magpie is defeated, the Item is returned to Jamie at the same location.",
                "strength": 3
            },
            {
                "name": "Termites",
                "kind": "Effect",
                "ability": "Discard an Item from Jamie's realm."
            },
            {
                "name": "Lifelike",
                "kind": "Effect",
                "ability": "Play a Hero with Strength 3 or less from the Painting Pile."
            }
        ]
    },
    {
        "name": "J",
        "objective": "Start your turn with a Plant with 3 or more Strength at each location.",
        "style": {
            "color": "#00453b",
            "border": "double"
        },
        "guide": [
            {
                "heading": "J's Objective",
                "body": []
            },
            {
                "heading": "Plants",
                "body": [
                    "Plant is a card type unique to J. Any card which is a Plant is also an Ally. However, the Strength of a Plant is equal to the number of power tokens on the plant. Plants can never have more than 4 Strength.",
                    "When a Plant is played, add as many Power tokens as the Strength shown on the card. When a Plant gains or looses Strength, add or remove that many tokens to the Plant. Power tokens are added and removed from the supply."
                ]
            },
            {
                "heading": "Vanquishing",
                "body": [
                    "When Vanquishing, you cannot use more than one Plant. When a Plant is used to Vanquish, instead of being discarded, it looses Strength equal to the Strength of the defeated Hero. If there are other Allies involved in the Vanquish, the amount of Strength the Plant looses is reduced by the combined Strength of the other Allies."
                ]
            },
            {
                "heading": "Watering Can",
                "body": [
                    "Watering Can is one of the main ways Plants gain Strength. At the end of your turn, all Plants at Watering Can's location gain 1 Strength. If there are multiple Watering Cans in one location, each of them add 1 Strength to each Plant at that location.",
                    "Note: If multiple card abilities apply at the end of your turn, perform Watering Can's ability before performing other abilities."
                ]
            },
            {
                "heading": "Little Plant",
                "body": [
                    "Little Plant makes it more difficult for opponents to play a Hero to its location, especially if it has a higher Strength. But beware, if a strong enough Hero is player to its location, Little Plant is discarded."
                ]
            },
            {
                "heading": "Spider Plant",
                "body": [
                    "Spider Plant allows you to have more control over the layout of Heros on your board, and makes it more difficult for opponents to play Heros to its location.",
                    "Note: If a Hero is played to Spider Plant's location, perform that Heros ability before performing Spider Plant's. ability"
                ]
            },
            {
                "heading": "Flowering Plant",
                "body": [
                    "Flowering Plant reduces the Strengths of of all Heros at its location by 2. But beware, if there are Heros at its location at the end of your turn, Flowering Plant looses 1 Strength."
                ]
            },
            {
                "heading": "Vladimir Valentine",
                "body": [
                    "Vladimir Valentine prevents opponents from playing Heros to its location. However, it automatically looses one Strength each turn, and is discarded when it reaches 0 Strength."
                ]
            },
            {
                "heading": "Plushies",
                "body": [
                    "Plushie is a useful, as they allow to you defeat Heros without loosing Strength on your Plants. They are also useful for defeating Heros that are too strong for your Plants",
                    "Tagliatelle is a powerful Ally to play as early as possible. On each turn, before you move your Villain, you may move Tagliatelle to any location and perform one action that is available at his new location.",
                    "Note: Tagliatelle may not perform Fate actions."
                ]
            },
            {
                "heading": "Computer",
                "body": [
                    "Computer is a powerful card that allows to you draw up to 5 cards the end of your turn."
                ]
            }
        ],
        "locations": [
            {
                "name": "J's Room",
                "upper": "Move Item or Ally | Play Card",
                "lower": "Gain 1            | Vanquish "
            },
            {
                "name": "The Lounge",
                "upper": "Gain 2    | Fate   ",
                "lower": "Play Card | Discard"
            },
            {
                "name": "Garden Centre",
                "upper": "Discard | Play Card",
                "lower": "Gain 3  | Play Card"
            },
            {
                "name": "Newton Park Campus",
                "upper": "Gain 1 | Move Item or Ally",
                "lower": "Fate   | Play Card        "
            }
        ],
        "villain_deck": [
            {
                "name": "Little Plant",
                "kind": "Plant",
                "ability": "Heros must have a Strength greater than Little Plant to be played to this location./Discard this Plant when a Hero is played to this location.",
                "cost": 2,
                "strength": 1,
                "copies": 3
            },
            {
                "name": "Flowering Plant",
                "kind": "Plant",
                "ability": "Heros at this location get -2 Strength./At the end of each turn, if there is a Hero at this location, Flowering Plant looses -1 Strength.",
                "cost": 3,
                "strength": 2,
                "copies": 2
            },
            {
                "name": "Spider Plant",
                "kind": "Plant",
                "ability": "When a Hero is played or moved to this location, J may move them to an adjacent location.",
                "cost": 3,
                "strength": 2,
                "copies": 2
            },
            {
                "name": "Vladimir Valentine",
                "kind": "Plant",
                "cost": 2,
                "ability": "Heros cannot be played to this location./At the end of each turn, Vladimir Valentine looses 1 Strength. Discard Vladimir Valentine if it has 0 Strength.",
                "strength": 2
            },
            {
                "name": "Watering Can",
                "kind": "Item",
                "ability": "At the end of each turn, each Plant at Watering Can's location gains 1 Strength.",
                "cost": 2,
                "copies": 5
            },
            {
                "name": "Tagliatelle",
                "kind": "Ally",
                "ability": "Before J moves, you may move Tagliatelle to any location and perform one available action at his new location. Tagliatelle cannot perform Fate actions.",
                "strength": 1,
                "cost": 3
            },
            {
                "name": "Plushie",
                "kind": "Ally",
                "cost": 3,
                "strength": 4,
                "copies": 2
            },
            {
                "name": "Spring Clean",
                "kind": "Effect",
                "ability": "You may move up to two Items or Allies to an adjacent location.",
                "cost": 2,
                "copies": 2
            },
            {
                "name": "Like to be a Tree",
                "kind": "Effect",
                "ability": "Gain 1 Power for each location in your realm with a Plant.",
                "cost": 0,
                "copies": 2
            },
            {
                "name": "Keen Eye",
                "kind": "Effect",
                "ability": "Choose a Plant. That plant gains +2 Strength.",
                "cost": 0,
                "copies": 3
            },
            {
                "name": "Computer",
                "kind": "Item",
                "ability": "At the end of each turn, draw until you have five cards in your hand.",
                "cost": 4
            },
            {
                "name": "Not Dead Yet",
                "kind": "Condition",
                "ability": "During their turn, if another player defeats a Hero with Strength 3 or more, you may play Not Dead Yet. Choose a Plant. That Plant gets +2 Strength.",
                "copies": 2
            },
            {
                "name": "Surprise",
                "kind": "Condition",
                "ability": "During their turn, if another player has 6 or more Power, you may play Surprise. Reveal and play the top card of that player's Fate deck.",
                "copies": 2
            },
            {
                "name": "Planned Ahead",
                "kind": "Effect",
                "ability": "You may move an Ally to any location. Perform a Vanquish action.",
                "cost": 1,
                "copies": 2
            }
        ],
        "fate_deck": [
            {
                "name": "Creepy Crawlies",
                "kind": "Hero",
                "ability": "When Creepy Crawlies is played, all plants at its location loose -2 Strength.",
                "strength": 2,
                "copies": 2
            },
            {
                "name": "Cricket",
                "kind": "Hero",
                "ability": "When Cricket is played or moved, you may move J to any location.",
                "strength": 2,
                "copies": 2
            },
            {
                "name": "Caterpillar",
                "kind": "Hero",
                "ability": "Plants cannot be played to Caterpillar's location.",
                "strength": 5,
                "copies": 2
            },
            {
                "name": "Grass Hopper",
                "kind": "Hero",
                "ability": "When Grass Hopper is played, you may move a Hero to any location.",
                "strength": 2,
                "copies": 2
            },
            {
                "name": "Mealybug",
                "kind": "Item",
                "ability": "When Mealybug is played, attach it to a Plant. That Plant has 0 Strength./If a Vanquish action is performed at this location, discard Mealybug.",
                "copies": 2
            },
            {
                "name": "Juicy Leaf",
                "kind": "Item",
                "ability": "When Juicy Leaf is played, attach it to a Hero. J must defeat Heroes with Juicy Leaf before defeating other Heroes."
            },
            {
                "name": "Withered Away",
                "kind": "Effect",
                "ability": "Discard a Plant or Item from a location in J's realm that has a Hero or attached Item.",
                "copies": 2
            },
            {
                "name": "Hot Weather",
                "kind": "Effect",
                "ability": "All Plants at a location with a Hero loose -1 Strength.",
                "copies": 2
            }
        ]
    }
]