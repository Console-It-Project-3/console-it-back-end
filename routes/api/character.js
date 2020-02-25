const router = require("express").Router();
const characterController = require("../../controllers/characterControllers.js");

// Matches with "/api/character"
// router.route("/")
  // for authentication 

// Matches with "/api/character/:id"
router
  .route("/:id")
  .get(characterController.findById)
  .put(characterController.update)
  .delete(characterController.remove);

module.exports = router;
