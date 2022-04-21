import { removeFromArray } from "../utils";
/**
 * Reducer function to handle archive state
 * @param {Object} archiveState State values of archive
 * @param {*} archiveAction The changed state
 * @returns Updated state into archiveState
 */
const archiveReducer = (archiveState, { type, payload }) => {
	switch (type) {
		case "ADD_ITEM":
			return {
				...archiveState,
				itemsInArchive: [
					...archiveState.itemsInArchive,
					{ ...payload.itemsInArchive },
				],
			};

		case "REMOVE_ITEM":
			return {
				...archiveState,
				itemsInArchive: removeFromArray(
					archiveState.itemsInArchive,
					payload.itemsInArchive
				),
			};
		case "RESET":
			return {
				...archiveState,
				itemsInArchive: [],
			};
		default:
			return archiveState;
	}
};

export { archiveReducer };
