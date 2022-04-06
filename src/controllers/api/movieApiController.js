const db = require('../../database/models');

module.exports =  {
    list: function(req, res) {
        db.Movie.findAll()
        .then(movies => {
            return res.json(movies);
        })
    }
}