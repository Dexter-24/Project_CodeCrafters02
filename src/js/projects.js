

import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';


const swiperProjects = new Swiper('.projects-swiper-container' , {
    modules: [Keyboard, Mousewheel, Navigation,],
    speed: 800,
    slidesPerView: 1,
    navigation: {
        nextEl: '.projects-button-slider-next',
        prevEl: '.projects-button-slider-prev',
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
pageUpDown: true,
    },
    mousewheel: {
        invert: true,
    },
    slideToClickedSlide: true,
});

