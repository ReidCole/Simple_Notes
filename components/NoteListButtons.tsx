import { useState } from "react";
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";
import DeleteAllButton from "./DeleteAllButton";
import SortByModal from "./SortByModal";

const NotesButtons = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <SortByModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};

export default NotesButtons;
