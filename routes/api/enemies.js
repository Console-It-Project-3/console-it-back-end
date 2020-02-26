const router = require("express").Router();
const enemiesController = require("../../controllers/enemies");

// Matches with "/api/enemies"
// router.route("/")
  

// Matches with "/api/enemies/:id"
router
  .route("/:id")
  .get(enemiesController.findAll)
  .get(enemiesController.findById)
  .put(enemiesController.update)

module.exports = router;
