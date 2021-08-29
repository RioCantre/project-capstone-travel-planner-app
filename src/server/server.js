var path = require('path')
global.fetch = require('node-fetch')
const express = require('express')
const cors = require('cors');
const app = express()
require('dotenv').config();


app.use(express.urlencoded({extended: false}))
app.use(express.json());
app.use(express.static('dist'))
app.use(cors());

console.log(__dirname)

projectData = {};

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
  projectData.date = req.body.date;
  projectData.daysLeft = req.body.daysLeft;

  console.log(projectData);
  res.send('ok');
});

const geoNamesURL = 'http://api.geonames.org/searchJSON?q=';
const username = `&username=${process.env.GeoUsername}`;

const weatherBitURL = 'https://api.weatherbit.io/v2.0/forecast/daily?&&city=';
const api_key =`&maxRows=1&username=${process.env.WbKey}`;

const pixURL = `https://pixabay.com/api/?key=${process.env.PixKey}`;

projectData = {};

app.post('/location', addLocation)
app.post('/weather', addWeather)
app.post('/photo', addPhoto)


function addLocation(req, res) {
  const url = `$${geoNamesURL}${city}${username}`;
  console.log(url);
  postData(url)
    .then((response) => {
      console.log(response.geonames[0]);
      projectData.city = response.geonames[0].name;
      projectData.country = response.geonames[0].countryName;
      projectData.lat = response.geonames[0].lat;
      projectData.lng = response.geoname[0].lng;
      res.send(true);
    })
    .catch((error) => {
      res.send(JSON.stringify({ error: error }));
    })
}

function addWeather(req, res) {
  const url = `${weatherBitURL}${city}&key=${api_key}`;
  console.log(url);
  postData(url)
    .then((response) => {
      const weatherData = response.data;

      weatherData.forEach((data) => {
        if (data.date === projectData.departDate) {
          projectData.icon = data.weatherBitURL.icon;
          projectData.min_temp = data.min_temp;
          projectData.max_temp = data.max_temp;
          res.send(true);
        } else return;
      });
 
    });
}

function addPhoto(req, res) {
  const url = `${pixURL}q=${city}&image_type=photo&orientation=horizontal&category=travel&order=popular&per_page=3&pretty=true`;
  postData(url).then((response) => {
    projectData.img = response.hits[0].webformatURL;
    res.send(true);
  })
}


// designates what port the app will listen to for incoming requests
const port = process.env.PORT || 5000;
app.listen(port, () => {
 console.log('app listening on port 5000!')
})


