var path = require('path')

const express = require('express')
const cors = require('cors');
const dataAPI = require('./dataAPI.js');
const app = express()
require('dotenv').config();

app.use(express.urlencoded({extended: false}))
app.use(express.json());
app.use(express.static('dist'))
app.use(cors());


console.log(__dirname)
let projectData = {};
 
// GET route
app.get('/',  (req, res) => {
    res.sendFile('dist/index.html');
})

// Post data
app.post('/addEntry', async (req, res) => {
    try {
        const trip = encodeURI(req.body.input);
        const response = await dataAPI(trip);
        res.send(response)
    } catch (error) {
        console.log("error", error);
        return error;
    }
});

// Delete trip entry from the server
app.post("/remove", (req, res) => {
  let { id } = req.body;
  projectData = projectData.filter((trip) => trip.id !== id);
});


// designates what port the app will listen to for incoming requests
const port = process.env.PORT || 5000;
app.listen(port, () => {
 console.log('app listening on port 5000!')
})

module.export = app;
