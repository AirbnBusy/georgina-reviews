const mysql = require('mysql');
const data = require('../faker.js');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'tennis203',
  database: 'reviews'
});

connection.connect();


function insertDummyData() {
  var listings = data.generateListings();
  var reviews = data.generateReviews();
  listings.forEach(function(listing) {
    connection.query(listing)
  })
  reviews.forEach(function(review) {
  connection.query(review)
  })
}


function getAllListingReviews(callback) {
  const q = 'SELECT listings.api_id,reviews.* FROM reviews INNER JOIN listings ON listings.id = reviews.listings_id AND api_id = 1001';

  connection.query(q, (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
}


module.exports = {
  getAllListingReviews,
  insertDummyData
};
