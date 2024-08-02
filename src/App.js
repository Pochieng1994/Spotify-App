import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import axios from "axios";
import qs from 'qs';

function App() {

  const clientID = process.env.REACT_APP_SPOTIFY_API_ID;
  const clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
  const authHeader = Buffer.from(`${clientID}:${clientSecret}`).toString('base64');
  const tokenEndpoint = 'https://accounts.spotify.com/api/token';
  

  const getAuthToken = async() => {
    
    const data = qs.stringify({grant_type: 'client_credentials'})
    
  }



  return (
  <div>
    <SearchBar/>
    <SearchResults/>
  </div>
  ) 
 }
 
 export default App;