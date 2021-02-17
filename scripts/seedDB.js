const mongoose = require("mongoose");
const db = require("../models");
const config = require("config");

mongoose.connect(process.env.MONGODB_URI || config.get("MONGODB_URI"));

const repoSeed = [
  {
    name: "Chat-Application",
    github: "k1te-m",
    deployedLink: "https://calm-springs-46357.herokuapp.com/",
    imageURL: "../images/chatApp.png",
    description:
      "A MERN stack application that allows real time communication between users, utilizing Socket.io, React-Redux, and ReduxToolkit.",
    languages: [
      "ReactJS",
      "Redux",
      "ReduxToolkit",
      "MongoDB",
      "Socket.io",
      "Express",
      "NodeJS",
      "Bootstrap",
    ],
  },
  {
    name: "explorer",
    github: "k1te-m",
    deployedLink: "https://gentle-atoll-92825.herokuapp.com/",
    imageURL: "../images/explorer.PNG",
    description:
      "MERN stack web game that is designed to take the user on an educational journey while interacting with NASA information to gain explorative knowledge. Gain credits as rewards for answering correct quiz questions while transversing the universe. Purchase and upgrade ships throught your journey.",
    languages: ["ReactJS", "MongoDB", "Express", "NodeJS", "Bootstrap"],
  },
  {
    name: "EcommerceApp",
    github: "k1te-m",
    deployedLink: "https://fierce-earth-38835.herokuapp.com/",
    imageURL: "../images/limitelec.PNG",
    description:
      "A mock ecommerce electronics site. Product data is stored in a MySQL database, and the users can browse in a variety of ways. Users can optionally create an account, and log in and log out. While logged in, they can view their member information.",
    languages: [
      "jQuery",
      "Handlebars",
      "MySQL",
      "Express",
      "NodeJS",
      "Bootstrap",
    ],
  },
  {
    name: "Google-Books-React-Search",
    github: "k1te-m",
    deployedLink: "https://warm-journey-23534.herokuapp.com/",
    imageURL: "../images/googlebooks.png",
    description:
      "React application utilizing NodeJS, Express, and MongoDB that allows users to query and display books from the Google Books API. Users are given various information about each book and are able to save books that they like or want to read for future reference.",
    languages: ["ReactJS", "MongoDB", "NodeJS", "Express", "Bootstrap"],
  },
];

db.Repo.remove({})
  .then(() => db.Repo.collection.insertMany(repoSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
  });
