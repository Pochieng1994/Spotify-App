import { useState } from "react";
import '../css/SearchBar.css';

function SearchBar ({onSubmit}) {
  const [term, setTerm] = useState('')

  const handleFormSubmit = (e) => {
    onSubmit(term);
    e.preventDefault();
  }

  const handleChange = (e) => {
    setTerm(e.target.value);
  }



  return(
    <div>
      <form onSubmit={handleFormSubmit}>
        <input className="input" value={term} onChange={handleChange} placeholder="What do you want to play?"/>
      </form>
    </div>
  )
}

export default SearchBar;
