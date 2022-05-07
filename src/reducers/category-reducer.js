import {
	updatecategoryDate,
	addNoteTocategory,
	deleteNoteFromcategory,
} from "../utils";

/**
 * Reducer function to handle category state
 * @param {Object} categoryState State values of category
 * @param {*} categoryAction The changed state
 * @returns Updated state into categoryState
 */
const categoryReducer = (categoryState, { type, payload }) => {
	switch (type) {
		case "ADD_NEW_CATEGORY":
			return {
				...categoryState,
				newCategory: [...categoryState.newCategory, ...payload.newCategory],
			};
		case "REMOVE_HABIT":
			return {
				...categoryState,
				category: [...payload.category],
			};
		case "GET_category":
			return {
				...categoryState,
				category: [...payload.category],
			};
		case "NEW_HABIT":
			return {
				...categoryState,
				newHabit: { ...categoryState.newHabit, ...payload.newHabit },
			};
		case "UPDATE_category":
			return {
				...categoryState,
				category: [...payload.category],
			};
		case "UPDATE_COMPLETED_DATE":
			return {
				...categoryState,
				category: updatecategoryDate(categoryState.category, payload.category),
			};
		case "ADD_NOTE":
			return {
				...categoryState,
				category: addNoteTocategory(categoryState.category, payload.category),
			};
		case "DELETE_NOTE":
			return {
				...categoryState,
				category: deleteNoteFromcategory(
					categoryState.category,
					payload.category
				),
			};
		case "RESET_FORM":
			return {
				...categoryState,
				newHabit: {
					title: "",
					color: "",
					icon: "",
					startDate: "",
					startTime: "",
					endDate: "",
					endTime: "",
				},
			};

		case "RESET":
			return {
				...categoryState,
				category: [],
				newHabit: {},
			};
		default:
			return categoryState;
	}
};

export { categoryReducer };
