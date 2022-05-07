import { useParams } from "react-router-dom";
import { CalendarContent, Stats, Streaks, Notes, HabitHeader } from ".";

const HabitsDetailsContent = () => {
	const { habitId } = useParams();
	return (
		<main className="main flex-row justify-content-center h-max-content">
			<section className=" flex-column habits-content-container align-center habits-detail-container">
				<HabitHeader _id={habitId} />
				<Stats _id={habitId} />
				<CalendarContent _id={habitId} />
				<Streaks _id={habitId} />
				<Notes _id={habitId} />
			</section>
		</main>
	);
};
export { HabitsDetailsContent };
