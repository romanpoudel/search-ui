import DetailSearch from "./components/DetailSearch";
import Search from "./components/Search";
import React, { useState, useRef, useEffect } from "react";

function App() {
  const [show, setShow] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShow(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    let keys = {
      ctrl: false,
      k: false,
    };

    function handleKeyDown(event) {
      if (
        event.key === "Control" &&
        !event.repeat &&
        !event.target.tagName.toLowerCase().match(/input|textarea/)
      ) {
        keys.ctrl = true;
      }
      if (
        event.key === "k" &&
        !event.repeat &&
        !event.target.tagName.toLowerCase().match(/input|textarea/)
      ) {
        keys.k = true;
      }

      if (keys.ctrl && keys.k) {
        setShow(true);
      }
      if (event.key === "Escape") {
        setShow(false);
      }
    }

    function handleKeyUp(event) {
      if (event.key === "Control") {
        keys.ctrl = false;
      }
      if (event.key === "k") {
        keys.k = false;
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  const [search, setSearch] = useState("");

  return (
    <div className="relative flex mt-6">
      <div
        className="mx-auto"
        onClick={() => {
          setShow((prev) => !prev);
        }}
      >
        <Search />
      </div>
      <div ref={wrapperRef} className="absolute top-0 left-1/2 ml-[-230px] w-1/3">
        {show && <DetailSearch />}
      </div>
    </div>
  );
}

export default App;
