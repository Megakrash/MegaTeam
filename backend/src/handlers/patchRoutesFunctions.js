const database = require("../../database");

const patchUserById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { nickname, email, password } = req.body;
  const reqBodyKeysArr = Object.keys(req.body);

  let sql = "UPDATE user SET";
  reqBodyKeysArr.forEach((item, index) => {
    if (index !== 0) sql += ",";
    switch (item) {
      case "nickname":
        sql += ` ${item} = "${nickname}"`;
        break;
      case "email":
        sql += ` ${item} = "${email}"`;
        break;
      case "password":
        sql += ` ${item} = "${password}"`;
        break;
      default:
        break;
    }
  });
  sql += " WHERE id = ?;";

  database
    .query(sql, [id])
    .then(([result]) => {
      console.warn(sql);
      console.warn(result);
      return result.affectedRows === 0
        ? res.status(404).send("Not Found")
        : res.sendStatus(204);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error editing user");
    });
};

module.exports = {
  patchUserById,
};
