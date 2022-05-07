import { createContext, useContext, useState, useEffect } from "react";
const defaultNotesState = {
	newNote: "",
};

const NotesContext = createContext(defaultNotesState);

const NotesProvider = ({ children }) => {
	const [note, setNote] = useState("");
	useEffect(() => setNote(""), []);
	return (
		<NotesContext.Provider
			value={{
				note,
				setNote,
			}}
		>
			{children}
		</NotesContext.Provider>
	);
};

const useNotes = () => useContext(NotesContext);

export { useNotes, NotesProvider };
