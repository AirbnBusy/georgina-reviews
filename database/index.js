const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'tennis203',
  database: 'userreviews'
});

connection.connect();


const getAllListingReviews = function(callback){
  const q =  "SELECT listings.api_id, reviews.* FROM reviews INNER JOIN listings ON listings.id = reviews.listings_id AND api_id = 1001";

  connection.query(q, function(error, results) {
    if(error) {
      callback(error, null);
    } else {
      callback(null, results);
    };
  });
};



module.exports = {
  getAllListingReviews
};