import '../css/SearchResultsShow.css';

function SearchResultsShow({song}) {

  const arrayOfImages = song.album.images;
  const trackUrl = song.external_urls.spotify;

//I was filtering for the first image in the array of images in regards to size
//Since every song came with the same image in different sizes
  const image = arrayOfImages.filter((render, index) => {
    return index <= 0 ? render.url : null;
  })



  const imageUrl = image[0].url;

  const handleClick = () => {
    window.open(trackUrl, '_blank');
  }

  return (
    <div>
      <div className='results-div-1'>
        <div onClick={handleClick}>
          <img className='image' src ={imageUrl} width='100px' height='100px'></img>
          <div className='song-artist'>
              <div className='name'>{song.name}</div>
              <div className='artist-name'>{song.artists[0].name}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchResultsShow;