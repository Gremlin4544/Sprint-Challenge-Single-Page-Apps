import React, { useState } from "react";

export default function SearchForm({ search }) {
 
  return (
    <section className="search-form">
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
    </section>
  );
}
