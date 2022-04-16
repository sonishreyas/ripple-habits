import { useHabits } from "../../context";

const HabitsCard = () => {
	const { habitsState } = useHabits();
	return (
		<div className="flex-column justify-content-center align-center w-100">
			{habitsState.habits.length &&
				habitsState.habits.map(({ _id, title, color, icon }) => (
					<div
						className="basic-card w-100 flex-row align-center m-5 p-10 flex-gap-1 b-radius-2 card-shadow"
						key={_id}
					>
						<span
							className="flex-row align-center flex-gap-1"
							style={{ color: color }}
						>
							<h2 className="text-bold b-radius-2">|</h2>
							<i className={`${icon} icons`}></i>
						</span>
						<h4 className="text-bold">{title}</h4>
					</div>
				))}
			<div></div>
		</div>
	);
};

export { HabitsCard };
