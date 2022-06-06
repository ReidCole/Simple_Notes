import { useCallback, useEffect, useState } from "react";
import { NoteType } from "../util/noteUtils";

export type NoteState = {
  title: string;
  setTitle(val: string): void;
  body: string;
  setBody(val: string): void;
  isValid: boolean;
  visibility: "public" | "private";
  setVisibility(val: "public" | "private"): void;
  isEditing: boolean;
  setIsEditing(val: boolean): void;
  revertChanges(): void;
  saveChanges(): void;
  owner: string;
  id: string | null;
  setId(id: string): void;
};

const useNoteState = (
  initialNote?: NoteType | null | undefined,
  initialIsEditing?: boolean | undefined
) => {
  console.log("initial note id", (initialNote && initialNote.id) || "nope");
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [visibility, setVisibility] = useState<"public" | "private">("public");
  const [isValid, setIsValid] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(initialIsEditing || false);
  const [savedNote, setSavedNote] = useState<NoteType | null>(initialNote || null);
  const [owner, setOwner] = useState<string>("");
  const [id, setId] = useState<string | null>((initialNote && initialNote.id) || null);

  useEffect(() => {
    if (initialNote) {
      setTitle(initialNote.title);
      setBody(initialNote.body);
      setVisibility(initialNote.visibility);
      setOwner(initialNote.owner);
    }
  }, [initialNote]);

  useEffect(() => {
    if (title.length > 0 && body.length > 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [title.length, body.length]);

  function revertChanges() {
    console.log(savedNote);
    if (savedNote) {
      setTitle(savedNote.title);
      setBody(savedNote.body);
      setVisibility(savedNote.visibility);
    } else if (initialNote) {
      setTitle(initialNote.title);
      setBody(initialNote.body);
      setVisibility(initialNote.visibility);
    } else {
      console.error(
        "tried to revert changes when both, savedNote and initialNote, are invalid",
        savedNote,
        initialNote
      );
    }
  }

  function saveChanges() {
    if (!initialNote) {
      console.error(
        "tried to save changes when initial note is null. note has to have an initial state to save something other than that (changes)."
      );
      return;
    }
    const n: NoteType = {
      title,
      body,
      visibility,
      dateCreated: initialNote.dateCreated,
      dateUpdated: new Date(Date.now()),
      id: initialNote.id,
      owner: initialNote.owner,
    };
    setSavedNote(n);
    console.log("saved note");
  }

  const data: NoteState = {
    title,
    setTitle,
    body,
    setBody,
    isValid,
    visibility,
    setVisibility,
    revertChanges,
    isEditing,
    setIsEditing,
    saveChanges,
    owner,
    id: id,
    setId,
  };
  return data;
};

export default useNoteState;
