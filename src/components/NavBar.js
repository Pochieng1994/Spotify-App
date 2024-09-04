import homeIcon from '../images/Home.png';
import '../css/NavBar.css';
import { VscLibrary } from "react-icons/vsc";
import { AiOutlinePlus } from "react-icons/ai";




function NavBar() {
  return (
    <div>
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

            <li>
              <p className='legal'>Legal</p>
              <p className='legal'>Safefy & Privacy Center</p>
              <p className='legal'>Privacy Policy</p>
            </li>
            <li>
              <p className='about'>Cookies</p>
              <p className='about'>About Ads</p>
              <p className='about'>Accessibility</p>
            </li>
            <li>
              <p className='notice'>Notice at Collection</p>
              <p className='notice'>Your Privacy Choices</p>
            </li>
            <li>
              <p className='cookie'>Cookies</p>
            </li>
          </ul>
        </nav>

      </div>
    </div>
  )
}

export default NavBar;