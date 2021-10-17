const express = require("express");
const { Answer } = require("../../db/models");

const asyncHandler = require("express-async-handler");

const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const { requireAuth } = require("../../utils/auth");

const router = express.Router();

function answerNotFoundError(answerId, next) {
	const err = new Error(`An answer with ID:${answerId} could not be found.`);
	err.title = "Answer not found";
	err.status = 404;
	next(err);
}

const questionValidators = [
	check("title")
		.exists({ checkFalsy: true })
		.withMessage("Please provide a title")
		.isLength({ max: 255 })
		.withMessage("title must not be more than 255 characters long"),
];

// Create answer

router.put(
	"/:id(\\d+)",
	requireAuth,
	asyncHandler(async function (req, res, next) {
		const answerId = req.params.id;
		const { answer } = req.body;
		const updateAnswer = await Answer.findByPk(answerId);

		if (updateAnswer) {
			await updateAnswer.update({ answer });
			return res.json(updateAnswer);
		} else {
			answerNotFoundError(answerId, next);
		}
	})
);

// Delete answer

// router.delete(
// 	"/:id(\\d+)",
// 	requireAuth,
// 	asyncHandler(async function (req, res, next) {
// 		const questionId = req.params.id;
// 		const question = await Question.findByPk(questionId);

// 		if (question) {
// 			await question.destroy();
// 			return res.json(questionId);
// 		}
// 		// 		? (await question.destroy()) && res.status(204) && res.json(questionId)
// 		// 		: questionNotFoundError(questionId, next);
// 	})
// );

module.exports = router;
