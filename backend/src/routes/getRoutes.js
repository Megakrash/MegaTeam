const express = require("express");

const router = express.Router();
const { verifyToken } = require("../handlers/auth");

const getRoutesFunctions = require("../handlers/getRoutesFunctions");
/* router */
router.get("/", verifyToken, getRoutesFunctions.welcome);

/* users */
// router.get("/users", getRoutesFunctions.getUsers);
router.get("/users/:id", getRoutesFunctions.getUserById);

/* Team */
router.get("/team/:id", getRoutesFunctions.getTeamById);
router.get("/team_user/:id", getRoutesFunctions.getTeamByUser);

/* Hero */
router.get("/hero/:id", getRoutesFunctions.getHeroById);

module.exports = router;
