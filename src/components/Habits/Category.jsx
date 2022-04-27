import { NavLink } from "react-router-dom";
import { useCategory } from "../../context";
const Category = () => {
	const { setShowCategoryContainer } = useCategory();
	const getActiveClass = ({ isActive }) =>
		isActive
			? "no-link cursor-pointer rui-drawer-content--text h4 text-bold link-active"
			: "no-link cursor-pointer rui-drawer-content--text h4 text-bold";
	const handleDismissCategoryContainer = () => setShowCategoryContainer(false);
	return (
		<>
			<section
				className="area-dismiss-container flex-row align-center justify-content-center text-center p-5 w-100 h-auto "
				onClick={handleDismissCategoryContainer}
			>
				<i className="fa-solid fa-angle-down"></i>
			</section>
			<ul className="rui-drawer-content--list no-list p-5">
				<li className="rui-drawer-content my-5">
					<NavLink to={"/habits/all"} className={getActiveClass}>
						All Habits
					</NavLink>
				</li>
				<li className="rui-drawer-content my-5">
					<NavLink to={"/habits/archive"} className={getActiveClass}>
						Archive
					</NavLink>
				</li>
				<li className="rui-drawer-content my-5">
					<section className="flex-row justify-content-space-between align-center flex-wrap">
						<span className="rui-drawer-content--text list-heading text-cta-color h4">
							AREAS
						</span>
					</section>
				</li>
				<li className="rui-drawer-content my-5">
					<button className="cursor-pointer outline-btn p-4 b-radius-2 icon-text-btn flex-row justify-content-center align-center flex-gap-1">
						<span>
							<i className="fa-solid fa-circle-plus"></i>
						</span>
						<p>Add a Category </p>
					</button>
				</li>
			</ul>
		</>
	);
};

export { Category };
