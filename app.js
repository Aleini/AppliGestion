const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const port = 8080;

console.log('Get connection ...');

var conn = mysql.createConnection({
  database: 'gestionFinance',
  host: "localhost",
  user: "phpmyadmin",
  password: "1035@leX"
});

conn.connect(function (err) {
  if (err) throw err;
  console.log("Connected to database!");
});
global.conn=conn;

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});