const router = require("express").Router();
const enemiesController = require("../../controllers/enimiesController.js");

// Matches with "/api/enemies"
router.route("/")
  .get(enemiesController.findAll)
  .post(enemiesController.create);

// Matches with "/api/enemies/:id"
router
  .route("/:id")
  .get(enemiesController.findById)
  .put(enemiesController.update)
  .delete(enemiesController.remove);

module.exports = router;
