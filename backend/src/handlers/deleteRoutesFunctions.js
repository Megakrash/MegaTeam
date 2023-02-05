// const fs = require("fs");
const database = require("../../database");

// DELETE USER
const deleteUserById = (req, res) => {
  const id = parseInt(req.params.id, 10);

  database
    .query("DELETE FROM user WHERE id = ?", [id])
    .then(([user]) => {
      return user.affectedRows === 0
        ? res.status(404).send("Not Found")
        : res.sendStatus(204);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error deleting user");
    });
};

// DELETE TEAM
const deleteTeamById = (req, res) => {
  const id = parseInt(req.params.id, 10);

  database
    .query("DELETE FROM team_user WHERE team_id = ?", [id])
    .then(() => {
      database.query("DELETE FROM team WHERE id = ?", [id]).then(([team]) => {
        return team.affectedRows === 0
          ? res.status(404).send("Not Found")
          : res.sendStatus(204);
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error deleting team");
    });
};

// DELETE USER
const deleteHeroById = (req, res) => {
  const id = parseInt(req.params.id, 10);

  database
    .query("DELETE FROM hero WHERE id = ?", [id])
    .then(([user]) => {
      return user.affectedRows === 0
        ? res.status(404).send("Not Found")
        : res.sendStatus(204);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error deleting user");
    });
};

module.exports = {
  deleteUserById,
  deleteTeamById,
  deleteHeroById,
};
