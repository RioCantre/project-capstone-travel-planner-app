import { postData, generateForm } from './app';
import { updateUI } from './createTrip';


export async function generateEntry(event) {
    event.preventDefault();
    let city = document.getElementById('destination').value;
    let departDate = document.getElementById('depart-date').value;
    let returnDate = document.getElementById('return-date').value;



    if (generateForm(city, departDate, returnDate)) {
        
        let daysLeft = (Date.now(), departDate);
        postData('/addEntry', {
              location: city,
              date: departDate,
              daysLeft: daysLeft

            })
                .then((data) => {
                    postData('/location');
                    postData('/weather');
                    postData('/photo');
                    updateUI(data);
                });

    } else {
        alert('Details are required to proceed.');
        return false;
    }

};
