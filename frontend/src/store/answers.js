import { csrfFetch } from "./csrf";

export const LOAD_ANSWERS = "answers/LOAD_ANSWERS";
export const ADD_ANSWER = "answers/ADD_IANSWERS";

// export const REMOVE_ANSWERS = "answers/REMOVE_ANSWERS";
// export const UPDATE_ANSWERS = "answers/UPDATE_ANSWERS";

const loadAnswers = (answers, questionId) => ({
	type: LOAD_ANSWERS,
	answers,
	questionId,
});

const addAnswer = (answer) => ({
	type: ADD_ANSWER,
	answer,
});

// const update = (item) => ({
//   type: UPDATE_ITEM,
//   item
// });

// const remove = (itemId, pokemonId) => ({
//   type: REMOVE_ITEM,
//   itemId,
//   pokemonId
// });

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

// export const updateItem = (data) => async (dispatch) => {
//   const response = await fetch(`/api/items/${data.id}`, {
//     method: 'put',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
//   });

//   if (response.ok) {
//     const item = await response.json();
//     dispatch(update(item));
//     return item;
//   }
// };

// export const deleteItem = (itemId) => async (dispatch) => {
//   const response = await fetch(`/api/items/${itemId}`, {
//     method: 'delete'
//   });

//   if (response.ok) {
//     const item = await response.json();
//     dispatch(remove(item.id, item.pokemonId));
//   }
// };

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
		// case EDIT_QUESTION:
		// 	newState = Object.assign({}, state);
		// 	question = action.question;
		// 	newState[question.id] = question;
		// 	return newState;
		// case DELETE_QUESTION:
		// 	newState = Object.assign({}, state);
		// 	delete newState[action.questionId];
		// 	return newState;
		default:
			return state;
	}
};

export default answersReducer;
