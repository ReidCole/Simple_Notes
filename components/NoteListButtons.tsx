import Button from "./Button";
import ButtonGroup from "./ButtonGroup";

const NotesButtons = () => {
  return (
    <ButtonGroup>
      <Button className="bg-gray-500 text-white gap-1" title="Sort Note List">
        <i className="bi-filter text-xl flex" /> Sort By
      </Button>
      <Button className="bg-green-500 text-white gap-1.5" title="Save All Notes To A Location">
        <i className="bi-folder-symlink text-xl flex" /> Save All To
      </Button>
      <Button className="bg-red-500 text-white gap-1" title="Delete All Notes">
        <i className="bi-trash text-xl flex" /> Delete All
      </Button>
    </ButtonGroup>
  );
};

export default NotesButtons;
