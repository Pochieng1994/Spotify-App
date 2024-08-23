function SearchResultsShow({song}) {

  const arrayOfImages = song.album.images;
  const trackUrl = song.external_urls.spotify;

  
  const image = arrayOfImages.filter((render, index) => {
    return index <= 0 ? render.url : null;
  })

  const imageUrl = image[0].url;

  const handleClick = () => {
    window.open(trackUrl, '_blank');
  }

  return (
    <div>
      <div onClick={handleClick}>
        <img src ={imageUrl}></img>
        <div>{song.name}</div>
        <div>Song &#8729; {song.artists[0].name}</div>
      </div>
    </div>
  )
}

export default SearchResultsShow;