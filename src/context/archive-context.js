import { createContext, useContext, useEffect, useReducer } from "react";
import { getArchiveDataHandler } from "../utils";
import { archiveReducer } from "../reducers";
import { useAuth } from ".";
const defaultArchiveContext = {
	itemsInArchive: [],
};
const ArchiveContext = createContext(defaultArchiveContext);

const ArchiveProvider = ({ children }) => {
	const [archiveState, archiveDispatch] = useReducer(
		archiveReducer,
		defaultArchiveContext
	);
	const { authState } = useAuth();
	useEffect(() => {
		authState?.token?.length && getArchiveDataHandler(archiveDispatch);
	}, [authState]);
	return (
		<ArchiveContext.Provider value={{ archiveState, archiveDispatch }}>
			{children}
		</ArchiveContext.Provider>
	);
};

const useArchive = () => useContext(ArchiveContext);

export { useArchive, ArchiveProvider };
