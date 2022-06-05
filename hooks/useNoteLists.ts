import { useEffect, useState } from "react";
import { NoteType } from "../pages";

const useNoteLists = () => {
  const [localStorageNotes, setLocalStorageNotes] = useState<NoteType[]>([]);

  useEffect(() => {
    function getLocalStorageLists() {
      const notesString = localStorage.getItem("notes");
      let notes = [];
      if (notesString !== null) {
        notes = JSON.parse(notesString);
      }
      const typedNotes: NoteType[] = notes.map(
        (note: {
          title: string;
          body: string;
          dateCreated: string;
          dateUpdated: string;
          owner: string;
          id: string;
        }) => {
          const typedNote: NoteType = {
            title: note.title,
            body: note.body,
            dateCreated: new Date(note.dateCreated),
            dateUpdated: new Date(note.dateUpdated),
            owner: note.owner,
            id: note.id,
          };
          return typedNote;
        }
      );
      setLocalStorageNotes(notes);
    }
    window.addEventListener("storage", getLocalStorageLists);
    getLocalStorageLists();

    return () => window.removeEventListener("storage", getLocalStorageLists);
  }, []);

  return [localStorageNotes];
};

export default useNoteLists;
