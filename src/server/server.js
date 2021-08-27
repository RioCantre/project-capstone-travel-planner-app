var path = require('path')
const fetch = require('node-fetch')
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
  projectData.days = req.body.days;
  projectData.daysLeft = re.body.daysLeft;

  console.log(projectData);
  res.send('ok');
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
