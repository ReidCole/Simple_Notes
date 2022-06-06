import { NoteState } from "../hooks/useNoteState";
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";

type Props = {
  noteState: NoteState;
};

const NoteButtons: React.FC<Props> = ({ noteState }) => {
  return (
    <ButtonGroup>
      <Button
        className="gap-1.5"
        enabledClasses="bg-yellow-500 text-white"
        onClick={() => {}}
        title="Edit Note"
      >
        <i className="bi-pencil text-xl flex" /> Edit Note
      </Button>
      <Button
        className="gap-1.5"
        enabledClasses="bg-purple-500 text-white"
        onClick={() => {}}
        title="Change Note Visibility"
      >
        <i className="bi-globe2 text-xl flex" /> Note Visibility
      </Button>
      <Button
        className="gap-1.5"
        enabledClasses="bg-green-500 text-white"
        onClick={() => {}}
        title="Save Note"
      >
        <i className="bi-save2 text-xl flex" /> Save Note
      </Button>
    </ButtonGroup>
  );
};

export default NoteButtons;
