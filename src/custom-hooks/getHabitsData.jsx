import { useState, useEffect } from "react";
import axios from "axios";

const useHabitsDataHook = () => {
	const [habitsData, setHabitsData] = useState([]);
	useEffect(() => {
		(async () => {
			try {
				const response = await axios.get(`/api/habits`);
				setHabitsData(response.data.habits);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);
	return habitsData;
};

export { useHabitsDataHook };
