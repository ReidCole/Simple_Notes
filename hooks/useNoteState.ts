import { useEffect, useState } from "react";

export type NoteState = {
  title: string;
  setTitle(val: string): void;
  body: string;
  setBody(val: string): void;
  isValid: boolean;
};

const useNoteState = () => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);

  useEffect(() => {
    if (title.length > 0 && body.length > 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [title.length, body.length]);

  const data: NoteState = {
    title,
    setTitle,
    body,
    setBody,
    isValid,
  };
  return data;
};

export default useNoteState;
