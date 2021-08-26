import { generateForm } from "./app";

document.getElementById('generate').addEventListener('click', generateEntry);

export async function generateEntry(event){
    event.preventDefault();
    let city = document.getElementById('city-to').value;
    let departDate = document.getElementById('depart-date').value;
    let returnDate = document.getElementById('return-date').value;

    if (generateForm(city, departDate, returnDate)) {
    
        await geonamesAPI(to).then((geoData) => {
            city = geoData.geonames[0].name;
            country = geoData.geonames[0].countryName;
            lat = geoData.geonames[0].lat;
            lon = geoData.geonames[0].lng;
        });

        await weatherbitAPI(lat, lon).then((weatherData) => {
            currentMinTemp = Math.floor(weatherData.data[0].min_temp);
            currentMaxTemp = Math.floor(weatherData.data[0].max_temp);
            currentTemp = weatherData.data[0].temp;
            icon = weatherData.data[0].weather.icon;

            forecastMinTemp = Math.floor(
                weatherData.data[forecastWeather].min_temp
            );
            forecastMaxTemp = Math.floor(
                weatherData.data[forecastWeather].max_temp
            );
            forecastTemp = weatherData.data[forecastWeather].temp;
            forecastIcon = weatherData.data[forecastWeather].weather.icon;
        });

        await pixabayAPI(city, country).then((photo) => {
            photo = photo.hits[0].webformatURL;
        });

        let daysLeft = getDaysLeft(Date.now(), departDate);
        let forecastWeather = daysLeft < 15 ? daysLeft : 15;

        departing = reformatDate(departDate);
        returning = reformatDate(returnDate);
        countdown = daysLeft;
        length = getDaysLeft(returnDate, departDate);
        id = Date.now();

    } else {
        alert('Details are required to proceed.');
    }
}

export async function generateResult(entry, data, ui, id) {
    
}
