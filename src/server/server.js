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


// GET route
app.get('/',  (req, res) => {
    res.sendFile('dist/index.html');
})

projectData = {};

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

