//Dependencies
const express = require("express"); //importing express
path = require("path");

//Instantiations
const app = express();

//Configurations
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
//app.set("views", "./views");

//Middleware
// Simple request time logger
app.use((req, res, next) => {
	console.log("A new request received at " + Date.now());

app.use(express.static(path.join(__dirname, "public")));
app.use("/public/images", express.static(__dirname + "/public/images"));

	// This function call tells that more processing is
	// required for the current request and is in the next middleware
	//function/route handler.
	next();
});

app.get("/about", (req, res) => {
	res.send("About Page");
});

// To parse URL encoded data
app.use(express.urlencoded({ extended: false }));

//Routes

//How to send files
app.get("/", (req, res) => {
	res.sendFile(__dirname + "/html/index.html");
});

app.get("/signIn", (req, res) => {
	res.sendFile(__dirname + "/html/signIn.html");
});

app.post("/signIn", (req, res) => {
	console.log(req.body);
	res.redirect("/");
});

//Rendering pug file
app.get("/register", (req, res) => {
	res.render("registration");
});

app.post("/register", (req, res) => {
	console.log(req.body);
	res.redirect("/");
});

//res.send sends a string
app.post("/register", (req, res) => {
	res.send("You have registered a user");
});

app.get("/", (req, res) => {
	// new
	res.send("Homepage! Hello world.");
});

app.get("/about", (req, res) => {
	// new
	res.send("About page. Nice.");
});

app.get("/books/:bookId", (req, res) => {
	res.send(req.params);
});

//Path parameter.
app.get("/users/:name", (req, res) => {
	res.send("Hello " + req.params.name);
});

//Query parameter. is a bit more specific than the path parameter. starts with a path. //////////Query strings help to narrow down the search
app.get("/queryparams", (req, res) => {
	res.send("My query params are: " + req.query.class + " and " + req.query.cohort);
});

//put request. A route used for updating
app.put("/about", (req, res) => {
	res.send("You have changed me");
});

//Delete
app.delete("/about", (req, res) => {
	res.send("You have deleted something");
});

// For invalid routes. This should always be the second last line of code in the application
app.get("*", (req, res) => {
	res.send("404! This is an invalid URL.");
});
//Bootstrapping Server

//This should always be the last line in the .js file as other lines of code below it will not be executed
app.listen(3000, () => console.log("listening on port 3000"));

/*structure of a route
app.METHOD(PATH, HANDLER);
//or
server.METHOD(PATH, HANDLER);

/*METHOD could be post, get, delete, put/edit/update. Used to manipulate data from the db. 
These methods form a CRUD ie Create (post), Read (get), Update (edit) and Delete.

PATH can be '/', '/About', '/Register'

HANDLER gives a request, a response and what can be returned
(req, res) => { 
res.send('About page. Nice.');*/
