const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('../database/index.js');

app.use(express.static('client'));
app.use(bodyParser.json());


app.get('/api/listings/1001/reviews', function(req, res){
	db.getAllListingReviews(function(error, results) {
		if (error) {
			res.status(500).send();
		} else {
			console.log(results)
			res.status(200).send(results);
		}
	});
});



const port = 3000;
app.listen(port, () => (console.log('listening on port: ' + port)));