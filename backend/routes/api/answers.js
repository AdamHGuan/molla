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

// const answerValidators = [
// 	check("answer")
// 		.exists({ checkFalsy: true })
// 		.withMessage("Please provide an answer")
// 		.isLength({ max: 255 })
// 		.withMessage("Answer must not be more than 255 characters long"),
// ];

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

router.delete(
	"/:id(\\d+)",
	requireAuth,
	asyncHandler(async function (req, res, next) {
		const answerId = req.params.id;
		const answerToDelete = await Answer.findByPk(answerId);

		if (answerToDelete) {
			await answerToDelete.destroy();
			return res.json(answerId);
		} else {
			answerNotFoundError(answerId, next);
		}
	})
);

module.exports = router;
