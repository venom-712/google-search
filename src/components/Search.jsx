import React, { useEffect, useState } from "react";
import Links from "./Links";
import { useDebounce } from "use-debounce";
import { useResultContext } from "../context/ResultContextProvider";

// send request after a certain interval of time so that we dont end up spamming the server

const Search = () => {
  const { searchTerm, setSearchTerm } = useResultContext();
  const [debouncedValue] = useDebounce(searchTerm, 300);

  useEffect(() => {
    if (debouncedValue) {
      setSearchTerm(debouncedValue);
    }
  }, [debouncedValue]);

  return (
    <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
      <input
        type="text"
        placeholder="Google Search or type url"
        onChange={(e) => setSearchTerm(e.target.value)}
        className="sm:w-96 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
      />
      {!searchTerm && (
        <button
          type="button"
          className="absolute top-1.5 right-4 text-2xl text-gray-500"
          onClick={() => setSearchTerm("")}
        >
          x
        </button>
      )}
      <Links />
    </div>
  );
};

export default Search;
