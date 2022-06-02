import "../styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap-icons/font/bootstrap-icons.css";
import UIContextProvider from "../context/UIContext";
import { Provider } from "react-redux";
import { store } from "../redux";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <UIContextProvider>
        <Component {...pageProps} />
      </UIContextProvider>
    </Provider>
  );
}

export default MyApp;
