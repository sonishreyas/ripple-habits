import axios from "axios";
/**
 * Add video data to habits
 * @param {*} element
 * @param {Object} videoData video to be added in habits
 * @param {string} token encodedToken of user
 * @param {function} habitsDispatch Reducer function
 */
const addNewHabitsHandler = (element, habitData, habitsDispatch) => {
	element.preventDefault();
	(async () => {
		try {
			const response = await axios.post(
				`/api/habits`,
				{ habit: habitData },
				{
					headers: {
						Accept: "*/*",
						authorization: JSON.parse(localStorage.getItem("user"))?.token,
					},
				}
			);
			habitsDispatch({
				type: "ADD_NEW_HABIT",
				payload: {
					habits: response.data.habits.slice(-1),
				},
			});
			habitsDispatch({
				type: "NEW_habits_VALUE",
				payload: {
					newhabits: "",
				},
			});
		} catch (error) {
			console.log(error);
		}
	})();
};

/**
 * Remove data from habits
 * @param element
 * @param {string} videoId videoId to remove from habits
 * @param {string} token encodedToken of user
 * @param {function} habitsDispatch Reducer function
 */
const updateHabitsHandler = (element, habitsId, habitsData, habitsDispatch) => {
	element.preventDefault();
	(async () => {
		try {
			const response = await axios.put(
				`/api/habits/${habitsId}`,
				{ habit: habitsData },
				{
					headers: {
						Accept: "*/*",
						authorization: JSON.parse(localStorage.getItem("user"))?.token,
					},
				}
			);
			habitsDispatch({
				type: "UPDATE_HABITS",
				payload: {
					habits: response.data.habits,
				},
			});
		} catch (error) {
			console.log(error);
		}
	})();
};

/**
 * Remove data from habits
 * @param element
 * @param {string} videoId videoId to remove from habits
 * @param {string} token encodedToken of user
 * @param {function} habitsDispatch Reducer function
 */
const removeHabitsHandler = (element, habitsId, habitsDispatch) => {
	element.preventDefault();
	(async () => {
		try {
			const response = await axios.delete(`/api/habits/${habitsId}`, {
				headers: {
					Accept: "*/*",
					authorization: JSON.parse(localStorage.getItem("user"))?.token,
				},
			});
			habitsDispatch({
				type: "REMOVE_HABIT",
				payload: {
					habits: response.data.habits,
				},
			});
		} catch (error) {
			console.log(error);
		}
	})();
};

/**
 * Retrieve habits data
 * @param element
 * @param {string} token encodedToken of user
 * @param {function} habitsDispatch Reducer function
 */
const getHabitsDataHandler = (habitsDispatch) => {
	(async () => {
		try {
			const response = await axios.get(`/api/habits`, {
				headers: {
					Accept: "*/*",
					authorization: JSON.parse(localStorage.getItem("user"))?.token,
				},
			});
			habitsDispatch({
				type: "GET_HABITS",
				payload: {
					habits: response.data.habits,
				},
			});
		} catch (error) {
			console.log(error);
		}
	})();
};

export {
	addNewHabitsHandler,
	updateHabitsHandler,
	getHabitsDataHandler,
	removeHabitsHandler,
};
