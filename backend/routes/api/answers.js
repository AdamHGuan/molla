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
		} else if (!updateAnswer) {
			next(new Error("Answer does not exist"));
		} else if (ownerId !== answer.ownerId) {
			next(new Error("Unauthorized to delete this answer"));
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
			next(new Error("Answer does not exist"));
		} else if (ownerId !== answer.ownerId) {
			next(new Error("Unauthorized to delete this answer"));
		}
	})
);

module.exports = router;
