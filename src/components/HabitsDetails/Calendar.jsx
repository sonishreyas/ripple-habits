import { Calendar } from "react-calendar";
import { useState, useEffect } from "react";
import { useHabits } from "../../context";
import { findDateInArray } from "../../utils";
const CalendarContent = ({ _id }) => {
	const [value, onChange] = useState(new Date());
	const { habitsState, habitsDispatch } = useHabits();
	useEffect(() => {
		if (value) {
			habitsDispatch({
				type: "UPDATE_COMPLETED_DATE",
				payload: {
					habits: { _id: _id, completedAt: value.toJSON().slice(0, 10) },
				},
			});
		}
	}, [value]);

	return (
		<Calendar
			onClickDay={onChange}
			tileClassName={({ date, view }) =>
				findDateInArray(habitsState.habits, date.toJSON().slice(0, 10), _id)
					? "active-date"
					: ""
			}
		/>
	);
};
export { CalendarContent };
