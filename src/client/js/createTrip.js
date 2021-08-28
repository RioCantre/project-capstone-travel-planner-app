

let element = document.querySelector('travel-card');

export async function updateUI(url) {
    const response = await fetch(url);

    try {
        const data = await response.json();
        
        
        

    let innerHTML = ` <div id="travel-card">
                    <div id="city-img">
                        <img src="${data.img}" alt="Destination">
                    </div>
                    <div id="destination-content">
                        <div id="destination-info">
                            <div id="city">
                                ${data.name}
                            </div>
                            <div id="country">
                                ${data.countryName}
                            </div>
                            <div id="date-depature">
                                Departure: ${data.departing}
                            </div>
                            <div id="days-remaining">
                                (in ${data.daysLeft} days away)
                            </div>
                        </div>
                        <div id="forecast">
                            <ul>
                                <li>
                                    <div id="icon">
                                        <img src=""https://www.weatherbit.io/static/img/icons/${data.weather.icon}.png" alt="weather icon">
                                    </div>
                                    <div id="day-temp">
                                        <div class="day">Mon</div>
                                        <span class="cel-temp">${Math.round(data.min_temp)} </span>|
                                        <span class="fah-temp"> ${Math.round(data.maxTemp)}</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <button id="remove-button" onclick="removeEntry()" type="submit">
                            Remove this trip
                        </button>
                    </div>
                </div> `;
    
        element.innerHTML = innerHTML;

        function removeEntry() {
            element.style.display = "none";
        }
    } catch (error) {
        console.log('error', error)
    }
}
