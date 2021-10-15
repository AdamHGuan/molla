const express = require("express");
const asyncHandler = require("express-async-handler");
const { requireAuth } = require("../../utils/auth");
const { Answer } = require("../../db/models");

const router = express.Router();

router.put(
	"/:id(\\d+)",
	requireAuth,
	asyncHandler(async (req, res) => {
		const updateAnswer = await Answer.findByPk(req.params.id);
		const { answer } = req.body;

		if (updateAnswer && req.user.id === updateAnswer.ownerId) {
			updateAnswer.update({
				answer,
			});
			res.json(updateAnswer);
			res.redirect("/");
		} else if (req.user.id !== updateAnswer.ownerId) {
			next(new Error("You are not authorized to edit this answer."));
		} else {
			next(new Error("Cannot find question"));
		}
	})
);

router.delete(
	"/:id(\\d+)",
	requireAuth,
	asyncHandler(async (req, res, next) => {
		const answerId = req.params.id;
		const answer = await Answer.findByPk(req.params.id);
		const ownerId = req.user.id;

		if (answer && ownerId === answer.ownerId) {
			await answer.destroy();

			return res.json(answerId);
		} else if (!answer) {
			next(new Error("Cannot find answer"));
		} else if (ownerId !== answer.ownerId) {
			next(new Error("You are not authorized to delete this answer"));
		}
	})
);

module.exports = router;
