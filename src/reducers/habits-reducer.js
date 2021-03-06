import {
	updateHabitsDate,
	addNoteToHabits,
	deleteNoteFromHabits,
} from "../utils";

/**
 * Reducer function to handle habits state
 * @param {Object} habitsState State values of habits
 * @param {*} habitsAction The changed state
 * @returns Updated state into habitsState
 */
const habitsReducer = (habitsState, { type, payload }) => {
	switch (type) {
		case "ADD_NEW_HABIT":
			return {
				...habitsState,
				habits: [...habitsState.habits, ...payload.habits],
			};
		case "REMOVE_HABIT":
			return {
				...habitsState,
				habits: [...payload.habits],
			};
		case "GET_HABITS":
			return {
				...habitsState,
				habits: [...payload.habits],
			};
		case "NEW_HABIT":
			return {
				...habitsState,
				newHabit: { ...habitsState.newHabit, ...payload.newHabit },
			};
		case "UPDATE_HABITS":
			return {
				...habitsState,
				habits: [...payload.habits],
			};
		case "UPDATE_COMPLETED_DATE":
			return {
				...habitsState,
				habits: updateHabitsDate(habitsState.habits, payload.habits),
			};
		case "ADD_NOTE":
			return {
				...habitsState,
				habits: addNoteToHabits(habitsState.habits, payload.habits),
			};
		case "DELETE_NOTE":
			return {
				...habitsState,
				habits: deleteNoteFromHabits(habitsState.habits, payload.habits),
			};
		case "RESET_FORM":
			return {
				...habitsState,
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
				...habitsState,
				habits: [],
				newHabit: {},
			};
		default:
			return habitsState;
	}
};

export { habitsReducer };
