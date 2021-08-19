import './styles/main.scss';

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
    img,
    img2,
    img3
}
