import Button from "./Button";
import Modal from "./Modal";

type Props = {
  isModalOpen: boolean;
  setIsModalOpen(val: boolean): void;
};

const SortByModal: React.FC<Props> = ({ isModalOpen, setIsModalOpen }) => {
  function setSortingMethod(method: "un" | "uo" | "cn" | "co" | "a" | "ar") {
    // not going to implement sorting for now
  }

  return (
    <Modal heading="Sort Notes By" isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
      <Button
        className="gap-1.5 bg-gray-700 text-white w-full"
        onClick={() => {
          setIsModalOpen(false);
        }}
        title="Date Updated (Newest First)"
      >
        <i className="bi-sort-down-alt text-xl flex" /> Date Updated (Newest First)
      </Button>
      <Button
        className="gap-1.5 bg-gray-700 text-white w-full"
        onClick={() => {
          setIsModalOpen(false);
        }}
        title="Date Updated (Oldest First)"
      >
        <i className="bi-sort-down text-xl flex" /> Date Updated (Oldest First)
      </Button>

      <Button
        className="gap-1.5 bg-gray-700 text-white w-full"
        onClick={() => {
          setIsModalOpen(false);
        }}
        title="Date Created (Newest First)"
      >
        <i className="bi-sort-down-alt text-xl flex" /> Date Created (Newest First)
      </Button>
      <Button
        className="gap-1.5 bg-gray-700 text-white w-full"
        onClick={() => {
          setIsModalOpen(false);
        }}
        title="Date Created (Oldest First)"
      >
        <i className="bi-sort-down text-xl flex" /> Date Created (Oldest First)
      </Button>

      <Button
        className="gap-1.5 bg-gray-700 text-white w-full"
        onClick={() => {
          setIsModalOpen(false);
        }}
        title="Date Created (Newest First)"
      >
        <i className="bi-sort-alpha-down text-xl flex" /> Alphabetical (A - Z)
      </Button>
      <Button
        className="gap-1.5 bg-gray-700 text-white w-full"
        onClick={() => {
          setIsModalOpen(false);
        }}
        title="Date Created (Oldest First)"
      >
        <i className="bi-sort-alpha-down-alt text-xl flex" /> Alphabetical Reverse (Z - A)
      </Button>
    </Modal>
  );
};

export default SortByModal;
