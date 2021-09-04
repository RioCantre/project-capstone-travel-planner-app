import { updateUI } from './createTrip';
import { postData, generateForm, reformatDate } from './app';


export async function generateEntry(event) {
    event.preventDefault()
    
    

    const city = document.getElementById('destination').value;
    const departDate = document.getElementById('depart-date').value;
    const returnDate = document.getElementById('return-date').value;
 
    if (generateForm(city, departDate, returnDate)) {

        const tripDate = new Date(departDate);
        const endDate = new Date(returnDate);


        const countdownDate = new Date(endDate).getTime();
        const today = new Date().getTime();
        const difference = countdownDate - today;
        const daysLeft = Math.floor(difference / (1000 * 60 * 60 * 24));

        
        await postData('http://localhost:5000/addEntry', {
            city: city,
            tripDate: reformatDate(tripDate),
            daysLeft: daysLeft
            
        })
        await postData('http://localhost:5000/addLocation');
        await postData('http://localhost:5000/addWeather'); 
        await postData('http://localhost:5000/addPhoto');
        await updateUI('http://localhost:5000/all');
        form.reset()
    }else {
        alert('Details are required to proceed.');
        return false;
    }

}



    