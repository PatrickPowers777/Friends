var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 8080


var jsonParser = bodyParser.json();

var urlencodedParser = bodyParser.urlencoded({ extended: false});

// parse various different custom JSON types as JSON 
app.use(bodyParser.json({ type: 'application/*+json' }))
 
// parse some custom thing into a Buffer 
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
 
// parse an HTML body into a string 
app.use(bodyParser.text({ type: 'text/html' }))

app.listen(PORT, function(){
	console.log("Server listening on " + PORT)
})

require(".app/routing/routes.js") (app);