import type { NextPage } from "next";
import { useContext, useEffect, useState } from "react";
import Button from "../components/Button";
import LoadingSpinner from "../components/LoadingSpinner";
import MainContainer from "../components/MainContainer";
import Navbar from "../components/Navbar";
import NoteInputs from "../components/NoteInputs";
import PageHeading from "../components/PageHeading";
import SaveButtons from "../components/SaveButtons";
import { UIContext } from "../context/UIContext";
import useNoteState from "../hooks/useNoteState";

export type NoteType = {
  title: string;
  body: string;
  dateCreated: Date;
  dateUpdated: Date;
  owner: string;
};

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
