import Button from "./Button";

const SaveButtons: React.FC = () => {
  return (
    <div className="mx-2 mb-2 flex flex-col items-center">
      <p>todo</p>
      {/* TODO: turn this into a single save button with an options list that pops up */}
      {/* <p className="mb-2">Save Note to</p>
      <div className="flex flex-col gap-2 mb-2 xs:flex-row">
        <Button
          className="bg-blue-300 gap-1"
          onClick={() => {}}
          title="Save Note to Browser's Local Storage"
        >
          <i className="bi-window flex text-2xl" /> Browser
        </Button>
        <Button className="bg-yellow-300 gap-1" onClick={() => {}} title="Save Note to Account">
          <i className="bi-cloud-arrow-up flex text-2xl" /> Account
        </Button>
        <Button className="bg-red-300 gap-1" onClick={() => {}} title="Download Note as Text File">
          <i className="bi-file-earmark-font flex text-2xl" /> TXT File
        </Button>
      </div> */}
    </div>
  );
};

export default SaveButtons;
