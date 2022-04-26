import { useHabits } from "../../context";
import { getHabitData, getStreaks } from "../../utils";

const Stats = ({ _id }) => {
	const { habitsState } = useHabits();
	const habitData = getHabitData(habitsState.habits, _id)[0];
	const { streak, maxStreak } = getStreaks(habitData.completedAt);
	return (
		<div className="flex-column justify-content-center align-center flex-gap-1 w-100">
			<div className="basic-card flex-column justify-content-center align-center text-center p-5 b-radius-2 flex-gap-1">
				<h4 className="text-bold text-cta-color">Current Streak</h4>
				<h2 className="text-bold number-font">
					{streak.length ? streak[streak.length - 1].streak : "0"}
				</h2>
			</div>
			<div className="flex-row justify-content-center align-center flex-gap-1">
				<div className="basic-card flex-column justify-content-center align-center text-center p-5 b-radius-2 flex-gap-1">
					<h4 className="text-bold">Numer of Times Completed</h4>
					<h2 className="text-bold number-font">
						{habitData?.completedAt?.length}
					</h2>
				</div>
				<div className="basic-card flex-column justify-content-center align-center text-center p-5 b-radius-2 flex-gap-1">
					<h4 className="text-bold">Longest Streak</h4>
					<h2 className="text-bold number-font">{maxStreak}</h2>
				</div>
			</div>
		</div>
	);
};
export { Stats };
