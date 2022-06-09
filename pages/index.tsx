import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonGroup from "../components/ButtonGroup";
import MainContainer from "../components/MainContainer";
import NavbarDesktop from "../components/NavbarDesktop";
import NavbarMobile from "../components/NavbarMobile";
import NoteInputs from "../components/NoteInputs";
import PageHeading from "../components/PageHeading";
import SaveButton from "../components/SaveButton";
import VisibilityButton from "../components/VisibilityButton";
import { RootState } from "../redux";
import { noteActions } from "../redux/noteReducer";

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    dispatch({ type: noteActions.clearNote });
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>New Note - Simple Notes</title>
      </Head>

      <MainContainer>
        <NavbarDesktop />

        <PageHeading>New Note</PageHeading>

        <NoteInputs />

        <ButtonGroup>
          {user !== null && <VisibilityButton />}

          <SaveButton />
        </ButtonGroup>

        <NavbarMobile />
      </MainContainer>
    </>
  );
};

export default Home;
