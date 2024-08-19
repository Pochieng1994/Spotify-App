function SearchResultsShow({song}) {

  const renders = song.album.images;

  //console.log(renders);

  const image = renders.filter((render, index) => {
    return index <= 0 ? render.url : null;
  })

  //console.log(image[0].url)

  const image2 = image[0].url
  console.log(image2)




  return (
    <div>
      <img src ={image2}></img>
    </div>
  )
}

export default SearchResultsShow;