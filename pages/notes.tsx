import { NextPage } from "next";
import MainContainer from "../components/MainContainer";
import Navbar from "../components/Navbar";
import NotesList from "../components/NotesList";
import PageHeading from "../components/PageHeading";
import useNoteLists from "../hooks/useNoteLists";

const Notes: NextPage = () => {
  const [localStorageNotes] = useNoteLists();

  return (
    <MainContainer>
      <PageHeading>All Notes</PageHeading>

      <div className="text-center mb-2">Todo: Options</div>

      <div className="h-full overflow-y-scroll">
        <NotesList notes={localStorageNotes} heading="Browser Storage Notes" />
        <NotesList notes={localStorageNotes} heading="Account Notes (todo: not really)" />
      </div>

      <Navbar />
    </MainContainer>
  );
};

export default Notes;
