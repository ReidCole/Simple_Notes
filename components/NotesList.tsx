import { NoteType } from "../util/noteUtils";
import NoteListing from "./NoteListing";

type Props = {
  notes: NoteType[];
  listName: string;
};

const NotesList: React.FC<Props> = ({ notes, listName }) => {
  if (notes.length > 0) {
    return (
      <div className="px-2 w-full">
        <div className="flex flex-col gap-2 h-full">
          {notes.map((note) => (
            <NoteListing note={note} key={note.id} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <p className="p-2 text-center text-xl font-bold text-gray-700">No notes in {listName}</p>
    );
  }
};

export default NotesList;
