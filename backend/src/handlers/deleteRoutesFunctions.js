// const fs = require("fs");
const database = require("../../database");

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

module.exports = {
  deleteUserById,
};
