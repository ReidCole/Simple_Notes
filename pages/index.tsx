import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [inputRef, setInputRef] = useState<HTMLInputElement | null>(null);

  const foo = (text: string) => {
    if (!inputRef) return;
    inputRef.value = text;
  };

  return (
    <div>
      <button onClick={foo.bind(this, "world")}>Hello</button>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e);
        }}
      >
        <button type="submit">Submit</button>
      </form>
      <input
        type="text"
        ref={(el) => {
          console.log(el);
          setInputRef(el);
        }}
      />
    </div>
  );
};

export default Home;
