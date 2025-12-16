const { Signup } = require("backend/controllers/AuthController.js");
const {Login} = require("backend/controllers/LoginController.js")
const router = require("express").Router();
const {userVerification} = require("backend/middlewares/AuthMiddleware.js");

router.post("/user",userVerification);
router.post("/signup", Signup);
router.post("/login",Login);


module.exports = router;