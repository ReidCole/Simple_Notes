import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux";
import Button from "./Button";
import SaveModal from "./SaveModal";

const SaveButton: React.FC = () => {
  const [isSaveModalOpen, setIsSaveModalOpen] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(false);
  const note = useSelector((state: RootState) => state.note.currentNote);

  useEffect(() => {
    if (note.title.length > 0 && note.body.length > 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [note.title, note.body]);

  return (
    <>
      <Button
        className="gap-1.5"
        enabledClasses="bg-emerald-700 text-white"
        onClick={() => setIsSaveModalOpen(true)}
        title="Save Note"
        disabled={!isValid}
      >
        <i className="bi-save2 text-xl flex" /> Save Note
      </Button>

      <SaveModal isModalOpen={isSaveModalOpen} setIsModalOpen={setIsSaveModalOpen} />
    </>
  );
};

export default SaveButton;
