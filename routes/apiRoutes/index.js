const router = require('express').Router();
const animalRoutes = require('../apiRoutes/animalRoutes');

// Use the routes defined in apiRoutes/animalRoutes
router.use(animalRoutes);

module.exports = router;