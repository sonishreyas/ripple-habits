import { useHabits } from "../../context";
import { useState } from "react";

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
	console.log(colorsData, iconsData);
	const handleHabitModalDismiss = () => setShowHabitsModal(false);
	return (
		<div className="modal">
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
						{/* <div>
              {
                iconsData.length && iconsData.map(({_id,iconName}) => 

                )
              }
            </div> */}
						<h4 className="text-bold m-5 py-3">Choose a color</h4>
					</div>
					<section className="card-footer flex-row flex-grow-1 justify-content-center flex-gap-1 py-5 px-0">
						<button
							className="cursor-pointer primary-btn save-btn p-5 b-radius-2 my-0 text-bold flex-grow-1"
							type="button"
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
