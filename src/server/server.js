var path = require('path')
const express = require('express')
const dotenv = require('dotenv');
const cors = require('cors');
const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json());
app.use(express.static('dist'))
app.use(cors());

dotenv.config();
console.log(__dirname)

projectData = {};

const geoUrl = 'http://api.geonames.org/searchJSON?q';
const weatherUrl = 'https://api.weatherbit.io/v2.0/forecast/daily?';
const pixUrl = 'https://pixabay.com/api/?';
 
// GET route
app.get('/',  (req, res) => {
    res.sendFile('dist/index.html');
})

app.get('/test',  (req, res) => {
    res.send(mockAPIResponse)
})

app.get('/getKeys', (req, res) => {
    res.send(apiKey);
})

app.post('/addEntry', async (req, res) => {
    const entry = req.body.input;
    projectData = entry

    const GeoNames = `${geoUrl}=${destination}&maxRows=1&username=${process.env.GeoUsername}`;

    res.send(projectData)
})


// designates what port the app will listen to for incoming requests
const port = process.env.PORT || 5000;
app.listen(port, () => {
 console.log('app listening on port 5000!')
})

