const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Author
            .find(req.query)
            .sort({ works_count: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findMany: function () {
        db.Author
            .find(search)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }

};

// gender: xx
// race : xx