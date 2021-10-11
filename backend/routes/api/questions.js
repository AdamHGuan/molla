const express = require("express");
const asyncHandler = require("express-async-handler");

const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const { requireAuth } = require("../../utils/auth");
const { Question } = require("../../db/models");

const router = express.Router();

// Get questions
router.get(
	"/",
	asyncHandler(async (req, res, next) => {
		const questions = await Question.findAll({ include: User });

		return res.json({
			questions,
		});
	})
);

// Post question

router.post(
	"/",
	asyncHandler(async (req, res, next) => {
		const { title, description } = req.body;
		const question = await Question.create({
			ownerId: req.user.id,
			title,
			description,
		});
		res.json(question);
	})
);

module.exports = router;
