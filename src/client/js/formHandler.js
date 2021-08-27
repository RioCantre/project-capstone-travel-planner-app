import { postData, postLocation, postPhoto, postWeather, generateForm } from './app';
import { updateUI , removeEntry} from './createTrip';



document.getElementById('generate').addEventListener('click', generateEntry);

export async function generateEntry(event) {
    event.preventDefault();
    let city = document.getElementById('city-to').value;
    let departDate = document.getElementById('depart-date').value;
    let returnDate = document.getElementById('return-date').value;



    if (generateForm(city, departDate, returnDate)) {
        
        let daysLeft = (Date.now(), departDate);

          await postData('http://localhost:5000/addEntry', {
              location: city,
              date: departDate,
              daysLeft: daysLeft

        });

         
        await postLocation('http://localhost:5000/location');
        await postWeather('http://localhost:5000/weather');
        await postPhoto('http://localhost:5000/image');
        await updateUI('http://localhost:5000/all');
        await removeEntry('http://localhost:5000/all');

    } else {
        alert('Details are required to proceed.');
        return false;
    }

};
