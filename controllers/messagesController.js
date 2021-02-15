const Message = require("../models/message");

module.exports = {
  sendMessage: (req, res) => {
    console.log(req.body);
    Message.create(req.body)
      .then((message) => {
        res.json((message) => {
          res.json(message);
          console.log("Message sent...");
        });
      })
      .catch((error) => res.status(422).json(error));
  },
};
