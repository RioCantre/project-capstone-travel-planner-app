const fetch = require('node-fetch');
const geoNamesURL = 'http://api.geonames.org/searchJSON?q';
const weatherBitURL = 'https://api.weatherbit.io/v2.0/forecast/daily?';
const pixURL = 'https://pixabay.com/api/?';
require('dotenv').config();

const geonamesAPI = async (city = "") => {
    const username = process.env.GeoUsername;
    const url = `${geoNamesURL}=${city}&maxRows=1&username=${username}`;
    const res = await fetch(url);
    try {
        const data = await res.json();
        return data;
    } catch (error) {
        console.log("Error:", error);
    }
};

const weatherbitAPI = async (lat, lon) => {
  const api_key = process.env.WbKey;
  const url = `${weatherBitURL}&lat=${lat}&lon=${lon}&days=3&key=${api_key}`;
  const res = await fetch(url);
  try {
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error:", error);
  }
};

const pixabayAPI = async (city, country) => {
  const api_key = process.env.PixKey;
  const url = `${pixURL}key=${api_key}&q=${city}+${country}&image_type=photo`;
  const res = await fetch(url);
  try {
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error:", error);
  }
};


module.exports = {
    geonamesAPI,
    weatherbitAPI,
    pixabayAPI
}








