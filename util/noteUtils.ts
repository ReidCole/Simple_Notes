import { nanoid } from "nanoid";

export type NoteType = {
  title: string;
  body: string;
  dateCreated: Date;
  dateUpdated: Date;
  owner: string;
  id: string;
};

export function typeNotes(notes: any): NoteType[] {
  const typedNotes: NoteType[] = notes.map(
    (note: {
      title: string;
      body: string;
      dateCreated: string;
      dateUpdated: string;
      owner: string;
      id: string;
    }) => typeNote(note)
  );
  return typedNotes;
}

export function typeNote(note: any): NoteType {
  try {
    const typedNote: NoteType = {
      title: note.title,
      body: note.body,
      dateCreated: new Date(note.dateCreated),
      dateUpdated: new Date(note.dateUpdated),
      owner: note.owner,
      id: note.id,
    };
    return typedNote;
  } catch (e) {
    console.error(e);
    throw new Error("error trying to type notes");
  }
}

export function createNote(title: string, body: string, owner: string) {
  const newNote: NoteType = {
    title: title,
    body: body,
    dateCreated: new Date(Date.now()),
    dateUpdated: new Date(Date.now()),
    owner: owner,
    id: nanoid(),
  };
  return newNote;
}

export function getCurrentLocalStorageNotes() {
  const notesString = localStorage.getItem("notes");
  let notes = [];
  if (notesString !== null) {
    notes = JSON.parse(notesString);
  }
  const typedNotes = typeNotes(notes);
  if (typeof typedNotes === "undefined") {
    throw new Error("notes is undefined");
  }
  return typedNotes;
}
