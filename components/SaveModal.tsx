import { doc, setDoc } from "firebase/firestore";
import fileDownload from "js-file-download";
import { nanoid } from "nanoid";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";
import { NoteState } from "../hooks/useNoteState";
import { firestore } from "../pages/_app";
import { RootState } from "../redux";
import { createNote, getCurrentLocalStorageNotes, saveNoteToLocalStorage } from "../util/noteUtils";
import Button from "./Button";
import LoadingSpinner from "./LoadingSpinner";
import Modal from "./Modal";

type Props = {
  isModalOpen: boolean;
  setIsModalOpen(val: boolean): void;
  noteState: NoteState;
};

const SaveModal: React.FC<Props> = ({ isModalOpen, noteState, setIsModalOpen }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const user = useSelector((state: RootState) => state.auth.user);
  const router = useRouter();

  function saveToLocalStorage() {
    const newNote = createNote(noteState, "ls");
    saveNoteToLocalStorage(newNote);
    router.push("/notes");
  }

  async function saveToAccount() {
    if (user === null) return;
    setIsLoading(true);

    const newNote = createNote(noteState, user.email);

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

  function downloadNote() {
    fileDownload(noteState.body, noteState.title, "text/plain");
  }

  return (
    <>
      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen} heading="Save Note">
        <Button
          className="gap-1.5 bg-emerald-700 text-white w-full"
          onClick={saveToLocalStorage}
          title="Save Note to Browser Local Storage"
        >
          <i className="bi-window text-xl flex" /> Save To Browser Storage
        </Button>
        <Button
          className="gap-1.5 bg-emerald-700 text-white w-full"
          onClick={saveToAccount}
          title="Save Note to Your Account"
        >
          <i className="bi-cloud text-xl" /> Save To Account
        </Button>
        <Button
          className="gap-1.5 bg-emerald-700 text-white w-full"
          onClick={downloadNote}
          title="Download Note as a Text File"
        >
          <i className="bi-download text-xl flex" /> Download as Text File
        </Button>
      </Modal>

      <LoadingSpinner isVisible={isLoading} />
    </>
  );
};

export default SaveModal;
