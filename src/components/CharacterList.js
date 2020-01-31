import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const search = (value) => {
    if (!value) {
      setSearchData(characters);
    } else {
      const filterdArr = characters.filter(char => {
        return char["name"].toLowerCase().search(value.toLowerCase()) > -1
      })
      setSearchData(filterdArr)
    }
  }
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get(`https://rickandmortyapi.com/api/character/`)
    .then(response => {
      setCharacters(response.data.results);
      setSearchData(response.data.results);
    })
  }, []);
  return (
    <section className="character-list">
      <h2>CHARACTERS</h2>
      <SearchForm search = {search} />
      {searchData.map(character => {
        return (
        <CharacterCard
          key = {character.id} 
          character = {character} />
      )})}
    </section>
  );
}


