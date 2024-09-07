import '../css/HomePage.css';

function HomePage() {
  return(
    <div>
      <div>
        <h2 className='browse'>
          Browse All
        </h2>

        <div className="container">
          <div className="column">
            <div className="home-column-1">
              <h2 className='categories'>Music</h2>
            </div>
            <div className='home-2'>
              <h2 className='categories'>
                Live Events
              </h2>
            </div>
            <div className='home-3'>
              <h2 className='categories'>
                  Country
              </h2>
            </div>
            <div className='home-4'>
              <h2 className='categories'>
                Indie
              </h2>
            </div>
          </div>
          <div className="column">
            <div className="home-column-2">
              <h2 className='categories'>Podcasts</h2>
            </div>
            <div className='home-6'>
            <h2 className='categories'>Made For You</h2>
            </div>
            <div className='home-7'>
              <h2 className='categories'>Hip-Hop</h2>
            </div>
            <div className='home-8'>
              <h2 className='categories'>Podcast Charts</h2>
            </div>
          </div>
          <div className="column">
            <div className="home-column-3">
              <h2 className='categories'>Audiobooks</h2>
            </div>
            <div className='home-9'>
              <h2 className='categories'>New Releases</h2>
            </div>
            <div className='home-10'>
              <h2 className='categories'>Pop</h2>
            </div>
            <div className='home-11'>
              <h2 className='categories'>Podcast New Releases</h2>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default HomePage;