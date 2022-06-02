import type { NextPage } from "next";
import { useContext, useEffect, useState } from "react";
import Button from "../components/Button";
import MainContainer from "../components/MainContainer";
import Navbar from "../components/Navbar";
import NoteInputs from "../components/NoteInputs";
import PageHeading from "../components/PageHeading";
import SaveButtons from "../components/SaveButtons";
import { UIContext } from "../context/UIContext";

const Home: NextPage = () => {
  const uiContext = useContext(UIContext);

  return (
    <MainContainer>
      <PageHeading>New Note</PageHeading>

      <NoteInputs />

      <SaveButtons />

      <Navbar />
    </MainContainer>
  );
};

export default Home;
