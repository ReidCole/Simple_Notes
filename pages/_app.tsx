import "../styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap-icons/font/bootstrap-icons.css";
import UIContextProvider from "../context/UIContext";
import { Provider } from "react-redux";
import { store } from "../redux";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, User } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AuthContainer from "../components/AuthContainer";
const firebaseConfig = {
  apiKey: "AIzaSyCkUS_we7xqr_q_9POaYDBiFd-J5x--pZ8",
  authDomain: "simplenotes-project.firebaseapp.com",
  projectId: "simplenotes-project",
  storageBucket: "simplenotes-project.appspot.com",
  messagingSenderId: "682875453926",
  appId: "1:682875453926:web:661d79ea662ae4545a1627",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AuthContainer>
        <UIContextProvider>
          <Component {...pageProps} />
        </UIContextProvider>
      </AuthContainer>
    </Provider>
  );
}

export default MyApp;
