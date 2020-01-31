import React, { useState } from "react";
import Styled from "styled-components";


const StyledSearchForm = Styled.div`
  form > label > input{
    margin-left:.5rem;
    padding:3px;
    
  }

`;

export default function SearchForm({ search }) {
 
  return (
    <section className="search-form">
    <StyledSearchForm>
     <form>
        <label htmlFor = "name">
        Search by Character Name</label>
          <input 
            id = 'name'
            type = 'text' 
            name = 'name'
            placeholder = '🔎 search'
            onChange = {(e) => search(e.target.value)} />
      </form>
      </StyledSearchForm>
    </section>
  );
}
