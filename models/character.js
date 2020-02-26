const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const characterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },

  class: {
    type: String,
    default: "",
    required: true
  },

  attack: {
    type: Number,
    default: ""
  },
  defence: {
    type: Number,
    default: ""
  },

  health: {
    type: Number,
    default: ""
  },

  magic: {
    type: Number,
    default: ""
  }
});

const Character = mongoose.model("Character", characterSchema);

module.exports = Character;
