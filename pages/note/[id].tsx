import { doc, getDoc } from "firebase/firestore";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";
import MainContainer from "../../components/MainContainer";
import { getCurrentLocalStorageNotes, NoteType, typeNote, typeNotes } from "../../util/noteUtils";
import { firestore } from "../_app";

const Note: NextPage = () => {
  const router = useRouter();
  const [note, setNote] = useState<NoteType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function getNoteFromAccount(id: string) {
      setIsLoading(true);
      const noteDoc = doc(firestore, `notes/${id}`);
      const snapshot = await getDoc(noteDoc);
      if (!snapshot.exists()) {
        console.log("todo: show screen for note doesn't exist");
        setIsLoading(false);
        return;
      }
      const data = snapshot.data();
      const newNote = typeNote(data);
      setIsLoading(false);
      setNote(newNote);
    }

    function getNoteFromLocalStorage(id: string) {
      const typedNotes = getCurrentLocalStorageNotes();
      const newNote = typedNotes.find((note) => note.id === id);
      if (typeof newNote === "undefined") {
        console.error("todo: couldn't find note in local storage");
        return;
      }
      setNote(newNote);
    }

    const id = router.query.id;
    const isLocal = router.query.local;
    if (typeof id !== "string" || typeof isLocal !== "string") return;
    const location = isLocal === "true" ? "local" : "account";
    if (location == "account") {
      getNoteFromAccount(id);
    } else {
      getNoteFromLocalStorage(id);
    }
  }, [router.query]);

  return (
    <MainContainer>
      {note === null ? (
        <>
          <h1>Note is null</h1>
        </>
      ) : (
        <h1>{note.title}</h1>
      )}

      <LoadingSpinner isVisible={isLoading} />
    </MainContainer>
  );
};

export default Note;
