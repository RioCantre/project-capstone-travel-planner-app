// functions
import { postData, generateForm, reformatDate } from './js/app';
import { generateEntry } from './js/formHandler';
import { updateUI } from './js/createTrip';

// main event listener
document.getElementById('generate').addEventListener('click', generateEntry);

// style
import './styles/main.scss';
import image from './assets/img1.png';
import image2 from './assets/img2.png';
import image3 from './assets/img3.png';

// assigned images value
const img = document.querySelector('.main-img');
const img2 = document.querySelector('.img-footer');
const img3 = document.querySelector('.img-display');

// images equivalent src
img.src = image;
img2.src = image2;
img3.src = image3;


export {
    postData,
    generateEntry,
    updateUI,
    generateForm,
    reformatDate
}