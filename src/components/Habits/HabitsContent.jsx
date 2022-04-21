import { Category } from ".";
import { useCategory } from "../../context";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AllHabits, ArchiveContent } from ".";
const HabitsContent = () => {
	const { showCategoryContainer, setShowCategoryContainer } = useCategory();
	const handleShowCategoryContainer = () => setShowCategoryContainer(true);
	useEffect(
		() =>
			window.innerWidth <= 768
				? setShowCategoryContainer(false)
				: setShowCategoryContainer(true),
		[]
	);
	return (
		<main className="main flex-row flex-gap-1 habits-content-container">
			{showCategoryContainer && (
				<div className="category-container nav-shadow p-5">
					<Category />
				</div>
			)}
			<Routes>
				<Route path="all" element={<AllHabits />} />
				<Route path="archive" element={<ArchiveContent />} />
			</Routes>
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
