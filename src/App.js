import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import axios from "axios";
import { useState } from "react";
import qs from 'qs';
import { Buffer } from "buffer";


function App() {

  const [songs, setSongs] = useState([]);

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
        limit: 5,
      }
    })

    console.log(result.data.tracks.items)


    setSongs(result.data.tracks.items);
  }







  return (
  <div>
    <SearchBar onSubmit = {getSong}/>
    <SearchResults songs ={songs}/>
  </div>
  ) 
 }
 
 export default App;