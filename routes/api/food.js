const router = require("express").Router();
const foodController = require("../../controllers/food");

// Matches with "/api/food"
// router.route("/")
  

// Matches with "/api/food/:id"
router
  .route("/:id")
  .get(foodController.findById)
  .put(foodController.update)
  // .delete(foodController.remove)

module.exports = router;
