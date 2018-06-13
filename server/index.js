const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

const app = express();
const port = 3002;

app.use('/listings/1001/reviews', express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json());

db.checkDatabase((error, results) => {
  if (error) {
    console.error(error);
  } else if (Object.values(results[0])[0] < 1) {
    db.insertDummyData();
  }
});

app.get('/api/listings/1001/reviews', (req, res) => {
  db.getAllListingReviews(1002, (error, results) => {
    if (error) {
      res.status(500).send();
    } else {
      res.status(200).send(results);
    }
  });
});


app.listen(port, () => `listening on port ${port}`);
