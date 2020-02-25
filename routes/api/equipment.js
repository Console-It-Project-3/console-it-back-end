const router = require("express").Router();
const equipmentController = require("../../controllers/equipmentControllers.js");

// Matches with "/api/equipment"
// router.route("/")
  

// Matches with "/api/equipment/:id"
router
  .route("/:id")
  .get(equipmentController.findById)
  .put(equipmentController.update)

module.exports = router;