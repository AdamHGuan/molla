const express = require("express");
const { Question, Answer } = require("../../db/models");

const asyncHandler = require("express-async-handler");

const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const { requireAuth } = require("../../utils/auth");

const router = express.Router();

function questionNotFoundError(questionId, next) {
	const err = new Error(`A question with ID:${questionId} could not be found.`);
	err.title = "Question not found";
	err.status = 404;
	next(err);
}

// Get questions
router.get(
	"/",
	asyncHandler(async (req, res, next) => {
		const questions = await Question.findAll();

		return res.json({
			questions,
		});
	})
);

// Get single question
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

const answerValidators = [
	check("answer")
		.exists({ checkFalsy: true })
		.withMessage("Please provide an answer"),
];

// Post question

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

// Put question

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

// Delete question

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

// Answer

router.get(
	"/:id(\\d+)/answers",
	asyncHandler(async (req, res, next) => {
		const answers = await Answer.findAll({
			where: { questionId: req.params.id },
		});

		return res.json(answers);
	})
);

router.post(
	"/:id(\\d+)/answers",
	requireAuth,
	answerValidators,
	handleValidationErrors,
	asyncHandler(async (req, res, next) => {
		const { answer } = req.body;
		const newAnswer = await Answer.create({
			ownerId: req.user.id,
			questionId: req.params.id,
			answer,
		});
		res.json(newAnswer);
	})
);

module.exports = router;
