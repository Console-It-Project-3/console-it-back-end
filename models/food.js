const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  health:{
      type:Number,
      default:""
  }
});

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;
