import { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";

const DeleteAllButton = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function deleteFromLocalStorage() {}

  return (
    <>
      <Button
        className="bg-red-700 text-white gap-1"
        title="Delete All Notes"
        onClick={() => setIsOpen(true)}
      >
        <i className="bi-trash text-xl flex" /> Delete All
      </Button>

      <Modal heading="Delete All Notes From" isOpen={isOpen} setIsOpen={setIsOpen}>
        <Button
          className="gap-1.5 bg-red-700 text-white w-full"
          onClick={() => {}}
          title="Save Note to Browser Local Storage"
        >
          <i className="bi-window text-xl flex" /> Browser Storage
        </Button>
        <Button
          className="gap-1.5 bg-red-700 text-white w-full"
          onClick={() => {}}
          title="Save Note to Browser Local Storage"
        >
          <i className="bi-cloud text-xl flex" /> Account
        </Button>
      </Modal>
    </>
  );
};

export default DeleteAllButton;
