import { createContext, useContext, useState, useEffect } from "react";

const defaultCategoryState = {
	newCategory: "",
	categories: [],
};

const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
	const [showCategoryContainer, setShowCategoryContainer] = useState(true);
	const [categoryState, categoryDispatch] = useReducer(defaultCategoryState);
	useEffect(() => {
		window.addEventListener("resize", () =>
			window.innerWidth <= 768
				? setShowCategoryContainer(false)
				: setShowCategoryContainer(true)
		);
	}, []);
	return (
		<CategoryContext.Provider
			value={{ showCategoryContainer, setShowCategoryContainer }}
		>
			{children}
		</CategoryContext.Provider>
	);
};

const useCategory = () => useContext(CategoryContext);

export { useCategory, CategoryProvider };
