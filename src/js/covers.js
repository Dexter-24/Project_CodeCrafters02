import img1 from "../img/covers/Cover1-min.jpg";
import img1x2 from "../img/covers/Cover1@2x-min.jpg";
import img2 from "../img/covers/Cover2-min.jpg";
import img2x2 from "../img/covers/Cover2@2x-min.jpg";
import img3 from "../img/covers/Cover3-min.jpg";
import img3x2 from "../img/covers/Cover3@2x-min.jpg";
import img4 from "../img/covers/Cover4-min.jpg";
import img4x2 from "../img/covers/Cover4@2x-min.jpg";
import img5 from "../img/covers/Cover5-min.jpg";
import img5x2 from "../img/covers/Cover5@2x-min.jpg";
import img6 from "../img/covers/Cover6-min.jpg";
import img6x2 from "../img/covers/Cover6@2x-min.jpg";
import img7 from "../img/covers/Cover7-min.jpg";
import img7x2 from "../img/covers/Cover7@2x-min.jpg";
import img8 from "../img/covers/Cover8-min.jpg";
import img8x2 from "../img/covers/Cover8@2x-min.jpg";
import img9 from "../img/covers/Cover9-min.jpg";
import img9x2 from "../img/covers/Cover9@2x-min.jpg";
import img10 from "../img/covers/Cover10-min.jpg";
import img10x2 from "../img/covers/Cover10@2x-min.jpg";

const images = {
    'js-list-one': [
        { src: img6, src2x: img6x2, alt: 'Cover 6' }
    ],
    'js-list-two': [
        { src: img1, src2x: img1x2, alt: 'Cover 1' },
        { src: img2, src2x: img2x2, alt: 'Cover 2' }
    ],
    'js-list-three': [
        { src: img5, src2x: img5x2, alt: 'Cover 5' },
        { src: img10, src2x: img10x2, alt: 'Cover 10' },
        { src: img3, src2x: img3x2, alt: 'Cover 3' }
    ],
    'js-list-four': [
        { src: img4, src2x: img4x2, alt: 'Cover 4' },
        { src: img7, src2x: img7x2, alt: 'Cover 7' },
        { src: img8, src2x: img8x2, alt: 'Cover 8' }
    ],
    'js-list-five': [
        { src: img9, src2x: img9x2, alt: 'Cover 9' }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    const createListItems = (images) => {
        return images.map(image => `
            <li class="content-list-item">
                <picture>
                    <source srcset="${image.src2x} 2x, ${image.src}" media="(min-width: 375px)"/>
                    <img class="content-list-image" src="${image.src}" alt="${image.alt}" width="282" height="162"/>
                </picture>
            </li>
        `).join('');
    };

    Object.keys(images).forEach(listClass => {
        const list = document.querySelector(`.${listClass}`);
        if (list) {
            list.innerHTML = createListItems(images[listClass]);
        } else {
            console.warn(`Element with class ${listClass} not found.`);
        }
    });

    const section = document.querySelector('#covers');
    const lists = document.querySelectorAll('.content-list');

    function isInViewport(el) {
        const { top, bottom, left, right } = el.getBoundingClientRect();
        const { innerHeight, innerWidth } = window;
        return ( top < innerHeight && bottom > 0 && left < innerWidth && right > 0 );
    }

    function updateAnimation() {
        const playState = isInViewport(section) ? 'running' : 'paused';
        lists.forEach(list => list.style.animationPlayState = playState);
    }

    updateAnimation();
    window.addEventListener('scroll', updateAnimation);
});
