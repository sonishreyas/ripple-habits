import { useHabits } from "../../context";
import { getHabitData, getStreaks } from "../../utils";
const Streaks = ({ _id }) => {
	const { habitsState } = useHabits();
	const habitData = getHabitData(habitsState.habits, _id)[0];
	const { streak } = getStreaks(habitData.completedAt);
	return (
		<div className="flex-column">
			<h5>Streaks</h5>
			{streak.length &&
				streak.map(({ start, end, streak }) => (
					<div className="flex-row justify-content-center align-center flex-gap-1">
						<p>{start}</p>
						<p>{streak}</p>
						<p>{end}</p>
					</div>
				))}
		</div>
	);
};

export { Streaks };
