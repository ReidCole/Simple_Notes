// export const AuthContext = React.createContext<AuthContextType | null>(null);
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../pages/_app";
import { actions as authActions } from "../redux/authReducer";

type Props = {
  children: React.ReactNode;
};

const AuthContainer: React.FC<Props> = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(
      auth,
      (user) => {
        console.log("auth state changed", user);
        let payload;
        if (user === null) {
          payload = { user: null };
        } else {
          payload = { user: { email: user.email } };
        }

        dispatch({ type: authActions.setUser, payload });
      },
      (err) => {
        console.error(err);
      }
    );
  });

  return <>{children}</>;
};

// type AuthContextType = {

// }

export default AuthContainer;
