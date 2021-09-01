var path = require('path')
const fetch = require("node-fetch");
const express = require('express')
const cors = require('cors');
const app = express()
require('dotenv').config();


app.use(express.urlencoded({extended: false}))
app.use(express.json());
app.use(express.static('dist'))
app.use(cors());

console.log(__dirname)

app.get('/',  (req, res) => {
    res.sendFile('dist/index.html');
})

app.get("/all", (req, res) => {
  res.send(projectData);
  console.log(projectData);
});

// Post data
app.post('/addEntry',(req, res) => {
  projectData.city = req.body.city;
  projectData.tripDate = req.body.tripDate;
  projectData.daysLeft = req.body.daysLeft;

  console.log(projectData);
  res.send(projectData);
});

// API url and keys 
const geoNamesURL = `http://api.geonames.org/searchJSON?q=`;
const username = `&username=${process.env.GeoUsername}`;

const weatherBitURL = `https://api.weatherbit.io/v2.0/forecast/daily?`;
const api_key =`${process.env.WbKey}`;

const pixURL = `https://pixabay.com/api/?key=${process.env.PixKey}`;

projectData = {};

app.post('/addLocation', async (req, res) => {
    const url = `${geoNamesURL}${projectData.city}${username}`;
    getData(url)
        .then((response) => {
        projectData.city = response.geonames[0].name;
        projectData.country = response.geonames[0].countryName;
        projectData.lat = response.geonames[0].lat;
        projectData.lon = response.geonames[0].lng;
        res.send(response);
    })
    .catch((error) => {
      res.send(JSON.stringify({ error: error }));
    });
})

app.post('/addWeather', async (req, res) => {
    const url = `${weatherBitURL}lat=${projectData.lat}&lon=${projectData.lon}&key=${api_key}`;
    getData(url).then((response) => {
        projectData.fDate = response.data[0].datetime;
        projectData.icon = response.data[0].weather.icon;
        projectData.min_temp = Math.floor(response.data[0].min_temp);
        projectData.max_temp = Math.floor(response.data[0].max_temp);

        projectData.fDate2 = response.data[1].datetime;
        projectData.icon2 = response.data[1].weather.icon;
        projectData.min_temp2 = Math.floor(response.data[1].min_temp);
        projectData.max_temp2 = Math.floor(response.data[1].max_temp);

        projectData.fDate3 = response.data[2].datetime;
        projectData.icon3 = response.data[2].weather.icon;
        projectData.min_temp3 = Math.floor(response.data[2].min_temp);
        projectData.max_temp3 = Math.floor(response.data[2].max_temp);
        res.send(response);
    })
});

app.post('/addPhoto', async (req, res) => {
    const url = `${pixURL}&q=${projectData.city}&image_type=photo&orientation=vertical&category=places&order=popular&per_page=3&pretty=true`;
    getData(url).then((response) => {
        projectData.img = response.hits[0].webformatURL; 
        res.send(response);
    })
});

const getData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("error", error);
    return error;
  }
};

app.post('/delete', (req, res) => {
  let { id } = req.body;
  projectData = projectData.remove((trip) => trip.id !== id);
});

// designates what port the app will listen to for incoming requests
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server is running on localhost: ${port}`)
})

module.exports = app;

