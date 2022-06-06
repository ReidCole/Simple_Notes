import { NoteState } from "../hooks/useNoteState";
import Input from "./Input";

type Props = {
  noteState: NoteState;
};

const NoteInputs: React.FC<Props> = ({ noteState }) => {
  return (
    <div className="mx-2 mb-2 h-full flex flex-col">
      <Input
        type="text"
        title="Note Title"
        name="Note Title"
        placeholder="Title..."
        className="mb-2"
        value={noteState.title}
        onChange={(e) => noteState.setTitle(e.target.value)}
        autoComplete={false}
      />
      <textarea
        className="bg-gray-200 w-full border border-gray-300 rounded-lg focus-visible:outline-none focus-visible:border-gray-700 resize-none p-2 transition-colors placeholder:text-gray-700 h-full"
        title="Note Body"
        name="Note Body"
        placeholder="Body..."
        value={noteState.body}
        onChange={(e) => noteState.setBody(e.target.value)}
        autoComplete="off"
      />
    </div>
  );
};

export default NoteInputs;
