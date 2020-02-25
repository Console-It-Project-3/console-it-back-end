const router = require("express").Router();
const characterController = require("../../controllers/character");

// Matches with "/api/character"
// router.route("/")
  // for authentication 

// Matches with "/api/character/:id"
router
  .route("/:id")
  .get(characterController.findAll)
  .get(characterController.findById)
  .post(characterController.create)
  .put(characterController.update)
  .delete(characterController.remove);

module.exports = router;
