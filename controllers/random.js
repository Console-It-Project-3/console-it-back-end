const db= require("../models");

module.exports={
    findById: function(req, res) {
    db.RandomEvents
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
}