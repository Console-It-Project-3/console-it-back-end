const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const potionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
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

const Potion = mongoose.model("Potion", potionSchema);

module.exports = Potion;
