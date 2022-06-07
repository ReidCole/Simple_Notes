import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainContainer from "../components/MainContainer";
import Navbar from "../components/Navbar";
import NotesButtons from "../components/NoteListButtons";
import NotesList from "../components/NotesList";
import PageHeading from "../components/PageHeading";
import Tabs from "../components/Tabs";
import useNoteLists from "../hooks/useNoteLists";
import { RootState } from "../redux";
import { noteActions } from "../redux/noteReducer";

const Notes: NextPage = () => {
  const [localStorageNotes, accountLists] = useNoteLists();
  const [activeIndex, setActiveIndex] = useState(0);
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: noteActions.clearNote });
  }, [dispatch]);

  return (
    <MainContainer>
      <PageHeading>All Notes</PageHeading>
      <Tabs
        tabs={
          user === null
            ? [{ text: "Browser Storage" }]
            : [{ text: "Browser Storage" }, { text: "Account" }]
        }
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <div className="h-full overflow-y-scroll py-2 mb-2 border-black border-b">
        {activeIndex === 0 && <NotesList notes={localStorageNotes} listName="Browser Storage" />}
        {activeIndex === 1 && <NotesList notes={accountLists} listName="Account" />}
      </div>

      <NotesButtons />

      <Navbar />
    </MainContainer>
  );
};

export default Notes;
