import axios from "axios";

    // need to create functions to get all the characters for the spesific user
    // need to create functions to get all of the equipment
    // need to create functions to get all of the enemies
    // need to create functions to get all of the food
    // need to create functions to get all of the story
    // need to create functions to get all of the random events


export default {
    // Gets all posts
    getCharacters: function () {
        // console.log("api")
        return axios.get("http://localhost:3001/api/character/all");
    },

    getEnemies: function () {
        // console.log("api")
        return axios.get("http://localhost:3001/api/enemies/all");
    },
    getEquipment: function () {
        // console.log("api")
        return axios.get("http://localhost:3001/api/equipment/all");
    },
    getFood: function () {
        // console.log("api")
        return axios.get("http://localhost:3001/api/food/all");
    },
    getPotion: function () {
        // console.log("api")
        return axios.get("http://localhost:3001/api/potion/all");
    },
    getRandom: function () {
        // console.log("api")
        return axios.get("http://localhost:3001/api/random/all");
    },
    getStory: function () {
        // console.log("api")
        return axios.get("http://localhost:3001/api/story/all");
    },


    // Gets the post with the given 
    //   getPost: function() {
    //     return axios.get("/api/posts/" + );
    //   },
    //   // Deletes the post with the given 
    //   deletePost: function() {
    //     return axios.delete("/api/posts/" + );
    //   },
    //   // Saves a post to the database
    //   savePost: function(postData) {
    //     return axios.post("/api/posts", postData);
    //   }
};
