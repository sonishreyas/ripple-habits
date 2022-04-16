import { createContext, useContext, useState, useReducer } from "react";
import { useGetColorsData, useGetIconsData } from "../custom-hooks";
import { habitsReducer } from "../reducers";
const defaultHabitsState = {
	habits: [],
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
const HabitsContext = createContext({});
const HabitsProvider = ({ children }) => {
	const colorsData = useGetColorsData();
	const iconsData = useGetIconsData();
	const [habitsState, habitsDispatch] = useReducer(
		habitsReducer,
		defaultHabitsState
	);
	const [showHabitsModal, setShowHabitsModal] = useState(false);
	// useEffect(() => getHabitsDataHandler(HabitsDispatch), []);
	return (
		<HabitsContext.Provider
			value={{
				habitsState,
				habitsDispatch,
				showHabitsModal,
				setShowHabitsModal,
				colorsData,
				iconsData,
			}}
		>
			{children}
		</HabitsContext.Provider>
	);
};

const useHabits = () => useContext(HabitsContext);
export { useHabits, HabitsProvider };
