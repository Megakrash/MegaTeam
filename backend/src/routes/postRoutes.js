const express = require("express");
const postRoutesFunctions = require("../handlers/postRoutesFunctions");
// const { upload, uploadImg, uploadAvatar } = require("./multers/multers");
const { hashPassword } = require("../handlers/auth");
const { verifyPassword } = require("../handlers/auth");

const router = express.Router();

// LOGIN
router.post(
  "/login",
  postRoutesFunctions.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);

// USERS SIGN IN
router.post("/users", hashPassword, postRoutesFunctions.signInUserByUser);

module.exports = router;
