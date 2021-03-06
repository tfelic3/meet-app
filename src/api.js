import axios from 'axios';
import { mockData } from './mock-data';
import NProgress from 'nprogress';


/**
 *
 * @param {*} events:
 * The following function should be in the “api.js” file.
 * This function takes an events array, then uses map to create a new array with only locations.
 * It will also remove all duplicates by creating another new array using the spread operator and spreading a Set.
 * The Set will remove all duplicates from the array.
 */

 const removeQuery = () => {
	if (window.history.pushState && window.location.pathname) {
	  var newurl =
		window.location.protocol +
		"//" +
		window.location.host +
		window.location.pathname;
	  window.history.pushState("", "", newurl);
	} else {
	  newurl = window.location.protocol + "//" + window.location.host;
	  window.history.pushState("", "", newurl);
	}
  };



  
const checkToken = async (accessToken) => {
	const result = await fetch(
	  `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`
	)
	  .then((res) => res.json())
	  .catch((error) => error.json());
  
	return result;
  };



  

  const getToken = async (code) => {
	const encodeCode = encodeURIComponent(code);
	const { access_token } = await fetch(
	  `https://ncgwduqn1e.execute-api.us-east-1.amazonaws.com/dev/api/token/${encodeCode}`
	)
	  .then((res) => {
		return res.json();
	  })
	  .catch((error) => error);
  
	access_token && localStorage.setItem("access_token", access_token);
  
	return access_token;
  };


  const extractLocations = (events) => {
	var extractLocations = events.map((event) => event.location);
	var locations = [...new Set(extractLocations)];
	return locations;
  };

export const getEvents = async () => {
	NProgress.start();

  if (window.location.href.startsWith("http://localhost")) {
    NProgress.done();
    return { events: mockData, locations: extractLocations(mockData) };
  }


  const token = await getAccessToken();

  if (token) {
    removeQuery();
    const url = `https://ncgwduqn1e.execute-api.us-east-1.amazonaws.com/dev/api/get-events/${token}`;
    const result = await axios.get(url);
	
	let locations = []
	

    if (result.data) {

	locations = extractLocations(result.data.event);

	
	console.log(result)

      localStorage.setItem("lastEvents", JSON.stringify(result.data));
     localStorage.setItem("locations", JSON.stringify(locations));
    }
    NProgress.done();
	return { events: result.data.event || [], locations };
} else { 
    return {
      events: [],
      locations: [],
    };
  


 
  }

}



export const getAccessToken = async () => {
	const accessToken = localStorage.getItem('access_token');
	const tokenCheck = accessToken && (await checkToken(accessToken));

	if (!accessToken || tokenCheck.error) {
	  await localStorage.removeItem("access_token");
	  const searchParams = new URLSearchParams(window.location.search);
	  const code = await searchParams.get("code");
	  if (!code) {
		const results = await axios.get(
		  "https://ncgwduqn1e.execute-api.us-east-1.amazonaws.com/dev/api/get-auth-url"
		);
		const { authUrl } = results.data;
		return (window.location.href = authUrl);
	  }
	  return code && getToken(code);
	}
	return accessToken;

}


export {extractLocations}
