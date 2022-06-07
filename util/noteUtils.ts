import { doc, setDoc } from "firebase/firestore";
import { nanoid } from "nanoid";
import { firestore } from "../pages/_app";

export type NoteType = {
  title: string;
  body: string;
  dateCreated: number;
  dateUpdated: number;
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
      dateCreated: note.dateCreated,
      dateUpdated: note.dateUpdated,
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
  const newNote = getNewNote(note, "ls");
  let notes = getCurrentLocalStorageNotes();
  const index = notes.findIndex((n) => n.id === newNote.id);

  if (index === -1) {
    notes.push(newNote);
  } else {
    const index = notes.findIndex((n) => n.id === newNote.id);
    notes[index] = newNote;
  }
  localStorage.setItem("notes", JSON.stringify(notes));
}

export async function saveNoteToAccount(note: NoteType, email: string) {
  try {
    const newNote = getNewNote(note, email);
    const noteDoc = doc(firestore, "notes", newNote.id);
    await setDoc(noteDoc, newNote);
  } catch (err) {
    console.error(err);
    throw new Error();
  }
}

function getNewNote(note: NoteType, owner: string) {
  const now = Date.now();
  let newNote: NoteType = {
    title: note.title,
    body: note.body,
    visibility: note.visibility,
    dateCreated: note.dateCreated === 0 ? now : note.dateCreated,
    dateUpdated: now,
    owner: note.owner === "" ? owner : note.owner,
    id: note.id === "" ? nanoid() : note.id,
  };
  console.log("get new note", note, newNote);
  return newNote;
}

export function deleteLocalStorageNote() {}

export function deleteAllLocalStorageNotes() {}
