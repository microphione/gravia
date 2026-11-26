var e = {
	format: 1,
	items: [
		{
			id: "rat-tail",
			name: "Rat tail",
			stackLimit: 10,
			kind: "other",
			weight: 100,
			value: 2
		},
		{
			id: "cheese",
			name: "Cheese",
			stackLimit: 10,
			kind: "food",
			weight: 300,
			heal: 10,
			value: 5
		},
		{
			id: "bread",
			name: "Bread",
			stackLimit: 10,
			kind: "food",
			weight: 300,
			heal: 20,
			value: 6
		},
		{
			id: "rat-corpse",
			name: "Rat corpse",
			stackLimit: 1,
			kind: "other",
			weight: 500,
			value: 1
		},
		{
			id: "gold-coin",
			name: "Zloty",
			stackLimit: 100,
			kind: "other",
			weight: 10,
			value: 1
		},
		{
			id: "backpack",
			name: "Backpack",
			stackLimit: 1,
			kind: "other",
			weight: 1e3,
			value: 20,
			slot: "backpack"
		},
		{
			id: "leather-cap",
			name: "Leather cap",
			stackLimit: 1,
			kind: "other",
			weight: 300,
			value: 12,
			slot: "helmet",
			armour: 1,
			visibility: 30
		},
		{
			id: "wooden-amulet",
			name: "Wooden amulet",
			stackLimit: 1,
			kind: "other",
			weight: 50,
			value: 10,
			slot: "amulet",
			armour: 0
		},
		{
			id: "padded-vest",
			name: "Padded vest",
			stackLimit: 1,
			kind: "other",
			weight: 1500,
			value: 25,
			slot: "armour",
			armour: 1,
			visibility: 60
		},
		{
			id: "linen-trousers",
			name: "Linen trousers",
			stackLimit: 1,
			kind: "other",
			weight: 600,
			value: 10,
			slot: "legs",
			armour: 1,
			visibility: 70
		},
		{
			id: "leather-boots",
			name: "Leather boots",
			stackLimit: 1,
			kind: "other",
			weight: 500,
			value: 10,
			slot: "boots",
			armour: 0,
			visibility: 25
		},
		{
			id: "work-gloves",
			name: "Work gloves",
			stackLimit: 1,
			kind: "other",
			weight: 200,
			value: 8,
			slot: "gloves",
			armour: 0
		},
		{
			id: "copper-ring",
			name: "Copper ring",
			stackLimit: 1,
			kind: "other",
			weight: 20,
			value: 15,
			slot: "ring",
			armour: 0
		},
		{
			id: "plank-shield",
			name: "Plank shield",
			stackLimit: 1,
			kind: "other",
			weight: 2500,
			value: 20,
			slot: "shield",
			armour: 1,
			visibility: 70
		},
		{
			id: "grey-fang",
			name: "Grey fang",
			stackLimit: 10,
			kind: "other",
			weight: 100,
			value: 40
		},
		{
			id: "ward-charm",
			name: "Warding charm",
			stackLimit: 1,
			kind: "other",
			weight: 50,
			value: 12,
			slot: "amulet",
			armour: 0,
			keepsBackpack: !0
		},
		{
			id: "house-list",
			name: "House list",
			stackLimit: 1,
			kind: "other",
			weight: 100,
			value: 0,
			houseBound: !0
		},
		{
			id: "house-lost-note",
			name: "Notice: house lost, rent unpaid",
			stackLimit: 1,
			kind: "other",
			weight: 0,
			value: 0
		},
		{
			id: "healing-herb",
			name: "Healing herb",
			stackLimit: 20,
			kind: "other",
			weight: 50,
			value: 4
		},
		{
			id: "small-health-potion",
			name: "Small health potion",
			stackLimit: 10,
			kind: "potion-health",
			weight: 200,
			heal: 25,
			value: 15
		},
		{
			id: "small-mana-potion",
			name: "Small mana potion",
			stackLimit: 10,
			kind: "potion-mana",
			weight: 200,
			mana: 20,
			value: 15
		},
		{
			id: "health-potion",
			name: "Health potion",
			stackLimit: 10,
			kind: "potion-health",
			weight: 250,
			heal: 60,
			value: 45,
			recipe: [{
				item: "healing-herb",
				count: 3
			}]
		},
		{
			id: "taming-bell",
			name: "Taming bell",
			stackLimit: 10,
			kind: "tool",
			tool: "taming",
			weight: 100,
			value: 20
		},
		{
			id: "iron-ore",
			name: "Iron ore",
			stackLimit: 20,
			kind: "other",
			weight: 400,
			value: 6
		},
		{
			id: "log",
			name: "Log",
			stackLimit: 20,
			kind: "other",
			weight: 500,
			value: 3
		},
		{
			id: "rat-hide",
			name: "Rat hide",
			stackLimit: 20,
			kind: "other",
			weight: 150,
			value: 3
		},
		{
			id: "iron-shield",
			name: "Iron shield",
			stackLimit: 1,
			kind: "other",
			weight: 4e3,
			value: 50,
			slot: "shield",
			armour: 3,
			visibility: 90,
			recipe: [{
				item: "iron-ore",
				count: 3
			}, {
				item: "log",
				count: 2
			}],
			station: "forge"
		},
		{
			id: "hide-jerkin",
			name: "Hide jerkin",
			stackLimit: 1,
			kind: "other",
			weight: 1200,
			value: 30,
			slot: "armour",
			armour: 2,
			visibility: 20,
			recipe: [{
				item: "rat-hide",
				count: 4
			}],
			station: "loom"
		},
		{
			id: "leather-cap-1",
			name: "Leather cap +1",
			stackLimit: 1,
			kind: "other",
			weight: 300,
			value: 30,
			slot: "helmet",
			armour: 2,
			visibility: 30,
			base: "leather-cap",
			grade: 1
		},
		{
			id: "leather-cap-2",
			name: "Leather cap +2",
			stackLimit: 1,
			kind: "other",
			weight: 300,
			value: 75,
			slot: "helmet",
			armour: 3,
			visibility: 30,
			base: "leather-cap",
			grade: 2
		},
		{
			id: "leather-cap-3",
			name: "Leather cap +3",
			stackLimit: 1,
			kind: "other",
			weight: 300,
			value: 188,
			slot: "helmet",
			armour: 4,
			visibility: 30,
			base: "leather-cap",
			grade: 3
		},
		{
			id: "padded-vest-1",
			name: "Padded vest +1",
			stackLimit: 1,
			kind: "other",
			weight: 1500,
			value: 63,
			slot: "armour",
			armour: 2,
			visibility: 60,
			base: "padded-vest",
			grade: 1
		},
		{
			id: "padded-vest-2",
			name: "Padded vest +2",
			stackLimit: 1,
			kind: "other",
			weight: 1500,
			value: 158,
			slot: "armour",
			armour: 3,
			visibility: 60,
			base: "padded-vest",
			grade: 2
		},
		{
			id: "padded-vest-3",
			name: "Padded vest +3",
			stackLimit: 1,
			kind: "other",
			weight: 1500,
			value: 395,
			slot: "armour",
			armour: 4,
			visibility: 60,
			base: "padded-vest",
			grade: 3
		},
		{
			id: "linen-trousers-1",
			name: "Linen trousers +1",
			stackLimit: 1,
			kind: "other",
			weight: 600,
			value: 25,
			slot: "legs",
			armour: 2,
			visibility: 70,
			base: "linen-trousers",
			grade: 1
		},
		{
			id: "linen-trousers-2",
			name: "Linen trousers +2",
			stackLimit: 1,
			kind: "other",
			weight: 600,
			value: 63,
			slot: "legs",
			armour: 3,
			visibility: 70,
			base: "linen-trousers",
			grade: 2
		},
		{
			id: "linen-trousers-3",
			name: "Linen trousers +3",
			stackLimit: 1,
			kind: "other",
			weight: 600,
			value: 158,
			slot: "legs",
			armour: 4,
			visibility: 70,
			base: "linen-trousers",
			grade: 3
		},
		{
			id: "plank-shield-1",
			name: "Plank shield +1",
			stackLimit: 1,
			kind: "other",
			weight: 2500,
			value: 50,
			slot: "shield",
			armour: 2,
			visibility: 70,
			base: "plank-shield",
			grade: 1
		},
		{
			id: "plank-shield-2",
			name: "Plank shield +2",
			stackLimit: 1,
			kind: "other",
			weight: 2500,
			value: 125,
			slot: "shield",
			armour: 3,
			visibility: 70,
			base: "plank-shield",
			grade: 2
		},
		{
			id: "plank-shield-3",
			name: "Plank shield +3",
			stackLimit: 1,
			kind: "other",
			weight: 2500,
			value: 313,
			slot: "shield",
			armour: 4,
			visibility: 70,
			base: "plank-shield",
			grade: 3
		},
		{
			id: "boar-tusk",
			name: "Boar tusk",
			stackLimit: 10,
			kind: "other",
			weight: 200,
			value: 3
		},
		{
			id: "boar-hide",
			name: "Boar hide",
			stackLimit: 20,
			kind: "other",
			weight: 250,
			value: 4
		},
		{
			id: "wolf-pelt",
			name: "Wolf pelt",
			stackLimit: 20,
			kind: "other",
			weight: 350,
			value: 8
		},
		{
			id: "warden-shard",
			name: "Warden's shard",
			stackLimit: 1,
			kind: "other",
			weight: 300,
			value: 0
		},
		{
			id: "boar-corpse",
			name: "Boar corpse",
			stackLimit: 1,
			kind: "other",
			weight: 2e3,
			value: 1
		},
		{
			id: "wolf-corpse",
			name: "Wolf corpse",
			stackLimit: 1,
			kind: "other",
			weight: 1500,
			value: 1
		},
		{
			id: "burrow-tail",
			name: "Burrow tail",
			stackLimit: 10,
			kind: "other",
			weight: 100,
			value: 3
		},
		{
			id: "spider-silk",
			name: "Spider silk",
			stackLimit: 10,
			kind: "other",
			weight: 50,
			value: 6
		},
		{
			id: "goblin-ear",
			name: "Goblin ear",
			stackLimit: 10,
			kind: "other",
			weight: 100,
			value: 8
		},
		{
			id: "bone-dust",
			name: "Bone dust",
			stackLimit: 10,
			kind: "other",
			weight: 150,
			value: 10
		},
		{
			id: "bear-claw",
			name: "Bear claw",
			stackLimit: 10,
			kind: "other",
			weight: 200,
			value: 15
		},
		{
			id: "bear-hide",
			name: "Bear hide",
			stackLimit: 20,
			kind: "other",
			weight: 500,
			value: 14
		},
		{
			id: "warg-fang",
			name: "Warg fang",
			stackLimit: 10,
			kind: "other",
			weight: 150,
			value: 25
		},
		{
			id: "troll-tooth",
			name: "Troll tooth",
			stackLimit: 10,
			kind: "other",
			weight: 250,
			value: 40
		},
		{
			id: "horn-fragment",
			name: "Horn fragment",
			stackLimit: 10,
			kind: "other",
			weight: 300,
			value: 60
		},
		{
			id: "hare-pelt",
			name: "Hare pelt",
			stackLimit: 20,
			kind: "other",
			weight: 100,
			value: 3
		},
		{
			id: "venison",
			name: "Venison",
			stackLimit: 10,
			kind: "food",
			weight: 400,
			heal: 30,
			value: 12
		},
		{
			id: "old-ledger",
			name: "Old ledger",
			stackLimit: 1,
			kind: "other",
			weight: 300,
			value: 0
		},
		{
			id: "cairn-seal",
			name: "Cairn seal",
			stackLimit: 1,
			kind: "other",
			weight: 300,
			value: 0
		},
		{
			id: "torch",
			name: "Torch",
			stackLimit: 1,
			kind: "other",
			weight: 500,
			value: 5,
			slot: "shield",
			armour: 0,
			visibility: 100,
			light: !0
		},
		{
			id: "apple",
			name: "Apple",
			stackLimit: 10,
			kind: "food",
			weight: 150,
			heal: 5,
			value: 3
		},
		{
			id: "chest",
			name: "Chest",
			stackLimit: 1,
			kind: "other",
			weight: 12e3,
			value: 0,
			thing: 46
		},
		{
			id: "bed",
			name: "Bed",
			stackLimit: 1,
			kind: "other",
			weight: 2e4,
			value: 0,
			thing: 58
		},
		{
			id: "stash",
			name: "Stash",
			stackLimit: 1,
			kind: "other",
			weight: 12e3,
			value: 0,
			thing: 59
		},
		{
			id: "barrel",
			name: "Barrel",
			stackLimit: 1,
			kind: "other",
			weight: 1e4,
			value: 0,
			thing: 119
		},
		{
			id: "crate",
			name: "Crate",
			stackLimit: 1,
			kind: "other",
			weight: 8e3,
			value: 0,
			thing: 120
		},
		{
			id: "stool",
			name: "Stool",
			stackLimit: 1,
			kind: "other",
			weight: 3e3,
			value: 0,
			thing: 122
		}
	]
}, t = {
	format: 1,
	npcs: [
		{
			id: "ferryman",
			name: "Ferryman",
			line: "The crossing is short. Shall I take you over to the other island?",
			choices: [{
				id: "travel",
				text: "Yes, take me across.",
				effect: "travel"
			}, {
				id: "bye",
				text: "Not now.",
				effect: "end"
			}]
		},
		{
			id: "farmer",
			name: "Farmer",
			line: "Good day. Mind the mud, it clings to boots.",
			choices: [
				{
					id: "chat",
					text: "What's new with you?",
					effect: "say",
					next: "news"
				},
				{
					id: "work",
					text: "Do you need help?",
					effect: "say",
					next: "work"
				},
				{
					id: "bye",
					text: "Goodbye.",
					effect: "end"
				}
			],
			nodes: [
				{
					id: "work",
					line: "There is always work on a farm.",
					choices: [
						{
							id: "ask",
							text: "What can I do?",
							effect: "quest-start",
							quest: "rat-tails",
							next: "ask-yes",
							requires: [{
								type: "level",
								min: 1
							}, {
								type: "quest",
								quest: "rat-tails",
								state: "none"
							}]
						},
						{
							id: "hand-in",
							text: "I have your rat tails.",
							effect: "quest-done",
							quest: "rat-tails",
							next: "hand-in-thanks",
							requires: [{
								type: "quest",
								quest: "rat-tails",
								state: "active"
							}]
						},
						{
							id: "more-work",
							text: "Any more work for me?",
							effect: "say",
							next: "more",
							requires: [{
								type: "quest",
								quest: "rat-tails",
								state: "done"
							}]
						},
						{
							id: "work-back",
							text: "Never mind.",
							effect: "say"
						}
					]
				},
				{
					id: "more",
					line: "Now that you mention it, aye.",
					choices: [
						{
							id: "ask-herbs",
							text: "What do you need?",
							effect: "quest-start",
							quest: "herb-bundle",
							next: "ask-herbs-yes",
							requires: [{
								type: "level",
								min: 2
							}, {
								type: "quest",
								quest: "herb-bundle",
								state: "none"
							}]
						},
						{
							id: "hand-in-herbs",
							text: "I have the healing herbs.",
							effect: "quest-done",
							quest: "herb-bundle",
							next: "hand-in-herbs-thanks",
							requires: [{
								type: "quest",
								quest: "herb-bundle",
								state: "active"
							}]
						},
						{
							id: "further-work",
							text: "And after that?",
							effect: "say",
							next: "further",
							requires: [{
								type: "quest",
								quest: "herb-bundle",
								state: "done"
							}]
						},
						{
							id: "more-back",
							text: "Never mind.",
							effect: "say"
						}
					]
				},
				{
					id: "further",
					line: "You are a fine hand, I will say that.",
					choices: [
						{
							id: "ask-potions",
							text: "What is it this time?",
							effect: "quest-start",
							quest: "farmer-potions",
							next: "ask-potions-yes",
							requires: [{
								type: "level",
								min: 3
							}, {
								type: "quest",
								quest: "farmer-potions",
								state: "none"
							}]
						},
						{
							id: "hand-in-potions",
							text: "I have the health potions.",
							effect: "quest-done",
							quest: "farmer-potions",
							next: "hand-in-potions-thanks",
							requires: [{
								type: "quest",
								quest: "farmer-potions",
								state: "active"
							}]
						},
						{
							id: "further-back",
							text: "Never mind.",
							effect: "say"
						}
					]
				},
				{
					id: "ask-herbs-yes",
					line: "Aye. The little ones are down with fever. Bring me six healing herbs.",
					choices: [{
						id: "ask-herbs-back",
						text: "I will fetch them.",
						effect: "say"
					}]
				},
				{
					id: "hand-in-herbs-thanks",
					line: "Good green herbs. The village will sleep easier tonight.",
					choices: [{
						id: "thanks-herbs-back",
						text: "Glad to help.",
						effect: "say"
					}]
				},
				{
					id: "ask-potions-yes",
					line: "Winter is coming. Bring me two health potions, and the barn is yours to call friend.",
					choices: [{
						id: "ask-potions-back",
						text: "I will see to it.",
						effect: "say"
					}]
				},
				{
					id: "hand-in-potions-thanks",
					line: "Fine brewing! You have my thanks again.",
					choices: [{
						id: "thanks-potions-back",
						text: "Glad to help.",
						effect: "say"
					}]
				},
				{
					id: "ask-yes",
					line: "Aye, the rats are eating me out of house and home.",
					choices: [{
						id: "ask-yes-back",
						text: "I will see to it.",
						effect: "say"
					}]
				},
				{
					id: "hand-in-thanks",
					line: "Fine tails! You have my thanks, and the village's.",
					choices: [{
						id: "thanks-back",
						text: "Glad to help.",
						effect: "say"
					}]
				},
				{
					id: "news",
					line: "The barley is up, but the rats are fat this year.",
					choices: [
						{
							id: "rats",
							text: "Fat rats?",
							effect: "say",
							next: "rats"
						},
						{
							id: "weather",
							text: "How is the weather?",
							effect: "say",
							next: "weather"
						},
						{
							id: "news-back",
							text: "Let me ask something else.",
							effect: "say"
						}
					]
				},
				{
					id: "rats",
					line: "They eat my grain and leave their tails behind.",
					choices: [{
						id: "rats-back",
						text: "Ugly business.",
						effect: "say"
					}, {
						id: "rats-news",
						text: "Tell me more news.",
						effect: "say",
						next: "news"
					}]
				},
				{
					id: "weather",
					line: "Dry for now. My knee says rain by the weekend.",
					choices: [{
						id: "weather-back",
						text: "Take care of that knee.",
						effect: "say"
					}, {
						id: "weather-news",
						text: "Tell me more news.",
						effect: "say",
						next: "news"
					}]
				}
			]
		},
		{
			id: "trader",
			name: "Trader",
			line: "Welcome, friend. Bread, cheese, and fair prices.",
			choices: [
				{
					id: "chat",
					text: "What's new with you?",
					effect: "say",
					next: "news"
				},
				{
					id: "trade",
					text: "Let's trade.",
					effect: "trade"
				},
				{
					id: "bye",
					text: "Goodbye.",
					effect: "end"
				}
			],
			nodes: [{
				id: "news",
				line: "Slow days. The road is quiet and my cart is full.",
				choices: [{
					id: "road",
					text: "Why is the road quiet?",
					effect: "say",
					next: "road"
				}, {
					id: "news-back",
					text: "Let me ask something else.",
					effect: "say"
				}]
			}, {
				id: "road",
				line: "Folk stay home when the wolves howl at night.",
				choices: [{
					id: "road-back",
					text: "I will be careful.",
					effect: "say"
				}]
			}],
			shop: {
				sells: [
					{
						item: "bread",
						price: 6
					},
					{
						item: "cheese",
						price: 5
					},
					{
						item: "small-health-potion",
						price: 15
					},
					{
						item: "small-mana-potion",
						price: 15
					},
					{
						item: "taming-bell",
						price: 30
					}
				],
				buys: [{
					item: "rat-tail",
					price: 1
				}, {
					item: "rat-corpse",
					price: 5,
					freshOnly: !0
				}],
				purse: {
					cap: 100,
					refillGold: 1,
					refillEveryMs: 1e4
				}
			}
		},
		{
			id: "house-agent",
			name: "House agent",
			line: "Welcome home. Rent is taken from the gold in your depot each month; after a few days of reminders an unpaid house is lost. What shall I see to?",
			choices: [
				{
					id: "floor-up",
					text: "Build a floor above ({price} gold).",
					effect: "house-floor-up",
					next: "built"
				},
				{
					id: "floor-down",
					text: "Dig a floor below ({price} gold).",
					effect: "house-floor-down",
					next: "built"
				},
				{
					id: "give-up",
					text: "I give this house up.",
					effect: "house-give-up",
					next: "gave-up"
				},
				{
					id: "bye",
					text: "Not now.",
					effect: "end"
				}
			],
			nodes: [{
				id: "built",
				line: "It is done. Take a look.",
				choices: [{
					id: "built-back",
					text: "Thank you.",
					effect: "say"
				}]
			}, {
				id: "gave-up",
				line: "The house is no longer yours. Farewell.",
				choices: [{
					id: "gave-up-back",
					text: "Farewell.",
					effect: "say"
				}]
			}],
			houseAgent: {
				floorUpPrice: 5,
				floorDownPrice: 5,
				rent: {
					gold: 1,
					reminderDays: 3
				}
			}
		},
		{
			id: "house-guide",
			name: "House guide",
			line: "Welcome, look around as you like, but please touch nothing. This house is for sale for {price} gold.",
			choices: [{
				id: "buy",
				text: "I will buy it ({price} gold).",
				effect: "house-buy",
				next: "sold"
			}, {
				id: "bye",
				text: "Just looking.",
				effect: "end"
			}],
			nodes: [{
				id: "sold",
				line: "It is yours now. The house agent will look after it.",
				choices: [{
					id: "sold-back",
					text: "Thank you.",
					effect: "say"
				}]
			}],
			houseGuide: !0
		},
		{
			id: "boatman",
			name: "Boatman",
			line: "The boat leaves in {departure}.",
			choices: [
				{
					id: "board",
					text: "I want to sail.",
					effect: "board",
					next: "board-ok"
				},
				{
					id: "when",
					text: "When does it leave?",
					effect: "say",
					next: "when"
				},
				{
					id: "bye",
					text: "Not now.",
					effect: "end"
				}
			],
			nodes: [{
				id: "board-ok",
				line: "Take a seat when you are by the boat. It leaves in {departure}.",
				choices: [{
					id: "board-ok-back",
					text: "Thank you.",
					effect: "say"
				}]
			}, {
				id: "when",
				line: "Next departure in {departure}. Do not be late.",
				choices: [{
					id: "when-back",
					text: "I see.",
					effect: "say"
				}]
			}]
		},
		{
			id: "smith",
			name: "Smith",
			line: "Bring me two of a kind and some coins, and I will make one better piece of them.",
			choices: [{
				id: "merge",
				text: "Let's merge two pieces.",
				effect: "merge"
			}, {
				id: "bye",
				text: "Goodbye.",
				effect: "end"
			}],
			smith: { feePercent: 50 }
		},
		{
			id: "thomas",
			name: "Thomas",
			line: "Good to see you, my child. Mind the mud, it clings to boots.",
			choices: [
				{
					id: "fight",
					text: "How do I fight a beast?",
					effect: "say",
					next: "fight"
				},
				{
					id: "work",
					text: "Is there work to do?",
					effect: "say",
					next: "work"
				},
				{
					id: "cellar",
					text: "What of the old root cellar?",
					effect: "say",
					next: "cellar",
					requires: [{
						type: "level",
						min: 2
					}, {
						type: "quest",
						quest: "granary-rats",
						state: "done"
					}]
				},
				{
					id: "bye",
					text: "Goodbye.",
					effect: "end"
				}
			],
			nodes: [
				{
					id: "cellar",
					line: "The old root cellar in the south-west is overrun with burrow rats, and it is dark down there. Someone must thin them.",
					choices: [
						{
							id: "ask-cellar",
							text: "I will go down.",
							effect: "quest-start",
							quest: "cellar-rats",
							next: "cellar-yes",
							requires: [
								{
									type: "level",
									min: 2
								},
								{
									type: "quest",
									quest: "granary-rats",
									state: "done"
								},
								{
									type: "quest",
									quest: "cellar-rats",
									state: "none"
								}
							]
						},
						{
							id: "hand-in-cellar",
							text: "I have the six burrow tails.",
							effect: "quest-done",
							quest: "cellar-rats",
							next: "cellar-thanks",
							requires: [{
								type: "quest",
								quest: "cellar-rats",
								state: "active"
							}]
						},
						{
							id: "after-cellar",
							text: "About the cellar...",
							effect: "say",
							next: "cellar-after",
							requires: [{
								type: "quest",
								quest: "cellar-rats",
								state: "done"
							}]
						},
						{
							id: "cellar-back",
							text: "Never mind.",
							effect: "say"
						}
					]
				},
				{
					id: "cellar-yes",
					line: "Take the stairs in the lane south-west of our house and mind the dark; a torch may lie in a chest near the foot. Bring me six burrow tails.",
					choices: [{
						id: "cellar-yes-back",
						text: "I will see to it.",
						effect: "say"
					}]
				},
				{
					id: "cellar-thanks",
					line: "Six tails, and the cellar is quiet again. Keep these torches, you will need them below.",
					choices: [{
						id: "cellar-thanks-back",
						text: "Glad to help.",
						effect: "say"
					}]
				},
				{
					id: "cellar-after",
					line: "The cellar is quiet. There are deeper holes on this island, though.",
					choices: [{
						id: "cellar-after-back",
						text: "I see.",
						effect: "say"
					}]
				},
				{
					id: "fight",
					line: "Walk up to the beast and strike until it falls. Back away and eat or drink when it bites hard.",
					choices: [{
						id: "loot",
						text: "And what it leaves behind?",
						effect: "say",
						next: "loot"
					}, {
						id: "fight-back",
						text: "I understand.",
						effect: "say"
					}]
				},
				{
					id: "loot",
					line: "Open the corpse and take what it carried into your backpack. Agnes the weaver will teach you to skin one.",
					choices: [{
						id: "loot-back",
						text: "Thank you, father.",
						effect: "say"
					}]
				},
				{
					id: "work",
					line: "Work? There is always some on a farm.",
					choices: [
						{
							id: "ask",
							text: "What can I do?",
							effect: "quest-start",
							quest: "granary-rats",
							next: "ask-yes",
							requires: [{
								type: "level",
								min: 1
							}, {
								type: "quest",
								quest: "granary-rats",
								state: "none"
							}]
						},
						{
							id: "hand-in",
							text: "I have the five rat tails.",
							effect: "quest-done",
							quest: "granary-rats",
							next: "hand-in-thanks",
							requires: [{
								type: "quest",
								quest: "granary-rats",
								state: "active"
							}]
						},
						{
							id: "after",
							text: "About the rats in the granary...",
							effect: "say",
							next: "after",
							requires: [{
								type: "quest",
								quest: "granary-rats",
								state: "done"
							}]
						},
						{
							id: "work-back",
							text: "Never mind.",
							effect: "say"
						}
					]
				},
				{
					id: "ask-yes",
					line: "There are rats in the granary, more than ever, and they come down from the north. Bring me five rat tails and I will count them.",
					choices: [{
						id: "ask-yes-back",
						text: "I will see to it.",
						effect: "say"
					}]
				},
				{
					id: "hand-in-thanks",
					line: "That is a fair count. The beasts are fleeing something in the north, I fear.",
					choices: [{
						id: "thanks-back",
						text: "Glad to help.",
						effect: "say"
					}]
				},
				{
					id: "after",
					line: "They keep coming down from the north. Something is wrong up there.",
					choices: [{
						id: "after-back",
						text: "I see.",
						effect: "say"
					}]
				}
			]
		},
		{
			id: "martha",
			name: "Martha",
			line: "Come in, my dear, the kettle is on.",
			choices: [
				{
					id: "herbs",
					text: "Where do I find herbs?",
					effect: "say",
					next: "herbs"
				},
				{
					id: "work",
					text: "Do you need anything?",
					effect: "say",
					next: "work"
				},
				{
					id: "bye",
					text: "Goodbye.",
					effect: "end"
				}
			],
			nodes: [
				{
					id: "herbs",
					line: "Healing herbs grow in the meadow to the east, and they grow back. Pick only what you need.",
					choices: [
						{
							id: "brew",
							text: "And how do I brew them?",
							effect: "say",
							next: "brew"
						},
						{
							id: "teach-herbs",
							text: "Teach me, please. ({price} zloty)",
							effect: "teach",
							lesson: "herbalism",
							price: 10,
							next: "taught-herbs",
							requires: [
								{
									type: "level",
									min: 2
								},
								{
									type: "quest",
									quest: "granary-rats",
									state: "done"
								},
								{
									type: "quest",
									quest: "mothers-remedy",
									state: "none"
								}
							]
						},
						{
							id: "herbs-back",
							text: "Thank you, mother.",
							effect: "say"
						}
					]
				},
				{
					id: "taught-herbs",
					line: "Pick the leaf, leave the root. Three at my table, and a potion comes of them.",
					choices: [{
						id: "taught-herbs-back",
						text: "Thank you, mother.",
						effect: "say"
					}]
				},
				{
					id: "brew",
					line: "Use my table with three healing herbs in your backpack, and a health potion comes of them. Keep one in your quick slot for a bad moment.",
					choices: [{
						id: "teach-brewing",
						text: "Teach me to brew. ({price} zloty)",
						effect: "teach",
						lesson: "brewing",
						price: 10,
						next: "taught-brewing",
						requires: [
							{
								type: "level",
								min: 2
							},
							{
								type: "quest",
								quest: "granary-rats",
								state: "done"
							},
							{
								type: "quest",
								quest: "mothers-remedy",
								state: "none"
							},
							{
								type: "lesson",
								lesson: "herbalism"
							}
						]
					}, {
						id: "brew-back",
						text: "I will remember.",
						effect: "say"
					}]
				},
				{
					id: "taught-brewing",
					line: "Three leaves in the pot, and the fire kept low. Patience does the rest.",
					choices: [{
						id: "taught-brewing-back",
						text: "Thank you, mother.",
						effect: "say"
					}]
				},
				{
					id: "work",
					line: "I may need a hand when the time is right.",
					choices: [
						{
							id: "ask",
							text: "What do you need?",
							effect: "quest-start",
							quest: "mothers-remedy",
							next: "ask-yes",
							requires: [
								{
									type: "level",
									min: 2
								},
								{
									type: "quest",
									quest: "granary-rats",
									state: "done"
								},
								{
									type: "quest",
									quest: "mothers-remedy",
									state: "none"
								}
							]
						},
						{
							id: "hand-in",
							text: "I have something for the remedy.",
							effect: "quest-done",
							quest: "mothers-remedy",
							next: "hand-in-thanks",
							stageNext: ["herbs-seen"],
							requires: [{
								type: "quest",
								quest: "mothers-remedy",
								state: "active"
							}]
						},
						{
							id: "after",
							text: "About the remedy...",
							effect: "say",
							next: "after",
							requires: [{
								type: "quest",
								quest: "mothers-remedy",
								state: "done"
							}]
						},
						{
							id: "work-back",
							text: "Never mind.",
							effect: "say"
						}
					]
				},
				{
					id: "ask-yes",
					line: "The animals flee the north, and frightened folk fall ill. Pick three herbs in the meadow and show them to me.",
					choices: [{
						id: "ask-yes-back",
						text: "I will brew it.",
						effect: "say"
					}]
				},
				{
					id: "herbs-seen",
					line: "Good leaves, and the roots left whole. Now brew them at my table and bring me the potion.",
					choices: [{
						id: "herbs-seen-back",
						text: "I will brew it.",
						effect: "say"
					}]
				},
				{
					id: "hand-in-thanks",
					line: "Well brewed, my dear. Take these for the road.",
					choices: [{
						id: "thanks-back",
						text: "Glad to help.",
						effect: "say"
					}]
				},
				{
					id: "after",
					line: "They say something on Watch Hill has stirred. I do not like it.",
					choices: [{
						id: "after-back",
						text: "I see.",
						effect: "say"
					}]
				}
			]
		},
		{
			id: "hanna",
			name: "Hanna",
			line: "Hello! I know where everybody is.",
			choices: [{
				id: "where",
				text: "Where is everyone?",
				effect: "say",
				next: "places"
			}, {
				id: "bye",
				text: "Goodbye.",
				effect: "end"
			}],
			nodes: [
				{
					id: "places",
					line: "Do you mean home, the town, or the places outside it?",
					choices: [
						{
							id: "home",
							text: "At home.",
							effect: "say",
							next: "home"
						},
						{
							id: "town",
							text: "In the town.",
							effect: "say",
							next: "town"
						},
						{
							id: "outside",
							text: "Outside the town.",
							effect: "say",
							next: "outside"
						},
						{
							id: "places-back",
							text: "Never mind.",
							effect: "say"
						}
					]
				},
				{
					id: "home",
					line: "Mother is in the kitchen, and father is in the barn or the fields. Grandfather is at the pier by day.",
					choices: [{
						id: "home-back",
						text: "Thank you.",
						effect: "say"
					}]
				},
				{
					id: "town",
					line: "Brother Anselm lives in the chapel, north of the green. The reeve is across the High Street from the green, east of the chapel. The storehouse is west of the green.",
					choices: [{
						id: "market",
						text: "And the shops?",
						effect: "say",
						next: "market"
					}, {
						id: "town-back",
						text: "Thank you.",
						effect: "say"
					}]
				},
				{
					id: "market",
					line: "Helen sells at her stall on the green and lives by Pier Street. Agnes weaves in her house across the square; Jacob works at the smithy and lives beside it.",
					choices: [{
						id: "market-back",
						text: "Thank you.",
						effect: "say"
					}]
				},
				{
					id: "outside",
					line: "Simon has a hut by Fir Wood in the north-west. The quarry is in the north-east, and the herb meadow to the east.",
					choices: [{
						id: "outside-back",
						text: "Thank you.",
						effect: "say"
					}]
				}
			]
		},
		{
			id: "victor",
			name: "Old Victor",
			line: "There you are, child. The old boat still floats, and so do I.",
			choices: [
				{
					id: "sea",
					text: "Can I sail with you?",
					effect: "say",
					next: "sea"
				},
				{
					id: "ready",
					text: "I am ready to leave the island.",
					effect: "say",
					next: "mend",
					requires: [{
						type: "level",
						min: 8
					}]
				},
				{
					id: "tale",
					text: "Tell me a tale.",
					effect: "say",
					next: "tale"
				},
				{
					id: "bye",
					text: "Goodbye.",
					effect: "end"
				}
			],
			nodes: [
				{
					id: "sea",
					line: "The sea is wide and I row it only once. My boat needs mending first; come back when you are level 8 and we shall see.",
					choices: [{
						id: "sea-back",
						text: "I will wait.",
						effect: "say"
					}]
				},
				{
					id: "tale",
					line: "I rowed the north shore when I was young. The hill was quiet then.",
					choices: [{
						id: "tale-back",
						text: "Thank you, grandfather.",
						effect: "say"
					}]
				},
				{
					id: "mend",
					line: "The keel of my boat is rotten, and I must mend it before I can sail on. Come back to me later.",
					choices: [{
						id: "voyage",
						text: "The boat is mended, take me across.",
						effect: "say",
						next: "warning",
						requires: [{
							type: "level",
							min: 100
						}]
					}, {
						id: "mend-back",
						text: "I will wait.",
						effect: "say"
					}]
				},
				{
					id: "warning",
					line: "I am too old to row back, mind. Whoever crosses cannot return, for the island is closed behind you.",
					choices: [{
						id: "depart",
						text: "Take me across.",
						effect: "depart",
						arrival: "mainland",
						requires: [{
							type: "level",
							min: 100
						}]
					}, {
						id: "stay",
						text: "I will stay a while longer.",
						effect: "say"
					}]
				}
			]
		},
		{
			id: "agnes",
			name: "Agnes",
			line: "Welcome, child. Mind the loom, the thread tangles.",
			choices: [
				{
					id: "skin",
					text: "How do I skin a corpse?",
					effect: "say",
					next: "skin"
				},
				{
					id: "work",
					text: "Can I help?",
					effect: "say",
					next: "work"
				},
				{
					id: "silk",
					text: "Do you need silk?",
					effect: "say",
					next: "silk",
					requires: [{
						type: "level",
						min: 5
					}, {
						type: "quest",
						quest: "winter-jerkin",
						state: "done"
					}]
				},
				{
					id: "bye",
					text: "Goodbye.",
					effect: "end"
				}
			],
			nodes: [
				{
					id: "silk",
					line: "My loom is hungry for silk. The cave spiders in the Old Mine spin the finest there is.",
					choices: [
						{
							id: "ask-silk",
							text: "I will fetch some.",
							effect: "quest-start",
							quest: "silk-for-the-loom",
							next: "silk-yes",
							requires: [
								{
									type: "level",
									min: 5
								},
								{
									type: "quest",
									quest: "winter-jerkin",
									state: "done"
								},
								{
									type: "quest",
									quest: "silk-for-the-loom",
									state: "none"
								}
							]
						},
						{
							id: "hand-in-silk",
							text: "I have the spider silk.",
							effect: "quest-done",
							quest: "silk-for-the-loom",
							next: "silk-thanks",
							requires: [{
								type: "quest",
								quest: "silk-for-the-loom",
								state: "active"
							}]
						},
						{
							id: "after-silk",
							text: "About the silk...",
							effect: "say",
							next: "silk-after",
							requires: [{
								type: "quest",
								quest: "silk-for-the-loom",
								state: "done"
							}]
						},
						{
							id: "silk-back",
							text: "Never mind.",
							effect: "say"
						}
					]
				},
				{
					id: "silk-yes",
					line: "Bring me four skeins of spider silk from the Old Mine under the quarry. Go with a light, for they bite from the dark.",
					choices: [{
						id: "silk-yes-back",
						text: "I will be careful.",
						effect: "say"
					}]
				},
				{
					id: "silk-thanks",
					line: "Soft and strong, just as I hoped. Here is a cap for your trouble.",
					choices: [{
						id: "silk-thanks-back",
						text: "Glad to help.",
						effect: "say"
					}]
				},
				{
					id: "silk-after",
					line: "The new cloth is already on the loom.",
					choices: [{
						id: "silk-after-back",
						text: "I see.",
						effect: "say"
					}]
				},
				{
					id: "skin",
					line: "Use a fresh corpse and you take its hide, but only while it is fresh. A rat hide is small, yet four make a jerkin.",
					choices: [
						{
							id: "loom",
							text: "And the loom?",
							effect: "say",
							next: "loom"
						},
						{
							id: "skin-sell",
							text: "Will you buy hides and pelts?",
							effect: "trade"
						},
						{
							id: "teach-skin",
							text: "Teach me to skin. ({price} zloty)",
							effect: "teach",
							lesson: "skinning",
							price: 15,
							next: "taught-skin",
							requires: [
								{
									type: "level",
									min: 2
								},
								{
									type: "quest",
									quest: "granary-rats",
									state: "done"
								},
								{
									type: "quest",
									quest: "winter-jerkin",
									state: "none"
								}
							]
						},
						{
							id: "skin-back",
							text: "Thank you.",
							effect: "say"
						}
					]
				},
				{
					id: "taught-skin",
					line: "Fresh only. A clean cut, the way I taught my own hands.",
					choices: [{
						id: "taught-skin-back",
						text: "Thank you.",
						effect: "say"
					}]
				},
				{
					id: "loom",
					line: "Use my loom with four rat hides in your backpack and a hide jerkin comes of them. Wear it, and bites hurt less.",
					choices: [{
						id: "teach-loom",
						text: "Teach me to sew. ({price} zloty)",
						effect: "teach",
						lesson: "tailoring",
						price: 20,
						next: "taught-loom",
						requires: [
							{
								type: "level",
								min: 3
							},
							{
								type: "quest",
								quest: "mothers-remedy",
								state: "done"
							},
							{
								type: "quest",
								quest: "winter-jerkin",
								state: "none"
							}
						]
					}, {
						id: "loom-back",
						text: "I will try it.",
						effect: "say"
					}]
				},
				{
					id: "taught-loom",
					line: "Small stitches, even stitches. The loom does the rest.",
					choices: [{
						id: "taught-loom-back",
						text: "Thank you.",
						effect: "say"
					}]
				},
				{
					id: "work",
					line: "There is always cloth to mend.",
					choices: [
						{
							id: "ask",
							text: "What do you need?",
							effect: "quest-start",
							quest: "winter-jerkin",
							next: "ask-yes",
							requires: [
								{
									type: "level",
									min: 3
								},
								{
									type: "quest",
									quest: "mothers-remedy",
									state: "done"
								},
								{
									type: "quest",
									quest: "winter-jerkin",
									state: "none"
								}
							]
						},
						{
							id: "hand-in",
							text: "I have something for the jerkin.",
							effect: "quest-done",
							quest: "winter-jerkin",
							next: "hand-in-thanks",
							stageNext: ["hides-seen"],
							requires: [{
								type: "quest",
								quest: "winter-jerkin",
								state: "active"
							}]
						},
						{
							id: "after",
							text: "About the jerkin...",
							effect: "say",
							next: "after",
							requires: [{
								type: "quest",
								quest: "winter-jerkin",
								state: "done"
							}]
						},
						{
							id: "work-back",
							text: "Never mind.",
							effect: "say"
						}
					]
				},
				{
					id: "ask-yes",
					line: "The wind off the hill came early and cold. Skin four rats and show me the hides.",
					choices: [{
						id: "ask-yes-back",
						text: "I will make it.",
						effect: "say"
					}]
				},
				{
					id: "hides-seen",
					line: "Four good hides. Now sew them into a jerkin at my loom: small stitches, even stitches.",
					choices: [{
						id: "hides-seen-back",
						text: "I will sew it.",
						effect: "say"
					}]
				},
				{
					id: "hand-in-thanks",
					line: "A warm, sound jerkin. Simon says the boars are tearing up Fir Wood; they flee the hill, too.",
					choices: [{
						id: "thanks-back",
						text: "Glad to help.",
						effect: "say"
					}]
				},
				{
					id: "after",
					line: "The wind off Watch Hill is cold and strange.",
					choices: [{
						id: "after-back",
						text: "I see.",
						effect: "say"
					}]
				}
			],
			shop: {
				sells: [],
				buys: [{
					item: "bear-hide",
					price: 7
				}, {
					item: "hare-pelt",
					price: 2
				}],
				purse: {
					cap: 100,
					refillGold: 1,
					refillEveryMs: 1e4
				}
			}
		},
		{
			id: "helen",
			name: "Helen",
			line: "Welcome, child. Bread, cheese, and fair prices.",
			choices: [
				{
					id: "buying",
					text: "What do you buy?",
					effect: "say",
					next: "buying"
				},
				{
					id: "trade",
					text: "Let's trade.",
					effect: "trade"
				},
				{
					id: "bye",
					text: "Goodbye.",
					effect: "end"
				}
			],
			nodes: [{
				id: "buying",
				line: "Tails, tusks, hides and pelts, spider silk and goblin ears, and fresh rat corpses. My purse is thin, so come back when it has filled.",
				choices: [{
					id: "buying-back",
					text: "Thank you.",
					effect: "say"
				}]
			}],
			shop: {
				sells: [
					{
						item: "bread",
						price: 6
					},
					{
						item: "cheese",
						price: 5
					},
					{
						item: "small-health-potion",
						price: 15
					},
					{
						item: "small-mana-potion",
						price: 15
					},
					{
						item: "torch",
						price: 12
					}
				],
				buys: [
					{
						item: "rat-tail",
						price: 1
					},
					{
						item: "rat-corpse",
						price: 5,
						freshOnly: !0
					},
					{
						item: "boar-tusk",
						price: 3
					},
					{
						item: "boar-hide",
						price: 4
					},
					{
						item: "wolf-pelt",
						price: 8
					},
					{
						item: "burrow-tail",
						price: 2
					},
					{
						item: "spider-silk",
						price: 5
					},
					{
						item: "goblin-ear",
						price: 6
					}
				],
				purse: {
					cap: 100,
					refillGold: 1,
					refillEveryMs: 1e4
				}
			}
		},
		{
			id: "simon",
			name: "Simon",
			line: "Hail, child. Fir Wood is quiet today, mostly.",
			choices: [
				{
					id: "firs",
					text: "How do I cut firs?",
					effect: "say",
					next: "firs"
				},
				{
					id: "work",
					text: "Do you need help?",
					effect: "say",
					next: "work"
				},
				{
					id: "claws",
					text: "What of the bears?",
					effect: "say",
					next: "claws",
					requires: [{
						type: "level",
						min: 12
					}, {
						type: "quest",
						quest: "boars-in-the-wood",
						state: "done"
					}]
				},
				{
					id: "bye",
					text: "Goodbye.",
					effect: "end"
				}
			],
			nodes: [
				{
					id: "claws",
					line: "Bears have denned in a hollow under the north-west edge of the wood, and they grow bold. I split my logs with wedges made of their claws.",
					choices: [
						{
							id: "ask-claws",
							text: "I will hunt them.",
							effect: "quest-start",
							quest: "claws-for-simon",
							next: "claws-yes",
							requires: [
								{
									type: "level",
									min: 12
								},
								{
									type: "quest",
									quest: "boars-in-the-wood",
									state: "done"
								},
								{
									type: "quest",
									quest: "claws-for-simon",
									state: "none"
								}
							]
						},
						{
							id: "hand-in-claws",
							text: "I have the bear claws.",
							effect: "quest-done",
							quest: "claws-for-simon",
							next: "claws-thanks",
							requires: [{
								type: "quest",
								quest: "claws-for-simon",
								state: "active"
							}]
						},
						{
							id: "after-claws",
							text: "About the bears...",
							effect: "say",
							next: "claws-after",
							requires: [{
								type: "quest",
								quest: "claws-for-simon",
								state: "done"
							}]
						},
						{
							id: "claws-back",
							text: "Never mind.",
							effect: "say"
						}
					]
				},
				{
					id: "claws-yes",
					line: "Go down by the hut path into the hollow, and bring me three bear claws. A bear bites hard, so go well fed.",
					choices: [{
						id: "claws-yes-back",
						text: "I will go.",
						effect: "say"
					}]
				},
				{
					id: "claws-thanks",
					line: "Three fine claws. Take these trousers; thorns will not tear them.",
					choices: [{
						id: "claws-thanks-back",
						text: "Glad to help.",
						effect: "say"
					}]
				},
				{
					id: "claws-after",
					line: "The wood is quieter now. The bears will be back, as bears are.",
					choices: [{
						id: "claws-after-back",
						text: "I see.",
						effect: "say"
					}]
				},
				{
					id: "firs",
					line: "Use a fir tree and you take a log; the tree grows back in time. The more you cut, the better you cut.",
					choices: [
						{
							id: "logs",
							text: "What are logs for?",
							effect: "say",
							next: "logs"
						},
						{
							id: "hearths-ask",
							text: "Can I cut some for you?",
							effect: "say",
							next: "hearths",
							requires: [{
								type: "level",
								min: 4
							}, {
								type: "quest",
								quest: "winter-jerkin",
								state: "done"
							}]
						},
						{
							id: "teach-cutting",
							text: "Teach me to cut. ({price} zloty)",
							effect: "teach",
							lesson: "woodcutting",
							price: 25,
							next: "taught-cutting",
							requires: [
								{
									type: "level",
									min: 4
								},
								{
									type: "quest",
									quest: "winter-jerkin",
									state: "done"
								},
								{
									type: "quest",
									quest: "logs-for-the-hearths",
									state: "none"
								}
							]
						},
						{
							id: "firs-back",
							text: "Thank you.",
							effect: "say"
						}
					]
				},
				{
					id: "hearths",
					line: "The hearths of the town are always hungry.",
					choices: [
						{
							id: "ask-hearths",
							text: "I will cut them.",
							effect: "quest-start",
							quest: "logs-for-the-hearths",
							next: "hearths-yes",
							requires: [
								{
									type: "level",
									min: 4
								},
								{
									type: "quest",
									quest: "winter-jerkin",
									state: "done"
								},
								{
									type: "quest",
									quest: "logs-for-the-hearths",
									state: "none"
								}
							]
						},
						{
							id: "hand-in-hearths",
							text: "I have the three logs.",
							effect: "quest-done",
							quest: "logs-for-the-hearths",
							next: "hearths-thanks",
							requires: [{
								type: "quest",
								quest: "logs-for-the-hearths",
								state: "active"
							}]
						},
						{
							id: "after-hearths",
							text: "About the hearths...",
							effect: "say",
							next: "hearths-after",
							requires: [{
								type: "quest",
								quest: "logs-for-the-hearths",
								state: "done"
							}]
						},
						{
							id: "hearths-back",
							text: "Never mind.",
							effect: "say"
						}
					]
				},
				{
					id: "hearths-yes",
					line: "The hearths of the town eat logs all winter. Cut three firs and bring me the logs.",
					choices: [{
						id: "hearths-yes-back",
						text: "I will begin.",
						effect: "say"
					}]
				},
				{
					id: "hearths-thanks",
					line: "Three good logs. Low, then across: that is how the axe goes.",
					choices: [{
						id: "hearths-thanks-back",
						text: "Glad to help.",
						effect: "say"
					}]
				},
				{
					id: "hearths-after",
					line: "The hearths are warm. The firs grow back in time.",
					choices: [{
						id: "hearths-after-back",
						text: "I see.",
						effect: "say"
					}]
				},
				{
					id: "taught-cutting",
					line: "Low, then across. Let the axe do the work.",
					choices: [{
						id: "taught-cutting-back",
						text: "Thank you.",
						effect: "say"
					}]
				},
				{
					id: "logs",
					line: "The smith needs them at his forge, and the joiner for his planks. Fire eats them, too.",
					choices: [{
						id: "logs-back",
						text: "I see.",
						effect: "say"
					}]
				},
				{
					id: "work",
					line: "The wood is never done.",
					choices: [
						{
							id: "ask",
							text: "What is the trouble?",
							effect: "quest-start",
							quest: "boars-in-the-wood",
							next: "ask-yes",
							requires: [
								{
									type: "level",
									min: 4
								},
								{
									type: "quest",
									quest: "winter-jerkin",
									state: "done"
								},
								{
									type: "quest",
									quest: "boars-in-the-wood",
									state: "none"
								}
							]
						},
						{
							id: "hand-in",
							text: "I have the four boar tusks.",
							effect: "quest-done",
							quest: "boars-in-the-wood",
							next: "hand-in-thanks",
							requires: [{
								type: "quest",
								quest: "boars-in-the-wood",
								state: "active"
							}]
						},
						{
							id: "after",
							text: "About the boars...",
							effect: "say",
							next: "after",
							requires: [{
								type: "quest",
								quest: "boars-in-the-wood",
								state: "done"
							}]
						},
						{
							id: "work-back",
							text: "Never mind.",
							effect: "say"
						}
					]
				},
				{
					id: "ask-yes",
					line: "Boars from the hill are tearing up my firs. Bring me four of their tusks.",
					choices: [{
						id: "ask-yes-back",
						text: "I will hunt them.",
						effect: "say"
					}]
				},
				{
					id: "hand-in-thanks",
					line: "Four good tusks; something drove them down from the hill.",
					choices: [{
						id: "thanks-back",
						text: "Glad to help.",
						effect: "say"
					}]
				},
				{
					id: "after",
					line: "Jacob is worried about the old gate. Go and see him.",
					choices: [{
						id: "after-back",
						text: "I see.",
						effect: "say"
					}]
				}
			]
		},
		{
			id: "jacob",
			name: "Jacob",
			line: "Come in, child. Bring me two of a kind and some coins, and I will make one better piece of them.",
			choices: [
				{
					id: "ore",
					text: "How do I mine ore?",
					effect: "say",
					next: "ore"
				},
				{
					id: "work",
					text: "Do you need iron?",
					effect: "say",
					next: "work"
				},
				{
					id: "merge",
					text: "Let's merge two pieces.",
					effect: "merge",
					requires: [{
						type: "lesson",
						lesson: "merging"
					}]
				},
				{
					id: "bye",
					text: "Goodbye.",
					effect: "end"
				}
			],
			nodes: [
				{
					id: "ore",
					line: "Use an iron ore rock in the quarry and you take ore; the rock grows back in time. Wolves roam there, so go ready.",
					choices: [
						{
							id: "forge",
							text: "And the forge?",
							effect: "say",
							next: "forge"
						},
						{
							id: "teach-mining",
							text: "Teach me to mine. ({price} zloty)",
							effect: "teach",
							lesson: "mining",
							price: 30,
							next: "taught-mining",
							requires: [
								{
									type: "level",
									min: 4
								},
								{
									type: "quest",
									quest: "winter-jerkin",
									state: "done"
								},
								{
									type: "quest",
									quest: "iron-for-the-gate",
									state: "none"
								}
							]
						},
						{
							id: "ore-back",
							text: "Thank you.",
							effect: "say"
						}
					]
				},
				{
					id: "taught-mining",
					line: "Hold the pick so, and strike where the rock glints.",
					choices: [{
						id: "taught-mining-back",
						text: "Thank you.",
						effect: "say"
					}]
				},
				{
					id: "forge",
					line: "Use my forge with three iron ore and two logs in your backpack and an iron shield comes of them. Two equal pieces and coins, and I merge them into one better.",
					choices: [
						{
							id: "forge-sell",
							text: "Do you buy anything from the hunt?",
							effect: "trade"
						},
						{
							id: "teach-smithing",
							text: "Teach me to forge. ({price} zloty)",
							effect: "teach",
							lesson: "smithing",
							price: 40,
							next: "taught-smithing",
							requires: [
								{
									type: "level",
									min: 5
								},
								{
									type: "quest",
									quest: "boars-in-the-wood",
									state: "done"
								},
								{
									type: "quest",
									quest: "iron-for-the-gate",
									state: "none"
								}
							]
						},
						{
							id: "teach-merging",
							text: "Show me how two become one. ({price} zloty)",
							effect: "teach",
							lesson: "merging",
							price: 50,
							next: "taught-merging",
							requires: [
								{
									type: "level",
									min: 6
								},
								{
									type: "quest",
									quest: "boars-in-the-wood",
									state: "done"
								},
								{
									type: "quest",
									quest: "iron-for-the-gate",
									state: "none"
								}
							]
						},
						{
							id: "forge-back",
							text: "I see.",
							effect: "say"
						}
					]
				},
				{
					id: "taught-merging",
					line: "Two of a kind, a few coins, and the fire does the rest.",
					choices: [{
						id: "taught-merging-back",
						text: "Thank you.",
						effect: "say"
					}]
				},
				{
					id: "taught-smithing",
					line: "Heat it, hammer it, and watch the colour.",
					choices: [{
						id: "taught-smithing-back",
						text: "Thank you.",
						effect: "say"
					}]
				},
				{
					id: "work",
					line: "The forge is never idle.",
					choices: [
						{
							id: "ask",
							text: "What do you need?",
							effect: "quest-start",
							quest: "iron-for-the-gate",
							next: "ask-yes",
							requires: [
								{
									type: "level",
									min: 5
								},
								{
									type: "quest",
									quest: "boars-in-the-wood",
									state: "done"
								},
								{
									type: "quest",
									quest: "iron-for-the-gate",
									state: "none"
								}
							]
						},
						{
							id: "hand-in",
							text: "I have something for the gate.",
							effect: "quest-done",
							quest: "iron-for-the-gate",
							next: "hand-in-thanks",
							stageNext: ["ore-seen"],
							requires: [{
								type: "quest",
								quest: "iron-for-the-gate",
								state: "active"
							}]
						},
						{
							id: "after",
							text: "About the gate...",
							effect: "say",
							next: "after",
							requires: [{
								type: "quest",
								quest: "iron-for-the-gate",
								state: "done"
							}]
						},
						{
							id: "work-back",
							text: "Never mind.",
							effect: "say"
						}
					]
				},
				{
					id: "ask-yes",
					line: "The hill road needs a gate that holds. Mine three ore at the quarry and show it to me; mind the wolves.",
					choices: [{
						id: "ask-yes-back",
						text: "I will forge it.",
						effect: "say"
					}]
				},
				{
					id: "ore-seen",
					line: "Good ore; it rings true. Now forge it with two logs at my forge into an iron shield.",
					choices: [{
						id: "ore-seen-back",
						text: "I will forge it.",
						effect: "say"
					}]
				},
				{
					id: "hand-in-thanks",
					line: "Heavy and true. Take this plank shield for it; I have made it a little better. Come, I will show you how two pieces become one.",
					choices: [{
						id: "thanks-back",
						text: "Glad to help.",
						effect: "say"
					}]
				},
				{
					id: "after",
					line: "The gate will hold, I think. Brother Anselm is worried about the ruin.",
					choices: [{
						id: "after-back",
						text: "I see.",
						effect: "say"
					}]
				}
			],
			smith: { feePercent: 50 },
			shop: {
				sells: [],
				buys: [
					{
						item: "bear-claw",
						price: 8
					},
					{
						item: "warg-fang",
						price: 12
					},
					{
						item: "troll-tooth",
						price: 20
					},
					{
						item: "horn-fragment",
						price: 30
					}
				],
				purse: {
					cap: 150,
					refillGold: 1,
					refillEveryMs: 1e4
				}
			}
		},
		{
			id: "nicholas",
			name: "Nicholas",
			line: "Good day, child. I keep the book of the houses and the rent.",
			choices: [
				{
					id: "house",
					text: "How do I buy a house?",
					effect: "say",
					next: "house"
				},
				{
					id: "store",
					text: "What of the storehouse?",
					effect: "say",
					next: "store"
				},
				{
					id: "ledger",
					text: "Does the reeve need help?",
					effect: "say",
					next: "ledger",
					requires: [{
						type: "level",
						min: 4
					}]
				},
				{
					id: "bye",
					text: "Goodbye.",
					effect: "end"
				}
			],
			nodes: [
				{
					id: "ledger",
					line: "My old rent ledger was lost in the Old Mine under the quarry, and the roll cannot be mended without it. It lies in a chest at the far end, they say.",
					choices: [
						{
							id: "ask-ledger",
							text: "I will look for it.",
							effect: "quest-start",
							quest: "reeve-ledger",
							next: "ledger-yes",
							requires: [{
								type: "level",
								min: 4
							}, {
								type: "quest",
								quest: "reeve-ledger",
								state: "none"
							}]
						},
						{
							id: "hand-in-ledger",
							text: "I have the ledger.",
							effect: "quest-done",
							quest: "reeve-ledger",
							next: "ledger-thanks",
							requires: [{
								type: "quest",
								quest: "reeve-ledger",
								state: "active"
							}]
						},
						{
							id: "more-ledger",
							text: "Any more work for me?",
							effect: "say",
							next: "bounty",
							requires: [{
								type: "quest",
								quest: "reeve-ledger",
								state: "done"
							}]
						},
						{
							id: "ledger-back",
							text: "Never mind.",
							effect: "say"
						}
					]
				},
				{
					id: "ledger-yes",
					line: "Take a light into the mine and search its far end. Bring me the ledger, and I will pay you well.",
					choices: [{
						id: "ledger-yes-back",
						text: "I will find it.",
						effect: "say"
					}]
				},
				{
					id: "ledger-thanks",
					line: "My ledger, a little damp but whole. Take this vest, and my thanks.",
					choices: [{
						id: "ledger-thanks-back",
						text: "Glad to help.",
						effect: "say"
					}]
				},
				{
					id: "bounty",
					line: "Goblins have dug in beyond the mine, and they rob the carts. The reeve pays for their ears.",
					choices: [
						{
							id: "ask-bounty",
							text: "I will take the bounty.",
							effect: "quest-start",
							quest: "goblin-bounty",
							next: "bounty-yes",
							requires: [
								{
									type: "level",
									min: 8
								},
								{
									type: "quest",
									quest: "reeve-ledger",
									state: "done"
								},
								{
									type: "quest",
									quest: "goblin-bounty",
									state: "none"
								}
							]
						},
						{
							id: "hand-in-bounty",
							text: "I have the goblin ears.",
							effect: "quest-done",
							quest: "goblin-bounty",
							next: "bounty-thanks",
							requires: [{
								type: "quest",
								quest: "goblin-bounty",
								state: "active"
							}]
						},
						{
							id: "after-bounty",
							text: "About the goblins...",
							effect: "say",
							next: "bounty-after",
							requires: [{
								type: "quest",
								quest: "goblin-bounty",
								state: "done"
							}]
						},
						{
							id: "bounty-back",
							text: "Never mind.",
							effect: "say"
						}
					]
				},
				{
					id: "bounty-yes",
					line: "The warren lies below the mine; follow the stairs at its far end. Bring me six goblin ears.",
					choices: [{
						id: "bounty-yes-back",
						text: "I will see to it.",
						effect: "say"
					}]
				},
				{
					id: "bounty-thanks",
					line: "Six ears, counted twice. Take this shield and your pay.",
					choices: [{
						id: "bounty-thanks-back",
						text: "Glad to help.",
						effect: "say"
					}]
				},
				{
					id: "bounty-after",
					line: "The carts roll safer now. The reeve does not forget.",
					choices: [{
						id: "bounty-after-back",
						text: "I see.",
						effect: "say"
					}]
				},
				{
					id: "house",
					line: "A house nobody owns keeps its door open: step inside and talk to the house guide, from 8:00 to 20:00. The price is taken from your backpack.",
					choices: [{
						id: "inside",
						text: "And inside?",
						effect: "say",
						next: "inside"
					}, {
						id: "house-back",
						text: "Thank you.",
						effect: "say"
					}]
				},
				{
					id: "inside",
					line: "A house has a chest to keep things in and a bed to rest in. The rent falls due each month, and a house left unpaid is lost.",
					choices: [{
						id: "inside-back",
						text: "I see.",
						effect: "say"
					}]
				},
				{
					id: "store",
					line: "The storehouse has six chests, and each one opens your own depot, whichever you choose. What you leave there is yours in any town.",
					choices: [{
						id: "store-back",
						text: "Thank you.",
						effect: "say"
					}]
				}
			]
		},
		{
			id: "anselm",
			name: "Brother Anselm",
			line: "Peace, child. The chapel is open to all.",
			choices: [
				{
					id: "chapel",
					text: "What is the chapel for?",
					effect: "say",
					next: "chapel"
				},
				{
					id: "work",
					text: "Can I be of service?",
					effect: "say",
					next: "work"
				},
				{
					id: "bones",
					text: "What of the barrow?",
					effect: "say",
					next: "bones",
					requires: [{
						type: "level",
						min: 10
					}, {
						type: "quest",
						quest: "the-hill-wakes",
						state: "done"
					}]
				},
				{
					id: "bye",
					text: "Goodbye.",
					effect: "end"
				}
			],
			nodes: [
				{
					id: "bones",
					line: "Beneath the ruin lies an old barrow, and its dead walk again. I would lay them to rest, but I need what they leave behind.",
					choices: [
						{
							id: "ask-bones",
							text: "I will go down.",
							effect: "quest-start",
							quest: "bones-under-the-hill",
							next: "bones-yes",
							requires: [
								{
									type: "level",
									min: 10
								},
								{
									type: "quest",
									quest: "the-hill-wakes",
									state: "done"
								},
								{
									type: "quest",
									quest: "bones-under-the-hill",
									state: "none"
								}
							]
						},
						{
							id: "hand-in-bones",
							text: "I have the bone dust.",
							effect: "quest-done",
							quest: "bones-under-the-hill",
							next: "bones-thanks",
							requires: [{
								type: "quest",
								quest: "bones-under-the-hill",
								state: "active"
							}]
						},
						{
							id: "after-bones",
							text: "About the barrow...",
							effect: "say",
							next: "bones-after",
							requires: [{
								type: "quest",
								quest: "bones-under-the-hill",
								state: "done"
							}]
						},
						{
							id: "bones-back",
							text: "Never mind.",
							effect: "say"
						}
					]
				},
				{
					id: "bones-yes",
					line: "The stairs are inside the ruin on Watch Hill. Bring me five handfuls of bone dust, and I will lay it in the chapel ground.",
					choices: [{
						id: "bones-yes-back",
						text: "I will bring it.",
						effect: "say"
					}]
				},
				{
					id: "bones-thanks",
					line: "The dust will rest in hallowed ground. Take this cap, child, and my blessing.",
					choices: [{
						id: "bones-thanks-back",
						text: "Glad to help.",
						effect: "say"
					}]
				},
				{
					id: "bones-after",
					line: "The barrow is quieter, and the dead rest easier.",
					choices: [{
						id: "bones-after-back",
						text: "I see.",
						effect: "say"
					}]
				},
				{
					id: "chapel",
					line: "Here you rest, and here you wake if you fall in the wild. A fall costs you, so be careful.",
					choices: [{
						id: "chapel-sell",
						text: "Do you take what the dead leave?",
						effect: "trade"
					}, {
						id: "chapel-back",
						text: "Thank you, brother.",
						effect: "say"
					}]
				},
				{
					id: "work",
					line: "There may be a task for the ready.",
					choices: [
						{
							id: "ask",
							text: "What troubles you?",
							effect: "quest-start",
							quest: "the-hill-wakes",
							next: "ask-yes",
							requires: [
								{
									type: "level",
									min: 7
								},
								{
									type: "quest",
									quest: "iron-for-the-gate",
									state: "done"
								},
								{
									type: "quest",
									quest: "the-hill-wakes",
									state: "none"
								}
							]
						},
						{
							id: "hand-in",
							text: "I have a shard of the warden.",
							effect: "quest-done",
							quest: "the-hill-wakes",
							next: "hand-in-thanks",
							requires: [{
								type: "quest",
								quest: "the-hill-wakes",
								state: "active"
							}]
						},
						{
							id: "after",
							text: "About the hill...",
							effect: "say",
							next: "after",
							requires: [{
								type: "quest",
								quest: "the-hill-wakes",
								state: "done"
							}]
						},
						{
							id: "work-back",
							text: "Never mind.",
							effect: "say"
						}
					]
				},
				{
					id: "ask-yes",
					line: "Something in the ruin on Watch Hill has stirred, and a stone warden guards it. Bring me a shard of it, that I may learn what wakes.",
					choices: [{
						id: "ask-yes-back",
						text: "I will bring one.",
						effect: "say"
					}]
				},
				{
					id: "hand-in-thanks",
					line: "A cold shard of old stone. The hill only kept its watch; take this charm.",
					choices: [{
						id: "thanks-back",
						text: "Glad to help.",
						effect: "say"
					}]
				},
				{
					id: "after",
					line: "Old Victor waits at the pier, when you are ready to leave.",
					choices: [{
						id: "after-back",
						text: "I see.",
						effect: "say"
					}]
				}
			],
			shop: {
				sells: [],
				buys: [{
					item: "bone-dust",
					price: 5
				}],
				purse: {
					cap: 100,
					refillGold: 1,
					refillEveryMs: 1e4
				}
			}
		},
		{
			id: "edda",
			name: "Edda",
			line: "Few climb this far. The mountain keeps its own counsel, and so do I.",
			choices: [
				{
					id: "mountain",
					text: "What is this mountain?",
					effect: "say",
					next: "mountain"
				},
				{
					id: "work",
					text: "Do you need help?",
					effect: "say",
					next: "work"
				},
				{
					id: "bye",
					text: "Goodbye.",
					effect: "end"
				}
			],
			nodes: [
				{
					id: "mountain",
					line: "Crown Crag, the old watch of the isle. Beasts and worse live on it and beneath it.",
					choices: [{
						id: "mountain-back",
						text: "I see.",
						effect: "say"
					}]
				},
				{
					id: "work",
					line: "I have little use for visitors, but I can use a strong arm.",
					choices: [
						{
							id: "ask-warg",
							text: "What do you need?",
							effect: "quest-start",
							quest: "warg-trail",
							next: "warg-yes",
							requires: [{
								type: "level",
								min: 14
							}, {
								type: "quest",
								quest: "warg-trail",
								state: "none"
							}]
						},
						{
							id: "hand-in-warg",
							text: "I have the warg fangs.",
							effect: "quest-done",
							quest: "warg-trail",
							next: "warg-thanks",
							requires: [{
								type: "quest",
								quest: "warg-trail",
								state: "active"
							}]
						},
						{
							id: "more-work",
							text: "Is there more?",
							effect: "say",
							next: "more",
							requires: [{
								type: "quest",
								quest: "warg-trail",
								state: "done"
							}]
						},
						{
							id: "work-back",
							text: "Never mind.",
							effect: "say"
						}
					]
				},
				{
					id: "warg-yes",
					line: "Wargs hunt on the slopes above, and they thin my herd of goats. Bring me four of their fangs.",
					choices: [{
						id: "warg-yes-back",
						text: "I will hunt them.",
						effect: "say"
					}]
				},
				{
					id: "warg-thanks",
					line: "Sharp and clean. Take this cap, and a little coin.",
					choices: [{
						id: "warg-thanks-back",
						text: "Glad to help.",
						effect: "say"
					}]
				},
				{
					id: "more",
					line: "The wargs were only the start. A stone maze lies beneath the isle, and horned guards walk it.",
					choices: [
						{
							id: "ask-maze",
							text: "What would you have me do?",
							effect: "quest-start",
							quest: "the-maze",
							next: "maze-yes",
							requires: [
								{
									type: "level",
									min: 17
								},
								{
									type: "quest",
									quest: "warg-trail",
									state: "done"
								},
								{
									type: "quest",
									quest: "the-maze",
									state: "none"
								}
							]
						},
						{
							id: "hand-in-maze",
							text: "I have the horn fragments.",
							effect: "quest-done",
							quest: "the-maze",
							next: "maze-thanks",
							requires: [{
								type: "quest",
								quest: "the-maze",
								state: "active"
							}]
						},
						{
							id: "further-work",
							text: "And after that?",
							effect: "say",
							next: "further",
							requires: [{
								type: "quest",
								quest: "the-maze",
								state: "done"
							}]
						},
						{
							id: "more-back",
							text: "Never mind.",
							effect: "say"
						}
					]
				},
				{
					id: "maze-yes",
					line: "The maze lies under the mine and the warren, at the end of the deep stairs. Bring me three fragments of the guards' horned helms.",
					choices: [{
						id: "maze-yes-back",
						text: "I will find my way.",
						effect: "say"
					}]
				},
				{
					id: "maze-thanks",
					line: "So they are real. These trousers should serve you better than they served me.",
					choices: [{
						id: "maze-thanks-back",
						text: "Glad to help.",
						effect: "say"
					}]
				},
				{
					id: "further",
					line: "The guards serve something that sits at the top of the crag. It wears a cairn of stones for a crown.",
					choices: [
						{
							id: "ask-cairn",
							text: "I will face it.",
							effect: "quest-start",
							quest: "cairn-lord",
							next: "cairn-yes",
							requires: [
								{
									type: "level",
									min: 19
								},
								{
									type: "quest",
									quest: "the-maze",
									state: "done"
								},
								{
									type: "quest",
									quest: "cairn-lord",
									state: "none"
								}
							]
						},
						{
							id: "hand-in-cairn",
							text: "I have the cairn seal.",
							effect: "quest-done",
							quest: "cairn-lord",
							next: "cairn-thanks",
							requires: [{
								type: "quest",
								quest: "cairn-lord",
								state: "active"
							}]
						},
						{
							id: "after-cairn",
							text: "About the cairn lord...",
							effect: "say",
							next: "cairn-after",
							requires: [{
								type: "quest",
								quest: "cairn-lord",
								state: "done"
							}]
						},
						{
							id: "further-back",
							text: "Never mind.",
							effect: "say"
						}
					]
				},
				{
					id: "cairn-yes",
					line: "Climb the stairs at the foot of the crag, past the wargs, to the summit. Bring me the seal it carries, and be ready to fall back.",
					choices: [{
						id: "cairn-yes-back",
						text: "I will be ready.",
						effect: "say"
					}]
				},
				{
					id: "cairn-thanks",
					line: "The seal, and you walk back down on your own feet. Keep this vest and the coin; you have earned both.",
					choices: [{
						id: "cairn-thanks-back",
						text: "Glad to help.",
						effect: "say"
					}]
				},
				{
					id: "cairn-after",
					line: "The crag is quiet for now. Such things grow back, in time.",
					choices: [{
						id: "cairn-after-back",
						text: "I see.",
						effect: "say"
					}]
				}
			]
		},
		{
			id: "greta",
			name: "Greta",
			line: "Welcome in. Sit where you like; there is bread and cheese for anyone who is hungry.",
			choices: [{
				id: "trade",
				text: "Let's trade.",
				effect: "trade"
			}, {
				id: "bye",
				text: "Goodbye.",
				effect: "end"
			}],
			shop: {
				sells: [{
					item: "bread",
					price: 6
				}, {
					item: "cheese",
					price: 5
				}],
				buys: []
			}
		}
	]
}, n = [
	"maps/test.json",
	"tiles.json",
	"monsters.json"
], r = [
	"format",
	"rev",
	"savedAt",
	"by",
	"note",
	"files"
], i = /^[0-9a-f]{64}$/, a = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z$/;
function o(e) {
	return {
		ok: !1,
		reason: e
	};
}
function s(e) {
	let t;
	try {
		t = JSON.parse(e);
	} catch {
		return o("not valid JSON");
	}
	if (typeof t != "object" || !t || Array.isArray(t)) return o("not a JSON object");
	let s = t;
	for (let e of Object.keys(s)) if (!r.includes(e)) return o(`unknown key "${e}"`);
	if (s.format !== 2) return o("format must be 2");
	let c = s.rev;
	if (typeof c != "number" || !Number.isInteger(c) || c < 1) return o("rev must be a positive whole number");
	let l = s.savedAt;
	if (typeof l != "string" || !a.test(l) || Number.isNaN(Date.parse(l))) return o("savedAt must be an ISO 8601 UTC time");
	let u = s.by;
	if (u !== "mapmaker" && u !== "script") return o("by must be \"mapmaker\" or \"script\"");
	if ("note" in s && typeof s.note != "string") return o("note must be a string");
	let d = s.files;
	if (typeof d != "object" || !d || Array.isArray(d)) return o("files must be an object");
	let f = d;
	for (let e of Object.keys(f)) if (!n.includes(e)) return o(`unknown file "${e}"`);
	let p = {};
	for (let e of n) {
		let t = f[e];
		if (t === void 0) return o(`missing file "${e}"`);
		if (typeof t != "string" || !i.test(t)) return o(`bad hash for "${e}"`);
		p[e] = t;
	}
	let m = {
		format: 2,
		rev: c,
		savedAt: l,
		by: u,
		files: p
	};
	return typeof s.note == "string" && (m.note = s.note), {
		ok: !0,
		manifest: m
	};
}
async function c(e, t = globalThis.crypto.subtle) {
	let n = await t.digest("SHA-256", new TextEncoder().encode(e));
	return Array.from(new Uint8Array(n), (e) => e.toString(16).padStart(2, "0")).join("");
}
// ../../packages/shared/src/state.ts
var l = [
	"helmet",
	"amulet",
	"armour",
	"legs",
	"boots",
	"gloves",
	"ring",
	"ring",
	"shield",
	"backpack"
], u = [
	"invited",
	"coOwners",
	"blocked"
];
// ../../packages/shared/src/convert.ts
function d(e, t) {
	return Math.floor((2 * e + t) / (2 * t));
}
function f(e, t) {
	return d(e * t, 1e3);
}
// ../../packages/shared/src/depot.ts
var p = 1e3;
l.indexOf("backpack");
var m = [0];
for (let e = 1; e <= 100; e += 1) {
	let t = e - 1;
	m.push(10 * t * t * t + 40 * t * t);
}
// ../../packages/shared/src/trades.ts
var h = [
	"mining",
	"woodcutting",
	"skinning",
	"smithing",
	"tailoring"
], g = [
	"id",
	"name",
	"level",
	"minLevel",
	"homes",
	"pinned"
], _ = ["x", "y"];
function v(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function y(e) {
	return typeof e == "number" && Number.isInteger(e);
}
function b(e, t, n) {
	let r = [];
	return e.forEach((e, i) => {
		let a = `${t}[${i}]`;
		if (!v(e) || !y(e.x) || !y(e.y)) n.push(`${a} must be a tile with whole numbers x and y.`);
		else {
			for (let t of Object.keys(e)) _.includes(t) || n.push(`${a}: the key "${t}" is not part of the format.`);
			r.push({
				x: e.x,
				y: e.y,
				index: i
			});
		}
	}), r;
}
function x(e, t, n) {
	if (!Array.isArray(e)) return ["markers.spots must be a list."];
	let r = [];
	e.length > 200 && r.push("markers.spots has more than 200 spots.");
	let i = /* @__PURE__ */ new Set();
	for (let e of Array.isArray(t) ? t : []) v(e) && y(e.x) && y(e.y) && y(e.level) && i.add(`${e.level},${e.x},${e.y}`);
	let a = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
	return e.slice(0, 200).forEach((e, t) => {
		let s = `markers.spots[${t}]`;
		if (!v(e)) {
			r.push(`${s} must be an object.`);
			return;
		}
		for (let t of Object.keys(e)) g.includes(t) || r.push(`${s}: the key "${t}" is not part of the format.`);
		let c = e.id;
		if (typeof c != "string" || !/^[a-z0-9-]+$/.test(c)) r.push(`${s}: "id" must be a lower-case slug (a to z, 0 to 9 and -).`);
		else {
			let e = a.get(c);
			e === void 0 ? a.set(c, t) : r.push(`${s}: the id "${c}" is already used by markers.spots[${e}].`);
		}
		let l = e.name;
		(typeof l != "string" || l.length < 1 || l.length > 40) && r.push(`${s}: "name" must be 1 to 40 characters.`);
		let u = e.level, d = y(u) && u >= 0 && u < n;
		d || r.push(`${s}: "level" must be a whole number of a level of the map (0 to ${n - 1}).`);
		let f = e.minLevel;
		(!y(f) || f < 1 || f > 100) && r.push(`${s}: "minLevel" must be a whole number from 1 to 100.`);
		let p = e.homes, m = /* @__PURE__ */ new Set();
		if (!Array.isArray(p)) r.push(`${s}: "homes" must be a list of tiles.`);
		else if (p.length === 0) r.push(`${s} has no home; a spot needs 1 to 200.`);
		else {
			p.length > 200 && r.push(`${s} has more than 200 homes.`);
			for (let { x: e, y: n, index: a } of b(p.slice(0, 200), `${s}.homes`, r)) {
				let c = `${s}.homes[${a}]: (${e}, ${n})`, l = `${u},${e},${n}`;
				if (m.has(`${e},${n}`)) {
					r.push(`${c} is listed twice in this spot.`);
					continue;
				}
				if (m.add(`${e},${n}`), !d) continue;
				i.has(l) || r.push(`${c} is not the tile of a spawn on level ${u}.`);
				let f = o.get(l);
				f === void 0 ? o.set(l, t) : r.push(`${c} is already a home of markers.spots[${f}].`);
			}
		}
		let h = e.pinned;
		if (h !== void 0) {
			if (!Array.isArray(h)) r.push(`${s}: "pinned" must be a list of tiles.`);
			else {
				let e = /* @__PURE__ */ new Set();
				for (let { x: t, y: n, index: i } of b(h, `${s}.pinned`, r)) e.has(`${t},${n}`) ? r.push(`${s}.pinned[${i}]: (${t}, ${n}) is listed twice.`) : m.has(`${t},${n}`) || r.push(`${s}.pinned[${i}]: (${t}, ${n}) is not one of the homes of this spot.`), e.add(`${t},${n}`);
			}
		}
	}), r;
}
// ../../packages/shared/src/zone.ts
var S = ["kind", "area"], C = [
	"x0",
	"y0",
	"x1",
	"y1"
];
function w(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function T(e, t, n) {
	if (!Array.isArray(e)) return ["markers.zones must be a list."];
	let r = [];
	return e.forEach((e, i) => {
		let a = `markers.zones[${i}]`;
		if (!w(e)) {
			r.push(`${a} must be an object.`);
			return;
		}
		for (let t of Object.keys(e)) S.includes(t) || r.push(`${a}: the key "${t}" is not part of the format.`);
		e.kind !== "protection" && r.push(`${a}: "kind" must be "protection".`);
		let o = e.area;
		if (!w(o)) {
			r.push(`${a}: "area" must be an object with x0, y0, x1 and y1.`);
			return;
		}
		for (let e of Object.keys(o)) C.includes(e) || r.push(`${a}.area: the key "${e}" is not part of the format.`);
		let s = !0;
		for (let e of C) typeof o[e] == "number" && Number.isInteger(o[e]) || (r.push(`${a}.area: "${e}" must be a whole number.`), s = !1);
		if (!s) return;
		let { x0: c, y0: l, x1: u, y1: d } = o;
		(c > u || l > d) && r.push(`${a}.area: x0 and y0 must not be greater than x1 and y1.`), Number.isFinite(t) && Number.isFinite(n) && (c < 0 || l < 0 || u >= t || d >= n) && r.push(`${a}.area: the rectangle must lie inside the map (${t} by ${n} tiles).`);
	}), r;
}
var E = ["forge", "loom"], D = [
	"north",
	"south",
	"west",
	"east"
], ee = [
	"north",
	"east",
	"south",
	"west"
], O = [
	"x",
	"y",
	"level",
	"movable",
	"openable",
	"shutterable",
	"loot"
], te = [
	"id",
	"kind",
	"x",
	"y",
	"level",
	"facing",
	"push"
];
function k(e, t, n, r, i) {
	if (r < 0 || i < 0 || r >= e.widthChunks * 16 || i >= e.heightChunks * 16) return 0;
	let a = e.levels[t]?.layers[n];
	if (a === void 0) return 0;
	let o = Math.floor(r / 16), s = Math.floor(i / 16), c = a[s * e.widthChunks + o];
	if (c == null) return 0;
	let l = c[(i - s * 16) * 16 + (r - o * 16)];
	return l === void 0 ? 0 : l;
}
function A(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function j(e) {
	return typeof e == "number" && Number.isInteger(e);
}
function M(e) {
	return typeof e == "string" && e.length > 0;
}
function ne(e) {
	return typeof e == "string" && /^[a-z0-9-]+$/.test(e);
}
var N = 100, re = 1e3;
function P(e) {
	return e.length > N;
}
function ie(e, t, n, r) {
	let { x0: i, y0: a, x1: o, y1: s } = r, c = (r, i) => t.get(k(e, n, 0, r, i))?.blocks === !1, l = (r, i) => c(r, i) && t.get(k(e, n, 1, r, i))?.blocks !== !0, u = 0;
	for (let r = a; r <= s; r += 1) for (let d = i; d <= o; d += 1) if ((d === i || d === o || r === a || r === s) && t.get(k(e, n, 1, d, r))?.opens === "door" && c(d, r) && (u += 1, d === i ? l(d - 1, r) : d === o ? l(d + 1, r) : l(d, r + (r === a ? -1 : 1)))) return null;
	return u === 0 ? "door" : "outside";
}
function F(e, t, n, r) {
	for (let i of Object.keys(e)) t.includes(i) || r.push(`${n}: the key "${i}" is not part of the format.`);
}
function ae(e, t) {
	let n = /* @__PURE__ */ new Map();
	if (!A(e)) return t.push("The tile types file is not an object."), n;
	F(e, ["format", "tiles"], "The tile types file", t), e.format !== 1 && t.push("The tile types file must have format 1.");
	let r = e.tiles;
	if (!Array.isArray(r)) return t.push("The tile types file must have a \"tiles\" list."), n;
	let i = /* @__PURE__ */ new Set();
	return r.forEach((e, r) => {
		if (P(t)) return;
		if (!A(e)) {
			t.push(`Tile type entry ${r} is not an object.`);
			return;
		}
		let a = e.id, o = j(a) ? `tile type ${a}` : `tile type entry ${r}`;
		F(e, [
			"id",
			"name",
			"image",
			"layer",
			"blocks",
			"opens",
			"openImage",
			"swing",
			"container",
			"bed",
			"herb",
			"pickedImage",
			"workplace",
			"node",
			"depot",
			"gate",
			"stall",
			"walkCost",
			"movable",
			"item",
			"joined",
			"quest",
			"shutImage"
		], o, t);
		let s = !0;
		!j(a) || a < 1 ? (t.push(`${o}: the id must be a whole number of 1 or more.`), s = !1) : i.has(a) ? (t.push(`${o}: the id is used more than once.`), s = !1) : i.add(a);
		let c = e.layer;
		c !== 0 && c !== 1 && c !== 3 && (t.push(`${o}: the layer must be 0, 1 or 3.`), s = !1);
		let l = e.blocks;
		typeof l == "boolean" ? c === 3 && l && (t.push(`${o}: a layer 3 tile type cannot block.`), s = !1) : (t.push(`${o}: "blocks" must be true or false.`), s = !1), M(e.name) || (t.push(`${o}: the name must be a non-empty string.`), s = !1), M(e.image) || (t.push(`${o}: the image must be a non-empty string.`), s = !1);
		let u = e.opens;
		u === void 0 ? e.openImage !== void 0 && (t.push(`${o}: "openImage" is only allowed with "opens".`), s = !1) : u !== "door" && u !== "window" ? (t.push(`${o}: "opens" must be "door" or "window".`), s = !1) : (c !== 1 && (t.push(`${o}: a tile type that opens must be on layer 1.`), s = !1), l !== !0 && (t.push(`${o}: a tile type that opens must block.`), s = !1), M(e.openImage) || (t.push(`${o}: a tile type that opens needs an "openImage" that is a non-empty string.`), s = !1));
		let d = e.swing;
		d !== void 0 && (D.some((e) => e === d) ? u !== "door" && (t.push(`${o}: "swing" is only allowed on a door (a type with "opens": "door").`), s = !1) : (t.push(`${o}: "swing" must be "north", "south", "west" or "east".`), s = !1));
		let f = e.container;
		f !== void 0 && (f === !0 ? c === 1 ? l === !0 ? u !== void 0 && (t.push(`${o}: a container tile type cannot open.`), s = !1) : (t.push(`${o}: a container tile type must block.`), s = !1) : (t.push(`${o}: a container tile type must be on layer 1.`), s = !1) : (t.push(`${o}: "container" must be true when present.`), s = !1));
		let p = e.bed;
		p !== void 0 && (p === !0 ? c === 1 ? l === !0 ? u === void 0 ? f !== void 0 && (t.push(`${o}: a bed tile type cannot be a container.`), s = !1) : (t.push(`${o}: a bed tile type cannot open.`), s = !1) : (t.push(`${o}: a bed tile type must block.`), s = !1) : (t.push(`${o}: a bed tile type must be on layer 1.`), s = !1) : (t.push(`${o}: "bed" must be true when present.`), s = !1));
		let m = e.depot;
		m !== void 0 && (m === !0 ? c === 1 ? l === !0 ? [
			u,
			f,
			p,
			e.herb,
			e.node,
			e.workplace
		].some((e) => e !== void 0) && (t.push(`${o}: a depot tile type cannot be a door, window, container, bed, herb, node or workplace.`), s = !1) : (t.push(`${o}: a depot tile type must block.`), s = !1) : (t.push(`${o}: a depot tile type must be on layer 1.`), s = !1) : (t.push(`${o}: "depot" must be true when present.`), s = !1));
		let g = e.gate;
		g !== void 0 && (g === !0 ? c === 1 ? l === !0 ? [
			u,
			f,
			p,
			e.herb,
			e.node,
			e.workplace,
			e.depot
		].some((e) => e !== void 0) && (t.push(`${o}: a gate tile type cannot be a door, window, container, bed, herb, node, workplace or depot.`), s = !1) : (t.push(`${o}: a gate tile type must block.`), s = !1) : (t.push(`${o}: a gate tile type must be on layer 1.`), s = !1) : (t.push(`${o}: "gate" must be true when present.`), s = !1));
		let _ = e.stall;
		_ !== void 0 && (_ === !0 ? c === 1 ? l === !0 ? [
			u,
			f,
			p,
			e.herb,
			e.node,
			e.workplace,
			e.depot,
			g
		].some((e) => e !== void 0) && (t.push(`${o}: a stall tile type cannot be a door, window, container, bed, herb, node, workplace, depot or gate.`), s = !1) : (t.push(`${o}: a stall tile type must block.`), s = !1) : (t.push(`${o}: a stall tile type must be on layer 1.`), s = !1) : (t.push(`${o}: "stall" must be true when present.`), s = !1));
		let v = e.walkCost;
		v !== void 0 && (!j(v) || v < 50 || v > 250 ? (t.push(`${o}: "walkCost" must be a whole number from 50 to 250.`), s = !1) : c === 0 ? l !== !1 && (t.push(`${o}: a tile type with "walkCost" must not block.`), s = !1) : (t.push(`${o}: a tile type with "walkCost" must be on layer 0.`), s = !1));
		let y = e.herb, b = e.workplace, x = e.node;
		x !== void 0 && (A(x) ? (F(x, [
			"trade",
			"item",
			"regrowMs"
		], `${o} node`, t), h.some((e) => e === x.trade) || (t.push(`${o}: the node "trade" must be one of ${h.join(", ")}.`), s = !1), M(x.item) || (t.push(`${o}: the node "item" must be the id of an item, a non-empty string.`), s = !1), (!j(x.regrowMs) || x.regrowMs < 1) && (t.push(`${o}: the node "regrowMs" must be a whole number of milliseconds, 1 or more.`), s = !1)) : (t.push(`${o}: "node" must be an object with "trade", "item" and "regrowMs".`), s = !1)), x !== void 0 && !M(e.pickedImage) && (t.push(`${o}: a node tile type needs a "pickedImage" that is a non-empty string.`), s = !1), y === void 0 ? e.pickedImage !== void 0 && x === void 0 && (t.push(`${o}: "pickedImage" is only allowed with "herb" or "node".`), s = !1) : (M(y) || (t.push(`${o}: "herb" must be the id of an item, a non-empty string.`), s = !1), M(e.pickedImage) || (t.push(`${o}: a herb tile type needs a "pickedImage" that is a non-empty string.`), s = !1)), b !== void 0 && b !== !0 && !E.some((e) => e === b) && (t.push(`${o}: "workplace" must be true when present, or "forge" or "loom".`), s = !1), (y !== void 0 || b !== void 0 || x !== void 0) && (c === 1 ? l !== !0 && (t.push(`${o}: a herb or workplace tile type must block.`), s = !1) : (t.push(`${o}: a herb or workplace tile type must be on layer 1.`), s = !1), [
			u,
			f,
			p,
			y,
			x,
			b
		].filter((e) => e !== void 0).length > 1 && (t.push(`${o}: a tile type can be only one of a door or window, container, bed, herb, node and workplace.`), s = !1));
		let S = e.quest;
		S !== void 0 && (S === !0 ? f !== !0 && (t.push(`${o}: "quest" is only for a container tile type.`), s = !1) : (t.push(`${o}: "quest" must be true when present.`), s = !1));
		let C = e.movable;
		C !== void 0 && (C === !0 ? c === 1 ? [
			u,
			g,
			m,
			y,
			x,
			S
		].some((e) => e !== void 0) ? (t.push(`${o}: a door, window, gate, depot, herb, node or quest chest cannot be movable.`), s = !1) : _ !== void 0 && (t.push(`${o}: a stall stand cannot be movable.`), s = !1) : (t.push(`${o}: a movable tile type must be on layer 1.`), s = !1) : (t.push(`${o}: "movable" must be true when present.`), s = !1));
		let w = e.joined;
		w !== void 0 && (D.some((e) => e === w) ? c !== 1 && (t.push(`${o}: a joined tile type must be on layer 1.`), s = !1) : (t.push(`${o}: "joined" must be "north", "south", "west" or "east".`), s = !1));
		let T = e.item;
		T !== void 0 && (M(T) ? C === !0 ? w !== void 0 && (t.push(`${o}: a joined tile type is never lifted, so it has no "item".`), s = !1) : (t.push(`${o}: "item" is only for a movable tile type.`), s = !1) : (t.push(`${o}: "item" must be the id of an item, a non-empty string.`), s = !1));
		let ee = e.shutImage;
		ee !== void 0 && (M(ee) ? u !== "window" && (t.push(`${o}: "shutImage" is only allowed on a window (a type with "opens": "window").`), s = !1) : (t.push(`${o}: "shutImage" must be a non-empty string.`), s = !1)), s && j(a) && n.set(a, e);
	}), n;
}
function oe(e, t, n, r, i) {
	for (let a = 0; a < r; a += 1) for (let r = n.y0; r <= n.y1; r += 1) for (let o = n.x0; o <= n.x1; o += 1) if (t.get(k(e, a, 1, o, r))?.[i] === !0) return {
		x: o,
		y: r,
		level: a
	};
}
function I(e, t, n, r = []) {
	return A(e) && F(e, [
		"x",
		"y",
		"level",
		...r
	], t, n), !A(e) || !j(e.x) || !j(e.y) || !j(e.level) ? (n.push(`${t} must have whole numbers x, y and level.`), !1) : !0;
}
function L(e, t, n, r, i, a) {
	let o = !0;
	return (e.level < 0 || e.level >= i) && (a.push(`${t}: level ${e.level} does not exist.`), o = !1), (e.x < 0 || e.y < 0 || e.x >= n || e.y >= r) && (a.push(`${t}: tile (${e.x}, ${e.y}) is outside the map.`), o = !1), o;
}
function se(e, t, n, r, i) {
	let a = [];
	return ce(e, t, a, n, r, i), P(a) && (a.length = N, a.push(`There are more than ${N} problems; the rest are not listed.`)), a;
}
function ce(e, t, n, r, i, a) {
	let o = ae(t, n);
	if (!A(e)) {
		n.push("The map is not an object.");
		return;
	}
	F(e, [
		"format",
		"name",
		"widthChunks",
		"heightChunks",
		"levels",
		"groundLevel",
		"markers"
	], "The map", n), e.format !== 1 && n.push("The map must have format 1."), ne(e.name) || n.push("The map name must be made of the characters a to z, 0 to 9 and \"-\" only.");
	let s = e.widthChunks, c = e.heightChunks, l = !0;
	for (let [e, t] of [["widthChunks", s], ["heightChunks", c]]) (!j(t) || t < 1 || t > 64) && (n.push(`${e} must be a whole number from 1 to 64.`), l = !1);
	let u = e.levels, d = !0;
	Array.isArray(u) && u.length !== 0 || (n.push("The map must have a list of levels with at least one level."), d = !1);
	let f = e.groundLevel;
	!j(f) || f < 0 || Array.isArray(u) && f >= u.length ? n.push("groundLevel must be the whole-number index of a level in \"levels\".") : Array.isArray(u) && (f > 8 && n.push(`The map has ${f} levels below the ground level; at most 8 are allowed.`), u.length - 1 - f > 8 && n.push(`The map has ${u.length - 1 - f} levels above the ground level; at most 8 are allowed.`));
	let p = n.length;
	if (l && Array.isArray(u)) {
		let e = s * c;
		u.forEach((t, r) => {
			if (P(n)) return;
			A(t) && F(t, ["layers"], `level ${r}`, n);
			let i = A(t) ? t.layers : void 0;
			if (!A(i)) n.push(`level ${r}: there is no "layers" object.`), d = !1;
			else {
				F(i, [
					"0",
					"1",
					"3"
				], `level ${r}, layers`, n);
				for (let t of [
					0,
					1,
					3
				]) {
					let a = `level ${r}, layer ${t}`, s = i[String(t)];
					Array.isArray(s) ? (s.length !== e && n.push(`${a}: ${s.length} chunks, expected ${e}.`), s.forEach((e, r) => {
						if (e === null || P(n)) return;
						if (!Array.isArray(e)) {
							n.push(`${a}, chunk ${r}: it must be a list of tile ids or null.`);
							return;
						}
						if (e.length !== 256) {
							n.push(`${a}, chunk ${r}: ${e.length} tile ids, expected 256.`);
							return;
						}
						let i = !1;
						for (let s = 0; s < e.length && !P(n); s += 1) {
							let c = e[s];
							if (c === 0) continue;
							if (i = !0, !j(c) || c < 0) {
								n.push(`${a}, chunk ${r}, tile ${s}: the id must be a whole number of 0 or more.`);
								continue;
							}
							let l = o.get(c);
							l === void 0 ? n.push(`${a}, chunk ${r}, tile ${s}: tile type ${c} is not known.`) : l.layer !== t && n.push(`${a}, chunk ${r}, tile ${s}: tile type ${c} is on layer ${t} but belongs to layer ${l.layer}.`);
						}
						i || n.push(`${a}, chunk ${r}: all 256 ids are 0; an empty chunk must be written as null.`);
					})) : (n.push(`${a}: the chunk list is missing.`), d = !1);
				}
			}
		});
	}
	let m = l && d && n.length === p, h = l ? s * 16 : 0, g = l ? c * 16 : 0, _ = Array.isArray(u) ? u.length : 0, v = e.markers;
	if (!A(v)) {
		n.push("The map must have a \"markers\" object.");
		return;
	}
	F(v, [
		"start",
		"respawn",
		"stairs",
		"portals",
		"gates",
		"houses",
		"zones",
		"spawns",
		"spots",
		"arrivals",
		"npcs",
		"things"
	], "markers", n);
	let y = v.start;
	if (I(y, "The start marker", n) && l && L(y, "The start marker", h, g, _, n) && m) {
		let t = `The start marker at (${y.x}, ${y.y}) on level ${y.level}`, r = e, i = o.get(k(r, y.level, 0, y.x, y.y)), a = o.get(k(r, y.level, 1, y.x, y.y));
		i === void 0 ? n.push(`${t} has no floor tile.`) : i.blocks ? n.push(`${t} is on a floor that cannot be walked on.`) : a !== void 0 && a.blocks && n.push(`${t} is on a solid tile.`);
	}
	let b = v.stairs;
	if (!Array.isArray(b)) n.push("markers.stairs must be a list.");
	else {
		let t = /* @__PURE__ */ new Map();
		b.forEach((e, n) => {
			if (A(e) && j(e.x) && j(e.y) && j(e.level)) {
				let r = `${e.level},${e.x},${e.y}`;
				t.has(r) || t.set(r, n);
			}
		});
		let r = /* @__PURE__ */ new Set();
		for (let t of Array.isArray(v.portals) ? v.portals : []) A(t) && t.toMap === e.name && j(t.x) && j(t.y) && j(t.level) && r.add(`${t.level},${t.x},${t.y}`);
		b.forEach((i, a) => {
			if (P(n)) return;
			let s = `Stairs ${a}`;
			if (!I(i, s, n, ["to", "facing"]) || !l) return;
			let c = i.facing;
			c !== void 0 && !ee.some((e) => e === c) && n.push(`${s} has a facing that is not north, east, south or west.`);
			let u = t.get(`${i.level},${i.x},${i.y}`);
			if (u !== void 0 && u !== a && n.push(`${s} is on the same tile as stairs ${u}.`), L(i, s, h, g, _, n) && m) {
				let t = `${s} at (${i.x}, ${i.y}) on level ${i.level}`, r = e, a = o.get(k(r, i.level, 0, i.x, i.y)), c = o.get(k(r, i.level, 1, i.x, i.y));
				a === void 0 ? n.push(`${t} has no floor tile.`) : a.blocks ? n.push(`${t} is on a floor that cannot be walked on.`) : c !== void 0 && c.blocks && n.push(`${t} is on a solid tile.`);
			}
			let d = i.to;
			if (I(d, `${s} target`, n)) {
				if (L(d, `${s} target`, h, g, _, n) && m) {
					let t = `${s} target at (${d.x}, ${d.y}) on level ${d.level}`, r = o.get(k(e, d.level, 0, d.x, d.y)), i = o.get(k(e, d.level, 1, d.x, d.y));
					r === void 0 ? n.push(`${t} has no floor tile.`) : r.blocks ? n.push(`${t} is on a floor that cannot be walked on.`) : i !== void 0 && i.blocks && n.push(`${t} is on a solid tile.`);
				}
				Math.abs(d.level - i.level) !== 1 && n.push(`${s} target: level ${d.level} is not one level above or below level ${i.level}.`), t.has(`${d.level},${d.x},${d.y}`) && n.push(`${s} target: tile (${d.x}, ${d.y}) on level ${d.level} is itself a stairs tile.`), r.has(`${d.level},${d.x},${d.y}`) && n.push(`${s} target: tile (${d.x}, ${d.y}) on level ${d.level} is a portal tile.`);
			}
		});
	}
	let S = v.respawn;
	if (S !== void 0 && I(S, "The respawn marker", n) && l && L(S, "The respawn marker", h, g, _, n) && m) {
		let t = `The respawn marker at (${S.x}, ${S.y}) on level ${S.level}`, r = e, i = o.get(k(r, S.level, 0, S.x, S.y)), a = o.get(k(r, S.level, 1, S.x, S.y)), s = Array.isArray(b) && b.some((e) => A(e) && e.x === S.x && e.y === S.y && e.level === S.level);
		i === void 0 ? n.push(`${t} has no floor tile.`) : i.blocks ? n.push(`${t} is on a floor that cannot be walked on.`) : a !== void 0 && a.blocks ? n.push(`${t} is on a solid tile.`) : s && n.push(`${t} is on a stairs tile.`);
	}
	let C = v.arrivals;
	if (C !== void 0 && !Array.isArray(C)) n.push("markers.arrivals must be a list.");
	else if (C !== void 0) {
		let t = /* @__PURE__ */ new Set();
		C.forEach((r, i) => {
			if (P(n)) return;
			let a = `Arrival ${i}`;
			if (!A(r)) {
				n.push(`${a} must be an object.`);
				return;
			}
			F(r, [
				"id",
				"x",
				"y",
				"level"
			], a, n);
			let s = r.id;
			ne(s) ? t.has(s) ? n.push(`${a} has the same id as an earlier arrival.`) : t.add(s) : n.push(`${a}: id must be made of the characters a to z, 0 to 9 and "-" only.`);
			let c = r.x, u = r.y, d = r.level;
			if (!j(c) || !j(u) || !j(d)) {
				n.push(`${a} must have whole numbers x, y and level.`);
				return;
			}
			if (!l || !L({
				x: c,
				y: u,
				level: d
			}, a, h, g, _, n) || !m) return;
			let f = `${a} at (${c}, ${u}) on level ${d}`, p = e, y = o.get(k(p, d, 0, c, u)), x = o.get(k(p, d, 1, c, u)), S = (e) => Array.isArray(e) && e.some((e) => A(e) && e.x === c && e.y === u && e.level === d);
			y === void 0 ? n.push(`${f} has no floor tile.`) : y.blocks ? n.push(`${f} is on a floor that cannot be walked on.`) : x !== void 0 && x.blocks ? n.push(`${f} is on a solid tile.`) : S(b) ? n.push(`${f} is on a stairs tile.`) : S(v.portals) && n.push(`${f} is on a portal tile.`);
		});
	}
	let w = v.houses;
	if (w !== void 0 && !Array.isArray(w)) n.push("markers.houses must be a list.");
	else if (w !== void 0) {
		w.length > re && n.push(`markers.houses must hold at most ${re} houses.`);
		let t = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), i = [];
		w.forEach((a, s) => {
			if (P(n)) return;
			let c = `House ${s}`;
			if (!A(a)) {
				n.push(`${c} must be an object.`);
				return;
			}
			F(a, [
				"id",
				"price",
				"sign",
				"area"
			], c, n), ne(a.id) ? t.has(a.id) ? n.push(`${c} has the same id as an earlier house.`) : t.add(a.id) : n.push(`${c}: id must be made of the characters a to z, 0 to 9 and "-" only.`);
			let u = a.price;
			(!j(u) || u < 1 || u > 1e6) && n.push(`${c}: price must be a whole number from 1 to 1000000.`);
			let d = a.area, f;
			if (!A(d) || ![
				"x0",
				"y0",
				"x1",
				"y1"
			].every((e) => j(d[e]))) n.push(`${c}: area must have whole numbers x0, y0, x1 and y1.`);
			else {
				F(d, [
					"x0",
					"y0",
					"x1",
					"y1"
				], `${c} area`, n);
				let e = d.x0, t = d.y0, r = d.x1, i = d.y1;
				e > r || t > i ? n.push(`${c}: area must have x0 <= x1 and y0 <= y1.`) : l && (e < 0 || t < 0 || r >= h || i >= g) ? n.push(`${c}: area is outside the map.`) : f = {
					x0: e,
					y0: t,
					x1: r,
					y1: i
				};
			}
			let p = a.sign;
			if (I(p, `${c} sign`, n)) {
				let t = `${p.level},${p.y},${p.x}`;
				if (r.has(t) && n.push(`${c} has the same sign point as an earlier house.`), r.add(t), f !== void 0) {
					let { x0: e, y0: t, x1: r, y1: a } = f, o = i.find((n) => e <= n.x1 && n.x0 <= r && t <= n.y1 && n.y0 <= a);
					o !== void 0 && n.push(`${c} area overlaps the area of house ${o.index}.`), i.push({
						index: s,
						...f
					});
				}
				if (f !== void 0 && l && m) {
					let t = oe(e, o, f, _, "depot");
					t !== void 0 && n.push(`${c} area holds a depot chest at (${t.x}, ${t.y}) on level ${t.level}.`);
					let r = oe(e, o, f, _, "stall");
					r !== void 0 && n.push(`${c} area holds a stall stand at (${r.x}, ${r.y}) on level ${r.level}.`);
				}
				if (l && L(p, `${c} sign`, h, g, _, n) && m) {
					let t = k(e, p.level, 1, p.x, p.y), r = o.get(t);
					t === 0 || (r === void 0 || !r.blocks ? n.push(`${c} sign at (${p.x}, ${p.y}) on level ${p.level} must be on a solid tile or an empty one.`) : r.opens !== void 0 || r.container === !0 || r.bed === !0 ? n.push(`${c} sign at (${p.x}, ${p.y}) on level ${p.level} cannot be on a door, window, chest or bed.`) : r.depot === !0 ? n.push(`${c} sign at (${p.x}, ${p.y}) on level ${p.level} cannot be on a depot chest.`) : (r.herb !== void 0 || r.node !== void 0 || r.workplace !== void 0) && n.push(`${c} sign at (${p.x}, ${p.y}) on level ${p.level} cannot be on a herb or a workplace.`));
					let i = f === void 0 ? null : ie(e, o, p.level, f);
					i === "door" ? n.push(`${c} has no door on the outer ring of its area on its ground level.`) : i === "outside" && n.push(`${c} has no door on the outer ring of its area with free ground outside it.`);
				}
			}
		});
	}
	if (v.zones !== void 0) for (let e of T(v.zones, l ? h : Infinity, l ? g : Infinity)) {
		if (P(n)) break;
		n.push(e);
	}
	if (v.spots !== void 0) for (let e of x(v.spots, v.spawns, _)) {
		if (P(n)) break;
		n.push(e);
	}
	let E = v.portals;
	if (!Array.isArray(E)) n.push("markers.portals must be a list.");
	else {
		let t = /* @__PURE__ */ new Map();
		E.forEach((e, n) => {
			if (A(e) && j(e.x) && j(e.y) && j(e.level)) {
				let r = `${e.level},${e.x},${e.y}`;
				t.has(r) || t.set(r, n);
			}
		});
		let r = /* @__PURE__ */ new Set();
		for (let e of Array.isArray(b) ? b : []) A(e) && j(e.x) && j(e.y) && j(e.level) && r.add(`${e.level},${e.x},${e.y}`);
		let i = (t, r) => {
			let i = e, a = `${r} at (${t.x}, ${t.y}) on level ${t.level}`, s = o.get(k(i, t.level, 0, t.x, t.y)), c = o.get(k(i, t.level, 1, t.x, t.y));
			s === void 0 ? n.push(`${a} has no floor tile.`) : s.blocks ? n.push(`${a} is on a floor that cannot be walked on.`) : c !== void 0 && c.blocks && n.push(`${a} is on a solid tile.`);
		};
		E.forEach((a, o) => {
			if (P(n)) return;
			let s = `Portal ${o}`;
			if (!I(a, s, n, ["toMap", "to"])) return;
			let c = l && L(a, s, h, g, _, n), u = a;
			ne(u.toMap) || n.push(`${s}: toMap must be made of the characters a to z, 0 to 9 and "-" only.`);
			let d = u.to, f = I(d, `${s} target`, n);
			if (f && (d.x < 0 || d.y < 0 || d.level < 0) && n.push(`${s} target: x, y and level cannot be negative.`), u.toMap !== e.name) return;
			let p = `${a.level},${a.x},${a.y}`, v = t.get(p);
			if (v !== void 0 && v !== o && n.push(`${s} is on the same tile as portal ${v}.`), r.has(p) && n.push(`${s} is on a stairs tile.`), c && m && i(a, s), f) {
				l && L(d, `${s} target`, h, g, _, n) && m && i(d, `${s} target`);
				let e = `${d.level},${d.x},${d.y}`;
				r.has(e) && n.push(`${s} target: tile (${d.x}, ${d.y}) on level ${d.level} is a stairs tile.`), t.has(e) && n.push(`${s} target: tile (${d.x}, ${d.y}) on level ${d.level} is a portal tile.`);
			}
		});
	}
	let D = v.gates;
	if (D !== void 0 && !Array.isArray(D)) n.push("markers.gates must be a list.");
	else if (D !== void 0) {
		let t = /* @__PURE__ */ new Set();
		for (let e of [...Array.isArray(b) ? b : [], ...Array.isArray(E) ? E : []]) A(e) && j(e.x) && j(e.y) && j(e.level) && t.add(`${e.level},${e.x},${e.y}`);
		let r = [];
		D.forEach((i, a) => {
			if (P(n)) return;
			let s = `Gate ${a}`;
			if (!I(i, s, n, ["to", "rooms"])) return;
			let c = i;
			l && L(i, s, h, g, _, n) && m && o.get(k(e, i.level, 1, i.x, i.y))?.gate !== !0 && n.push(`${s} at (${i.x}, ${i.y}) on level ${i.level} has no gate tile under it.`);
			let u = c.to, d = 0;
			!Array.isArray(u) || u.length === 0 ? n.push(`${s}: "to" must be a non-empty list of places.`) : (d = u.length, u.forEach((r, i) => {
				let a = `${s} target ${i}`;
				if (I(r, a, n)) {
					if (l && L(r, a, h, g, _, n) && m) {
						let t = `${a} at (${r.x}, ${r.y}) on level ${r.level}`, i = o.get(k(e, r.level, 0, r.x, r.y)), s = o.get(k(e, r.level, 1, r.x, r.y));
						i === void 0 ? n.push(`${t} has no floor tile.`) : i.blocks ? n.push(`${t} is on a floor that cannot be walked on.`) : s !== void 0 && s.blocks && n.push(`${t} is on a solid tile.`);
					}
					t.has(`${r.level},${r.x},${r.y}`) && n.push(`${a}: tile (${r.x}, ${r.y}) on level ${r.level} is a stairs or portal tile.`);
				}
			}));
			let f = c.rooms;
			if (f === void 0) return;
			if (!Array.isArray(f)) {
				n.push(`${s}: "rooms" must be a list of rectangles.`);
				return;
			}
			d > 0 && f.length !== d && n.push(`${s}: "to" has ${d} places but "rooms" has ${f.length}.`);
			let p = -1, v = -1;
			f.forEach((e, t) => {
				let i = `${s} room ${t}`;
				if (!A(e)) {
					n.push(`${i} must be an object.`);
					return;
				}
				F(e, [
					"x0",
					"y0",
					"x1",
					"y1",
					"level"
				], i, n);
				let { x0: o, y0: c, x1: d, y1: f, level: m } = e;
				if (!j(o) || !j(c) || !j(d) || !j(f) || !j(m)) {
					n.push(`${i} must have whole numbers x0, y0, x1, y1 and level.`);
					return;
				}
				if (o > d || c > f) {
					n.push(`${i} must have x0 not above x1 and y0 not above y1.`);
					return;
				}
				if (l && (m < 0 || m >= _ || o < 0 || c < 0 || d >= h || f >= g)) {
					n.push(`${i} is outside the map.`);
					return;
				}
				let y = Array.isArray(u) ? u[t] : void 0;
				A(y) && j(y.x) && j(y.y) && j(y.level) && (y.level !== m || y.x < o || y.x > d || y.y < c || y.y > f) && n.push(`${s} target ${t} is outside its room.`), p === -1 ? (p = d - o, v = f - c) : (d - o !== p || f - c !== v) && n.push(`${i} is not the same size as the first room of the gate.`);
				let b = r.find((e) => e.level === m && o <= e.x1 && e.x0 <= d && c <= e.y1 && e.y0 <= f);
				b !== void 0 && n.push(`${i} overlaps gate ${b.gate} room ${b.room}.`), r.push({
					gate: a,
					room: t,
					level: m,
					x0: o,
					y0: c,
					x1: d,
					y1: f
				});
			});
		});
	}
	let O = v.spawns;
	if (O !== void 0 && !Array.isArray(O)) n.push("markers.spawns must be a list.");
	else if (O !== void 0) {
		let t = /* @__PURE__ */ new Map(), i = (e, n) => {
			A(e) && j(e.x) && j(e.y) && j(e.level) && t.set(`${e.level},${e.x},${e.y}`, n);
		};
		i(y, "the start tile");
		for (let e of Array.isArray(E) ? E : []) i(e, "a portal tile");
		for (let e of Array.isArray(b) ? b : []) i(e, "a stairs tile");
		for (let e of Array.isArray(b) ? b : []) i(A(e) ? e.to : void 0, "a stairs landing");
		for (let t of Array.isArray(E) ? E : []) i(A(t) && t.toMap === e.name ? t.to : void 0, "a portal landing");
		for (let e of Array.isArray(D) ? D : []) for (let t of A(e) && Array.isArray(e.to) ? e.to : []) i(t, "a gate landing");
		let a = v.zones !== void 0 && T(v.zones, Infinity, Infinity).length === 0 ? v.zones : [], s = /* @__PURE__ */ new Map();
		O.forEach((e, t) => {
			if (A(e) && j(e.x) && j(e.y) && j(e.level)) {
				let n = `${e.level},${e.x},${e.y}`;
				s.has(n) || s.set(n, t);
			}
		}), O.forEach((i, c) => {
			if (P(n)) return;
			let u = `Spawn ${c}`;
			if (!A(i)) {
				n.push(`${u} must be an object.`);
				return;
			}
			F(i, [
				"kind",
				"x",
				"y",
				"level",
				"facing"
			], u, n);
			let d = i.kind;
			M(d) ? r !== void 0 && !r.includes(d) && n.push(`${u}: the kind "${d}" is not a known monster.`) : n.push(`${u}: kind must be a non-empty string.`);
			let f = i.facing;
			f !== void 0 && !(j(f) && f >= 0 && f <= 3) && n.push(`${u} has a facing that is not 0 (down), 1 (left), 2 (right) or 3 (up).`);
			let p = i.x, v = i.y, y = i.level;
			if (!j(p) || !j(v) || !j(y)) {
				n.push(`${u} must have whole numbers x, y and level.`);
				return;
			}
			let b = `${y},${p},${v}`, x = s.get(b);
			if (x !== void 0 && x !== c && n.push(`${u} is on the same tile as spawn ${x}.`), !l || !L({
				x: p,
				y: v,
				level: y
			}, u, h, g, _, n)) return;
			let S = `${u} at (${p}, ${v}) on level ${y}`;
			if (m) {
				let t = e, r = o.get(k(t, y, 0, p, v)), i = o.get(k(t, y, 1, p, v));
				r === void 0 ? n.push(`${S} has no floor tile.`) : r.blocks ? n.push(`${S} is on a floor that cannot be walked on.`) : i !== void 0 && i.blocks && n.push(`${S} is on a solid tile.`);
			}
			let C = t.get(b);
			C !== void 0 && n.push(`${S} is on ${C}.`);
			let w = a.findIndex((e) => p >= e.area.x0 && p <= e.area.x1 && v >= e.area.y0 && v <= e.area.y1);
			w >= 0 && n.push(`${S} is inside protection zone ${w}, where a monster may not step.`);
		});
	}
	let N = v.npcs;
	if (N !== void 0 && !Array.isArray(N)) n.push("markers.npcs must be a list.");
	else if (N !== void 0) {
		let t = /* @__PURE__ */ new Map(), r = (e, n) => {
			A(e) && j(e.x) && j(e.y) && j(e.level) && t.set(`${e.level},${e.x},${e.y}`, n);
		};
		r(y, "the start tile");
		for (let e of Array.isArray(E) ? E : []) r(e, "a portal tile");
		for (let e of Array.isArray(b) ? b : []) r(e, "a stairs tile");
		for (let e of Array.isArray(O) ? O : []) r(e, "the tile of a spawn");
		for (let e of Array.isArray(C) ? C : []) r(e, "an arrival tile");
		let a = Array.isArray(O) ? O.length : 0;
		a > 481 && N.some((e) => A(e) && j(e.id) && e.id >= 500) && n.push(`The map has ${a} spawns and an NPC with an id of 500 or more: with more than 481 spawns the monster ids reach 500 and meet the NPC ids.`);
		let s = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map();
		N.forEach((e, t) => {
			if (A(e) && j(e.x) && j(e.y) && j(e.level)) {
				let n = `${e.level},${e.x},${e.y}`;
				s.has(n) || s.set(n, t);
			}
			A(e) && j(e.id) && !c.has(e.id) && c.set(e.id, t);
		}), N.forEach((r, a) => {
			if (P(n)) return;
			let u = `NPC ${a}`;
			if (!A(r)) {
				n.push(`${u} must be an object.`);
				return;
			}
			F(r, te, u, n);
			let d = r.id;
			!j(d) || !(d >= 4 && d <= 18 || d >= 500 && d <= 999) ? n.push(`${u}: id must be a whole number from 4 to 18 or from 500 to 999 (1 to 3 are stand-ins, and monsters are numbered from 19 by spawn order).`) : c.get(d) !== a && n.push(`${u} has the same id as NPC ${c.get(d)}.`);
			let f = r.kind;
			M(f) ? i !== void 0 && f !== "trainer" && !i.includes(f) && n.push(`${u}: the kind "${f}" is not a known NPC.`) : n.push(`${u}: kind must be a non-empty string.`);
			let p = r.facing;
			p !== void 0 && !(j(p) && p >= 0 && p <= 3) && n.push(`${u} has a facing that is not 0 (down), 1 (left), 2 (right) or 3 (up).`);
			let v = r.x, y = r.y, b = r.level;
			if (!j(v) || !j(y) || !j(b)) {
				n.push(`${u} must have whole numbers x, y and level.`);
				return;
			}
			let x = r.push;
			if (x !== void 0) {
				if (f === "trainer") n.push(`${u}: the trainer cannot be pushed, so it has no push.`);
				else if (!A(x)) n.push(`${u}: push must be an object.`);
				else {
					F(x, [
						"x0",
						"y0",
						"x1",
						"y1"
					], `${u} push`, n);
					let { x0: e, y0: t, x1: r, y1: i } = x;
					!j(e) || !j(t) || !j(r) || !j(i) ? n.push(`${u}: push needs whole numbers x0, y0, x1 and y1.`) : e > r || t > i ? n.push(`${u}: push must have x0 <= x1 and y0 <= y1.`) : l && (e < 0 || t < 0 || r >= h || i >= g) ? n.push(`${u}: push is not inside the map.`) : (v < e || v > r || y < t || y > i) && n.push(`${u}: push must contain the NPC's own tile.`);
				}
			}
			let S = `${b},${v},${y}`, C = s.get(S);
			if (C !== void 0 && C !== a && n.push(`${u} is on the same tile as NPC ${C}.`), !l || !L({
				x: v,
				y,
				level: b
			}, u, h, g, _, n)) return;
			let w = `${u} at (${v}, ${y}) on level ${b}`;
			if (m) {
				let t = e, r = o.get(k(t, b, 0, v, y)), i = o.get(k(t, b, 1, v, y));
				r === void 0 ? n.push(`${w} has no floor tile.`) : r.blocks ? n.push(`${w} is on a floor that cannot be walked on.`) : i !== void 0 && i.blocks && n.push(`${w} is on a solid tile.`);
			}
			let T = t.get(S);
			T !== void 0 && n.push(`${w} is on ${T}.`);
		});
	}
	let se = v.things;
	if (se !== void 0 && !Array.isArray(se)) {
		n.push("markers.things must be a list.");
		return;
	}
	let ce = /* @__PURE__ */ new Set();
	for (let e of [...Array.isArray(b) ? b : [], ...Array.isArray(E) ? E : []]) A(e) && j(e.x) && j(e.y) && j(e.level) && ce.add(`${e.level},${e.x},${e.y}`);
	let le = [];
	(Array.isArray(w) ? w : []).forEach((e, t) => {
		let n = A(e) ? e.area : void 0;
		A(n) && j(n.x0) && j(n.y0) && j(n.x1) && j(n.y1) && le.push({
			index: t,
			x0: n.x0,
			y0: n.y0,
			x1: n.x1,
			y1: n.y1
		});
	}), ue(se ?? [], {
		map: e,
		known: o,
		items: a,
		sizeOk: l,
		structureOk: m,
		widthTiles: h,
		heightTiles: g,
		levelCount: _,
		jumps: ce,
		areas: le
	}, n);
}
var le = {
	north: [
		0,
		-1,
		"south"
	],
	south: [
		0,
		1,
		"north"
	],
	west: [
		-1,
		0,
		"east"
	],
	east: [
		1,
		0,
		"west"
	]
};
function ue(e, t, n) {
	let { map: r, known: i } = t, a = (e, t, n) => `${e},${t},${n}`, o = /* @__PURE__ */ new Map(), s;
	e.forEach((e, c) => {
		if (P(n)) return;
		let l = `Thing marker ${c}`;
		if (!I(e, l, n, O.filter((e) => e !== "x" && e !== "y" && e !== "level"))) return;
		if (s !== void 0) {
			let t = e.level - s.point.level || e.y - s.point.y || e.x - s.point.x;
			t === 0 ? n.push(`${l} is on the same tile as thing marker ${s.index}.`) : t < 0 && n.push(`${l} is out of order: thing markers are sorted by level, y, then x.`);
		}
		s = {
			point: e,
			index: c
		};
		let u = e, d = u.movable, f = u.openable, p = u.shutterable, m = u.loot;
		if (d !== void 0 && typeof d != "boolean" && n.push(`${l}: "movable" must be true or false.`), f !== void 0 && f !== !1 && n.push(`${l}: "openable" must be false when present.`), p !== void 0 && p !== !1 && n.push(`${l}: "shutterable" must be false when present.`), d === void 0 && f === void 0 && p === void 0 && m === void 0 && n.push(`${l} changes nothing: it needs "movable", "openable", "shutterable" or "loot".`), m !== void 0 && de(m, l, t.items, n), !t.sizeOk || !L(e, l, t.widthTiles, t.heightTiles, t.levelCount, n) || !t.structureOk) return;
		let h = `${l} at (${e.x}, ${e.y}) on level ${e.level}`, g = i.get(k(r, e.level, 1, e.x, e.y));
		if (g === void 0) {
			n.push(`${h} has no layer 1 tile under it.`);
			return;
		}
		let _ = a(e.level, e.x, e.y);
		o.has(_) || o.set(_, {
			index: c,
			point: e,
			record: u,
			type: g
		});
		let v = g.movable === !0;
		if (d === !0 && (g.opens !== void 0 || g.gate === !0 || g.depot === !0 || g.herb !== void 0 || g.node !== void 0 || g.quest === !0) ? n.push(`${h} cannot be movable: a door, window, gate, depot, herb, node or quest chest never moves.`) : d === !0 && g.stall === !0 ? n.push(`${h} cannot be movable: a stall stand never moves.`) : d === !0 && t.jumps.has(_) ? n.push(`${h} is on a stairs or portal tile and cannot be movable.`) : typeof d == "boolean" && d === v && n.push(`${h}: "movable" is the tile type's own value and changes nothing.`), f === !1 && g.opens === void 0 && n.push(`${h}: "openable" is only for a window or a door.`), p === !1 && (g.opens !== "window" || g.shutImage === void 0) && n.push(`${h}: "shutterable" is only for a window whose tile type has a "shutImage".`), m !== void 0) {
			if (g.container !== !0) n.push(`${h}: "loot" is only for a container.`);
			else {
				(typeof d == "boolean" ? d : v) && n.push(`${h}: a container with "loot" is never movable.`);
				let r = t.areas.find((t) => e.x >= t.x0 && e.x <= t.x1 && e.y >= t.y0 && e.y <= t.y1);
				r !== void 0 && n.push(`${h}: a container with "loot" cannot stand inside the area of house ${r.index}.`);
			}
		}
	});
	let c = (e, t) => {
		let n = e?.movable;
		return typeof n == "boolean" ? n : t.movable === !0;
	};
	for (let { index: e, point: t, record: s, type: l } of o.values()) {
		if (l.joined === void 0 || P(n)) continue;
		let [u, d, f] = le[l.joined], p = i.get(k(r, t.level, 1, t.x + u, t.y + d));
		if (p?.joined !== f) continue;
		let m = o.get(a(t.level, t.x + u, t.y + d));
		m !== void 0 && m.index < e || c(s, l) !== c(m?.record, p) && n.push(`Thing marker ${e} at (${t.x}, ${t.y}) on level ${t.level}: both halves of a joined thing must have the same "movable" (the other half is at (${t.x + u}, ${t.y + d})).`);
	}
	let l = new Set([...i.values()].filter((e) => e.quest === !0).map((e) => e.id));
	t.structureOk && l.size !== 0 && r.levels.forEach((e, t) => {
		e.layers[1].forEach((e, i) => {
			for (let s = 0; e !== null && s < e.length && !P(n); s += 1) {
				if (!l.has(e[s] ?? 0)) continue;
				let c = i % r.widthChunks * 16 + s % 16, u = Math.floor(i / r.widthChunks) * 16 + Math.floor(s / 16);
				o.get(a(t, c, u))?.record.loot === void 0 && n.push(`The quest chest at (${c}, ${u}) on level ${t} needs a thing marker with "loot".`);
			}
		});
	});
}
function de(e, t, n, r) {
	!Array.isArray(e) || e.length < 1 || e.length > 25 ? r.push(`${t}: "loot" must be a list of 1 to 25 stacks.`) : e.forEach((e, i) => {
		let a = `${t} loot stack ${i}`;
		if (!A(e)) {
			r.push(`${a} must be an object with "item" and "count".`);
			return;
		}
		F(e, ["item", "count"], a, r);
		let o = e.item, s = n?.find((e) => e.id === o);
		M(o) ? n !== void 0 && s === void 0 && r.push(`${a}: the item "${o}" is not known.`) : r.push(`${a}: "item" must be the id of an item, a non-empty string.`);
		let c = s?.stackLimit ?? 999, l = e.count;
		(!j(l) || l < 1 || l > c) && r.push(`${a}: "count" must be a whole number from 1 to ${c}.`);
	});
}
// ../../packages/shared/src/boss.ts
function fe(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function pe(e) {
	return typeof e == "number" && Number.isInteger(e);
}
function me(e, t, n, r) {
	for (let i of Object.keys(e)) t.includes(i) || r.push(`${n}: the key "${i}" is not part of the format.`);
}
function he(e, t, n, r, i, a) {
	let o = e[t];
	(!pe(o) || o < n || o > r) && a.push(`${i}: "${t}" must be a whole number from ${n} to ${r}.`);
}
function ge(e, t, n) {
	if (!fe(e)) {
		n.push(`${t}: must be an object.`);
		return;
	}
	me(e, [
		"rangeTiles",
		"recoveryMs",
		"attacks"
	], t, n), he(e, "rangeTiles", 1, 30, t, n), he(e, "recoveryMs", 0, 6e5, t, n);
	let r = e.attacks;
	if (!Array.isArray(r) || r.length !== 1) {
		n.push(`${t}: "attacks" must be a list of exactly one attack.`);
		return;
	}
	let i = `${t} attack 0`, a = r[0];
	if (!fe(a)) {
		n.push(`${i}: must be an object.`);
		return;
	}
	me(a, [
		"id",
		"shape",
		"length",
		"width",
		"delayMs",
		"damage"
	], i, n);
	let o = a.id;
	typeof o == "string" && /^[a-z0-9-]+$/.test(o) || n.push(`${i}: the id must be a non-empty string of lower case letters, digits and hyphens.`), a.shape !== "line" && n.push(`${i}: "shape" must be "line".`), he(a, "length", 1, 30, i, n);
	let s = a.width;
	(!pe(s) || s < 1 || s > 15 || s % 2 == 0) && n.push(`${i}: "width" must be an odd whole number from 1 to 15.`), he(a, "delayMs", 200, 6e4, i, n), he(a, "damage", 1, 1e5, i, n);
}
// ../../packages/shared/src/step-time.ts
var _e = 1e3;
// ../../packages/shared/src/monsters.ts
function R(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function z(e) {
	return typeof e == "number" && Number.isInteger(e);
}
function B(e, t, n, r) {
	for (let i of Object.keys(e)) t.includes(i) || r.push(`${n}: the key "${i}" is not part of the format.`);
}
function V(e, t, n, r, i, a) {
	let o = e[t];
	(!z(o) || o < n || o > r) && a.push(`${i}: "${t}" must be a whole number from ${n} to ${r}.`);
}
function ve(e, t, n, r) {
	Array.isArray(e) ? e.forEach((e, i) => {
		let a = `${n} loot line ${i}`;
		if (!R(e)) {
			r.push(`${a} is not an object.`);
			return;
		}
		B(e, [
			"item",
			"chance",
			"count",
			"countMax"
		], a, r);
		let o = e.item;
		if (typeof o != "string" || o === "" ? r.push(`${a}: "item" must be a non-empty string.`) : t !== void 0 && !t.items.some((e) => e.id === o) && r.push(`${a}: the item "${o}" is not in the items file.`), V(e, "chance", 1, 100, a, r), V(e, "count", 1, 999, a, r), e.countMax !== void 0) {
			let t = e.count;
			V(e, "countMax", z(t) && t >= 1 ? t : 1, 999, a, r);
		}
	}) : r.push(`${n}: "loot" must be a list.`);
}
function ye(e) {
	let t = e.loot, n = [];
	if (Array.isArray(t)) for (let e of t) R(e) && typeof e.item == "string" && n.push(e.item);
	return n;
}
function be(e, t, n, r, i) {
	let a = e.rare;
	if (!R(a)) {
		i.push(`${r}: "rare" must be an object with "item".`);
		return;
	}
	let o = `${r} rare`;
	B(a, ["item"], o, i);
	let s = a.item;
	if (typeof s != "string" || s === "") i.push(`${o}: "item" must be a non-empty string.`);
	else {
		n !== void 0 && !n.items.some((e) => e.id === s) && i.push(`${o}: the item "${s}" is not in the items file.`), ye(e).includes(s) || i.push(`${o}: the item "${s}" is not in its loot.`);
		for (let n of t) R(n) && n !== e && ye(n).includes(s) && i.push(`${o}: the item "${s}" is also in the loot of monster "${String(n.id)}".`);
	}
	let c = e.respawnMs, l = e.respawnMaxMs;
	(!z(c) || !z(l) || l <= c) && i.push(`${r}: a rare monster needs "respawnMaxMs" above "respawnMs".`);
}
function xe(e, t) {
	let n = [];
	if (!R(e)) return ["The monsters file is not an object."];
	B(e, ["format", "monsters"], "The monsters file", n), e.format !== 1 && n.push("The monsters file must have format 1.");
	let r = e.monsters;
	if (!Array.isArray(r)) return n.push("The monsters file must have a \"monsters\" list."), n;
	let i = /* @__PURE__ */ new Set();
	return r.forEach((e, a) => {
		if (!R(e)) {
			n.push(`Monster entry ${a} is not an object.`);
			return;
		}
		let o = e.id, s = typeof o == "string" ? `monster "${o}"` : `monster entry ${a}`;
		"speedTilesPerSecond" in e && n.push(`${s}: the key "speedTilesPerSecond" is not part of the format; use "speed" in points, 100 = a new player.`), B(Object.fromEntries(Object.entries(e).filter(([e]) => e !== "speedTilesPerSecond")), [
			"id",
			"name",
			"health",
			"speed",
			"body",
			"damage",
			"attackIntervalMs",
			"passive",
			"flees",
			"leashTiles",
			"respawnMs",
			"respawnMaxMs",
			"experience",
			"loot",
			"rare",
			"boss",
			"hide",
			"nameColour",
			"critChance",
			"noticeTiles"
		], s, n), typeof o != "string" || !/^[a-z0-9-]+$/.test(o) ? n.push(`${s}: the id must be a non-empty string of lower case letters, digits and hyphens.`) : i.has(o) ? n.push(`${s}: the id is used more than once.`) : i.add(o), (typeof e.name != "string" || e.name === "") && n.push(`${s}: the name must be a non-empty string.`), V(e, "health", 1, 1e5, s, n), V(e, "speed", 1, _e, s, n);
		let c = e.body;
		(!z(c) || c < 2 || c > 256 || c % 2 != 0) && n.push(`${s}: "body" must be an even whole number from 2 to 256.`);
		let l = e.damage;
		if (R(l) ? (B(l, ["min", "max"], `${s} damage`, n), V(l, "min", 0, 1e5, `${s} damage`, n), V(l, "max", 0, 1e5, `${s} damage`, n), z(l.min) && z(l.max) && l.min > l.max && n.push(`${s}: the damage "min" must not be above "max".`)) : n.push(`${s}: "damage" must be an object with "min" and "max".`), V(e, "attackIntervalMs", 50, 6e5, s, n), e.passive !== void 0 && e.passive !== !0 && n.push(`${s}: "passive" must be true when it is written.`), e.flees !== void 0 && e.flees !== "always" && e.flees !== "hurt" && n.push(`${s}: "flees" must be "always" or "hurt" when it is written.`), V(e, "leashTiles", 1, 100, s, n), V(e, "respawnMs", 0, 864e5, s, n), e.respawnMaxMs !== void 0) {
			let t = e.respawnMs;
			V(e, "respawnMaxMs", z(t) && t >= 0 ? t : 0, 864e5, s, n);
		}
		V(e, "experience", 0, 1e6, s, n), e.critChance !== void 0 && V(e, "critChance", 0, 100, s, n), e.noticeTiles !== void 0 && V(e, "noticeTiles", 1, 7, s, n), e.loot !== void 0 && ve(e.loot, t, s, n), e.rare !== void 0 && be(e, r, t, s, n), e.hide !== void 0 && Se(e.hide, t, `${s} hide`, n), e.nameColour !== void 0 && e.nameColour !== "red" && e.nameColour !== "gold" && n.push(`${s}: "nameColour" must be "red" or "gold" when it is written.`), e.boss !== void 0 && ge(e.boss, `${s} boss`, n);
	}), n;
}
function Se(e, t, n, r) {
	if (!R(e)) {
		r.push(`${n} must be an object with "item" and "count".`);
		return;
	}
	B(e, ["item", "count"], n, r);
	let i = e.item;
	(typeof i != "string" || t !== void 0 && !t.items.some((e) => e.id === i)) && r.push(`${n}: "item" must be the id of an item in the items file.`), V(e, "count", 1, 3, n, r);
}
f(12e4, 20), l.indexOf("amulet"), l.indexOf("amulet");
// ../../packages/shared/src/house-floors.ts
var Ce = {
	north: {
		dx: 0,
		dy: -1
	},
	east: {
		dx: 1,
		dy: 0
	},
	south: {
		dx: 0,
		dy: 1
	},
	west: {
		dx: -1,
		dy: 0
	}
};
[...ee.map((e) => Ce[e])];
// ../../packages/shared/src/stall.ts
var we = 1e5, Te = 2147483647, Ee = 1048574, De = 1023, Oe = ["local", "global"], ke = [
	"too-large",
	"not-json",
	"too-deep",
	"forbidden-key",
	"old-protocol",
	"not-finite",
	"too-long",
	"too-many",
	"not-object",
	"unknown-type",
	"missing-field",
	"extra-field",
	"wrong-type",
	"out-of-range",
	"bad-text",
	"stale-seq",
	"rate-limited",
	"no-hello"
], Ae = /^[A-Za-z0-9_-]+$/;
function H(e, t) {
	return {
		ok: !1,
		problem: e,
		path: t
	};
}
function U(e, t) {
	return e === "" ? String(t) : `${e}.${t}`;
}
function je(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
var Me = () => null;
function W(e, t) {
	return (n, r) => typeof n != "number" || !Number.isInteger(n) ? H("wrong-type", r) : n < e || n > t ? H("out-of-range", r) : null;
}
function Ne(e) {
	for (let t = 0; t < e.length; t += 1) {
		let n = e.charCodeAt(t);
		if (n < 32 || n >= 127 && n <= 159) return !0;
	}
	return !1;
}
function Pe(e, t) {
	return (n, r) => typeof n == "string" ? n.length > e ? H("too-long", r) : n.length === 0 || Ne(n) || t !== void 0 && !t.test(n) ? H("bad-text", r) : null : H("wrong-type", r);
}
function G(e) {
	return (t, n) => e.includes(t) ? null : e.some((e) => typeof e == typeof t) ? H("out-of-range", n) : H("wrong-type", n);
}
function Fe(e) {
	return (t, n) => t === null ? null : e(t, n);
}
function Ie(e) {
	return (t, n) => {
		if (!Array.isArray(t)) return H("wrong-type", n);
		for (let r = 0; r < t.length; r += 1) {
			let i = e(t[r], U(n, r));
			if (i !== null) return i;
		}
		return null;
	};
}
var Le = (e, t) => je(e) ? null : H("wrong-type", t), Re = (e, t) => typeof e == "string" ? null : H("wrong-type", t), ze = (e, t) => typeof e == "boolean" ? null : H("wrong-type", t);
function Be(e, t) {
	return (n, r) => {
		if (!je(n)) return H(r === "" ? "not-object" : "wrong-type", r);
		for (let i of Object.keys(n)) if (!Object.hasOwn(e, i) && !Object.hasOwn(t, i)) return H("extra-field", U(r, i));
		for (let [t, i] of Object.entries(e)) {
			if (!Object.hasOwn(n, t)) return H("missing-field", U(r, t));
			let e = i(n[t], U(r, t));
			if (e !== null) return e;
		}
		for (let [e, i] of Object.entries(t)) {
			let t = Object.hasOwn(n, e) ? i(n[e], U(r, e)) : null;
			if (t !== null) return t;
		}
		return null;
	};
}
function Ve(e) {
	return Object.assign((t, n) => e(t, n), { optional: !0 });
}
function He(e, t) {
	return Be(e, t);
}
function K(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let [r, i] of Object.entries(t)) {
		let t = Object.entries(i), a = ([, e]) => "optional" in e;
		n.set(r, Be({
			[e]: Me,
			...Object.fromEntries(t.filter((e) => !a(e)))
		}, Object.fromEntries(t.filter(a))));
	}
	return (t, r) => {
		if (!je(t)) return H(r === "" ? "not-object" : "wrong-type", r);
		let i = t[e], a = typeof i == "string" ? n.get(i) : void 0;
		return a === void 0 ? H("unknown-type", U(r, e)) : a(t, r);
	};
}
var q = W(1, Ee), J = W(0, De), Y = W(0, 24), Ue = W(0, 24), X = Pe(64), Z = Be({
	x: J,
	y: J
}, {}), We = W(1, 100), Ge = W(0, 16), Q = Ve(K("type", {
	corpse: {
		kind: X,
		x: J,
		y: J,
		level: Ge,
		born: W(0, Te)
	},
	chest: {
		x: J,
		y: J,
		level: Ge
	},
	quest: {
		x: J,
		y: J,
		level: Ge
	},
	depot: {
		x: J,
		y: J,
		level: Ge,
		page: W(0, p / 25 - 1)
	}
})), Ke = K("side", {
	backpack: { slot: Y },
	container: { slot: Ue },
	worn: { slot: W(0, l.length - 1) },
	ground: {
		x: J,
		y: J
	}
}), qe = K("type", {
	move: {
		from: Y,
		to: Y
	},
	active: { slot: W(0, 4) },
	withdraw: {
		from: Ue,
		to: Y,
		ref: Q
	},
	deposit: {
		from: Y,
		to: Ue,
		ref: Q
	},
	arrange: {
		from: Ue,
		to: Ue,
		ref: Q
	},
	quickLoot: { ref: Q },
	close: { ref: Q },
	page: {
		page: W(0, p / 25 - 1),
		ref: Q
	},
	put: {
		from: Ke,
		to: Ke,
		ref: Q
	},
	enter: { place: Ke },
	leave: {}
}), Je = K("type", {
	buy: {
		npc: q,
		item: X,
		count: We
	},
	sell: {
		npc: q,
		item: X,
		count: We
	}
}), Ye = K("op", {
	put: {
		slot: Y,
		count: We,
		price: W(1, we)
	},
	price: {
		line: W(0, 7),
		price: W(1, we)
	},
	take: { line: W(0, 7) },
	close: {},
	buy: {
		line: W(0, 7),
		kind: X,
		price: W(1, we),
		count: We
	}
}), Xe = K("kind", {
	item: {
		from: Z,
		to: Z
	},
	npc: {
		npc: q,
		to: Z
	},
	thing: {
		from: Z,
		to: Z
	},
	corpse: {
		from: Z,
		to: Z
	}
}), Ze = He({
	seq: W(1, Te),
	dir: W(0, 16)
}, {
	face: W(0, 3),
	action: X,
	choice: X,
	target: Fe(q),
	stance: G(["sword", "shield"]),
	inventory: qe,
	profession: X,
	talk: He({
		npc: q,
		choice: X
	}, {}),
	trade: Je,
	merge: He({
		npc: q,
		kind: X
	}, {}),
	houseList: He({
		op: G(["add", "remove"]),
		list: G(u),
		name: X
	}, {}),
	houseEdit: He({ kind: G([
		"wall",
		"door",
		"window",
		"remove",
		"stairs"
	]) }, { joint: W(0, 5) }),
	stall: Ye,
	shove: Xe,
	respawn: G([!0])
}), Qe = K("type", {
	outfit: { id: X },
	companion: { kind: X },
	claimDaily: {},
	pickRest: {
		activity: G(Object.keys({
			training: !0,
			hunting: !0,
			gathering: !0
		})),
		hours: W(1, 72)
	}
});
K("type", {
	hello: {
		token: Pe(128, Ae),
		protocol: W(1, Te)
	},
	input: { input: Ze },
	say: {
		channel: G(Oe),
		text: Pe(200)
	},
	ping: {},
	command: { command: Qe }
});
var $e = W(0, 2 ** 53 - 1);
K("type", {
	welcome: {
		protocol: $e,
		content: Re,
		playerId: $e,
		tick: $e,
		tickHz: $e
	},
	snapshot: {
		ack: $e,
		state: Le,
		whole: ze,
		creatures: Ie(Le),
		gone: Ie($e)
	},
	chat: {
		from: Re,
		channel: G(Oe),
		text: Re
	},
	pong: {},
	refused: { problem: G(ke) }
});
// src/live/live-read.ts
var et = 3;
function tt(e, t) {
	try {
		return {
			ok: !0,
			value: JSON.parse(t)
		};
	} catch {
		return {
			ok: !1,
			reason: `${e}: not valid JSON`
		};
	}
}
function nt(e, t) {
	return `${e} cannot be used: ${t.slice(0, et).join(" ")}`;
}
function rt(e, t) {
	let r = {};
	for (let t of n) {
		let n = tt(t, e[t]);
		if (!n.ok) return n;
		r[t] = n.value;
	}
	let i = xe(r["monsters.json"], t.items);
	if (i.length > 0) return {
		ok: !1,
		reason: nt("monsters.json", i)
	};
	let a = r["monsters.json"], o = se(r["maps/test.json"], r["tiles.json"], a.monsters.map((e) => e.id), t.npcs.npcs.map((e) => e.id), t.items.items);
	return o.length > 0 ? {
		ok: !1,
		reason: nt("The live map", o)
	} : {
		ok: !0,
		files: {
			map: r["maps/test.json"],
			tiles: r["tiles.json"],
			monsters: a
		}
	};
}
// src/live/live-payload.ts
var it = "test", at = "Live map save ", ot = /^gravia-live-save 1 sha256=([0-9a-f]{64})$/, st = /^[A-Za-z0-9+/]+={0,2}$/, ct = /^[0-9a-f]{16}$/, lt = /^[0-9A-Za-z._-]{1,64}$/, ut = /[\p{C}\p{Zl}\p{Zp}]/u, dt = [
	"format",
	"expectedRev",
	"build",
	"savedAt",
	"nonce",
	"note",
	"files"
], ft = "the save is too big for one GitHub issue";
function pt(e) {
	return Uint8Array.from(atob(e), (e) => e.charCodeAt(0));
}
function $(e) {
	return {
		ok: !1,
		verdict: "malformed",
		reason: e
	};
}
function mt(e) {
	if (e.length > 60200) return $(ft);
	let t = e.split("\n");
	if (t.length !== 2) return $("the body must be a header line and one data line");
	let n = ot.exec(t[0]);
	if (n === null) return $("the header line is not \"gravia-live-save 1 sha256=<hex>\"");
	let r = t[1];
	return !st.test(r) || r.length % 4 != 0 ? $("the data line is not base64") : {
		ok: !0,
		sha256: n[1],
		base64: r
	};
}
function ht(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function gt(e) {
	let t;
	try {
		t = JSON.parse(e);
	} catch {
		return $("the payload is not valid JSON");
	}
	if (!ht(t)) return $("the payload is not a JSON object");
	for (let e of Object.keys(t)) if (!dt.includes(e)) return $(`unknown key "${e}"`);
	if (t.format !== 1) return $("format must be 1");
	let { expectedRev: r, build: i, savedAt: o, nonce: s, files: c } = t;
	if (typeof r != "number" || !Number.isInteger(r) || r < 1) return $("expectedRev must be a positive whole number");
	if (typeof i != "string" || !lt.test(i)) return $("build is not a build id");
	if (typeof o != "string" || !a.test(o) || Number.isNaN(Date.parse(o))) return $("savedAt must be an ISO 8601 UTC time");
	if (typeof s != "string" || !ct.test(s)) return $("nonce must be 16 hex characters");
	if (Object.hasOwn(t, "note")) {
		let e = t.note;
		if (typeof e != "string") return $("note must be a string");
		if (Array.from(e).length > 200) return $("note is over 200 characters");
		if (ut.test(e)) return $("note has a character that cannot be shown");
	}
	if (!ht(c)) return $("files must be an object");
	for (let e of Object.keys(c)) if (!n.includes(e)) return $(`unknown file "${e}"`);
	let l = {};
	for (let e of n) {
		let t = c[e];
		if (typeof t != "string") return $(`file "${e}" must be a text`);
		l[e] = t;
	}
	let u = {
		format: 1,
		expectedRev: r,
		build: i,
		savedAt: o,
		nonce: s,
		files: l
	};
	return typeof t.note == "string" && (u.note = t.note), {
		ok: !0,
		payload: u
	};
}
async function _t(e, t, n = c) {
	let r = mt(e);
	if (!r.ok) return r;
	let i;
	try {
		let e = await t(pt(r.base64));
		i = new TextDecoder("utf-8", {
			fatal: !0,
			ignoreBOM: !0
		}).decode(e);
	} catch {
		return $("the data is not valid compressed text");
	}
	return await n(i) === r.sha256 ? gt(i) : $("the sha-256 of the payload differs from the header");
}
function vt(e, t) {
	let n = t.getTime() - Date.parse(e);
	return Number.isNaN(n) || n > 18e5 ? {
		ok: !1,
		verdict: "late",
		reason: "the save waited too long for the checker and is not applied"
	} : { ok: !0 };
}
function yt(e, t) {
	let n = rt(e.files, t);
	return n.ok ? n.files.map.name === "test" ? {
		ok: !0,
		...n.files
	} : {
		ok: !1,
		verdict: "invalid",
		reason: `The live map is named "${it}" and cannot be renamed.`
	} : {
		ok: !1,
		verdict: "invalid",
		reason: n.reason
	};
}
async function bt(e, t, r, i = c) {
	let a = {};
	for (let t of n) a[t] = await i(e.files[t]);
	if (n.every((e) => a[e] === t.files[e])) return {
		kind: "identical",
		rev: t.rev
	};
	if (t.rev !== e.expectedRev) return {
		kind: "stale",
		live: {
			rev: t.rev,
			savedAt: t.savedAt,
			by: t.by
		}
	};
	let o = {
		format: 2,
		rev: t.rev + 1,
		savedAt: r.toISOString(),
		by: "mapmaker",
		files: a
	};
	return e.note !== void 0 && (o.note = e.note), {
		kind: "next",
		manifest: o
	};
}
// src/live/live-check-entry.ts
var xt = {
	items: e,
	npcs: t
};
export { at as LIVE_TITLE_PREFIX, yt as checkLivePayload, vt as checkLivePayloadAge, _t as decodeLivePayload, xt as known, bt as nextManifest, s as parseLiveManifest, mt as splitLiveBody };
