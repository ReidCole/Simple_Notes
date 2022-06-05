import { NoteType } from "../pages";
import NoteListing from "./NoteListing";

type Props = {
  notes: NoteType[];
};

const NotesList: React.FC<Props> = ({ notes }) => {
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
    return <p></p>;
  }
};

export default NotesList;
