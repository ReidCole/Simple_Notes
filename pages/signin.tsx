import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Button";
import Input from "../components/Input";
import MainContainer from "../components/MainContainer";
import Navbar from "../components/Navbar";
import Notification from "../components/Notification";
import PageHeading from "../components/PageHeading";
import useNotificationState from "../hooks/useNotificationState";
import { auth } from "./_app";

const SignIn: NextPage = () => {
  const [action, setAction] = useState<"signin" | "signup">("signin");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmValue, setConfirmValue] = useState("");
  const [canSubmit, setCanSubmit] = useState<boolean>(false);
  const [notificationState, showNotification] = useNotificationState();
  const router = useRouter();

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (action === "signin") {
      // SIGN IN
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then(() => {
          router.push("/");
        })
        .catch((err) => {
          showNotification(err.message, "bg-red-400 border-red-500");
        });
    } else {
      // SIGN UP
      createUserWithEmailAndPassword(auth, emailValue, passwordValue);
    }
  }

  useEffect(() => {
    if (emailValue.length > 0 && passwordValue.length > 0) {
      if (action === "signin" || (action === "signup" && confirmValue.length > 0)) {
        setCanSubmit(true);
        return;
      }
    }
    setCanSubmit(false);
  }, [action, emailValue.length, passwordValue.length, confirmValue.length]);

  return (
    <MainContainer>
      <PageHeading>{action === "signin" ? "Sign In" : "Create Account"}</PageHeading>

      <form onSubmit={onSubmit} className="h-full mx-2 mb-2 flex flex-col gap-2">
        <Input
          type="email"
          placeholder="Email..."
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
          required
          name="Email"
          title="Email Address"
        />
        <Input
          type="password"
          placeholder="Password..."
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
          required
          name="Password"
          title="Password"
        />
        {action === "signup" && (
          <Input
            type="password"
            placeholder="Confirm Password..."
            value={confirmValue}
            onChange={(e) => setConfirmValue(e.target.value)}
            required
            name="Confirm Password"
            title="Confirm Password"
          />
        )}

        <Button type="submit" className="bg-green-600 text-white" disabled={!canSubmit}>
          {action === "signin" ? "Sign In" : "Sign Up"}
        </Button>
      </form>

      <button
        className="bg-black text-white p-4"
        onClick={() => {
          showNotification("hello", "bg-green-400 border-green-500");
        }}
      >
        test notif
      </button>

      <Button
        className="bg-blue-500 text-white m-2"
        onClick={() => setAction((prev) => (prev === "signin" ? "signup" : "signin"))}
      >
        {action === "signin" ? "Need an account? Create one" : "Already have an account? Sign in"}
      </Button>

      <Navbar />

      <Notification state={notificationState} />
    </MainContainer>
  );
};

export default SignIn;
