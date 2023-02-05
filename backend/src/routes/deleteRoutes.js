const express = require("express");

const deleteRoutesFunctions = require("../handlers/deleteRoutesFunctions");

const router = express.Router();

router.delete("/users/:id", deleteRoutesFunctions.deleteUserById);

router.delete("/team/:id", deleteRoutesFunctions.deleteTeamById);

router.delete("/hero/:id", deleteRoutesFunctions.deleteHeroById);

module.exports = router;
