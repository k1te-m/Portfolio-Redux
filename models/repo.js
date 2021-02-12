const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const repoSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  github: {
    type: String,
    required: true,
    trim: true,
  },
  deployedLink: {
    type: String,
    required: true,
    trim: true,
  },
  imageURL: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  languagesOrTech: {
    type: String,
    required: true,
    trim: true,
  },
});

const Repo = mongoose.model("Repo", repoSchema);

module.exports = Repo;
