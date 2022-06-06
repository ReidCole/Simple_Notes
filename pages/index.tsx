import type { NextPage } from "next";
import { useState } from "react";
import Button from "../components/Button";
import ButtonGroup from "../components/ButtonGroup";
import MainContainer from "../components/MainContainer";
import Navbar from "../components/Navbar";
import NoteInputs from "../components/NoteInputs";
import PageHeading from "../components/PageHeading";
import SaveButton from "../components/SaveButton";
import SaveModal from "../components/SaveModal";
import VisibilityButton from "../components/VisibilityButton";
import VisibilityModal from "../components/VisibilityModal";
import useNoteState from "../hooks/useNoteState";

const Home: NextPage = () => {
  const noteState = useNoteState(undefined, true);

  return (
    <MainContainer>
      <PageHeading>New Note</PageHeading>

      <NoteInputs noteState={noteState} />

      <ButtonGroup>
        <VisibilityButton noteState={noteState} />
        <SaveButton noteState={noteState} />
      </ButtonGroup>

      <Navbar />
    </MainContainer>
  );
};

export default Home;
