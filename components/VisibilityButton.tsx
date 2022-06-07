import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux";
import Button from "./Button";
import VisibilityModal from "./VisibilityModal";

const VisibilityButton: React.FC = () => {
  const [isVisibilityModalOpen, setIsVisibilityModalOpen] = useState<boolean>(false);
  const note = useSelector((state: RootState) => state.note.currentNote);

  return (
    <>
      <Button
        className="gap-1.5"
        enabledClasses="bg-purple-700 text-white"
        onClick={() => setIsVisibilityModalOpen(true)}
        title="Change Note Visibility"
      >
        {note.visibility === "public" ? (
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
      />
    </>
  );
};

export default VisibilityButton;
