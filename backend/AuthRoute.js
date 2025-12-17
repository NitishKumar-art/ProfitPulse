const express = require("express");
const router = express.Router();

const { Signup } = require("./controllers/AuthController");
const { Login } = require("./controllers/LoginController");
const { userVerification } = require("./middlewares/AuthMiddleware");

// verify user (protected)
router.post("/user", userVerification);

// auth routes
router.post("/signup", Signup);
router.post("/login", Login);

module.exports = router;
