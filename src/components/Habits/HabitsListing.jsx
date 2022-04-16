import { useHabits } from "../../context";

const HabitsListing = () => {
	const { setShowHabitsModal } = useHabits();
	const handleShowHabitModal = () => setShowHabitsModal(true);

	return (
		<div className="flex-row justify-content-space-between align-center">
			<h2 className="text-bold">Habits</h2>
			<button
				className="cursor-pointer primary-btn p-2 b-radius-3 icon-text-btn flex-row justify-content-center align-center flex-gap-1"
				onClick={handleShowHabitModal}
			>
				<span>
					<i className="fa-solid fa-circle-plus"></i>
				</span>
				<p className="btn-text">Add a Habit</p>
			</button>
		</div>
	);
};

export { HabitsListing };
