import fetch from 'node-fetch';
import { postData, showDaysLeft } from './app';



export async function generateEntry(event) {
    event.preventDefault()

    let city = document.getElementById('destination').value;
    let departDate = document.getElementById('depart-date').value;
 
    let daysLeft = showDaysLeft(Date.now(), departDate);

    await postData('http://localhost:5000/addEntry', {
        city: city,
        date: departDate,
        daysLeft: daysLeft

    })
    await postData('http://localhost:5000/addLocation')
    await postData('http://localhost:5000/addWeather')
    await postData('http://localhost:5000/addPhoto')
    await updateUI('http://localhost:5000/all');
    await removeEntry('http://localhost:5000/delete')
    

}



let travelList = document.querySelector('#city-list');
let deleteTrip = document.querySelector('#remove-list');

export const updateUI = async (url) => {
    const response = await fetch(url);
    try {
        const data = await response.json();

        let trip = ` <div id="travel-card">
                        <div id="city-img">
                            <img src="${data.img}" alt="Destination">
                        </div>
                        <div id="destination-content">
                            <div id="destination-info">
                                <div id="city">
                                    ${data.city}
                                </div>
                                <div id="country">
                                    ${data.country}
                                </div>
                                <div id="date-depature">
                                    Departure: ${data.date}
                                </div>
                                <div id="days-remaining">
                                    (in ${data.daysLeft} days away)
                                </div>
                            </div>
                            <div id="forecast">
                                <ul>
                                    <li>
                                        <div id="icon">
                                            <img src="https://www.weatherbit.io/static/img/icons/${data.icon}.png" alt="weather icon">
                                        </div>
                                        <div id="day-temp">
                                            <div class="day">${data.date}</div>
                                            <span class="cel-temp">${data.min_temp} ℃</span> |
                                            <span class="fah-temp"> ${data.max_temp} ℉</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div id="icon">
                                            <img src="https://www.weatherbit.io/static/img/icons/${data.icon2}.png" alt="weather icon">
                                        </div>
                                        <div id="day-temp">
                                            <div class="day">${data.date2}</div>
                                            <span class="cel-temp">${data.min_temp2} ℃</span> |
                                            <span class="fah-temp"> ${data.max_temp2} ℉</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div id="icon">
                                            <img src="https://www.weatherbit.io/static/img/icons/${data.icon3}.png" alt="weather icon">
                                        </div>
                                        <div id="day-temp">
                                            <div class="day">${data.date3}</div>
                                            <span class="cel-temp">${data.min_temp3} ℃</span> |
                                            <span class="fah-temp"> ${data.max_temp3} ℉</span>
                                        </div>
                                    </li>
                                </ul>
                            </div id="remove-list" >
                                <button id="remove-button"  type="submit">
                                    Remove this trip
                                </button>
                        </div>
                    </div> `;
        
        travelList.innerHTML = trip;
        
    } catch (error) {
        console.log('error', error);
    }

        

}
        

    