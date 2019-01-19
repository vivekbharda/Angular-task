var express = require('express');
var bodyParser = require('body-parser');
var app = express();


app.use(bodyParser.urlencoded({ extended: false }))

app.get('/users', function (req,res,next){
	console.log("req.body",req.body);
	if (req.body.success=='true') {

		var users = [{ 'Name' : "vivek bharda" , 'phoneNumber' : 9999999999 } , { 'Name' : "Pushpraj chudasama" ,'phoneNumber': 9898989898 } ]; 
		console.log("Response of the data" , users );
		res.status(200).json(users);

	}
	else if (req.body.success=='false') {
		res.status(404).send("no users found");
	}
	else{
		res.status(500).send("internel server error");
	}
});

app.post('/user', function (req, res, next) {
	
	console.log("Request Body ==============> ",req.body);
	if (req.body.success=='true') {
		var user = [{'Name' : "vivek bharda" , 'phoneNumber' : 7984517180}];
		console.log("Response of data" , user);
		res.status(200).json (user);

	}else if (req.body.success=='false') {
		res.status(403).send("forbidden");

	} else {
		res.status(401).send("unauthorized");
	}
});

app.listen(5000);