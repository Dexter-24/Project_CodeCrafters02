const navBar = document.querySelector('.nav-wraper');
const header = document.querySelector('header');
const hamburger = document.querySelector('.hamburger');
const menuTablet = document.querySelector('.menu-tablet');
const navLinks = document.querySelectorAll('.js-nav-link');
const navList = document.querySelector('.nav-list');
const nav = document.querySelector('.nav');
const btnOrder = document.querySelector('.order-project-btn');
const logo = document.querySelector('.logo');
const targetSection = document.querySelector("#projects")
const aboutSection = document.querySelector("#about-me")

const body = document.body;

window.addEventListener('click', handlerCloseTabletMenu);
window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('active');
    btnOrder.classList.add('active');
    nav.style.height = '80px';
    nav.style.paddingTop = '14px';

    navList.style.visibility = 'hidden';
    navList.style.opacity = '0';
    hamburger.style.alignSelf = 'center';
      hamburger.style.marginRight = '10px';
    logo.classList.add('active');
  } else {
    header.classList.remove('active');
    btnOrder.classList.remove('active');
    // console.log('test');
    logo.classList.add('active');
    
      nav.style.paddingTop = '10px';
      btnOrder.style.marginRight = '';
  }

    if (!header.classList.contains('active')) {
        logo.classList.remove('active');
        hamburger.style.alignSelf = '';
            // btnOrder.style.marginBottom = 'initial';
            // btnOrder.style.marginRight = '5px';
      
    }
    if (header.classList.contains('active')) {
      btnOrder.classList.add("active")
  }

});

// При клике на бургер-меню

hamburger.addEventListener('click', function () {
  // Добавляем или удаляем класс active для бургер-меню
  hamburger.classList.toggle('active');
  if (hamburger.classList.contains('active')) {
    body.classList.add('body-no-scroll');
    navList.style.visibility = 'visible';
      navList.style.opacity = '1';

  } else {
      body.classList.remove('body-no-scroll');
 
  }
  // Добавляем или удаляем класс active для навигационного меню
    navBar.classList.toggle('active');
});

menuTablet.addEventListener('click', function (evt) {
  navBar.classList.toggle('active');

  if (navBar.classList.contains('active')) {
    navList.style.visibility = 'visible';
    navList.style.opacity = '1';
  } else {
    navList.style.visibility = 'hidden';
    navList.style.opacity = '0';
  }
});

// Удаляем класс если клик был по ссылке

navLinks.forEach(element =>
  element.addEventListener('click', evt => {
    evt.preventDefault();
    const targetId = element.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    
    if (targetSection) {
        targetSection.scrollIntoView({ block: 'start', behavior: 'smooth' });
        console.log(targetId, targetSection);
      //  body.classList.remove('body-no-scroll');
      }
      navList.classList.add('active');
      if (!targetId === 'projects') {
          navList.classList.remove('active')
        
      }
    //   navList.style.backgroundColor = '';
    body.classList.remove('body-no-scroll');
    navBar.classList.remove('active');
    hamburger.classList.remove('active');
    // navList.classList.remove('active');
  })
)

// const callback = (entries, observer) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       console.log(`Секция с ID ${entry.target.id} попала в область видимости!`);
//       navList.classList.add('active');
//     } else {
//       console.log(`Секция с ID ${entry.target.id} покинула область видимости.`);
//       navList.classList.remove('active');
//     }
//   });
// };

// const options = {
//   root: null, // Отслеживание относительно окна браузера
//   threshold: 0.5, // Срабатывает при любом пересечении
// };


// if (targetSection) {
//   const observer = new IntersectionObserver(callback, options);
//   observer.observe(targetSection);
//   // observer.observe(aboutSection)
// } else {
//   console.log('Секция с ID "projects" не найдена.');
// }
const callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navList.classList.add('active');
      console.log(`Секция с ID ${entry.target.id} попала в область видимости!`);
    } else {
      console.log(`Секция с ID ${entry.target.id} покинула область видимости.`);
      navList.classList.remove('active');
    }
  });
};

// Настройки для IntersectionObserver
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3,
};

// Получаем секции по их ID
const sections = ['projects', 'about-me'];
const observer = new IntersectionObserver(callback, options);

// Добавляем каждую секцию в наблюдатель
sections.forEach(id => {
  const section = document.getElementById(id);
  if (section) {
    observer.observe(section);
  }
});



function handlerCloseTabletMenu(evt) {
  if (!navBar.contains(evt.target) && !hamburger.contains(evt.target)) {
    if (navBar.classList.contains('active')) {
      navBar.classList.remove('active');
      navList.style.visibility = 'hidden';
      navList.style.opacity = '0';
    }
  }
}

// событие для кликабкльности айтемов в меню
document.querySelectorAll('.nav-items').forEach(item => {
  item.addEventListener('click', event => {
    const link = item.querySelector('.nav-link');
    if (link) {
      link.click();
    }
  });
});
