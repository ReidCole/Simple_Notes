import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux";
import { noteActions } from "../redux/noteReducer";
import Input from "./Input";

const NoteInputs: React.FC = () => {
  const note = useSelector((state: RootState) => state.note.currentNote);
  const dispatch = useDispatch();

  return (
    <div className="mx-2 mb-2 h-full flex flex-col">
      <Input
        type="text"
        title="Note Title"
        name="Note Title"
        placeholder="Title..."
        className="mb-2"
        value={note.title}
        onChange={(e) => dispatch({ type: noteActions.setTitle, payload: e.target.value })}
        autoComplete={false}
      />
      <textarea
        className="bg-gray-200 w-full border border-gray-300 rounded-lg focus-visible:outline-none focus-visible:border-gray-700 resize-none p-2 transition-colors placeholder:text-gray-700 h-full"
        title="Note Body"
        name="Note Body"
        placeholder="Body..."
        value={note.body}
        onChange={(e) => dispatch({ type: noteActions.setBody, payload: e.target.value })}
        autoComplete="off"
      />
    </div>
  );
};

export default NoteInputs;
