import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useEffect, useState } from "react";
import Link from "next/link";
import { NoteType } from "../util/noteUtils";

type Props = {
  note: NoteType;
};

const NoteListing: React.FC<Props> = ({ note }) => {
  dayjs.extend(relativeTime);
  const dateUpdated = dayjs().to(dayjs(note.dateUpdated));

  return (
    <Link href={`/note/${note.id}${note.owner === "ls" ? "?local=true" : ""}`} passHref>
      <a className="w-full p-1.5 rounded-lg bg-gray-200 border border-gray-300 group hover:bg-black hover:border-black transition-colors focus-visible:outline-black">
        <h2 className="text-lg group-hover:text-white transition-colors whitespace-nowrap overflow-x-hidden">
          {note.title}
        </h2>
        <p className="text-sm text-gray-700 italic group-hover:text-gray-300 transition-colors">
          Updated {dateUpdated}
        </p>
      </a>
    </Link>
  );
};

export default NoteListing;
