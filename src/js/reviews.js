import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

document.addEventListener('DOMContentLoaded', function () {
  const swiperContainer = document.querySelector('.reviews-swiper-container');
  const swiperPrev = document.querySelector('.swiper-button-prev');
  const swiperNext = document.querySelector('.swiper-button-next');

  const swiper = new Swiper(swiperContainer, {
    modules: [Navigation],
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: swiperNext,
      prevEl: swiperPrev,
    },
    keyboard: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      340: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });

  fetchReviews();

  async function fetchReviews() {
    try {
      const response = await fetch(
        'https://portfolio-js.b.goit.study/api/reviews'
      );
      if (!response.ok) {
        throw new Error('Failed to fetch reviews');
      }
      const data = await response.json();
      if (data.length === 0) {
        showNoReviewsMessage();
        return;
      }
      renderReviews(data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
      showErrorPopup('Failed to fetch reviews. Please try again later.');
    }
  }

  function renderReviews(reviews) {
    const reviewsList = reviews
      .map(
        review => `
        <div class="swiper-slide">
          <div class="review-card">
            <img src="${review.avatar_url}" alt="${review.author}'s avatar" class="review-avatar" />
            <div class="review-author">${review.author}</div>
            <div class="review-text">${review.review}</div>
          </div>
        </div>
      `
      )
      .join('');
    swiperContainer.querySelector('.swiper-wrapper').innerHTML = reviewsList;
    swiper.update();
    checkNavigationButtons();
  }

  function showNoReviewsMessage() {
    swiperContainer.querySelector('.swiper-wrapper').innerHTML =
      '<p class="not-found">No content available</p>';
    swiper.destroy();
  }

  function showErrorPopup(message) {
    alert(message);
  }

  function checkNavigationButtons() {
    if (swiper.isBeginning) {
      // Обновлено
      swiperPrev.classList.add('swiper-button-disabled');
    } else {
      swiperPrev.classList.remove('swiper-button-disabled');
    }

    if (swiper.isEnd) {
      // Обновлено
      swiperNext.classList.add('swiper-button-disabled');
    } else {
      swiperNext.classList.remove('swiper-button-disabled');
    }
  }

  swiper.on('slideChange', checkNavigationButtons);
});
