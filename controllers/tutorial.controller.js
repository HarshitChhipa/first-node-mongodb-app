const db = require("../models");
const Tutorial = db.tutorials;

exports.create = (req, res) => {
  console.log("Hitted create");
  console.log(req.body);
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
  }

  const tutorial = new Tutorial({
      title: req.body.title,
      description: req.body.description,
      published: req.body.published ? req.body.published : false
  });

  tutorial.save(tutorial).then(data => {
      res.send(data);
  }).catch (err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the tutorial."
      });
  });
};

exports.findAll = (req, res) => {};

exports.update = (req, res) => {};

exports.delete = (req, res) => {};

exports.deleteAll = (req, res) => {};

exports.findAllPublished = (req, res) => {};

