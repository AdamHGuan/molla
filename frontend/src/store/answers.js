import { csrfFetch } from "./csrf";

export const LOAD_ANSWERS = "answers/LOAD_ANSWERS";
export const ADD_ANSWER = "answers/ADD_IANSWERS";
export const UPDATE_ANSWER = "answers/UPDATE_ANSWERS";

export const REMOVE_ANSWER = "answers/REMOVE_ANSWERS";

const loadAnswers = (answers, questionId) => ({
	type: LOAD_ANSWERS,
	answers,
	questionId,
});

const addAnswer = (answer) => ({
	type: ADD_ANSWER,
	answer,
});

const editAnswer = (answer) => ({
	type: UPDATE_ANSWER,
	answer,
});

const removeAnswer = (itemId, pokemonId) => ({
	type: REMOVE_ANSWER,
	itemId,
	pokemonId,
});

export const getAnswers = (questionId) => async (dispatch) => {
	const response = await csrfFetch(`/api/questions/${questionId}/answers`);

	if (response.ok) {
		const answers = await response.json();
		dispatch(loadAnswers(answers, questionId));
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

export const deleteAnswer = (answerId) => async (dispatch) => {
	const response = await csrfFetch(`/api/answers/${answerId}`, {
		method: "delete",
	});

	if (response.ok) {
		const answer = await response.json();
		dispatch(removeAnswer(answer.id, answer.pokemonId));
	}
};

const initialState = {};

let newState;
let answer;

const answersReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_ANSWERS:
			newState = {};
			action.answers.forEach((answer) => {
				newState[answer.id] = answer;
			});
			return newState;
		case ADD_ANSWER:
			newState = Object.assign({}, state);
			answer = action.answer;
			newState[answer.id] = answer;
			return newState;
		case UPDATE_ANSWER:
			newState = Object.assign({}, state);
			answer = action.answer;
			newState[answer.id] = answer;
			return newState;
		case REMOVE_ANSWER:
			newState = Object.assign({}, state);
			delete newState[action.answerId];
			return newState;
		default:
			return state;
	}
};

export default answersReducer;
