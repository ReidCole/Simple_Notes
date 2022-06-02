import { NextPage } from "next";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../components/Button";
import Input from "../components/Input";
import MainContainer from "../components/MainContainer";
import Navbar from "../components/Navbar";
import PageHeading from "../components/PageHeading";
import { signIn, signUp } from "../redux/authSlice";

const SignIn: NextPage = () => {
  const [action, setAction] = useState<"signin" | "signup">("signin");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmValue, setConfirmValue] = useState("");
  const [canSubmit, setCanSubmit] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (emailValue.length > 0 && passwordValue.length > 0) {
      if (action === "signin" || (action === "signup" && confirmValue.length > 0)) {
        setCanSubmit(true);
        console.log("true");
        return;
      }
    }
    setCanSubmit(false);
    console.log("false");
  }, [action, emailValue.length, passwordValue.length, confirmValue.length]);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (action === "signin") {
      // SIGN IN
      dispatch(signIn({ email: emailValue, password: passwordValue }));
    } else {
      // SIGN UP
      dispatch(signUp({ email: emailValue, password: passwordValue }));
    }
  }

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
