import SearchResultsShow from "./SearchResultsShow";

function SearchResults({songs}) {

  const renderedSongs = songs.map((song) => {
    return <SearchResultsShow key={song.id} song ={song}/>
  })

  return(
    <div>
      {renderedSongs}
    </div>
  )
}

export default SearchResults;