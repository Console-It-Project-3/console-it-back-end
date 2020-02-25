const router = require("express").Router();
const storyController = require("../../controllers/storyControllers.js");

// Matches with "/api/story"
router.route("/")
  .get(storyController.findAll)
  .post(storyController.create);

// Matches with "/api/story/:id"
router
  .route("/:id")
  .get(storyController.findById)
  .put(storyController.update)
  .delete(storyController.remove);

module.exports = router;
