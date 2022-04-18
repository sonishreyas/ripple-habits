import { useHabits } from "../../context";
import { useState } from "react";
import { addNewHabitsHandler, updateHabitsHandler } from "../../utils";

const NewHabitModal = () => {
	const {
		setShowHabitsModal,
		habitsState,
		habitsDispatch,
		colorsData,
		iconsData,
	} = useHabits();
	const [focus, setFocus] = useState(false);
	const handleValueChange = (e) =>
		habitsDispatch({
			type: "NEW_HABIT",
			payload: {
				newHabit: {
					title: e.target.value,
				},
			},
		});
	const handleHabitModalDismiss = () => {
		setShowHabitsModal(false);
		habitsDispatch({
			type: "RESET_FORM",
		});
	};
	const handleSaveHabit = (e) => {
		habitsState?.newHabit?._id?.length
			? updateHabitsHandler(
					e,
					habitsState.newHabit._id,
					habitsState.newHabit,
					habitsDispatch
			  )
			: addNewHabitsHandler(e, habitsState.newHabit, habitsDispatch);

		setShowHabitsModal(false);
		habitsDispatch({
			type: "RESET_FORM",
		});
	};
	return (
		<div className="modal flex-row justify-content-center align-center">
			<div className="modal-background"></div>
			<div className="modal-content p-5 m-5 b-radius-2 habit-form-container card-shadow">
				<h3 className="p-2 my-2 mx-0 text-cta-color text-bold">
					Create new Habit
				</h3>
				<form className="input-form flex-column flex-gap-1 flex-grow-1 flex-wrap">
					<div className="basic-card b-radius-2 my-5">
						{
							<section
								className={`input-container flex-column m-5 pr-10 ${
									focus || habitsState.newHabit.title.length ? "focused" : ""
								}`}
								key="new-habits-input"
							>
								<input
									id="new-habits"
									className="textbox-content p-5"
									type="text"
									name="title"
									onChange={handleValueChange}
									value={habitsState.newHabit.title}
									onFocus={() => setFocus(true)}
									onBlur={() => setFocus(false)}
								/>
								<label htmlFor="title" className="textbox-label m-0 px-1">
									Title
								</label>
							</section>
						}
						<h4 className="text-bold m-5 py-3">Choose an icon</h4>
						<div className="flex-row justify-content-start align-center flex-wrap flex-gap-2 m-5">
							{iconsData.length &&
								iconsData.map(({ _id, iconName, iconTitle }) => (
									<label
										className={`circle-container flex-row justify-content-center align-center ${
											habitsState.newHabit.icon === iconName
												? "icon-selected"
												: ""
										}`}
										key={_id}
										title={iconTitle}
									>
										<input
											className="filters"
											type="radio"
											name="icon"
											value={iconName}
											checked={
												habitsState.newHabit.icon === iconName ? true : false
											}
											onChange={() =>
												habitsDispatch({
													type: "NEW_HABIT",
													payload: {
														newHabit: {
															icon: iconName,
														},
													},
												})
											}
										/>
										<i className={`${iconName} icons`}></i>
									</label>
								))}
						</div>
						<h4 className="text-bold m-5 py-3">Choose a color</h4>
						<div className="flex-row justify-content-start align-center flex-wrap flex-gap-1 m-5">
							{colorsData.length &&
								colorsData.map(({ _id, colorCode }) => (
									<label
										className={`circle-container flex-row justify-content-center align-center ${
											habitsState.newHabit.color === colorCode
												? " color-selected"
												: ""
										}`}
										key={_id}
										style={{ background: colorCode }}
									>
										<input
											className="filters"
											type="radio"
											name="color"
											value={colorCode}
											checked={
												habitsState.newHabit.color === colorCode ? true : false
											}
											onChange={() =>
												habitsDispatch({
													type: "NEW_HABIT",
													payload: {
														newHabit: {
															color: colorCode,
														},
													},
												})
											}
										/>
									</label>
								))}
						</div>
						<h4 className="text-bold m-5 py-3">Choose a label</h4>
					</div>
					<div className="basic-card b-radius-2 mb-5">
						<h4 className="text-bold m-5 py-3">Frequency</h4>
						<div className="flex-row align-center py-3 m-5 flex-gap-1 flex-wrap">
							<label>
								<p>Start Date : </p>
							</label>

							<input
								type="date"
								name="habit-start"
								aria-label="start date"
								className="b-radius-2 p-4 date-input-container flex-grow-1"
								onChange={(e) =>
									habitsDispatch({
										type: "NEW_HABIT",
										payload: {
											newHabit: {
												startDate: e.target.value,
											},
										},
									})
								}
							/>
							<label>
								<p>Start Time : </p>
							</label>
							<input
								type="time"
								name="habit-time"
								aria-label="start yime"
								className="b-radius-2 p-4 date-input-container flex-grow-1"
								onChange={(e) =>
									habitsDispatch({
										type: "NEW_HABIT",
										payload: {
											newHabit: {
												startTime: e.target.value,
											},
										},
									})
								}
							/>
						</div>
					</div>
					<section className="card-footer flex-row flex-grow-1 justify-content-center flex-gap-1 py-5 px-0">
						<button
							className="cursor-pointer primary-btn save-btn p-5 b-radius-2 my-0 text-bold flex-grow-1"
							type="button"
							onClick={handleSaveHabit}
						>
							Save
						</button>
						<button
							className="cursor-pointer outline-btn cancel-btn p-5 b-radius-2 my-0 text-bold flex-grow-1"
							type="button"
							onClick={handleHabitModalDismiss}
						>
							Cancel
						</button>
					</section>
				</form>
			</div>
		</div>
	);
};
export { NewHabitModal };
