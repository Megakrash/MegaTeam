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

module.exports = {
  signInUserByUser,
};
