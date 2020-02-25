const router = require("express").Router();
const storyController = require("../../controllers/story.js");

// Matches with "/api/story"
// router.route("/")
 

// Matches with "/api/story/:id"
router
  .route("/:id")
  .get(storyController.findById)

module.exports = router;
