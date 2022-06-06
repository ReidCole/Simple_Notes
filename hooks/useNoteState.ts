import { useEffect, useState } from "react";
import { NoteType } from "../util/noteUtils";

export type NoteState = {
  title: string;
  setTitle(val: string): void;
  body: string;
  setBody(val: string): void;
  isValid: boolean;
  visibility: "public" | "private";
};

const useNoteState = (initialState?: NoteType | null | undefined) => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [visibility, setVisibility] = useState<"public" | "private">("public");
  const [isValid, setIsValid] = useState<boolean>(false);

  useEffect(() => {
    if (typeof initialState !== "undefined" && initialState !== null) {
      setTitle(initialState.title);
      setBody(initialState.body);
      console.log("set initial state");
    }
  }, [initialState]);

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
    visibility,
  };
  return data;
};

export default useNoteState;
