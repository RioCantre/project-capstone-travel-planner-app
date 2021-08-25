const fetch = require('node-fetch');
const geoNamesURL = 'http://api.geonames.org/searchJSON?q';
const weatherBitURL = 'https://api.weatherbit.io/v2.0/forecast/daily?';
const pixURL = 'https://pixabay.com/api/?';
require('dotenv').config();

let dataAPI = async trip => {
    try {
        
        const geo = await fetch(`${geoNamesURL}=${destination}&maxRows=1&username=${process.env.GeoUsername}`);
        const { city, country, lat, lon } = geo.data.geonames[0];
        const [weather, pix] = await Promise.all([
            fetch(`${weatherBitURL}&lat=${lat}&lon=${lon}&days=3&key=${process.env.WbKey}`),
    
            fetch(`${pixURL}key=${process.env.PixKey}&q=${city}+${country}&image_type=photo`)
        
        ]);
        const photoData = pix.data;
    
        const destination = `${city} , ${country}`;
    
        const apiData = {
            trip: destination,
            weather: weather.data.data,
            photo: photoData
        };
        return apiData;
    } catch (error) {
        console.error(error);
    }
}

module.exports = dataAPI;













// let json = {
//     'title': 'test json response',
//     'message': 'this is a message',
//     'time': 'now'
// }

// module.exports = json
