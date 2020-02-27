import axios from "axios";

    // need to create functions to get all the characters for the spesific user
    // need to create functions to get all of the equipment
    // need to create functions to get all of the enemies
    // need to create functions to get all of the food
    // need to create functions to get all of the story
    // need to create functions to get all of the random events


export default {
    // Gets all posts
    getCharacters: function (id) {
        console.log("api", id)
        return axios.get("http://localhost:3001/api/character/" + id);
    },
    getEnemies: function (id) {
        console.log("api", id)
        return axios.get("http://localhost:3001/api/enemies/" + id);
    },
    getEquipment: function (id) {
        console.log("api", id)
        return axios.get("http://localhost:3001/api/equipment/" + id);
    },
    getFood: function (id) {
        console.log("api", id)
        return axios.get("http://localhost:3001/api/food/" + id);
    },
    getPotion: function (id) {
        console.log("api", id)
        return axios.get("http://localhost:3001/api/potion/" + id);
    },
    getRandom: function (id) {
        console.log("api", id)
        return axios.get("http://localhost:3001/api/random/" + id);
    },
    getStory: function (id) {
        console.log("api", id)
        return axios.get("http://localhost:3001/api/story/" + id);
    },

    // Gets the post with the given id
    //   getPost: function(id) {
    //     return axios.get("/api/posts/" + id);
    //   },
    //   // Deletes the post with the given id
    //   deletePost: function(id) {
    //     return axios.delete("/api/posts/" + id);
    //   },
    //   // Saves a post to the database
    //   savePost: function(postData) {
    //     return axios.post("/api/posts", postData);
    //   }
};
