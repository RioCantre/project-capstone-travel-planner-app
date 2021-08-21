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

const apiKey = {
    geoName = process.env.GeoUsername,
    weatherBit = process.env.WbKey,
    pixabay = process.env.PixKey
}

// GET route
app.get('/',  (req, res) => {
    res.sendFile('dist/index.html');
})

app.get('/getKeys', (req, res) => {
    res.send(apiKey);
})

app.post('/addEntry', (req, res) => {
    const entry = req.body;
    projectData = entry
    res.send(projectData)
})


// designates what port the app will listen to for incoming requests
const port = process.env.PORT || 5000;
app.listen(port, () => {
 console.log('app listening on port 5000!')
})

