import { NoteType } from "../pages";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useEffect, useState } from "react";

type Props = {
  note: NoteType;
};

const NoteListing: React.FC<Props> = ({ note }) => {
  const [dateUpdated, setDateUpdated] = useState<string>("");

  useEffect(() => {
    dayjs.extend(relativeTime);
    const updated = dayjs().to(dayjs(note.dateCreated));
    setDateUpdated(updated);
  }, [note.dateCreated]);

  return (
    <div className="p-1.5 rounded-lg bg-gray-200 border border-gray-300">
      <h2 className="text-lg">{note.title}</h2>
      <p className="text-sm text-gray-600 italic">Updated {dateUpdated}</p>
    </div>
  );
};

export default NoteListing;
