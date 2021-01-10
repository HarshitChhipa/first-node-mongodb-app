module.exports = (app) => {
  const tutorial = require("../controllers/tutorial.controller.js");
  var router = require("express").Router();

  router.post("/", tutorial.create);
  router.get("/", tutorial.findAll);
  router.get("/", tutorial.findOne);
  router.get("/published", tutorial.findAllPublished);
  router.put("/:id", tutorial.update);
  router.delete("/:id", tutorial.delete);
  router.delete("/", tutorial.deleteAll);

  app.use("/api/tutorials", router);
};
