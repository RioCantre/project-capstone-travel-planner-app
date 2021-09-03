
let travelList = document.querySelector('#city-list');

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
                                    Departure: ${data.tripDate}
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
                                            <span class="cel-temp">${data.min_temp} ℃</span> |
                                            <span class="fah-temp"> ${data.max_temp} ℉</span>
                                            <div id="wind"> wind: ${data.rain}%</div>
                                            <div id="rain"> rain: ${data.wind}%</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div id="icon">
                                            <img src="https://www.weatherbit.io/static/img/icons/${data.icon2}.png" alt="weather icon">
                                        </div>
                                        <div id="day-temp">
                                            <span class="cel-temp">${data.min_temp2} ℃</span> |
                                            <span class="fah-temp"> ${data.max_temp2} ℉</span>
                                            <div id="wind"> wind: ${data.rain2}%</div>
                                            <div id="rain">rain: ${data.wind2}%</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div id="icon">
                                            <img src="https://www.weatherbit.io/static/img/icons/${data.icon3}.png" alt="weather icon">
                                        </div>
                                        <div id="day-temp">
                                            <span class="cel-temp">${data.min_temp3} ℃</span> |
                                            <span class="fah-temp"> ${data.max_temp3} ℉</span>
                                            <div id="wind">wind: ${data.rain3}%</div>
                                            <div id="rain">rain: ${data.wind3}%</div>
                                        </div>
                                    </li>
                                </ul>
                            </div id="remove-list" >
                                <button class="remove-button" onclick="document.getElementById('travel-card').style.display='none'"  type="submit">
                                    Remove this trip
                                </button>
                        </div>
                    </div> `;
        
        travelList.innerHTML = trip;
        
    } catch (error) {
        console.log('error', error);
    }     

}
