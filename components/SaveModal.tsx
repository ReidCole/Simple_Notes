import fileDownload from "js-file-download";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useNotificationState from "../hooks/useNotificationState";
import { RootState } from "../redux";
import { noteActions } from "../redux/noteReducer";
import { saveNoteToAccount, saveNoteToLocalStorage } from "../util/noteUtils";
import Button from "./Button";
import LoadingSpinner from "./LoadingSpinner";
import Modal from "./Modal";
import Notification from "./Notification";

type Props = {
  isModalOpen: boolean;
  setIsModalOpen(val: boolean): void;
};

const SaveModal: React.FC<Props> = ({ isModalOpen, setIsModalOpen }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const user = useSelector((state: RootState) => state.auth.user);
  const note = useSelector((state: RootState) => state.note.currentNote);
  const router = useRouter();
  const dispatch = useDispatch();
  const [notificationState, showNotification] = useNotificationState();

  function saveToLocalStorage() {
    saveNoteToLocalStorage(note);
    dispatch({ type: noteActions.clearNote });
    router.push("/notes");
  }

  async function saveToAccount() {
    if (user === null) {
      showNotification(
        "You must be signed in to save to your account.",
        "bg-red-400 border-red-500"
      );
      return;
    }

    setIsLoading(true);

    try {
      await saveNoteToAccount(note, user.email);
      setIsLoading(false);
      router.push("/notes");
    } catch (err) {
      showNotification(
        "Something went wrong. Please try again later.",
        "bg-red-400 border-red-500"
      );
      setIsLoading(false);
    }
  }

  function downloadNote() {
    fileDownload(note.body, note.title, "text/plain");
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

      <Notification state={notificationState} />
    </>
  );
};

export default SaveModal;
