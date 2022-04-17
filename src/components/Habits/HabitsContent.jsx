import { Category, HabitsListing } from ".";
import { useCategory } from "../../context";
import { useEffect } from "react";
const HabitsContent = () => {
	const { showCategoryContainer, setShowCategoryContainer } = useCategory();
	const handleShowCategoryContainer = () => setShowCategoryContainer(true);
	useEffect(() => setShowCategoryContainer(false), []);
	return (
		<main className="main flex-row flex-gap-1 habits-content-container">
			{showCategoryContainer && (
				<div className="category-container nav-shadow p-5">
					<Category />
				</div>
			)}
			<div className="habits-container p-5">
				<HabitsListing />
			</div>
			{!showCategoryContainer && (
				<section
					className="area-btn-container flex-row align-center justify-content-center text-center p-5 w-100 h-auto "
					onClick={handleShowCategoryContainer}
				>
					<i className="fa-solid fa-angle-up"></i>
				</section>
			)}
		</main>
	);
};

export { HabitsContent };
