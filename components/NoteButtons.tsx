import { NoteState } from "../hooks/useNoteState";
import { createNote, saveNoteToLocalStorage } from "../util/noteUtils";
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";
import SaveButton from "./SaveButton";
import VisibilityButton from "./VisibilityButton";

type Props = {
  noteState: NoteState;
};

const NoteButtons: React.FC<Props> = ({ noteState }) => {
  function saveChanges() {
    if (noteState.owner === "ls") {
      const newNote = createNote(noteState, "ls");
      console.log(noteState, newNote.id);
      saveNoteToLocalStorage(newNote);
    } else {
      // save to account
      // show loading screen
      // update in firestore
    }

    noteState.saveChanges();
    noteState.setIsEditing(false);
  }

  function cancelChanges() {
    noteState.revertChanges();
    noteState.setIsEditing(false);
  }

  return (
    <ButtonGroup>
      {noteState.isEditing ? (
        <>
          <VisibilityButton noteState={noteState} />
          <Button
            className="gap-1.5"
            enabledClasses="bg-cyan-700 text-white"
            onClick={saveChanges}
            title="Edit Note"
            disabled={!noteState.isValid}
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
              noteState.setIsEditing(true);
            }}
            title="Edit Note"
          >
            <i className="bi-pencil text-xl flex" /> Edit Note
          </Button>
          <SaveButton noteState={noteState} />
        </>
      )}
    </ButtonGroup>
  );
};

export default NoteButtons;
