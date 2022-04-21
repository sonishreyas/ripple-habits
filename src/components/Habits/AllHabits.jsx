import { HabitsListing } from ".";
import { useEffect, useState } from "react";
import { presentObjInArray } from "../../utils";
import { useHabits, useArchive } from "../../context";
const AllHabits = () => {
	const { habitsState } = useHabits();
	const { archiveState } = useArchive();

	const [unarchivedHabits, setUnarchivedHabits] = useState([]);
	useEffect(() => {
		setUnarchivedHabits(
			archiveState?.itemsInArchive?.length
				? habitsState?.habits?.filter(
						(item) => !presentObjInArray(archiveState?.itemsInArchive, item._id)
				  )
				: habitsState.habits
		);
	}, [habitsState, archiveState]);
	return (
		<div className="habits-container p-5">
			<HabitsListing
				title="All Habits"
				data={unarchivedHabits}
				archive={false}
			/>
		</div>
	);
};

export { AllHabits };
