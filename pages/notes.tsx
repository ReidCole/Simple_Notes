import { NextPage } from "next";
import { useState } from "react";
import MainContainer from "../components/MainContainer";
import Navbar from "../components/Navbar";
import NotesButtons from "../components/NoteListButtons";
import NotesList from "../components/NotesList";
import PageHeading from "../components/PageHeading";
import Tabs from "../components/Tabs";
import useNoteLists from "../hooks/useNoteLists";

const Notes: NextPage = () => {
  const [localStorageNotes] = useNoteLists();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <MainContainer>
      <PageHeading>All Notes</PageHeading>
      <Tabs
        tabs={[
          { text: "Browser Storage", colorClass: "bg-indigo-700" },
          { text: "Account", colorClass: "bg-cyan-700" },
        ]}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <div className="h-full overflow-y-scroll py-2 mb-2 border-black border-b">
        {activeIndex === 0 && <NotesList notes={localStorageNotes} />}
        {activeIndex === 1 && <NotesList notes={localStorageNotes} />}
      </div>

      <NotesButtons />

      <Navbar />
    </MainContainer>
  );
};

export default Notes;
