
const dataResult = document.querySelector('#city-list');


function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let city = document.getElementById('city-to').value;
    let departDate = document.getElementById('depart-date').value;
    let arrivalDate = docuemnt.getElementById('arrival-date').value;

    if (city === '' || departDate === '' || arrivalDate === '') {
        alert('Details are required to proceed.');
        return false;
    } else {
        console.log("::: Form Submitted :::")
        getTrip('baseURL, city, apiKey')
            .then((data) => {
                postData('/addEntry', {
                    data: data


                })
                showTrip();
                resetValues();
        })
        
    }
    
}

// Function to GET Web API Data
const getWeather = async (baseURL, city, apiKey) => {
    const res = await fetch(baseURL+city+apiKey);
    const data = await res.json();
    try {
        return {
            city: data.name,
            dt: showDateFormat(),
            icon: data.weather[0].icon,
            temp: Math.round(data.main.temp),
            fahTemp: Math.round((data.main.temp * 9)/5 + 32),
            description: data.weather[0].description,
        };
    } catch (error) {
        console.log('error', error);
    }
}

// Function to POST data
const postData = async(url = '', data = {}) => {
    const res = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    try {
        const getData = await res.json();
        return getData;
    } catch (error) {
        console.log('error', error);
    }

}


function resetValues(){
    document.getElementById('city').value = '';
    document.getElementById('emotion').value = '';
    document.getElementById('feelings').value = '';

}