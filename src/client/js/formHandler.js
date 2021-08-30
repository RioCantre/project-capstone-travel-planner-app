import { postData, showDaysLeft } from './app';
import { updateUI } from './createTrip';


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

}
