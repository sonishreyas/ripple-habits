import { useHabits, useNotes } from "../../context";
import { getHabitData } from "../../utils";
import { useState } from "react";
import { v4 as uuid } from "uuid";
const Notes = ({ _id }) => {
	const { note, setNote } = useNotes();
	const { habitsState, habitsDispatch } = useHabits();
	const [focus, setFocus] = useState(false);
	const [showButtons, setShowButton] = useState(false);
	const handleFocus = () => {
		if (focus) {
			setFocus(false);
			!note?.length && setShowButton(false);
		} else {
			setFocus(true);
			setShowButton(true);
		}
	};
	const habitData = getHabitData(habitsState.habits, _id)[0];
	const handleInputChange = (e) => setNote(e.target.value);
	const handleAddNote = () => {
		habitsDispatch({
			type: "ADD_NOTE",
			payload: {
				habits: {
					_id: _id,
					notes: {
						_id: uuid(),
						note: note,
						createdDate: new Date().toDateString(),
					},
				},
			},
		});
		setFocus(false);
		setNote("");
		setShowButton(false);
	};
	const handleCancleBtn = () => {
		setFocus(false);
		setNote("");
		setShowButton(false);
	};

	const handleDeleteNote = (noteId) =>
		habitsDispatch({
			type: "DELETE_NOTE",
			payload: {
				habits: {
					_id: _id,
					notes: {
						_id: noteId,
					},
				},
			},
		});
	return (
		<div className="flex-column justify-content-center align-start flex-gap-1 w-100 my-5">
			<div className="basic-card flex-column justify-content-center align-start text-center p-8 b-radius-2 flex-gap-1 habit-streak-basic-card flex-grow-1">
				<h4 className="text-bold text-center w-100">Notes</h4>
				<ul className="w-100 number-font">
					{habitData?.notes.length ? (
						habitData?.notes.map(({ _id, createdDate, note }) => (
							<li className="no-list p-5" key={_id}>
								<div className="flex-row justify-content-start align-start flex-gap-1">
									<div className="flex-row justify-content-end">
										<p className="note-date p-5">{createdDate}</p>
									</div>
									<div className="flex-column flex-grow-1">
										<div className="note-card p-7 text-left flex-row justify-content-space-between align-center">
											<p className="py-1">{note}</p>
											<i
												className="fa-solid fa-trash p-5 cursor-pointer"
												title="Delete"
												onClick={() => handleDeleteNote(_id)}
											></i>
										</div>
									</div>
								</div>
							</li>
						))
					) : (
						<></>
					)}
				</ul>
				<ul className="w-100">
					{
						<li className="no-list">
							<div className="flex-row justify-content-center align-center w-100">
								<div className="card-content w-100">
									<div
										className={`input-container flex-column w-100 h-auto ${
											focus || note?.length ? "focused" : ""
										}`}
										key="new-note-input"
									>
										<input
											id="new-note"
											className="textbox-content p-5 w-100 "
											type="text"
											name="newNote"
											onChange={handleInputChange}
											value={note}
											onFocus={handleFocus}
											onBlur={handleFocus}
										/>
										<label
											htmlFor="newNote"
											className="textbox-label comment-label m-0 px-1"
										>
											Add a Note
										</label>
									</div>
									{showButtons && (
										<div className="flex-row justify-content-end flex-gap-1 my-5">
											<button
												className="cursor-pointer outline-btn p-4 b-radius-2 text-bold"
												type="button"
												onClick={handleCancleBtn}
											>
												Cancel
											</button>
											<button
												className="cursor-pointer primary-btn p-4 b-radius-2 text-bold"
												type="button"
												onClick={handleAddNote}
											>
												Add
											</button>
										</div>
									)}
								</div>
							</div>
						</li>
					}
				</ul>
			</div>
		</div>
	);
};
export { Notes };
