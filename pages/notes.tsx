import { NextPage } from "next";
import { useState } from "react";
import MainContainer from "../components/MainContainer";
import Navbar from "../components/Navbar";
import NotesButtons from "../components/NotesButtons";
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
      <NotesButtons />
      <Tabs
        tabs={[
          { text: "Browser Storage", colorClass: "bg-blue-500" },
          { text: "Account", colorClass: "bg-yellow-500" },
        ]}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <div className="h-full overflow-y-scroll my-2">
        {activeIndex === 0 && <NotesList notes={localStorageNotes} />}
        {activeIndex === 1 && <NotesList notes={localStorageNotes} />}
      </div>

      <Navbar />
    </MainContainer>
  );
};

export default Notes;
