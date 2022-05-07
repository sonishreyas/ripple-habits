import { useHabits } from "../../context";
import { getHabitData, getStreaks } from "../../utils";
const Streaks = ({ _id }) => {
	const { habitsState } = useHabits();
	const habitData = getHabitData(habitsState.habits, _id)[0];
	const { streak } = getStreaks(habitData.completedAt);
	return (
		<div className="flex-column justify-content-center align-center flex-gap-1 w-100">
			<div className="basic-card flex-column justify-content-center align-center text-center p-8 b-radius-2 flex-gap-1 habit-streak-basic-card flex-grow-1">
				<h4 className="text-bold">Streaks</h4>
				{streak.length ? (
					streak.map(({ start, end, streak }, index) => (
						<div
							className="flex-row justify-content-space-between align-center flex-gap-1 w-100"
							key={`streak-${index}`}
						>
							<h4 className="number-font mx-5">{start}</h4>
							<h4 className="number-font mx-5 streak-container text-bold p-2">
								{streak}
							</h4>
							<h4 className="number-font mx-5">{end}</h4>
						</div>
					))
				) : (
					<h4 className="text-bold number-font">0 days</h4>
				)}
			</div>
		</div>
	);
};

export { Streaks };
