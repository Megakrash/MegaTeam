const express = require("express");
const { hashPassword } = require("../handlers/auth");

const router = express.Router();

const patchRoutesFunctions = require("../handlers/patchRoutesFunctions");

// USERS
router.patch("/users/:id", hashPassword, patchRoutesFunctions.patchUserById);

// TEAM
router.patch("/team/:id", hashPassword, patchRoutesFunctions.patchTeamById);

module.exports = router;
