const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

const app = express();

app.use('/', express.static(path.join(__dirname,'../client')));
app.use(bodyParser.json());


app.get('/api/listings/1001/reviews', (req, res) => {
  db.getAllListingReviews((error, results) => {
    if (error) {
      res.status(500).send();
    } else {
      res.status(200).send(results);
    }
  });
});

const port = 8080;

app.listen(port, () => (console.log(`listening on port ${port}`)));
