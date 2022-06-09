import { NextPage } from "next";
import Head from "next/head";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainContainer from "../components/MainContainer";
import NavbarMobile from "../components/NavbarMobile";
import NotesButtons from "../components/NoteListButtons";
import NotesList from "../components/NotesList";
import PageHeading from "../components/PageHeading";
import Tabs from "../components/Tabs";
import useNoteLists from "../hooks/useNoteLists";
import { RootState } from "../redux";
import { noteActions } from "../redux/noteReducer";
import { NoteType } from "../util/noteUtils";

const Notes: NextPage = () => {
  const [localStorageNotes, accountNotes] = useNoteLists();
  const [activeIndex, setActiveIndex] = useState(0);
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();

  const sortedLocalStorageNotes: NoteType[] = useMemo(() => {
    return localStorageNotes.slice().sort((a, b) => b.dateUpdated - a.dateUpdated);
  }, [localStorageNotes]);
  const sortedAccountNotes: NoteType[] = useMemo(() => {
    return accountNotes.slice().sort((a, b) => b.dateUpdated - a.dateUpdated);
  }, [accountNotes]);

  useEffect(() => {
    dispatch({ type: noteActions.clearNote });
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>All Notes - Simple Notes</title>
      </Head>

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
        <div className="h-full overflow-y-scroll py-2 mb-2">
          {activeIndex === 0 && (
            <NotesList notes={sortedLocalStorageNotes} listName="Browser Storage" />
          )}
          {activeIndex === 1 && <NotesList notes={sortedAccountNotes} listName="Account" />}
        </div>

        <NotesButtons />

        <NavbarMobile />
      </MainContainer>
    </>
  );
};

export default Notes;
