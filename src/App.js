import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import HomePage from "./components/HomePage";
import axios from "axios";
import { useState } from "react";
import qs from 'qs';
import { Buffer } from "buffer"
import './css/App.css';
import NavBar from "./components/NavBar";
import { GoHome } from "react-icons/go";
import Spotify from './images/Spotify.png';








function App() {

  const [songs, setSongs] = useState([]);

  console.log(songs)

  const clientID = process.env.REACT_APP_SPOTIFY_API_ID;
  const clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
  const authHeader = Buffer.from(`${clientID}:${clientSecret}`).toString('base64');
  const tokenEndpoint = 'https://accounts.spotify.com/api/token';
  const data = qs.stringify({grant_type: 'client_credentials'});


  const getAuthToken = async() => {
    
    const response = await axios.post(tokenEndpoint,data, {
      headers: {
        'Authorization': `Basic ${authHeader}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })

    const accessToken = response.data.access_token;

    return accessToken

  }


  const getSong = async (term) => {

    const authTokenFunction = await getAuthToken();

    const result = await axios.get('https://api.spotify.com/v1/search', {
      headers: {
        'Authorization': ` Bearer ${authTokenFunction}`
      }, 
      params: {
        q: term,
        type: 'track',
        limit: 10,
      }
    })

    //console.log(result.data.tracks.items)


    setSongs(result.data.tracks.items);
  }


  return (
  <div className="main-div">

          <div className="header-div">
            <nav className="nav">
              <ul>
                <li className="spotify-image">
                  <img src = {Spotify} height='60px' width = '60px'></img>
                </li>
                <li>
                  <GoHome className="home"/>
                </li>
                <li className="search-bar">
                  <SearchBar onSubmit = {getSong}/>
                </li>
                <li className="sign-up">
                  Sign Up
                </li>
                <li>
                  <button className="log-in">Log in</button>
                </li>
              </ul>
            </nav>
          </div>

    <div className="container">

      <div className="column">
        <div className="column-div-1">
          <NavBar/>
        </div>
      </div>

      <div className="column">
        <div className="results-div">

          {songs.length > 0 ? <SearchResults songs ={songs}/> : <HomePage/>}
        </div>

        
          
        
      </div>
      
    </div>

    
    
  </div>
  ) 
 }
 
 export default App;