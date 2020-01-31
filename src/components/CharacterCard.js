import React from "react";

export default function CharacterCard( {character} ) {

  return (
    <div>
      <h3>Name: {character.name}</h3>
      <h4>Species: {character.species}</h4>
      <h5>Status: {character.status}</h5>
      <img src={character.image} alt={character.name} />
    </div>
  );
 
};
