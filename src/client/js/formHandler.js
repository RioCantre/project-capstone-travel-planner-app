import { getData, postData } from './app';

const dataResult = document.querySelector('#city-list');


async function handleSubmit(event) { 
    event.preventDefault()

    // check what text was put into the form field
    let city = document.getElementById('city-to').value;
    let departDate = document.getElementById('depart-date').value;
    let arrivalDate = docuemnt.getElementById('arrival-date').value;

}


function resetValues(){
    document.getElementById('city').value = '';
    document.getElementById('emotion').value = '';
    document.getElementById('feelings').value = '';

}