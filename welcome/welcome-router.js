const express = require("express")

const router = express.Router()

router.get("/", (req, res) => {
	res.json({
		message: "Welcome to the African Marketplace API-ENDPOINTS: /API/REGISTER -POST- create a new user -/API/LOGIN -POST- log in with username and password--/API/USERS -GET- get a list of all users(must be logged in)--/API/ITEMS/:ID -PUT- :edit an item by ID-(changes in the request body) /API/ITEMS/:ID -DELETE- delete a food item by ID",
	})
})

module.exports = router