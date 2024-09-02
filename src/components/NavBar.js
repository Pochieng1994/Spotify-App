import myImage from '../images/Spotify 4.png';
import homeIcon from '../images/Home.png';
import searchIcon from '../images/Search-icon.png';
import '../css/NavBar.css';
import { VscLibrary } from "react-icons/vsc";
import { AiOutlinePlus } from "react-icons/ai";




function NavBar() {
  return (
    <div>
      <div className='div-1'>
          <nav>
            <ul>
              <li>
                <img src= {myImage} height='100px' width='100px'></img>
              </li>
              <li className='item-2'>
                <img src={homeIcon} height='30px' width='30px'></img>
                <h4 className="homeHeader">Home</h4>
              </li>
              <li>
                <img src={searchIcon} height='25px' width='35px'></img>
                <h4 className='search'>Search</h4>
              </li>
            </ul>
          </nav>
      </div>

      <div className='div-2'>

        <nav>
          <ul>
            <li className='list-item'>
              <VscLibrary className='books'/>
              <h4 className='your-library'> Your Library </h4>
              <AiOutlinePlus className='plus' />
            </li>

            <li>
              <div className='div-3'>
                <h4>Create your first playlist</h4>
                <p>It's easy, we'll help you</p>
                <button className='button'>Create playlist</button>
              </div>
            </li>

            <li>
              <div className='div-4'>
                <h4>Let's find some podcasts to follow</h4>
                <p>We'll keep you updated on new episodes</p>
                <button className='button-2'>Browse podcasts</button>
              </div>
            </li>

            <li></li>
            <li></li>
            <li></li>
          </ul>
        </nav>

      </div>
    </div>
  )
}

export default NavBar;