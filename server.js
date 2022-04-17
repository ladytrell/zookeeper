const express = require('express');
// Instantiate the server
const app = express();
// Deconstruct animals from the Json file
const { animals } = require('./data/animals');

// Route
app.get('/api/animals', (req, res) => {
    let results = animals;
    console.log(req.query)
    res.json(results);
  });

// Listen on port 3001
app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
});

