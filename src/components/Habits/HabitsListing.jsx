import { useHabits } from "../../context";
import { HabitsCard } from ".";
const HabitsListing = ({ title, data, archive }) => {
	const { setShowHabitsModal } = useHabits();
	const handleShowHabitModal = () => setShowHabitsModal(true);

	return (
		<>
			<div className="flex-row justify-content-space-between align-center m-5">
				<h2 className="text-bold">{title}</h2>
				{!archive && (
					<button
						className="cursor-pointer primary-btn p-4 b-radius-2 icon-text-btn flex-row justify-content-center align-center flex-gap-1"
						onClick={handleShowHabitModal}
					>
						<span>
							<i className="fa-solid fa-circle-plus"></i>
						</span>
						<p className="btn-text">Add a Habit</p>
					</button>
				)}
			</div>
			<HabitsCard data={data} archive={archive} />
		</>
	);
};

export { HabitsListing };
