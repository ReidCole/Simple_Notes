import { NoteType } from "../util/noteUtils";

export type NoteState = {
  currentNote: NoteType;
  savedNote: NoteType | null;
};

const initialNote: NoteType = {
  title: "",
  body: "",
  dateCreated: 0,
  dateUpdated: 0,
  id: "",
  owner: "",
  visibility: "public",
};

const initialState: NoteState = {
  currentNote: initialNote,
  savedNote: null,
};

export default function noteReducer(state = initialState, action: any): NoteState {
  switch (action.type) {
    case noteActions.setTitle:
      return { ...state, currentNote: { ...state.currentNote, title: action.payload } };
    case noteActions.setBody:
      return { ...state, currentNote: { ...state.currentNote, body: action.payload } };
    case noteActions.setOwner:
      return { ...state, currentNote: { ...state.currentNote, owner: action.payload } };
    case noteActions.setVisibility:
      return { ...state, currentNote: { ...state.currentNote, visibility: action.payload } };
    case noteActions.clearNote:
      return { ...state, currentNote: initialNote };
    case noteActions.saveChanges:
      return { ...state, savedNote: state.currentNote };
    case noteActions.revertChanges:
      return { ...state, currentNote: state.savedNote || state.currentNote };
    case noteActions.setNote:
      return { ...state, currentNote: action.payload };
    default:
      return state;
  }
}

export const noteActions = {
  setTitle: "note/setTitle",
  setBody: "note/setBody",
  setOwner: "note/setOwner",
  setVisibility: "note/setVisibility",
  clearNote: "note/clearNote",
  saveChanges: "note/saveChanges",
  revertChanges: "note/revertChanges",
  setNote: "note/setNote",
};
