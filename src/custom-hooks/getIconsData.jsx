import { useState, useEffect } from "react";
import axios from "axios";

const useGetIconsData = () => {
	const [iconsData, setIconsData] = useState([]);
	useEffect(() => {
		(async () => {
			try {
				const response = await axios.get(`/api/icons`);
				setIconsData(response.data.icons);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);
	return iconsData;
};

export { useGetIconsData };
