const router = require("express").Router();
const potionController = require("../../controllers/potion");

// Matches with "/api/potion"
router.route("/")
  .get(potionController.findAll)
  .post(potionController.create);

// Matches with "/api/potion/:id"
router
  .route("/:id")
  .get(potionController.findById)
  .put(potionController.update)
  .delete(potionController.remove);

module.exports = router;
