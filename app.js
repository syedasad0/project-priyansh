const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(express.json({ limit: '50mb' }));

//CRUD Operations
/*
GET
POST
PUT
DELETE
*/
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.send('Hello World');
    console.log("Hello World");
});


app.listen(3000);
console.log("Server Listening at 3000");