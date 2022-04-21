import axios from "axios";

/**
 * Add product data to archive
 * @param {*} element
 * @param {Object} productData Product to be added in archive
 * @param {function} archiveDispatch Reducer function
 */
const addToArchiveHandler = (element, habitId, archiveDispatch) => {
	element.preventDefault();
	(async () => {
		try {
			const response = await axios.post(
				`/api/archives/add/${habitId}`,
				{ habit: { _id: habitId } },
				{
					headers: {
						Accept: "*/*",
						authorization: JSON.parse(localStorage.getItem("user"))?.token,
					},
				}
			);
			archiveDispatch({
				type: "ADD_ITEM",
				payload: {
					itemsInArchive: { _id: habitId },
				},
			});
		} catch (error) {
			console.log(error);
		}
	})();
};

/**
 * Remove data from archive
 * @param element
 * @param {string} productId productId to remove from archive
 * @param {function} archiveDispatch Reducer function
 */
const removeFromArchiveHandler = (element, habitId, archiveDispatch) => {
	element.preventDefault();
	(async () => {
		try {
			const response = await axios.post(
				`/api/archives/restore/${habitId}`,
				{ habit: { _id: habitId } },
				{
					headers: {
						Accept: "*/*",
						authorization: JSON.parse(localStorage.getItem("user"))?.token,
					},
				}
			);
			archiveDispatch({
				type: "REMOVE_ITEM",
				payload: {
					itemsInArchive: habitId,
				},
			});
		} catch (error) {
			console.log(error);
		}
	})();
};

/**
 * Retrieve archive data
 * @param {function} archiveDispatch Reducer function
 */
const getArchiveDataHandler = (archiveDispatch) => {
	(async () => {
		try {
			const response = await axios.get(`/api/archives`, {
				headers: {
					Accept: "*/*",
					authorization: JSON.parse(localStorage.getItem("user"))?.token,
				},
			});
			archiveDispatch({
				type: "GET_ITEM",
				payload: {
					itemsInArchive: response.data.archives,
				},
			});
		} catch (error) {
			console.log(error);
		}
	})();
};

export { addToArchiveHandler, removeFromArchiveHandler, getArchiveDataHandler };
