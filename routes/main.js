const express = require("express");
const { login, dashboard } = require("../controllers/main");
const router = express.Router();
const authenticationMiddleware = require("../middleware/auth");

router.post("/login", login);
router.get("/dashboard", authenticationMiddleware, dashboard);

module.exports = router;
