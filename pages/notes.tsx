import { NextPage } from "next";
import Head from "next/head";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainContainer from "../components/MainContainer";
import NavbarDesktop from "../components/NavbarDesktop";
import NavbarMobile from "../components/NavbarMobile";
import NotesButtons from "../components/NoteListButtons";
import NotesList from "../components/NotesList";
import PageHeading from "../components/PageHeading";
import Tabs from "../components/Tabs";
import WidthContainer from "../components/WidthContainer";
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
        <NavbarDesktop />
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
        <div className="overflow-y-auto h-full flex flex-col my-2 md:max-w-xl md:mx-auto w-full">
          {activeIndex === 0 && (
            <NotesList notes={sortedLocalStorageNotes} listName="Browser Storage" />
          )}
          {activeIndex === 1 && <NotesList notes={sortedAccountNotes} listName="Account" />}
        </div>

        <NavbarMobile />
      </MainContainer>
    </>
  );
};

export default Notes;
