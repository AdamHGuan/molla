const express = require("express");
const { Answer } = require("../../db/models");

const asyncHandler = require("express-async-handler");

const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const { requireAuth } = require("../../utils/auth");

const router = express.Router();

function answerNotFoundError(questionId, next) {
	const err = new Error(`An answer with ID:${questionId} could not be found.`);
	err.title = "Answer not found";
	err.status = 404;
	next(err);
}

// Get answers
router.get(
	"/",
	asyncHandler(async (req, res, next) => {
		const questions = await Question.findAll();

		return res.json({
			questions,
		});
	})
);

// Get single answer
router.get(
	"/:id(\\d+)",
	asyncHandler(async (req, res, next) => {
		const questionId = req.params.id;
		const question = await Question.findByPk(questionId);
		question ? res.json(question) : questionNotFoundError(questionId, next);
	})
);

const questionValidators = [
	check("title")
		.exists({ checkFalsy: true })
		.withMessage("Please provide a title")
		.isLength({ max: 255 })
		.withMessage("title must not be more than 255 characters long"),
];

// Post answer

router.post(
	"/",
	requireAuth,
	questionValidators,
	handleValidationErrors,
	asyncHandler(async (req, res, next) => {
		const { ownerId, title } = req.body;
		const question = await Question.create({
			ownerId,
			title,
		});
		return res.json(question);
	})
);

// Put answer

router.put(
	"/:id(\\d+)",
	requireAuth,
	questionValidators,
	handleValidationErrors,
	asyncHandler(async function (req, res, next) {
		const questionId = req.params.id;
		const { title } = req.body;
		const question = await Question.findByPk(questionId);

		if (question) {
			await question.update({ title });
			return res.json(question);
		} else {
			questionNotFoundError(questionId, next);
		}
	})
);

// Delete answer

router.delete(
	"/:id(\\d+)",
	requireAuth,
	asyncHandler(async function (req, res, next) {
		const questionId = req.params.id;
		const question = await Question.findByPk(questionId);

		if (question) {
			await question.destroy();
			return res.json(questionId);
		}
		// 		? (await question.destroy()) && res.status(204) && res.json(questionId)
		// 		: questionNotFoundError(questionId, next);
	})
);

module.exports = router;
