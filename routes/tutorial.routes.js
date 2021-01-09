module.exports = app => {
    const tutorial = require("../controllers/tutorial.controller.js");
    var router = require("express").Router();
    
    router.post("/",tutorial.create);
    // router.get("/", tutorial.findAll);

    app.use('/api/tutorials',router);
};