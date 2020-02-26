const mongoose = require("mongoose");
const db = require("../models");

// This file empties the collection and inserts the things below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactcharacters"
);

const PresetCharacters = [
  {
    name: "Hector",
    class: "Warrior",
    attack: 5,
    defence: 5,
    health: 20,
    magic: 0
  },
  {
    name: "Merinda",
    class: "Archer",
    attack: 10,
    defence: 3,
    health: 15,
    magic: 0
  },
  {
    name: "Jafar",
    class: "Mage",
    attack: 1,
    defence: 5,
    health: 15,
    magic: 10
  },
  {
    name: "Tankenstien",
    class: "Tank",
    attack: 3,
    defence: 10,
    health: 25,
    magic: 0
  },
  {
    name: "Olaf",
    class: "Berserker",
    attack: 15,
    defence: 1,
    health: 10,
    magic: 0
  },
  {
    name: "Leona",
    class: "Cleric",
    attack: 1,
    defence: 1,
    health: 20,
    magic: 20
  }
];

const PresetEnemies = [
  {
    name: "Lucifer",
    class: "Mage",
    attack: 10,
    defence: 10,
    health: 50,
    magic: 50
  },
  {
    name: "Matilda",
    class: "Archer",
    attack: 10,
    defence: 10,
    health: 30,
    magic: 0
  },
  {
    name: "Alfonso",
    class: "Warrior",
    attack: 5,
    defence: 10,
    health: 30,
    magic: 0
  },
  {
    name: "Frank",
    class: "Tank",
    attack: 5,
    defence: 50,
    health: 50,
    magic: 0
  },
  {
    name: "Olaf",
    class: "Berserker",
    attack: 60,
    defence: 10,
    health: 20,
    magic: 0
  },
  {
    name: "Leona",
    class: "Cleric",
    attack: 1,
    defence: 5,
    health: 30,
    magic: 50
  }
];

const PresetEquipment = [
  {
    name: "Fancy Hat",
    Equip: "Head",
    attack: 2,
    defence: 2,
    health: 5,
    magic: 2
  },
  {
    name: "ChainMail",
    Equip: "Body",
    attack: 5,
    defence: 20,
    health: 20,
    magic: -5
  },
  {
    name: "Mystic Body",
    Equip: "Body",
    attack: -2,
    defence: 5,
    health: 20,
    magic: 15
  },
  {
    name: "Legs",
    Equip: "Legs",
    attack: 0,
    defence: 5,
    health: 20,
    magic: 0
  },
  {
    name: "Staff",
    Equip: "Hand",
    attack: 2,
    defence: 2,
    health: 10,
    magic: 20
  },
  {
    name: "Bow",
    Equip: "Hand",
    attack: 10,
    defence: 0,
    health: 20,
    magic: 0
  },
  {
    name: "Blessed Sword",
    Equip: "Hand",
    attack: 5,
    defence: 5,
    health: 20,
    magic: 5
  },
  {
    name: "Dual Axes",
    Equip: "Hand",
    attack: 20,
    defence: 5,
    health: 10,
    magic: -5
  },
];

const PresetFood = [
  {
    name: "Bread",
    health: 2
  },
  {
    name: "Fish",
    health: 5
  },
  {
    name: "Cake",
    health: 3
  },
  {
    name: "???",
    health: -5
  },
  {
    name: "?????",
    health: -3
  },
  {
    name: "????",
    health: 10
  },
  {
    name: "Golden Apple",
    health: 50
  },
  {
    name: "Pizza",
    health: 10
  },
];

const PresetPotion = [
  {
    name: "Attack Potion",
    attack: 10
  },
  {
    name: "Defence Potion",
    defence: 10
  },
  {
    name: "health Potion",
    health: 10
  },
  {
    name: "Magic Potion",
    magic: 10
  },
  {
    name: "Small Mistery potion",
    health: 3,
    attack: 3,
    defence: 3,
    magic: 3
  },
  {
    name: "Large Mistery potion",
    health: -10,
    attack: 15,
    defence: 15,
    magic: 15
  },
  {
    name: "Holy Elixer",
    health: 100,
    attack: 5,
    defence: 5,
    magic: 5
  }
];

const PresetRandom = [
  {
    name: "Traveling Priest",
    action: "heal",
    value:1
  },
  {
    name: "Random Enemy",
    action: "fight",
    value:0
  },
  {
    name: "Merchant",
    action: "Sell or Buy",
    value:1
  },
  {
    name: "Merchant",
    action: "Sell or Buy",
    value:0
  },
  {
    name: "Commoner",
    action: "Ask for food",
    value:0
  },
  {
    name: "commoner",
    action: "give item",
    value:1
  },
  {
    name: "Thief",
    action: "steal",
    value:0
  }
];

const PresetStory = [
  {
    name: "story",
    action: "to be added"
  },
  {
    name: "story",
    action: "to be added"
  },
  {
    name: "story",
    action: "to be added"
  },
  {
    name: "story",
    action: "to be added"
  },
  {
    name: "story",
    action: "to be added"
  },
  {
    name: "story",
    action: "to be added"
  },
  {
    name: "story",
    action: "to be added"
  }
];

db.Characters.remove({})
  .then(() => db.Characters.collection.insertMany(PresetCharacters))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Characters.remove({})
  .then(() => db.Characters.collection.insertMany(PresetEnemies))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Characters.remove({})
  .then(() => db.Characters.collection.insertMany(PresetEquipment))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Characters.remove({})
  .then(() => db.Characters.collection.insertMany(PresetFood))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Characters.remove({})
  .then(() => db.Characters.collection.insertMany(PresetPotion))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.Characters.remove({})
  .then(() => db.Characters.collection.insertMany(PresetRandom))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.Characters.remove({})
  .then(() => db.Characters.collection.insertMany(PresetStory))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });