import fetch from "node-fetch";

export async function updateUI(url) {
    const response = await fetch(url);

    try {
        const data = await response.json();
        
        let element = document.querySelector('travel-card');
        
        

    let innerHTML = ` <div id="travel-card">
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
                                        <img src=""https://www.weatherbit.io/static/img/icons/${data.icon}.png" alt="weather icon">
                                    </div>
                                    <div id="day-temp">
                                        <div class="day">Mon</div>
                                        <span class="cel-temp">${data.mintemp}&#8451 </span>|
                                        <span class="fah-temp"> ${data.maxTemp}&#8451</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <button id="remove-button${data.id}">
                            Remove this trip
                        </button>
                    </div>
                </div> `;
    
        element.innerHTML = innerHTML;
    } catch (error) {
        console.log('error', error)
    }
}

export async function removeEntry(entry, id) {
    let removeBtn = document.getElementById(`remove-button${id}`);
    let form = document.getElementById('form');
 
    removeBtn.addEventListener('click', () => {
        removeEntry(entry, id);
        form.reset();
    });
}