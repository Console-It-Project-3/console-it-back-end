const router = require("express").Router();
const randomController = require("../../controllers/random.js");

// Matches with "/api/random"
// router.route("/")


// Matches with "/api/random/:id"
router
  .route("/:id")
  .get(randomController.findById)

module.exports = router;
