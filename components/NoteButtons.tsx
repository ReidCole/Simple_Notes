import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux";
import { noteActions } from "../redux/noteReducer";
import { saveNoteToLocalStorage } from "../util/noteUtils";
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";
import SaveButton from "./SaveButton";
import VisibilityButton from "./VisibilityButton";

type Props = {
  isEditing: boolean;
  setIsEditing(val: boolean): void;
};

const NoteButtons: React.FC<Props> = ({ isEditing, setIsEditing }) => {
  const note = useSelector((state: RootState) => state.note.currentNote);
  const [isValid, setIsValid] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (note.title.length > 0 && note.body.length > 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [note.title, note.body]);

  function saveChanges() {
    if (note.owner === "ls") {
      saveNoteToLocalStorage(note);
    } else {
      // save to account
      // show loading screen
      // update in firestore
    }

    dispatch({ type: noteActions.saveChanges });
    setIsEditing(false);
  }

  function cancelChanges() {
    dispatch({ type: noteActions.revertChanges });
    setIsEditing(false);
  }

  return (
    <ButtonGroup>
      {isEditing ? (
        <>
          <VisibilityButton />
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
          <Button
            className="gap-1.5"
            enabledClasses="bg-cyan-700 text-white"
            onClick={() => {
              setIsEditing(true);
            }}
            title="Edit Note"
          >
            <i className="bi-pencil text-xl flex" /> Edit Note
          </Button>
          <SaveButton />
        </>
      )}
    </ButtonGroup>
  );
};

export default NoteButtons;
