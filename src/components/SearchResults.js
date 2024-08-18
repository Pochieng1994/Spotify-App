import { useState } from "react";
import SearchResultsShow from "./SearchResultsShow";

function SearchResults({songs}) {



  return(
    <div>
      {songs.length}
    </div>
  )
}

export default SearchResults;