const router = require("express").Router();
const foodController = require("../../controllers/foodControllers.js");

// Matches with "/api/food"
// router.route("/")
  

// Matches with "/api/food/:id"
router
  .route("/:id")
  .get(foodController.findById)
  .put(foodController.update)

module.exports = router;
