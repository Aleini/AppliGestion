const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');
const $ = require('jquery')
const app = express();

const {homePage} = require("./routes/index");
const {countPage} = require("./routes/compte");
const {operationPage} = require('./routes/operation');
const {addOperation} = require('./routes/addOperation');
const port = 8080;

console.log('Get connection ...');

var conn = mysql.createConnection({
  database: 'gestionFinance',
  host: "localhost",
  user: "phpmyadmin",
  password: "1035@leX"
});

// configure middleware
app.set('port', process.env.port || port); // set express to use this port
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder

// routes for the app
app.get('/', homePage);
app.get('/compte', countPage);
app.get('/operation', operationPage);
app.post('/addOperation', addOperation);

conn.connect(function (err) {
  if (err) throw err;
  console.log("Connected to database!");
});
global.conn=conn;

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});