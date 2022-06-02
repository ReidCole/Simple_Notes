import { NextPage } from "next";
import Link from "next/link";
import { FormEvent, useState } from "react";
import Button from "../components/Button";
import MainContainer from "../components/MainContainer";
import Navbar from "../components/Navbar";
import PageHeading from "../components/PageHeading";
import { inputStyles } from "../styles/StyleStrings";

const SignIn: NextPage = () => {
  const [action, setAction] = useState<"signin" | "signup">("signin");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (action === "signin") {
      // SIGN IN
    } else {
      // SIGN UP
    }
  }

  return (
    <MainContainer>
      <PageHeading>{action === "signin" ? "Sign In" : "Create Account"}</PageHeading>

      <form onSubmit={onSubmit} className="h-full mx-2 mb-2 flex flex-col gap-2">
        <input className={inputStyles} type="email" placeholder="Email..." />
        <input className={inputStyles} type="password" placeholder="Password..." />
        <input
          className={inputStyles + (action === "signin" ? "hidden" : "")}
          type="password"
          placeholder="Confirm Password..."
        />
        <Button type="submit" className="bg-green-600 text-white">
          {action === "signin" ? "Sign In" : "Sign Up"}
        </Button>
      </form>
      <Button
        className="bg-blue-500 text-white m-2"
        onClick={() => setAction((prev) => (prev === "signin" ? "signup" : "signin"))}
      >
        {action === "signin" ? "Need an account? Create one" : "Already have an account? Sign in"}
      </Button>

      <Navbar />
    </MainContainer>
  );
};

export default SignIn;
