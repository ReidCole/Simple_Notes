import NoteListing, { NoteListingType } from "./NoteListing";

type Props = {
  notes: NoteListingType[];
};

const NotesList: React.FC<Props> = ({ notes }) => {
  return (
    <div className="h-full mx-2 overflow-y-scroll my-2 flex flex-col gap-2">
      {notes.map((note) => (
        <NoteListing note={note} key={note.noteId} />
      ))}
    </div>
  );
};

export default NotesList;
