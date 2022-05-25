require("dotenv");
require("express-async-errors");
const express = require("express");
const connectDB = require("./db/connect");

const app = express();

const port = process.env.PORT || 3000;

const start = async () => {
	await connectDB(process.env.);
	app.listen(port, () => {
		console.log(`server is running on port ${port}`);
	});
};

start();
