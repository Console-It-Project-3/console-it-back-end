const db= require("../models");

module.exports={
    findById: function(req, res) {
    db.Story
        .find({where:{_id:req.params.id}})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
}