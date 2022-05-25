const customAPIError = require("../errors/custom-error");

const login = async (req, res) => {
	const { username, password } = req.body;
	console.log(req.body);

	// if (!username || !password) {
	// 	throw new customAPIError("please provide password and username", 400);
	// }
	res.status(200).json({ msg: "Hello Welcome" });
};

const dashboard = async (req, res) => {
	const luckyNum = Math.floor(Math.random() * 100);

	res
		.status(200)
		.json({ msg: `Hello Theophilus, Here is your luck Number ${luckyNum}` });
};

module.exports = { login, dashboard };
