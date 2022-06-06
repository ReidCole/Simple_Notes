import type { NextPage } from "next";
import MainContainer from "../components/MainContainer";
import Navbar from "../components/Navbar";
import NoteInputs from "../components/NoteInputs";
import PageHeading from "../components/PageHeading";
import SaveButtons from "../components/SaveButtons";
import useNoteState from "../hooks/useNoteState";

const Home: NextPage = () => {
  const noteState = useNoteState();

  return (
    <MainContainer>
      <PageHeading>New Note</PageHeading>

      <NoteInputs noteState={noteState} />

      <SaveButtons noteState={noteState} />

      <Navbar />
    </MainContainer>
  );
};

export default Home;
