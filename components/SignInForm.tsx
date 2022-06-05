import { FormEvent, useEffect, useState } from "react";
import Button from "./Button";
import Input from "./Input";

type Props = {
  onSubmit: (email: string, password: string) => void;
  action: "signin" | "signup";
};

const SignInForm: React.FC<Props> = ({ onSubmit, action }) => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmValue, setConfirmValue] = useState("");
  const [canSubmit, setCanSubmit] = useState<boolean>(false);

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
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(emailValue, passwordValue);
      }}
      className="h-full mx-2 mb-2 flex flex-col gap-2"
    >
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

      <Button
        type="submit"
        className={canSubmit ? "bg-green-600 text-white" : ""}
        disabled={!canSubmit}
      >
        {action === "signin" ? "Sign In" : "Sign Up"}
      </Button>
    </form>
  );
};

export default SignInForm;
