const express = require ('express');
const movieApiController = require('../../controllers/api/movieApiController');
const router = express.Router();

router.get('/movies', movieApiController.list);

module.exports = router;