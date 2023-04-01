const express = require('express');
const router = express.Router();
const { handleHomePage, searchHero } = require('../controller/superhero');
const { clientError, serverError } = require('../controller/error');


router.get('/', handleHomePage);

router.get('/search/:value', searchHero);

// for test just
router.get('/error', serverError);

router.use(clientError);
router.use(serverError);

module.exports = router;