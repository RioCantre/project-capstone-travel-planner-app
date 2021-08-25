import { getData, postData } from './js/app';
import './styles/main.scss';
import './js/formHandler'


import image from './assets/img1.png';
import image2 from './assets/img2.png';
import image3 from './assets/img3.png';

const img = document.querySelector('.main-img');
const img2 = document.querySelector('.img-footer');
const img3 = document.querySelector('.img-display');

img.src = image;
img2.src = image2;
img3.src = image3;

export {
    getData,
    postData
}