var path = require('path')
const dataAPIResponse = require('./dataAPI.js')
const express = require('express')
const cors = require('cors');
const app = express()
require('dotenv').config();

app.use(express.urlencoded({extended: false}))
app.use(express.json());
app.use(express.static('dist'))
app.use(cors());


console.log(__dirname)

 
// GET route
app.get('/',  (req, res) => {
    res.sendFile('dist/index.html');
})

app.get('/test',  (req, res) => {
    res.send(dataAPIResponse)
})


// Post data
app.post('/addEntry',  async (req, res) => {
    const trip = encodeURI(req.body.input);
    const response = await fetch(trip);
    const data = await response.json();
    res.send(data)
});


// designates what port the app will listen to for incoming requests
const port = process.env.PORT || 5000;
app.listen(port, () => {
 console.log('app listening on port 5000!')
})

