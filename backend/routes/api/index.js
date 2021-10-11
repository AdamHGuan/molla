const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const questionRouter = require("./questions");

router.use("/session", sessionRouter);

router.use("/users", usersRouter);

router.use("/questions", questionRouter);

module.exports = router;
