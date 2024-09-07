import SearchResultsShow from "./SearchResultsShow";
import '../css/SearchResults.css';

function SearchResults({songs}) {


    const renderedSongs = songs.map((song) => {
    return <SearchResultsShow key={song.id} song ={song}/>
  })

  return(
    <div>


      {
         songs.length > 0 ? (
          <div>
            <ul className="buttons-list">
              <li>
                <button className="all-buttons-1">All</button>
              </li>
              <li>
                <button className="all-buttons-2">Songs</button>
              </li>
              <li>
                <button className="all-buttons-3">Artists</button>
              </li>
              <li>
                <button className="all-buttons-4">Playlists</button>
              </li>
              <li>
                <button className="all-buttons-5">Albums</button>
              </li>
              <li>
                <button className="all-buttons-6">Podcasts & Shows</button>
              </li>
              <li>
                <button className="all-buttons-7">Genres & Moods</button>
              </li>
              <li>
                <button className="all-buttons-8">Profiles</button>
              </li>
              <li>
                <button className="all-buttons-9">AudioBooks</button>
              </li>
            </ul>

            <h2 className="song-header">
              Songs
            </h2>

          </div>
        ) : null
      }


      {renderedSongs}
    </div>
  )
}

export default SearchResults;