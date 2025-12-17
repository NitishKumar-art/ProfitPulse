const jwt = require("jsonwebtoken");
const UsersModel = require("../model/UsersModel");

module.exports.userVerification = async (req, res, next) => {
  try {
    // 🔐 Get token from Authorization header
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ status: false, message: "Authorization token missing" });
    }

    const token = authHeader.split(" ")[1];

    // 🔍 Verify JWT
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);

    // 👤 Find user
    const user = await UsersModel.findById(decoded.id).select("-password");

    if (!user) {
      return res
        .status(401)
        .json({ status: false, message: "User not found" });
    }

    // ✅ Attach user to request
    req.user = user;

    next(); // allow request to continue
  } catch (error) {
    return res
      .status(401)
      .json({ status: false, message: "Invalid or expired token" });
  }
};
