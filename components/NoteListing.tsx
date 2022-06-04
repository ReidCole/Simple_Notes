import { NoteType } from "../pages";

type Props = {
  note: NoteType;
};

const NoteListing: React.FC<Props> = ({ note }) => {
  return (
    <div className="p-1.5 rounded-lg bg-gray-200  border border-gray-300">
      <h2 className="text-lg">{note.title}</h2>
      <p className="text-sm text-gray-600 italic">
        Last updated {new Date(note.dateUpdated).toDateString()} (TODO: change to dayjs)
      </p>
    </div>
  );
};

export default NoteListing;
