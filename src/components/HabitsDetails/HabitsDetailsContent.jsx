import { useParams } from "react-router-dom";
import { CalendarContent } from ".";

const HabitsDetailsContent = () => {
	const { habitId } = useParams();
	return (
		<main className="main flex-row flex-gap-1 habits-content-container justify-content-center align-center">
			<CalendarContent _id={habitId} />
		</main>
	);
};
export { HabitsDetailsContent };
