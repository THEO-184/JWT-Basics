console.clear();
require("dotenv");
require("express-async-errors");
const express = require("express");
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const app = express();

// middlewares
app.use(notFoundMiddleware, errorHandlerMiddleware);
app.use(express.json());

const port = process.env.PORT || 3000;

const start = async () => {
	try {
		app.listen(port, () => {
			console.log(`server is running on port ${port}`);
		});
	} catch (err) {
		console.log(err);
	}
};

start();
