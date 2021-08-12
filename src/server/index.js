
const express = require('express')
const app = express()

// Initialize the main project folder
app.use(express.static('src/client'))

console.log(__dirname)



// GET route
app.get('/',  (req, res) => {
    res.sendFile('/clent/views/index.html');
})




// designates what port the app will listen to for incoming requests
const port = process.env.PORT || 5000;
app.listen(port, () => {
 console.log('app listening on port 5000!')
})

