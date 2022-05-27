require("dotenv");
require("express-async-errors");
const express = require("express");
const router = require("./routes/main");

const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const app = express();
// middlewares
app.use(express.static("./public"));
app.use(express.json());

// routes
//
app.use("/api/v1", router);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

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
