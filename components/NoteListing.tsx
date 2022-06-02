export type NoteListingType = {
  title: string;
  dateCreated: Date;
  dateUpdated: Date;
  noteId: string;
};

type Props = {
  note: NoteListingType;
};

const NoteListing: React.FC<Props> = ({ note }) => {
  return (
    <div className="p-1.5 rounded-lg bg-gray-200  border border-gray-300">
      <h2 className="text-lg">{note.title}</h2>
      <p className="text-sm text-gray-600 italic">Last updated {note.dateUpdated.toString()}</p>
    </div>
  );
};

export default NoteListing;
