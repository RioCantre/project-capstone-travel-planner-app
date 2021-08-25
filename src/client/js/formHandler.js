import { getData, postData, showDaysLeft } from './app';

document.getElementById('generate').addEventListener('click', generateEntry);

export async function generateEntry(event) {
    event.preventDefault();
    let city = document.getElementById('city-to').value;
    let departDate = document.getElementById('depart-date').value;
    let returnDate = document.getElementById('return-date').value;

    if (city === '' || departDate === '' || returnDate === '') {
        alert('Details are required to proceed.');
        return false;
    } else {
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

            futureMinTemp = Math.floor(
                weatherData.data[futureWeather].min_temp
            );
            futureMaxTemp = Math.floor(
                weatherData.data[futureWeather].max_temp
            );
            futureTemp = weatherData.data[futureWeather].temp;
            futureIcon = weatherData.data[futureWeather].weather.icon;
        });

        await pixabayAPI(city, country).then((photo) => {
            photo = photo.hits[0].webformatURL;
        });
        updateUI();
        ResetValue();
    }
}