var db = require("../models");

module.exports = (app) => {
    app.get("/", (request, response) => {
        response.redirect("/burger");
    });

    app.get("/burger", (request, response) => {
        db.burger.findAll({order: [["burger_type"]]}).then(function(dbBurger){
            var hbsObject = {
                burger: dbBurger
            };
            response.render("index", hbsObject);
        });
    });

    app.post("/burger/create", (request, response) => {
        db.burger.create({
            burger_type: request.body.burger_type
        }).then(function(dbBurger){
            response.redirect("/burger");
        });
    });

    app.put("/burger/update/:id", function(request, response) {
        db.burger.update({
            devoured: request.body.devoured
        },{
            where: {id: request.params.id}
        }).then(function(dbBurger){
            response.redirect("/burger");
        });
    });

    // app.delete("/burger/delete/:id", function(request, response) {
    //     db.burger.destroy({
    //         where: {id: request.params.id}
    //     }).then(function(dbBurger) {
    //         response.redirect("/");
    //     });
    // });
};