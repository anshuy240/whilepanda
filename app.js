const express = require('express');
const bodyParser = require('body-parser');

const car = require('./routes/car.route'); // Imports routes for the products
const app = express();
app.use('/cars', car);
let port = 1234;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
/*
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  
  var myobj = {
    vehicleNo : "mp04",
    modelNo : "v15",
    seatingCapacity :5,
    rentPerDay: 1500};

  dbo.collection("car").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
*/
/*
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("car").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
*/