import { postData, showDaysLeft, getData } from './app';
import { updateUI } from './createTrip';


export async function generateEntry(event) {
    event.preventDefault()

    let start = document.getElementById('start').value;
    let city = document.getElementById('destination').value;
    let departDate = document.getElementById('depart-date').value;
    let returnDate = document.getElementById('return-date').value;




        
    let daysLeft = showDaysLeft(Date.now(), departDate);

    await postData('http://localhost:5000/addEntry', {
        city: city,
        date: departDate,
        daysLeft: daysLeft

    })
    await getData('http://localhost:5000/addLocation')
    await getData('http://localhost:5000/addWeather')
    await getData('http://localhost:5000/addPhoto')
    await updateUI('http://localhost:5000/all');

}
