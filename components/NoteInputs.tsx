import { inputStyles } from "../styles/StyleStrings.js";

const NoteInputs = () => {
  return (
    <div className="mx-2 mb-2 h-full flex flex-col">
      <input
        type="text"
        title="Note Title"
        placeholder="Title..."
        className={inputStyles + "mb-2"}
      />
      <textarea
        className={inputStyles + "h-full"}
        title="Note Body"
        placeholder="Body..."
      ></textarea>
    </div>
  );
};

export default NoteInputs;
