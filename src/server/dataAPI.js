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

const geoNamesURL = 'http://api.geonames.org/searchJSON?q=';
const username = `&username=${geoKe}`;

const weatherBitURL = 'https://api.weatherbit.io/v2.0/forecast/daily?&&city=';
const api_key =`&maxRows=1&username=${process.env.WbKey}`;

const pixURL = `https://pixabay.com/api/?key=${process.env.PixKey}`;

projectData = {};

app.get('/location', addLocation)
app.get('/weather', addWeather)
app.get('/photo', addPhoto)

function addLocation(req, res) {
  const url = `$${geoNamesURL}${city}${username}`;
  console.log(url);
  getData(url)
    .then((response) => {
      console.log(response.geonames[0]);
      projectData.city = response.geonames[0].city;
      projectData.lat = response.geonames[0].lat;
      projectData.lon = response.geoname[0].lng;
      res.send(true);
    })
    .catch((error) => {
      res.send(JSON.stringify({ error: error }));
    })
}

function addWeather(req, res) {
  const url = `${weatherBitURL}${city}&key=${api_key}`;
  console.log(url);
  getData(url)
    .then((response) => {
      const weatherData = response.data;

      weatherData.forEach((data) => {
        if (data.date === projectData.departDate) {
          projectData.icon = data.weatherBitURL.icon;
          projectData.temp = data.temp;
          res.send(true);
        } else return;
      });
 
    });
}
console.log(addWeather);

function addPhoto(req, res) {
  const url = `${pixURL}q=${city}&image_type=photo`;
  getData(url).then((response) => {
    projectData.img = response.hits[0].webformatURL;
    res.send(true);
  })
}


var json = {
  'title': 'test json response',
  'message': 'this is a message',
  'time': 'now'
}

module.exports = json;








