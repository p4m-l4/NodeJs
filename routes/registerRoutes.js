const express = require("express");
const router = express.Router();

router.get("/register", (req, res) => {
	res.render("registration");
});

router.post("/register", (request, response) => {
	console.log(req.body);
});

module.exports = router;
