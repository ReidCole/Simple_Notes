import { useDispatch } from "react-redux";
import { noteActions } from "../redux/noteReducer";
import Button from "./Button";
import Modal from "./Modal";

type Props = {
  isModalOpen: boolean;
  setIsModalOpen(val: boolean): void;
};

const VisibilityModal: React.FC<Props> = ({ isModalOpen, setIsModalOpen }) => {
  // const note = useSelector((state: RootState) => state.note);
  const dispatch = useDispatch();

  return (
    <Modal heading="Set Note Visibility" isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
      <Button
        className="gap-1.5 bg-purple-700 text-white w-full"
        onClick={() => {
          dispatch({ type: noteActions.setVisibility, payload: "public" });
          setIsModalOpen(false);
        }}
        title="Anyone with the link can see this note"
      >
        <i className="bi-eye text-xl flex" /> Public (Anyone With Link)
      </Button>
      <Button
        className="gap-1.5 bg-purple-700 text-white w-full"
        onClick={() => {
          dispatch({ type: noteActions.setVisibility, payload: "private" });
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
