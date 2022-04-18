import { useArchive, useHabits } from "../../context";
import {
	addToArchiveHandler,
	removeHabitsHandler,
	removeFromArchiveHandler,
} from "../../utils";
import { EmptyHabits } from "./EmptyHabits";
// import { useState, useEffect } from "react";
const HabitsCard = ({ data, archive }) => {
	const { setShowHabitsModal, habitsDispatch } = useHabits();
	const { archiveDispatch } = useArchive();

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

	const handleArchiveData = (e, _id) => {
		addToArchiveHandler(e, _id, archiveDispatch);
	};

	const handleUnarchiveData = (e, _id) => {
		removeFromArchiveHandler(e, _id, archiveDispatch);
	};
	console.log(archive);
	return (
		<div className="flex-column justify-content-center align-center w-100">
			{data.length ? (
				data.map(({ _id, title, color, icon }) => (
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
							{archive ? (
								<i
									className="fa-solid fa-box-open p-5 cursor-pointer social icons"
									title="Unarchive Habit"
									onClick={(e) => handleUnarchiveData(e, _id)}
								></i>
							) : (
								<i
									className="fa-solid fa-box-archive p-5 cursor-pointer social icons"
									title="Archive Habit"
									onClick={(e) => handleArchiveData(e, _id)}
								></i>
							)}
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
