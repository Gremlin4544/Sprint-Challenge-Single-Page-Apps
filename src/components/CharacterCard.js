import React from "react";
import Styled from 'styled-components';

const Card = Styled.div`
  background-color:#663399;
  color:white;
  margin:.5rem;
  width:50%;
  text-align:center;
  
  box-sizing: border-box;
  a{
    text-decoration:none;
    color:white;
  }  
  div{
      width:100%;
      height:100%;
      
      padding-bottom:.5rem;
      margin:0;
    
      
    }
    
`;

export default function CharacterCard( {character} ) {

  return (
    <Card>
      <div>
        <h3>Name: {character.name}</h3>
        <h4>Species: {character.species}</h4>
        <h5>Status: {character.status}</h5>
        <img src={character.image} alt={character.name} />
        </div>
    </Card>
  );
 
};
