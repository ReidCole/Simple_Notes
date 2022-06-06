import { useState } from "react";
import { NoteState } from "../hooks/useNoteState";
import Button from "./Button";
import SaveModal from "./SaveModal";

type Props = {
  noteState: NoteState;
};

const SaveButton: React.FC<Props> = ({ noteState }) => {
  const [isSaveModalOpen, setIsSaveModalOpen] = useState<boolean>(false);

  return (
    <>
      <Button
        className="gap-1.5"
        enabledClasses="bg-emerald-700 text-white"
        onClick={() => setIsSaveModalOpen(true)}
        title="Save Note"
        disabled={!noteState.isValid}
      >
        <i className="bi-save2 text-xl flex" /> Save Note
      </Button>

      <SaveModal
        isModalOpen={isSaveModalOpen}
        setIsModalOpen={setIsSaveModalOpen}
        noteState={noteState}
      />
    </>
  );
};

export default SaveButton;
