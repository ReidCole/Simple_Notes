import { useState } from "react";

export type NoteState = {
  title: string;
  setTitle(val: string): void;
  body: string;
  setBody(val: string): void;
};

const useNoteState = () => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const data: NoteState = {
    title,
    setTitle,
    body,
    setBody,
  };
  return data;
};

export default useNoteState;
