import { NoteState } from "../hooks/useNoteState";
import Button from "./Button";
import Modal from "./Modal";

type Props = {
  isModalOpen: boolean;
  setIsModalOpen(val: boolean): void;
  noteState: NoteState;
};

const VisibilityModal: React.FC<Props> = ({ isModalOpen, noteState, setIsModalOpen }) => {
  return (
    <Modal heading="Set Note Visibility" isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
      <Button
        className="gap-1.5 bg-purple-700 text-white w-full"
        onClick={() => {
          noteState.setVisibility("public");
          setIsModalOpen(false);
        }}
        title="Anyone with the link can see this note"
      >
        <i className="bi-eye text-xl flex" /> Public (Anyone With Link)
      </Button>
      <Button
        className="gap-1.5 bg-purple-700 text-white w-full"
        onClick={() => {
          noteState.setVisibility("private");
          setIsModalOpen(false);
        }}
        title="Only you can see this note"
      >
        <i className="bi-eye-slash text-xl flex" /> Private (Only You)
      </Button>
    </Modal>
  );
};

export default VisibilityModal;
