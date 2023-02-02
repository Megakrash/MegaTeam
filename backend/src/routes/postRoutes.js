const express = require("express");
const postRoutesFunctions = require("../handlers/postRoutesFunctions");
// const { upload, uploadImg, uploadAvatar } = require("./multers/multers");
const { hashPassword } = require("../handlers/auth");
// const { verifyPassword } = require("../handlers/auth");

const router = express.Router();

// USERS
router.post("/users", hashPassword, postRoutesFunctions.signInUserByUser);

module.exports = router;
