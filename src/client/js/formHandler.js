import { showDaysLeft } from "./app";



document.getElementById('generate').addEventListener('click', generateEntry);

export async function generateEntry(event) {
    event.preventDefault();
    let city = document.getElementById('city-to').value;
    let departDate = document.getElementById('depart-date').value;
    let returnDate = document.getElementById('return-date').value;


    

       

    let daysLeft = showDaysLeft(Date.now(), departDate);


    departing = reformatDate(departDate);
    returning = reformatDate(returnDate);
    countdown = daysLeft;
    length = getDaysLeft(returnDate, departDate);
    id = Date.now();

    updateUI();
    removeEntry();

}



