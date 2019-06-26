-- CREATE database Checkout;
USE Checkout;
Create TABLE Account(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  email VARCHAR(30) NOT NULL,
  password VARCHAR(30) NOT NULL,
  address1 VARCHAR(100) NOT NULL,
  address2 VARCHAR(100) NOT NULL,
  city VARCHAR(30) NOT NULL,
  state VARCHAR(30) NOT NULL,
  shippingZIP INT NOT NULL,
  phonenumber INT NOT NULL,
  creditcard INT NOT NULL,
  expirationdate DATE NOT NULL,
  cvv INT NOT NULL,
  billingZIP INT NOT  NULL,
  PRIMARY KEY (id)
)