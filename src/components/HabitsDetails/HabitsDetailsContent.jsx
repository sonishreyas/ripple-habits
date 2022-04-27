import { useParams } from "react-router-dom";
import { CalendarContent, Stats, Streaks } from ".";

const HabitsDetailsContent = () => {
	const { habitId } = useParams();
	return (
		<main className="main flex-column flex-gap-1 habits-content-container justify-content-center align-center m-5">
			<Stats _id={habitId} />
			<CalendarContent _id={habitId} />
			<Streaks _id={habitId} />
		</main>
	);
};
export { HabitsDetailsContent };
