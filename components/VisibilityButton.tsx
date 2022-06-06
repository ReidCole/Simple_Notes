import { useState } from "react";
import { NoteState } from "../hooks/useNoteState";
import Button from "./Button";
import VisibilityModal from "./VisibilityModal";

type Props = {
  noteState: NoteState;
};

const VisibilityButton: React.FC<Props> = ({ noteState }) => {
  const [isVisibilityModalOpen, setIsVisibilityModalOpen] = useState<boolean>(false);

  return (
    <>
      <Button
        className="gap-1.5"
        enabledClasses="bg-purple-700 text-white"
        onClick={() => setIsVisibilityModalOpen(true)}
        title="Change Note Visibility"
      >
        {noteState.visibility === "public" ? (
          <>
            <i className="bi-eye text-xl flex" /> Note Visiblity: Public
          </>
        ) : (
          <>
            <i className="bi-eye-slash text-xl flex" /> Note Visiblity: Private
          </>
        )}
      </Button>
      <VisibilityModal
        isModalOpen={isVisibilityModalOpen}
        setIsModalOpen={setIsVisibilityModalOpen}
        noteState={noteState}
      />
    </>
  );
};

export default VisibilityButton;
