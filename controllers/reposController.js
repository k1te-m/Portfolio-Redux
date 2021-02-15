const Repo = require("../models/repo");

module.exports = {
  findAll: (req, res) => {
    Repo.find({})
      .then((repos) => res.json(repos))
      .catch((error) => res.status(422).json(error));
  },
};
