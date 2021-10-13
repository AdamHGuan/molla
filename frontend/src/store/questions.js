import { csrfFetch } from "./csrf";

// Types

const LOAD_QUESTIONS = "questions/LOAD_QUESTIONS";
const LOAD_QUESTION = "questions/LOAD_QUESTION";
const ADD_QUESTION = "question/ADD_QUESTION";
const EDIT_QUESTION = "question/EDIT_QUESTION";
const DELETE_QUESTION = "question/DELETE_QUESTION";

// Actions

const loadQuestions = (list) => ({
	type: LOAD_QUESTIONS,
	list,
});

const loadQuestion = (id) => ({
	type: LOAD_QUESTION,
	id,
});

const addQuestion = (question) => ({
	type: ADD_QUESTION,
	question,
});

const editQuestion = (question) => ({
	type: EDIT_QUESTION,
	question,
});

const deleteQuestion = (questionId) => ({
	type: DELETE_QUESTION,
	questionId,
});

// THUNK Actions

export const getQuestions = () => async (dispatch) => {
	const response = await csrfFetch(`/api/questions`);

	if (response.ok) {
		const list = await response.json();
		dispatch(loadQuestions(list.questions));
	}
};

export const getOneQuestion = (id) => async (dispatch) => {
	const response = await csrfFetch(`/api/questions/${id}`);

	if (response.ok) {
		const question = await response.json();
		dispatch(loadQuestion(question));
	}
};

export const createQuestion = (data) => async (dispatch) => {
	const response = await csrfFetch(`/api/questions`, {
		method: "post",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});

	if (response.ok) {
		const question = await response.json();
		dispatch(addQuestion(question));
		return question;
	}
};

export const updateQuestion = (data) => async (dispatch) => {
	const response = await csrfFetch(`/api/questions/${data.id}`, {
		method: "put",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});

	if (response.ok) {
		const question = await response.json();
		dispatch(editQuestion(question));
		return question;
	}
};

// export const deleteItem = (id) => async (dispatch) => {
// 	const response = await csrfFetch(`/api/items/${id}`, {
// 		method: "delete",
// 	});

// 	if (response.ok) {
// 		const question = await response.json();
// 		dispatch(remove(question.id));
// 	}
// };

// Reducer

const initialState = {};

const questionReducer = (state = initialState, action) => {
	let newState;
	let question;

	switch (action.type) {
		case LOAD_QUESTIONS:
			newState = Object.assign({}, state);
			action.list.forEach((question) => {
				newState[question.id] = question;
			});
			return newState;
		case ADD_QUESTION:
			newState = Object.assign({}, state);
			question = action.question;
			newState[question.id] = question;
			return newState;

		default:
			return state;
	}
};

export default questionReducer;
