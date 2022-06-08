import type { NextPage } from "next";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonGroup from "../components/ButtonGroup";
import MainContainer from "../components/MainContainer";
import MobileNavbar from "../components/MobileNavbar";
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
    <MainContainer>
      <PageHeading>New Note</PageHeading>

      <NoteInputs />

      <ButtonGroup>
        {user !== null && <VisibilityButton />}

        <SaveButton />
      </ButtonGroup>

      <MobileNavbar />
    </MainContainer>
  );
};

export default Home;
