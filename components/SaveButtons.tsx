import { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";

const SaveButtons: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div className="mx-2 mb-2 flex flex-col items-center">
      <Button
        className="bg-green-600 text-white gap-1.5"
        onClick={() => setIsModalOpen(true)}
        title="Save Note"
      >
        <i className="bi-save2 text-xl flex" /> Save Note
      </Button>

      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen} heading="Save Note">
        <Button
          className="gap-2 bg-blue-600 text-white w-full"
          onClick={() => {}}
          title="Save Note to Browser Local Storage"
        >
          <i className="bi-window text-xl flex" /> Save To Browser Storage
        </Button>
        <Button
          className="gap-2 bg-yellow-600 text-white w-full"
          onClick={() => {}}
          title="Save Note to Your Account"
        >
          <i className="bi-cloud text-xl" /> Save To Account
        </Button>
        <Button
          className="gap-2 bg-red-600 text-white w-full"
          onClick={() => {}}
          title="Download Note as a Text File"
        >
          <i className="bi-download text-xl flex" /> Download as Text File
        </Button>
      </Modal>
    </div>
  );
};

export default SaveButtons;
