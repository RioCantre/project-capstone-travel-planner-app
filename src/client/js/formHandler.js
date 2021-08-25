import { getData, postData } from './app';

const dataResult = document.querySelector('#city-list');


document.getElementById('generate').addEventListener('click', generateEntry);

export async function generateEntry(event) {
    event.preventDefault();
    let city = document.getElementById('city-to').value;
    let departDate = document.getElementById('depart-date').value;
    let arrivalDate = docuemnt.getElementById('arrival-date').value;

}