import './styles/main.scss';

import image from './assets/img1.png';
import image2 from './assets/img2.png'

const img = document.querySelector('.main-img');
const img2 = document.querySelector('.img-footer');
img.src = image;
img2.src = image2;


export {
    img,
    img2
}
