import { useState, useEffect } from "react";
import axios from "axios";

const useGetColorsData = () => {
	const [ColorsData, setColorsData] = useState([]);
	useEffect(() => {
		(async () => {
			try {
				const response = await axios.get(`/api/colors`);
				setColorsData(response.data.colors);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);
	return ColorsData;
};

export { useGetColorsData };
