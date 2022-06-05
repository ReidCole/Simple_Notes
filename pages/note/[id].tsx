import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import MainContainer from "../../components/MainContainer";

const Note: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (typeof router.query.id === "undefined") return;
    const id = router.query.id;

    console.log("get note from firestore");
  }, [router.query]);

  return (
    <MainContainer>
      <div>stuff</div>
    </MainContainer>
  );
};

export default Note;
