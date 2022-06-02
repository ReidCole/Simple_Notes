import "../styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap-icons/font/bootstrap-icons.css";
import UIContextProvider from "../context/UIContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UIContextProvider>
      <Component {...pageProps} />
    </UIContextProvider>
  );
}

export default MyApp;
