import { useHabits } from "../../context";
import { removeHabitsHandler } from "../../utils";
import { EmptyHabits } from "./EmptyHabits";

const HabitsCard = () => {
	const { habitsState, setShowHabitsModal, habitsDispatch } = useHabits();
	const handleEditHabit = (e, _id, title, color, icon) => {
		habitsDispatch({
			type: "NEW_HABIT",
			payload: {
				newHabit: {
					_id: _id,
					title: title,
					color: color,
					icon: icon,
				},
			},
		});
		setShowHabitsModal(true);
	};

	const handleDeleteHabit = (e, _id) => {
		removeHabitsHandler(e, _id, habitsDispatch);
	};
	return (
		<div className="flex-column justify-content-center align-center w-100">
			{habitsState.habits.length ? (
				habitsState.habits.map(({ _id, title, color, icon }) => (
					<div
						className="basic-card w-100 flex-row align-center justify-content-space-between m-5 p-10 flex-gap-1 b-radius-2 card-shadow"
						key={_id}
					>
						<div className="flex-row align-center flex-gap-1">
							<span
								className="flex-row align-center flex-gap-1"
								style={{ color: color }}
							>
								<h1 className="text-bold b-radius-2">|</h1>
								<i className={`${icon} icons`}></i>
							</span>
							<h4 className="text-bold">{title}</h4>
						</div>
						<div className="flex-row">
							<i
								className="fa-solid fa-pen-to-square p-5 cursor-pointer social icons"
								title="Edit Habit"
								onClick={(e) => handleEditHabit(e, _id, title, color, icon)}
							></i>
							<i
								className="fa-solid fa-box-archive p-5 cursor-pointer social icons"
								title="Archive Habit"
							></i>
							<i
								className="fa-solid fa-trash p-5 cursor-pointer social icons"
								title="Delete Habit"
								onClick={(e) => handleDeleteHabit(e, _id)}
							></i>
						</div>
					</div>
				))
			) : (
				<EmptyHabits />
			)}
		</div>
	);
};

export { HabitsCard };
