import { useHabits } from "../../context";
import { getHabitData } from "../../utils";
const HabitHeader = ({ _id }) => {
	const { habitsState } = useHabits();
	const habitData = getHabitData(habitsState.habits, _id)[0];
	return (
		<div
			className="basic-card w-100 flex-row align-center justify-content-center m-5 p-10 flex-gap-1 b-radius-2 habit-basic-card"
			key={_id}
		>
			<div className="flex-row align-center justify-content-center text-center flex-gap-1">
				<span
					className="flex-row align-center flex-gap-1"
					style={{ color: habitData.color }}
				>
					<h1 className="text-bold b-radius-2">|</h1>
					<i className={`${habitData.icon} icons`}></i>
				</span>
				<h2
					className="text-bold text-center"
					style={{ color: habitData.color }}
				>
					{habitData.title}
				</h2>
			</div>
		</div>
	);
};

export { HabitHeader };
