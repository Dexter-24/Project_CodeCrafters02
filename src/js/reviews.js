import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

// Инициализация Swiper для секции Reviews
document.addEventListener('DOMContentLoaded', function () {
  const reviewsSwiperContainer = document.querySelector(
    '.reviews-swiper-container'
  );
  const reviewsSwiperPrev = document.querySelector(
    '.reviews-swiper-button-prev'
  );
  const reviewsSwiperNext = document.querySelector(
    '.reviews-swiper-button-next'
  );

  const reviewsSwiper = new Swiper(reviewsSwiperContainer, {
    modules: [Navigation],
    slidesPerView: 4,
    spaceBetween: 16,
    navigation: {
      nextEl: reviewsSwiperNext,
      prevEl: reviewsSwiperPrev,
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
    reviewsSwiperContainer.querySelector('.reviews-swiper-wrapper').innerHTML =
      reviewsList;
    reviewsSwiper.update();
    checkNavigationButtons();
  }

  function showNoReviewsMessage() {
    reviewsSwiperContainer.querySelector('.reviews-swiper-wrapper').innerHTML =
      '<p class="not-found">No content available</p>';
    reviewsSwiper.destroy();
  }

  function showErrorPopup(message) {
    alert(message);
  }

  function checkNavigationButtons() {
    if (reviewsSwiper.isBeginning) {
      reviewsSwiperPrev.classList.add('swiper-button-disabled');
    } else {
      reviewsSwiperPrev.classList.remove('swiper-button-disabled');
    }

    if (reviewsSwiper.isEnd) {
      reviewsSwiperNext.classList.add('swiper-button-disabled');
    } else {
      reviewsSwiperNext.classList.remove('swiper-button-disabled');
    }
  }

  reviewsSwiper.on('slideChange', checkNavigationButtons);
});
