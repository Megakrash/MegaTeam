const database = require("../../database");

/* POST USER */
const signInUserByUser = (req, res) => {
  const { nickname, email, password } = req.body;

  database
    .query("SELECT email FROM user WHERE email = ?", [email])
    .then(([[resp]]) => {
      if (!resp) {
        database
          .query(
            "INSERT INTO user (nickname, email, password) VALUES (?, ?, ?)",
            [nickname, email, password]
          )
          .then(([result]) => {
            res
              .location(`/users/${result.insertId}`)
              .status(201)
              .send({ message: "user created" });
          })
          .catch((err) => {
            console.error(err);
            res.status(500).send("Error saving the user");
          });
      } else {
        res.status(501).send("Email allready exists");
      }
    })
    .catch((err) => {
      console.warn(err);
      res.status(409).send("Fuck");
    });
};

// Post a user that try to log his account
const getUserByEmailWithPasswordAndPassToNext = (req, res, next) => {
  const { email } = req.body;

  database
    .query("SELECT * FROM user WHERE email = ?", [email])
    .then(([users]) => {
      if (users[0] != null) {
        // eslint-disable-next-line prefer-destructuring
        req.user = users[0];
        next();
      } else {
        res.sendStatus(401);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

// POST TEAM
const postTeam = (req, res) => {
  const { name } = req.body;

  database
    .query("INSERT INTO team(name) VALUES (?)", [name])
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error saving the team");
    });
};
/* POST TO LINK THE TEAM TO THE USER */

const attachTeamToUser = (req, res) => {
  const { teamId, userId } = req.body;
  database
    .query("INSERT INTO team_user(team_id, user_id) VALUES (?, ?)", [
      Number(teamId),
      Number(userId),
    ])
    .then(() => {
      res.status(201).send({ message: "Team link to the user" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error link team to the user");
    });
};

// POST HERO
const postHero = (req, res) => {
  const {
    name,
    url,
    intelligence,
    strength,
    speed,
    durability,
    power,
    combat,
  } = req.body;

  database
    .query(
      "INSERT INTO hero(name, url, intelligence, strength, speed, durability, power, combat) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [name, url, intelligence, strength, speed, durability, power, combat]
    )
    .then(([result]) => {
      res.status(201).send(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error saving the hero");
    });
};

module.exports = {
  signInUserByUser,
  getUserByEmailWithPasswordAndPassToNext,
  postTeam,
  attachTeamToUser,
  postHero,
};
