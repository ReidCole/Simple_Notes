import { useEffect, useState } from "react";
import { NoteType, typeNotes } from "../util/noteUtils";

const useNoteLists = () => {
  const [localStorageNotes, setLocalStorageNotes] = useState<NoteType[]>([]);

  useEffect(() => {
    function getLocalStorageLists() {
      const notesString = localStorage.getItem("notes");
      let notes = [];
      if (notesString !== null) {
        notes = JSON.parse(notesString);
      }
      const typedNotes = typeNotes(notes);
      setLocalStorageNotes(typedNotes);
    }
    window.addEventListener("storage", getLocalStorageLists);
    getLocalStorageLists();

    return () => window.removeEventListener("storage", getLocalStorageLists);
  }, []);

  return [localStorageNotes];
};

export default useNoteLists;
