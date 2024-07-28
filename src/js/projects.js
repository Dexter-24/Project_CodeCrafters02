

import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/keyboard';

const projectsButtonNext = document.querySelector('.projects-button-slider-next')
const projectsButtonPrev = document.querySelector('.projects-button-slider-prev')
const projectsSwiperElement = document.querySelector('.projects-swiper-container')

const swiperProjects = new Swiper('.projects-swiper-container' , {
    modules: [Keyboard, Mousewheel, Navigation],
    speed: 800,
    loop: true,
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

projectsButtonNext.addEventListener('click', () => {
    swiperProjects.slideNext();
});

projectsButtonPrev.addEventListener('click', () => {
    swiperProjects.slidePrev();
});

projectsSwiperElement.addEventListener('keydown', function (event) {
    event.preventDefault();
    if (event.key === 'Tab') {
        swiperProjects.slideNext();
    } else {
        swiperProjects.slidePrev();
    }
});