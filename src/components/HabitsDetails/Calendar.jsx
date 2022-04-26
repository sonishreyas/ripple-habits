import { Calendar } from "react-calendar";
import { useState, useEffect } from "react";
import { useHabits } from "../../context";
import { findDateInArray } from "../../utils";
const CalendarContent = ({ _id }) => {
	const [value, onChange] = useState(new Date().toJSON().slice(0, 10));
	const { habitsState, habitsDispatch } = useHabits();
	useEffect(() => {
		if (value.length) {
			let dateArray = [];
			let currentDate = value[0];
			let stopDate = value[1];

			while (currentDate <= stopDate) {
				dateArray = [...dateArray, new Date(currentDate).toJSON().slice(0, 10)];
				currentDate !== stopDate &&
					currentDate.setDate(currentDate.getDate() + 1);
			}

			habitsDispatch({
				type: "UPDATE_COMPLETED_DATE",
				payload: { habits: { _id: _id, completedAt: dateArray } },
			});
		}
	}, [value]);

	return (
		<Calendar
			onChange={onChange}
			selectRange={true}
			tileClassName={({ date, view }) =>
				findDateInArray(habitsState.habits, date.toJSON().slice(0, 10), _id)
					? "active-date"
					: ""
			}
		/>
	);
};
export { CalendarContent };
