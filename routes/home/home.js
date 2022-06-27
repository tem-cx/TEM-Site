const { Router } = require("express");
const controller = require("../../controllers/home/home");

const router = Router();

router.route("/").get(controller.getHome).post(controller.postHome);

module.exports = router;
