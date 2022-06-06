import { doc, getDoc } from "firebase/firestore";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";
import MainContainer from "../../components/MainContainer";
import Navbar from "../../components/Navbar";
import NoteButtons from "../../components/NoteButtons";
import NoteInputs from "../../components/NoteInputs";
import PageHeading from "../../components/PageHeading";
import useNoteState from "../../hooks/useNoteState";
import { getCurrentLocalStorageNotes, NoteType, typeNote, typeNotes } from "../../util/noteUtils";
import { firestore } from "../_app";

const Note: NextPage = () => {
  const router = useRouter();
  const [note, setNote] = useState<NoteType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const noteState = useNoteState(note, false);

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
        <div className="h-full">
          <h1>Note is null</h1>
        </div>
      ) : (
        <>
          <PageHeading>View Note</PageHeading>

          {noteState.isEditing ? (
            <NoteInputs noteState={noteState} />
          ) : (
            <>
              <div className="px-2 flex flex-col h-full">
                <h2 className="p-2 font-bold text-xl border-b-2 border-gray-300">
                  {noteState.title}
                </h2>
                <p className="p-2 rounded-lg">{noteState.body}</p>
              </div>
            </>
          )}

          <NoteButtons noteState={noteState} />
        </>
      )}

      <Navbar />

      <LoadingSpinner isVisible={isLoading} />
    </MainContainer>
  );
};

export default Note;
