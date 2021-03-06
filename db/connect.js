const mongoose = require("mongoose");

const connectDB = (url) => {
	return mongoose.connect(url, {
		useCreateIndex: true,
		useNewUrlParser: true,
		useFindAndModify: true,
		useUnifiedTopology: true,
	});
};

module.exports = connectDB;
