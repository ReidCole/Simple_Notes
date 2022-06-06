import { doc, setDoc } from "firebase/firestore";
import { nanoid } from "nanoid";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";
import { NoteState } from "../hooks/useNoteState";
import { firestore } from "../pages/_app";
import { RootState } from "../redux";
import { createNote, getCurrentLocalStorageNotes, NoteType } from "../util/noteUtils";
import Button from "./Button";
import LoadingSpinner from "./LoadingSpinner";
import Modal from "./Modal";
import fileDownload from "js-file-download";

type Props = {
  noteState: NoteState;
};

const SaveButtons: React.FC<Props> = ({ noteState }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const user = useSelector((state: RootState) => state.auth.user);
  const router = useRouter();

  function saveToLocalStorage() {
    const notes = getCurrentLocalStorageNotes();
    const newNote = createNote(noteState.title, noteState.body, "ls");
    notes.push(newNote);
    localStorage.setItem("notes", JSON.stringify(notes));
    router.push("/notes");
  }

  function spam() {
    const notesString = localStorage.getItem("notes");
    let notes;
    if (notesString === null) {
      notes = [];
    } else {
      notes = JSON.parse(notesString);
    }
    for (let i = 0; i < 10; i++) {
      const newNote: NoteType = {
        title: noteState.title,
        body: noteState.body,
        dateCreated: new Date(Date.now()),
        dateUpdated: new Date(Date.now()),
        owner: "ls",
        id: nanoid(),
      };
      notes.push(newNote);
      console.log("a");
    }
    localStorage.setItem("notes", JSON.stringify(notes));
  }

  async function saveToAccount() {
    if (user === null) return;
    setIsLoading(true);

    const newNote = createNote(noteState.title, noteState.body, user.email);

    const id = nanoid();
    const noteDoc = doc(firestore, "notes", id);
    try {
      await setDoc(noteDoc, newNote);
    } catch (err) {
      console.log(err);
      console.log("todo: show notification");
    }
    setIsLoading(false);
  }

  function downloadNote() {}

  return (
    <div className="mx-2 mb-2 flex flex-col items-center">
      <Button
        className="bg-green-500 text-white gap-1.5"
        onClick={() => setIsModalOpen(true)}
        title="Save Note"
        disabled={!noteState.isValid}
      >
        <i className="bi-save2 text-xl flex" /> Save Note
      </Button>

      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen} heading="Save Note">
        <Button
          className="gap-2 bg-blue-500 text-white w-full"
          onClick={saveToLocalStorage}
          title="Save Note to Browser Local Storage"
        >
          <i className="bi-window text-xl flex" /> Save To Browser Storage
        </Button>
        <Button
          className="gap-2 bg-purple-500 text-white w-full"
          onClick={spam}
          title="Save Note to Browser Local Storage"
        >
          <i className="bi-window text-xl flex" /> SPAM
        </Button>
        <Button
          className="gap-2 bg-yellow-500 text-white w-full"
          onClick={saveToAccount}
          title="Save Note to Your Account"
        >
          <i className="bi-cloud text-xl" /> Save To Account
        </Button>
        <Button
          className="gap-2 bg-red-500 text-white w-full"
          onClick={() => {}}
          title="Download Note as a Text File"
        >
          <i className="bi-download text-xl flex" /> Download as Text File
        </Button>
      </Modal>

      <LoadingSpinner isVisible={isLoading} />
    </div>
  );
};

export default SaveButtons;
