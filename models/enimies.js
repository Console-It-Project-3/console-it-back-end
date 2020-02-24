const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const enimiesSchema = new Schema({
    name: { 
        type: String, 
        required: true 
    },
    class: {
        type: String, 
        required: true 
    },
    attack: {
        type: Number, 
        required: true 
    },
    defence: {
        type: Number, 
        required: true 
    },
    heath: {
        type: Number, 
        required: true 
    },
    magic: {
        type: Number, 
        required: true 
    }
   
});
  
const Enimies = mongoose.model("Enimies", enimiesSchema);


module.exports = Enimies;