require("dotenv").config();
const { BadRequestError } = require("../errors");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
	const { username, password } = req.body;

	if (!username || !password) {
		throw new BadRequestError("Please provide details");
	}

	const id = new Date().getTime();
	const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
		expiresIn: "30d",
	});
	res
		.status(200)
		.json({ msg: `user token for ${username} successfully created`, token });
};

const dashboard = async (req, res) => {
	res.status(200).json({
		msg: `Hello, ${req.user.username}`,
		secret: `Here is your authorized data, your luck number is ${req.user.id}`,
	});
};

module.exports = { login, dashboard };
