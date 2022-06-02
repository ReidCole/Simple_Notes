import { NextPage } from "next";
import MainContainer from "../components/MainContainer";
import Navbar from "../components/Navbar";
import NotesList from "../components/NotesList";
import PageHeading from "../components/PageHeading";

const Notes: NextPage = () => {
  return (
    <MainContainer>
      <PageHeading>All Notes</PageHeading>

      <div className="text-center mb-2">Todo: Options</div>

      <NotesList notes={[]} />

      <Navbar />
    </MainContainer>
  );
};

export default Notes;
