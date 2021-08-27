var path = require('path')
global.fetch = require('node-fetch')
const express = require('express')
const cors = require('cors');
const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json());
app.use(express.static('dist'))
app.use(cors());
require('dotenv').config();

const geoNamesURL = 'http://api.geonames.org/searchJSON?q';
const weatherBitURL = 'https://api.weatherbit.io/v2.0/forecast/daily?';
const pixURL = 'https://pixabay.com/api/?';

projectData = {};

app.get('/geoName', async (req, res) => {
  const username = process.env.GeoUsername;
  const geoUrl = `${geoNamesURL}=${city}&maxRows=1&username=${username}`;
  const res = await fetch(geoUrl);
  try {
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error:", error);
  }

});
     
app.get('/weatherBit', async (req, res) => {
  const api_key = process.env.WbKey;
  const weatherUrl = `${weatherBitURL}&lat=${lat}&lon=${lon}&days=3&key=${api_key}`;
  const res = await fetch(weatherUrl);
  try {
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error:", error);
  }

});

app.get('/photo', async (req, res) => {

  const api_key = process.env.PixKey;
  const pixurl = `${pixURL}key=${api_key}&q=${city}+${country}&image_type=photo`;
  const res = await fetch(pixurl);
  try {
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error:", error);
  }
  
});

app.get('/',  (req, res) => {
    res.sendFile('dist/index.html');
})

app.get('/TravelInfo', (req, res) => {
    res.send(projectData);
});



var json = {
    'title': 'test json response',
    'message': 'this is a message',
    'time': 'now'
}

module.exports = json;








