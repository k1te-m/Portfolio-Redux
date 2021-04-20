const mongoose = require("mongoose");
const db = require("../models");
const config = require("config");

mongoose.connect(process.env.MONGODB_URI || config.get("MONGODB_URI"));

const repoSeed = [
  {
    name: "Ticker-Tracker",
    github: "k1te-m",
    deployedLink: "https://vantage-news.herokuapp.com/",
    imageURL: "../images/vantage.png",
    description:
      "A MERN (Redux) stack application using IEX Cloud to retrieve and display current ticker information, historical information, and news. Registered users can add or remove tickers from their watchlist to keep up to date on the latest market movements.",
    languages: [
      "ReactJS",
      "MongoDB",
      "NodeJS",
      "Express",
      "Bootstrap",
      "Redux",
      "ReactChartJS",
    ],
  },
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
    imageURL: "../images/explorer.png",
    description:
      "MERN stack web game that is designed to take the user on an educational journey while interacting with NASA information to gain explorative knowledge. Gain credits as rewards for answering correct quiz questions while transversing the universe. Purchase and upgrade ships throught your journey.",
    languages: ["ReactJS", "MongoDB", "Express", "NodeJS", "Bootstrap"],
  },
  {
    name: "EcommerceApp",
    github: "k1te-m",
    deployedLink: "https://fierce-earth-38835.herokuapp.com/",
    imageURL: "../images/limit.png",
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
