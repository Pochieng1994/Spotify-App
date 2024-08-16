import { useState } from "react";

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
        <input value={term} onChange={handleChange}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default SearchBar;
