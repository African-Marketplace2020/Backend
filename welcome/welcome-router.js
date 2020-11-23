const express = require("express")

const router = express.Router()

router.get("/", (req, res) => {
	res.json({
		message: "Welcome to the African Marketplace API ENDPOINTS: --/API/REGISTER -POST- create a new user (username(string), password(string), and role(string(owner or user)) --/API/LOGIN -POST- Log in with a registered username and password --/API/USERS -GET- Get a list of all users (must be logged in) --API/ITEMS -GET- Get a list of all food items (must be logged in) --API/ITEMS -POST- Create a new food item(name(string), description(string), price(double ex: 1.25), and location(string) must be logged in) --/API/ITEMS/:ID -PUT- Edit an item by ID (changes in the request body, must be logged in) --/API/ITEMS/:ID -DELETE- delete a food item by ID (must be logged in)",
	})
})

module.exports = router