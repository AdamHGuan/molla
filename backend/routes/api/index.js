const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const questionRouter = require("./questions");
const answerRouter = require("./answers");

router.use("/session", sessionRouter);

router.use("/users", usersRouter);

router.use("/questions", questionRouter);

router.use("/answers", answerRouter);

module.exports = router;
