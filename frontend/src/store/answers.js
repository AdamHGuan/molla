import { csrfFetch } from "./csrf";

export const LOAD_ANSWERS = "answers/LOAD_ANSWERS";
// export const REMOVE_ANSWERS = "answers/REMOVE_ANSWERS";
// export const UPDATE_ANSWERS = "answers/UPDATE_ANSWERS";
// export const ADD_ANSWERS = "answers/ADD_IANSWERS";

const loadAnswers = (answers, questionId) => ({
	type: LOAD_ANSWERS,
	answers,
	questionId,
});

// const update = (item) => ({
//   type: UPDATE_ITEM,
//   item
// });

// const add = (item) => ({
//   type: ADD_ITEM,
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

// export const createItem = (data, pokemonId) => async (dispatch) => {
//   const response = await fetch(`/api/pokemon/${pokemonId}/items`, {
//     method: 'post',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
//   });

//   if (response.ok) {
//     const item = await response.json();
//     dispatch(add(item));
//     return item;
//   }
// };

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

const answersReducer = (state = initialState, action) => {
	// let newState;
	// let answer;

	switch (action.type) {
		case LOAD_ANSWERS: {
			const newAnswers = Object.assign({}, state);
			action.answers.forEach((answer) => {
				newAnswers[answer.id] = answer;
			});
			return newAnswers;
		}
		// 	case REMOVE_ITEM: {
		// 		const newState = { ...state };
		// 		delete newState[action.itemId];
		// 		return newState;
		// 	}
		// 	case ADD_ITEM:
		// 	case UPDATE_ITEM: {
		// 		return {
		// 			...state,
		// 			[action.item.id]: action.item,
		// 		};
		// 	}
		default:
			return state;
	}
};

export default answersReducer;
