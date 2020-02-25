const router = require("express").Router();
const userController = require("../../controllers/userController.js");

// Matches with "/api/user"
console.log("heres the controller", userController);

router.route("/")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/user/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)

module.exports = router;
