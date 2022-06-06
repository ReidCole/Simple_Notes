import { nanoid } from "nanoid";
import { NoteState } from "../hooks/useNoteState";

export type NoteType = {
  title: string;
  body: string;
  dateCreated: Date;
  dateUpdated: Date;
  owner: string;
  id: string;
  visibility: "public" | "private";
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
      visibility: note.visibility,
    };
    return typedNote;
  } catch (e) {
    console.error(e);
    throw new Error("error trying to type notes");
  }
}

export function createNote(noteState: NoteState, owner: string) {
  const newNote: NoteType = {
    title: noteState.title,
    body: noteState.body,
    dateCreated: new Date(Date.now()),
    dateUpdated: new Date(Date.now()),
    owner: owner,
    id: noteState.id || nanoid(),
    visibility: noteState.visibility,
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

export function saveNoteToLocalStorage(note: NoteType) {
  let notes = getCurrentLocalStorageNotes();
  const index = notes.findIndex((n) => n.id === note.id);

  if (index === -1) {
    notes.push(note);
  } else {
    const index = notes.findIndex((n) => n.id === note.id);
    notes[index] = note;
  }
  localStorage.setItem("notes", JSON.stringify(notes));
}
