var connection = require("../config/connection");

var express = require("express")

var router = express.Router()

// returns all burgers but sends it through to handlebars to be displayed on a page
router.get("/", function (req, res) {
	connection.query('SELECT * FROM burgers', function (error, result) {
		if (error) throw error
		// console.log(result);
		res.render("index", {data:result})
	})
})

// this will return all burgers in json form
router.get("/all-burgers", function (req, res) {
	connection.query('SELECT * FROM burgers', function (error, result) {
		if (error) throw error
		// console.log(result);
		res.json(result)
	})
})

module.exports = router