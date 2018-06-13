
drop database if exists reviews;

create database reviews;
use reviews;

DROP TABLE IF EXISTS listings;
		
CREATE TABLE listings (
  id INTEGER NOT NULL AUTO_INCREMENT,
  api_id INTEGER NOT NULL,
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS reviews;
		
CREATE TABLE reviews (
  id INTEGER NOT NULL AUTO_INCREMENT,
  listings_id INTEGER NOT NULL,
  user_name CHAR(50) NOT NULL,
  flagged INT NULL,
  photo CHAR(200) NOT NULL,
  review VARCHAR(1000) NOT NULL,
  owner_name char(20) NOT NULL,
  owner_response VARCHAR(1000) NULL,
  review_date DATE NOT NULL,
  rating_cleanliness DECIMAL NOT NULL,
  rating_value DECIMAL NOT NULL,
  rating_location DECIMAL NOT NULL,
  rating_communication DECIMAL NOT NULL,
  rating_checkin DECIMAL NOT NULL,
  rating_accuracy DECIMAL NOT NULL,
  PRIMARY KEY (id)
);


ALTER TABLE reviews ADD FOREIGN KEY (listings_id) REFERENCES listings (id);


