import { NoteType } from "../pages";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useEffect, useState } from "react";
import Link from "next/link";

type Props = {
  note: NoteType;
};

const NoteListing: React.FC<Props> = ({ note }) => {
  // const [dateUpdated, setDateUpdated] = useState<string>("");

  // useEffect(() => {
  //   dayjs.extend(relativeTime);
  //   const updated = dayjs().to(dayjs(note.dateCreated));
  //   setDateUpdated(updated);
  //   console.log("run");
  // }, [note.dateCreated]);

  dayjs.extend(relativeTime);
  const dateUpdated = dayjs().to(dayjs(note.dateCreated));

  return (
    <Link href="#" passHref>
      <a className="p-1.5 rounded-lg bg-gray-200 border border-gray-300 group hover:bg-black transition-colors">
        <h2 className="text-lg group-hover:text-white transition-colors">{note.title}</h2>
        <p className="text-sm text-gray-600 italic group-hover:text-gray-300 transition-colors">
          Updated {dateUpdated}
        </p>
      </a>
    </Link>
  );
};

export default NoteListing;
