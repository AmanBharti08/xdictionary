import React, { useState } from "react";

const Dictionary = () => {
  const [textSearch, setTextSearch] = useState("");
  const [meaning, setMeaning] = useState("");
  const data = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." },
  ];
  const handleClick = () => {
    const foundEntry = data.find(
      (entry) => entry.word.toLowerCase() === textSearch.toLowerCase()
    );

    if (foundEntry) {
      setMeaning(foundEntry.meaning);
    } else {
      setMeaning("Word not found in the dictionary.");
    }
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <div>
        <input
          type="text"
          value={textSearch}
          onChange={(e) => setTextSearch(e.target.value)}
        />
        <button onClick={handleClick}>Search</button>
      </div>
      <h4>Definition:</h4>
      {meaning && <p>{meaning}</p>}
    </div>
  );
};

export default Dictionary;
