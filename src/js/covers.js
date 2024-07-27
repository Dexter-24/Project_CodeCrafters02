
    import img1 from "../img/Cover1-min.png"
    import img1x2 from "../img/Cover1@2x-min.png";
    import img2 from "../img/Cover2-min.png";
    import img2x2 from "../img/Cover2@2x-min.png";
    import img3 from "../img/Cover3-min.png";
    import img3x2 from "../img/Cover3@2x-min.png";
    import img4 from "../img/Cover4-min.png";
    import img4x2 from "../img/Cover4@2x-min.png";
    import img5 from "../img/Cover5-min.png";
    import img5x2 from "../img/Cover5@2x-min.png";
    import img6 from "../img/Cover6-min.png";
    import img6x2 from "../img/Cover6@2x-min.png";
    import img7 from "../img/Cover7-min.png";
    import img7x2 from "../img/Cover7@2x-min.png";
    import img8 from "../img/Cover8-min.png";
    import img8x2 from "../img/Cover8@2x-min.png";
    import img9 from "../img/Cover9-min.png";
    import img9x2 from "../img/Cover9@2x-min.png";
    import img10 from "../img/Cover10-min.png";
    import img10x2 from "../img/Cover10@2x-min.png";


const images = [
    { src: img1, src2x: img1x2, alt: 'Cover 1' },
    { src: img2, src2x: img2x2, alt: 'Cover 2' },
    { src: img3, src2x: img3x2, alt: 'Cover 3' },
    { src: img4, src2x: img4x2, alt: 'Cover 4' },
    { src: img5, src2x: img5x2, alt: 'Cover 5' },
    { src: img6, src2x: img6x2, alt: 'Cover 6' },
    { src: img7, src2x: img7x2, alt: 'Cover 7' },
    { src: img8, src2x: img8x2, alt: 'Cover 8' },
    { src: img9, src2x: img9x2, alt: 'Cover 9' },
    { src: img10, src2x: img10x2, alt: 'Cover 10' },
];

document.addEventListener('DOMContentLoaded', () => {
    const listContainers = document.querySelectorAll('.content-list.js-list');

    if (!listContainers.length) return;


    const createListItems = (images) => {
        return images.map(image => `
            <li class="content-list-item">
                <img src="${image.src}" srcset="${image.src2x} 2x" alt="${image.alt}" class="content-list-image"/>
            </li>
        `).join('');
    };

    listContainers.forEach(container => {
        container.innerHTML = createListItems(images);
    });


    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                listContainers.forEach(container => container.classList.remove('hidden'));
            } else {
                listContainers.forEach(container => container.classList.add('hidden'));
            }
        });
    }, { threshold: 0.1 });


    const marquee = document.querySelector('.marquee');
    if (marquee) {
        observer.observe(marquee);
    }
});


