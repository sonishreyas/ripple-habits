import { Category, HabitsListing } from ".";
const HabitsContent = () => {
	return (
		<main className="main flex-row flex-gap-1 habits-content-container">
			<div className="category-container nav-shadow p-5">
				<Category />
			</div>
			<div className="habits-container p-5">
				<HabitsListing />
			</div>
		</main>
	);
};

export { HabitsContent };
