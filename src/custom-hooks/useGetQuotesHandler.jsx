import { useState, useEffect } from "react";
import axios from "axios";
const useGetQuotesHandler = () => {
	const [quotesData, setQuotesData] = useState([]);
	useEffect(() => {
		(async () => {
			try {
				const response = await axios.get(`/api/quotes`);
				setQuotesData(response.data.quotes);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);
	return { quotesData };
};

export { useGetQuotesHandler };
