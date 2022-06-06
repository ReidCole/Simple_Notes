import type { NextPage } from "next";
import { useState } from "react";
import Button from "../components/Button";
import ButtonGroup from "../components/ButtonGroup";
import MainContainer from "../components/MainContainer";
import Navbar from "../components/Navbar";
import NoteInputs from "../components/NoteInputs";
import PageHeading from "../components/PageHeading";
import SaveButtons from "../components/SaveButtons";
import SaveModal from "../components/SaveModal";
import useNoteState from "../hooks/useNoteState";

const Home: NextPage = () => {
  const noteState = useNoteState();
  const [isSaveModalOpen, setIsSaveModalOpen] = useState<boolean>(false);

  return (
    <MainContainer>
      <PageHeading>New Note</PageHeading>

      <NoteInputs noteState={noteState} />

      <ButtonGroup>
        <Button
          className="gap-1.5"
          enabledClasses="bg-green-500 text-white"
          onClick={() => setIsSaveModalOpen(true)}
          title="Save Note"
          disabled={!noteState.isValid}
        >
          <i className="bi-save2 text-xl flex" /> Save Note
        </Button>
      </ButtonGroup>

      <SaveModal
        isModalOpen={isSaveModalOpen}
        setIsModalOpen={setIsSaveModalOpen}
        noteState={noteState}
      />

      <Navbar />
    </MainContainer>
  );
};

export default Home;
