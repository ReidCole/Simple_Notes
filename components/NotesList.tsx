import { NoteType } from "../pages";
import NoteListing from "./NoteListing";

type Props = {
  notes: NoteType[];
  heading: string;
};

const NotesList: React.FC<Props> = ({ notes, heading }) => {
  if (notes.length > 0) {
    return (
      <div className="p-2">
        <h2 className="text-center font-bold">{heading}</h2>
        <div className=" my-2 flex flex-col gap-2 h-full">
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
