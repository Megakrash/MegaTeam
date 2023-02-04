const database = require("../../database");

/* WELCOME MESSAGE */
const welcome = (req, res) => {
  res.send("Welcome to the backend !");
};

/* USERS */
const getUserById = (req, res) => {
  const id = parseInt(req.params.id, 10);

  database
    .query("SELECT * FROM user WHERE id = ?", [id])
    .then(([user]) => {
      if (user[0] != null) {
        res.status(200).json(user[0]);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

/* TEAM */
const getTeamById = (req, res) => {
  const id = parseInt(req.params.id, 10);

  database
    .query("SELECT * FROM team WHERE id = ?", [id])
    .then(([user]) => {
      if (user[0] != null) {
        res.status(200).json(user[0]);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const getTeamByUser = (req, res) => {
  const id = parseInt(req.params.id, 10);

  database
    .query("SELECT * FROM team_user WHERE user_id = ?", [id])
    .then(([team]) => res.status(200).json(team))
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

module.exports = {
  welcome,
  getUserById,
  getTeamById,
  getTeamByUser,
};
