import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import SaveButtons from "../components/SaveButtons";

const Home: NextPage = () => {
  const [windowHeight, setWindowHeight] = useState<number>(0);

  useEffect(() => {
    function callback() {
      setWindowHeight(window.innerHeight);
    }
    window.addEventListener("resize", callback);
    callback();
    return () => window.removeEventListener("resize", callback);
  }, []);

  if (windowHeight === 0) return <></>;

  return (
    <main className="flex flex-col" style={{ height: `${windowHeight}px` }}>
      <h1 className="text-2xl font-bold text-center my-2">New Note</h1>

      <div className="mx-2 mb-2 h-full flex flex-col">
        <input
          type="text"
          title="Note Title"
          placeholder="Title..."
          className="bg-gray-200 w-full border border-gray-300 rounded-lg focus-visible:outline-none focus-visible:border-gray-600 p-2 mb-2 transition-colors"
        />
        <textarea
          className="bg-gray-200 w-full border border-gray-300 rounded-lg focus-visible:outline-none focus-visible:border-gray-600 p-2 resize-none h-full transition-colors"
          title="Note Body"
          placeholder="Body..."
        ></textarea>
      </div>

      <SaveButtons />

      <Navbar />
    </main>
  );
};

export default Home;
