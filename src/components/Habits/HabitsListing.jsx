import { useHabits } from "../../context";
import { HabitsCard } from ".";
const HabitsListing = () => {
	const { setShowHabitsModal } = useHabits();
	const handleShowHabitModal = () => setShowHabitsModal(true);

	return (
		<>
			<div className="flex-row justify-content-space-between align-center m-5">
				<h2 className="text-bold">Habits</h2>
				<button
					className="cursor-pointer primary-btn p-4 b-radius-2 icon-text-btn flex-row justify-content-center align-center flex-gap-1"
					onClick={handleShowHabitModal}
				>
					<span>
						<i className="fa-solid fa-circle-plus"></i>
					</span>
					<p className="btn-text">Add a Habit</p>
				</button>
			</div>
			<HabitsCard />
		</>
	);
};

export { HabitsListing };
