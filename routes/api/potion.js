const router = require("express").Router();
const potionController = require("../../controllers/potions");

// Matches with "/api/potion"
// router.route("/")
  

// Matches with "/api/potion/:id"
router
  .route("/:id")
  .get(potionController.findById)
  .put(potionController.update)

module.exports = router;
