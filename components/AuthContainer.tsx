import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../pages/_app";
import { authActions } from "../redux/authReducer";

type Props = {
  children: React.ReactNode;
};

const AuthContainer: React.FC<Props> = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(
      auth,
      (user) => {
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
  }, [dispatch]);

  return <>{children}</>;
};

export default AuthContainer;
