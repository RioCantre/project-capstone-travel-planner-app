import { postData, generateForm, postLocation, postWeather, postPhoto, showDaysLeft } from './app';
import { updateUI } from './createTrip';


export async function generateEntry(e) {
    e.preventDefault();
    let city = document.getElementById('destination').value;
    let departDate = document.getElementById('depart-date').value;
    let returnDate = document.getElementById('return-date').value;



    if (generateForm(city, departDate, returnDate)) {
        
        let daysLeft = showDaysLeft(Date.now(), departDate);

        postData('http://localhost:5000/addEntry', {
              location: city,
              date: departDate,
              daysLeft: daysLeft

            })
                .then((data) => {
                    postLocation('http://localhost:5000/location');
                    postWeather('http://localhost:5000/weather');
                    postPhoto('http://localhost:5000/photo');
                    updateUI(data);
                });

    } else {
        alert('Details are required to proceed.');
        return false;
    }

};
