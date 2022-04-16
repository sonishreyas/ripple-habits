import {
	createContext,
	useContext,
	useState,
	useReducer,
	useEffect,
} from "react";
import { useGetColorsData, useGetIconsData } from "../custom-hooks";
import { habitsReducer } from "../reducers";
import { getHabitsDataHandler } from "../utils";
const defaultHabitsState = {
	habits: [],
	newHabit: {
		title: "",
		color: "",
		icon: "",
		startDate: "",
		startTime: "",
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
	useEffect(() => getHabitsDataHandler(habitsDispatch), []);
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
