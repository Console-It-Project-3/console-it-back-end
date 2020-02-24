const db = require("../models/user");

module.exports = {
    findAll: function(req, res) {
      db.Enimies.find({})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
};