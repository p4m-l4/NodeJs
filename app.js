//Dependencies
const express = require("express"); //importing express. Express should always be the first bit of code
path = require("path");

//Importing route files
const registrationRoutes = require("./routes/registerRoutes");

//Instantiations.
const app = express();

//Configurations
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
//app.set("views", "./views");

//Middleware

app.use(express.static(path.join(__dirname, "public")));
app.use("/public/images", express.static(__dirname + "/public/images"));

// This function call tells that more processing is
// required for the current request and is in the next middleware
//function/route handler.

app.get("/about", (req, res) => {
	res.send("About Page");
});

// To parse URL encoded data
app.use(express.urlencoded({ extended: false }));

//Routes

app.use("/user", registrationRoutes);

// For invalid routes. This should always be the second last line of code in the application
app.get("*", (req, res) => {
	res.send("404! This is an invalid URL.");
});
//Bootstrapping Server

//This should always be the last line in the .js file as other lines of code below it will not be executed
app.listen(3000, () => console.log("listening on port 3000"));
