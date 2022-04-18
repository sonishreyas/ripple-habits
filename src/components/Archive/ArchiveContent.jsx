import { HabitsListing } from "../Habits";
import { useEffect, useState } from "react";
import { presentObjInArray } from "../../utils";
import { useHabits, useArchive } from "../../context";
const ArchiveContent = () => {
	const { habitsState } = useHabits();
	const { archiveState } = useArchive();

	const [archivedHabits, setArchivedHabits] = useState([]);
	useEffect(() => {
		setArchivedHabits(
			archiveState?.itemsInArchive?.length
				? habitsState?.habits?.filter((item) =>
						presentObjInArray(archiveState?.itemsInArchive, item._id)
				  )
				: []
		);
	}, [habitsState, archiveState]);
	console.log(archiveState, archivedHabits);
	return (
		<div className="habits-container p-5">
			<HabitsListing
				title="Archived Habits"
				data={archivedHabits}
				archive={true}
			/>
		</div>
	);
};

export { ArchiveContent };
