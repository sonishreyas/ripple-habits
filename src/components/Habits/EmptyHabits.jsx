const EmptyHabits = () => {
	return (
		<div className="flex-column justify-content-center align-center flex-wrap empty-habit-container">
			<div className="basic-card flex-row align-center justify-content-space-between m-2 p-7 flex-gap-1 b-radius-2">
				<div className="flex-row align-center flex-gap-1">
					<span
						className="flex-row align-center flex-gap-1"
						style={{ color: "#279AF6" }}
					>
						<h1 className="text-bold b-radius-2">|</h1>
						<i className={`fa-solid fa-person-walking icons`}></i>
					</span>
					<div className="flex-grow-1 empty-title-container p-5"></div>
				</div>
			</div>
			<div className="basic-card flex-row align-center justify-content-space-between m-2 p-7 flex-gap-1 b-radius-2">
				<div className="flex-row align-center flex-gap-1">
					<span
						className="flex-row align-center flex-gap-1"
						style={{ color: "#D24B73" }}
					>
						<h1 className="text-bold b-radius-2">|</h1>
						<i className={`fa-solid fa-futbol`}></i>
					</span>
					<div className="flex-grow-1 empty-title-container p-5"></div>
				</div>
			</div>
			<div className="basic-card flex-row align-center justify-content-space-between m-2 p-7 flex-gap-1 b-radius-2">
				<div className="flex-row align-center flex-gap-1">
					<span
						className="flex-row align-center flex-gap-1"
						style={{ color: "#F19E39" }}
					>
						<h1 className="text-bold b-radius-2">|</h1>
						<i className={`fa-solid fa-book`}></i>
					</span>
					<div className="flex-grow-1 empty-title-container p-5"></div>
				</div>
			</div>
			<p className="p-5 text-center">
				Excellence is not an act, it's a result of your habits. Start by
				building your own!
			</p>
		</div>
	);
};

export { EmptyHabits };
