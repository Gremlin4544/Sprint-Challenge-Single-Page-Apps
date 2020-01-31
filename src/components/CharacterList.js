import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  // TODO: Add useState to track data from useEffect
  const [char, setChar] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!    
    const getChars = () => {
      axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        setChar(response.data.results);
      })
      .catch(error => {
        console.log('Server error', error);
      })
    }
  }, []);

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
      {char.map(char => (
        <CharacterCard key={char.id} char={char} />
      ))}
    </section>
  );
}

export default CharacterList;
