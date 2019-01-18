var express = require('express');
var bodyParser = require('body-parser');
var app = express();


app.use(bodyParser.urlencoded({ extended: false }))

app.get('/users', function (req,res,next){

	var users = [{ 'Name' : "vivek bharda" , 'phoneNumber' : 9999999999 } , { 'Name' : "Pushpraj chudasama" ,'phoneNumber': 9898989898 } ]; 
	console.log("Response of the data" , users );
	res.status(200).json(users);

});

app.post('/user', function (req, res, next) {
	
	console.log("Request Body ==============> ",req.body);
	const user = req.body;
	res.status(200).json( user );

});

app.listen(3000);