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

app.get('/home', function (req, res) {
    res.send('Hello World');
    console.log("Hello World");
});

app.post('/sum', function (req, res) {
    console.log('Logging Request-----', req.body);
    const firstNumber = req.body.firstNumber;
    const secondNumber = req.body.secondNumber;
    const sum = firstNumber+secondNumber;
    console.log('sum--->', sum);
    res.send({"Result" : sum});
});


app.listen(3000);
console.log("Server Listening at 3000");