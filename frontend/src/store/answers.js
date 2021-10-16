import { csrfFetch } from "./csrf";

const LOAD_ANSWERS = "questions//:id(\\d+)/LOAD_ANSWERS";
const ADD_ANSWER = "questions//:id(\\d+)/ADD_ANSWER";
const EDIT_ANSWER = "answer/EDIT_ANSWER";
const DELETE_ANSWER = "answer/DELETE_ANSWER";

export const load_Answers = (answers, questionId) => {
	return {
		type: LOAD_ANSWERS,
		answers,
		questionId,
	};
};

export const addAnswer = (newAnswer) => {
	return {
		type: ADD_ANSWER,
		newAnswer,
	};
};

export const editAnswer = (answer) => {
	return {
		type: EDIT_ANSWER,
		answer,
	};
};

export const removeAnswer = (id) => {
	return {
		type: DELETE_ANSWER,
		id,
	};
};

export const getAnswers = (id) => async (dispatch) => {
	const response = await csrfFetch(`/api/questions/${id}/answers`);

	if (response.ok) {
		const answers = await response.json();

		dispatch(load_Answers(answers, id));
	}
};

export const createAnswer = (data, questionId) => async (dispatch) => {
	const response = await csrfFetch(`/api/questions/${questionId}/answers`, {
		method: "post",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});

	if (response.ok) {
		const answer = await response.json();
		dispatch(addAnswer(answer));
		return answer;
	}
};

export const updateAnswer = (data) => async (dispatch) => {
	const response = await csrfFetch(`/api/answers/${data.id}`, {
		method: "put",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});

	if (response.ok) {
		const answer = await response.json();
		dispatch(editAnswer(answer));
		return answer;
	}
};

export const deleteAnswer = (id) => async (dispatch) => {
	const response = await csrfFetch(`/api/answers/${id}`, {
		method: "delete",
	});

	if (response.ok) {
		const data = await response.json();
		dispatch(removeAnswer(data));
	}
};

const ininitalState = {};

const answerReducer = (state = ininitalState, action) => {
	switch (action.type) {
		case LOAD_ANSWERS: {
			const newAnswers = {};
			action.answers.forEach((answer) => {
				newAnswers[answer.id] = answer;
			});
			return {
				...state,
				...newAnswers,
			};
		}
		case ADD_ANSWER: {
			return {
				...state,
				[action.answer.id]: action.answer,
			};
		}

		case EDIT_ANSWER: {
			return {
				...state,
				[action.answer.id]: action.answer,
			};
		}

		case DELETE_ANSWER: {
			const newState = { ...state };
			delete newState[action.answerId];
			return newState;
		}

		default:
			return state;
	}
};

export default answerReducer;
