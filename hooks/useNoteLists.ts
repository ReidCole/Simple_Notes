import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { firestore } from "../pages/_app";
import { RootState } from "../redux";
import { NoteType, typeNotes } from "../util/noteUtils";

const useNoteLists = () => {
  const [localStorageNotes, setLocalStorageNotes] = useState<NoteType[]>([]);
  const [accountNotes, setAccountNotes] = useState<NoteType[]>([]);
  const user = useSelector((state: RootState) => state.auth.user);

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

  useEffect(() => {
    if (user === null) return;
    const q = query(collection(firestore, "notes"), where("owner", "==", user.email));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const notes: any[] = [];
      snapshot.forEach((doc) => notes.push(doc.data()));
      const typedNotes = typeNotes(notes);
      setAccountNotes(typedNotes);
    });
    return () => unsubscribe();
  }, [user]);

  return [localStorageNotes, accountNotes];
};

export default useNoteLists;
