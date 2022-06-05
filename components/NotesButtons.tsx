import Button from "./Button";

const NotesButtons = () => {
  return (
    <div className="text-center mb-2 px-2 flex flex-col xs:flex-row gap-2 ">
      <Button className="bg-gray-500 text-white gap-1" title="Delete All Notes">
        <i className="bi-filter text-xl flex" /> Sort By
      </Button>
      <Button className="bg-green-500 text-white gap-1.5" title="Delete All Notes">
        <i className="bi-save2 text-xl flex" /> Save All
      </Button>
      <Button className="bg-red-500 text-white gap-1" title="Delete All Notes">
        <i className="bi-trash text-xl flex" /> Delete All
      </Button>
    </div>
  );
};

export default NotesButtons;
