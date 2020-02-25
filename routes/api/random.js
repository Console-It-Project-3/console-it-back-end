const router = require("express").Router();
const randomController = require("../../controllers/randomControllers.js");

// Matches with "/api/random"
router.route("/")
  .get(randomController.findAll)
  .post(randomController.create);

// Matches with "/api/random/:id"
router
  .route("/:id")
  .get(randomController.findById)
  .put(randomController.update)
  .delete(randomController.remove);

module.exports = router;
