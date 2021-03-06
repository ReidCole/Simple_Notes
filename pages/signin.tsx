import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import Button from "../components/Button";
import LoadingSpinner from "../components/LoadingSpinner";
import MainContainer from "../components/MainContainer";
import NavbarDesktop from "../components/NavbarDesktop";
import NavbarMobile from "../components/NavbarMobile";
import Notification from "../components/Notification";
import PageHeading from "../components/PageHeading";
import SignInForm from "../components/SignInForm";
import WidthContainer from "../components/WidthContainer";
import useNotificationState from "../hooks/useNotificationState";
import { getFirebaseAuthError } from "../util/firebaseUtils";
import { auth } from "./_app";

const SignIn: NextPage = () => {
  const [action, setAction] = useState<"signin" | "signup">("signin");
  const [notificationState, showNotification] = useNotificationState();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  function onSubmit(email: string, password: string) {
    if (action === "signin") {
      // SIGN IN
      setIsLoading(true);
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          router.push("/");
          setIsLoading(false);
        })
        .catch((err) => {
          showNotification(getFirebaseAuthError(err.code), "bg-red-400 border-red-500");
          setIsLoading(false);
        });
    } else {
      // SIGN UP
      setIsLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          router.push("/");
          setIsLoading(false);
        })
        .catch((err) => {
          showNotification(getFirebaseAuthError(err.code), "bg-red-400 border-red-700");
          setIsLoading(false);
        });
    }
  }

  return (
    <>
      <Head>
        <title>Sign In - Simple Notes</title>
      </Head>

      <MainContainer>
        <NavbarDesktop />
        <WidthContainer>
          <PageHeading>{action === "signin" ? "Sign In" : "Create Account"}</PageHeading>

          <SignInForm action={action} onSubmit={onSubmit} />

          <Button
            className="bg-indigo-700 text-white m-2"
            onClick={() => setAction((prev) => (prev === "signin" ? "signup" : "signin"))}
          >
            {action === "signin"
              ? "Need an account? Create one"
              : "Already have an account? Sign in"}
          </Button>
        </WidthContainer>
        <NavbarMobile />

        <Notification state={notificationState} />

        <LoadingSpinner isVisible={isLoading} />
      </MainContainer>
    </>
  );
};

export default SignIn;
