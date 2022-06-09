import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useNotificationState from "../hooks/useNotificationState";
import { RootState } from "../redux";
import { noteActions } from "../redux/noteReducer";
import {
  deleteAccountNote,
  deleteLocalStorageNote,
  saveNoteToAccount,
  saveNoteToLocalStorage,
} from "../util/noteUtils";
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";
import LoadingSpinner from "./LoadingSpinner";
import Modal from "./Modal";
import Notification from "./Notification";
import SaveButton from "./SaveButton";
import VisibilityButton from "./VisibilityButton";

type Props = {
  isEditing: boolean;
  setIsEditing(val: boolean): void;
};

const NoteButtons: React.FC<Props> = ({ isEditing, setIsEditing }) => {
  const note = useSelector((state: RootState) => state.note.currentNote);
  const [isValid, setIsValid] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const [notificationState, showNotification] = useNotificationState();
  const [deleteModalShowing, setDeleteModalShowing] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (note.title.length > 0 && note.body.length > 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [note.title, note.body]);

  async function saveChanges() {
    if (note.owner === "ls") {
      saveNoteToLocalStorage(note);
    } else {
      if (user === null) {
        console.error("tried to save note changes to account when not signed in.");
        showNotification(
          "Something went wrong. Please try again later.",
          "bg-red-400 border-red-500"
        );
        return;
      }
      setIsLoading(true);
      await saveNoteToAccount(note, user.email);
      setIsLoading(false);
    }

    dispatch({ type: noteActions.saveChanges });
    setIsEditing(false);
  }

  function cancelChanges() {
    dispatch({ type: noteActions.revertChanges });
    setIsEditing(false);
  }

  async function deleteNote() {
    if (note.owner === "ls") {
      deleteLocalStorageNote(note.id);
      router.push("/notes");
    } else {
      try {
        setIsLoading(true);
        await deleteAccountNote(note.id);
        setIsLoading(false);
        router.push("/notes");
      } catch (e) {
        showNotification(
          "Something went wrong while deleting the note. Please try again later.",
          "bg-red-400 border-red-500"
        );
        setIsLoading(false);
      }
    }
  }

  return (
    <>
      <ButtonGroup>
        {isEditing ? (
          <>
            {note.owner !== "ls" && <VisibilityButton />}

            <Button
              className="gap-1.5"
              enabledClasses="bg-cyan-700 text-white"
              onClick={saveChanges}
              title="Edit Note"
              disabled={!isValid}
            >
              <i className="bi-save2 text-xl flex" /> Save Changes
            </Button>
            <Button
              className="gap-1.5"
              enabledClasses="bg-red-700 text-white"
              onClick={cancelChanges}
              title="Edit Note"
            >
              <i className="bi-x-circle text-xl flex" /> Cancel
            </Button>
          </>
        ) : (
          <>
            {(note.owner === "ls" || (user && user.email === note.owner)) && (
              <>
                <Button
                  className="gap-1"
                  enabledClasses="bg-cyan-700 text-white"
                  onClick={() => {
                    setIsEditing(true);
                  }}
                  title="Edit Note"
                >
                  <i className="bi-pencil text-xl flex" /> Edit
                </Button>
                <Button
                  className="gap-1.5"
                  enabledClasses="bg-red-700 text-white"
                  onClick={() => setDeleteModalShowing(true)}
                  title="Delete Note"
                >
                  <i className="bi-trash text-xl flex" /> Delete
                </Button>
              </>
            )}
          </>
        )}
      </ButtonGroup>
      <Notification state={notificationState} />
      <LoadingSpinner isVisible={isLoading} />

      <Modal isOpen={deleteModalShowing} setIsOpen={setDeleteModalShowing} heading="Delete Note">
        <p>This action cannot be undone</p>
        <Button
          className="gap-1.5"
          enabledClasses="bg-red-700 text-white"
          onClick={deleteNote}
          title="Delete Note"
        >
          <i className="bi-trash text-xl flex" /> Confirm Delete
        </Button>
      </Modal>
    </>
  );
};

export default NoteButtons;
