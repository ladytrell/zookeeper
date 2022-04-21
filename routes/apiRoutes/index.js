const router = require('express').Router();
const animalRoutes = require('../apiRoutes/animalRoutes');

// Use the routes defined in apiRoutes/animalRoutes
router.use(animalRoutes);
router.use(require('./zookeeperRoutes'));

module.exports = router;