document.addEventListener('DOMContentLoaded', function() {
  const formInput = document.querySelector('.header__search-form');

  //слайдер
  const swiper = new Swiper('.hero__swiper-container', {
    slidesPerView: 1,
    loop: true,
    allowTouchMove: false,
    speed: 1400,
    autoplay: {
      delay: 3000,
    },

    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },

  });

  //бургер
  document.querySelector('.header__burger').addEventListener('click', () => {
    document.querySelector('.header__burger').classList.toggle('header__burger_active');
    document.querySelector('.header__nav').classList.toggle('header__nav_active');
    document.querySelector('.header__link-button').classList.toggle('header__link-button_active');
  })

  //реализация поиска
  document.querySelector('.search__img').addEventListener('click', () => {
    formInput.classList.toggle('header__search-form_active');
    document.querySelector('.header__logo').classList.toggle('header__logo_search');
    document.querySelector('.header__burger').classList.toggle('header__burger_search');
    document.querySelector('.header-top').classList.toggle('header-top_search');
  })

  //Закрытие поиска, при нажатии вне формы
  if (document.documentElement.clientWidth > 800) {
    const formSearchButn = document.querySelector('.header__search-button');
    document.addEventListener('click', (e) => {
      const target = e.target;
      const itsSearch = target == formInput || formInput.contains(target);
      const itsSearchButn = target == formSearchButn;
      const searchIsActive = formInput.classList.contains('header__search-form_active');

      if (!itsSearch && !itsSearchButn && searchIsActive) {
        formInput.classList.remove('header__search-form_active');
      }
    })
  }

  //выпадающее меню
  document.querySelectorAll('.search-item__button').forEach(item => {

    item.addEventListener('click', function() {
      let li = this.parentElement;
      li.classList.toggle('search-item__active');
      document.querySelectorAll('.search-item').forEach(el => (el != li ) ? el.classList.remove('search-item__active') : false)
    })

  })

  document.querySelectorAll('.dropdown__list').forEach(element => {
    new SimpleBar(element, {
      scrollbarMaxSize: 28,
    });
  })

  // gallery

  const swiperGallery = new Swiper('.right-block__swiper-container', {
    autoHeight: false,
    watchOverflow: true,

    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      // when window width is >= px
      0: {
        slidesPerView: 1,
        spaceBetween: 34,
        slidesPerGroup: 1,
        slidesPerColumn: 1,
      },
      651: {
        slidesPerView: 2,
        spaceBetween: 34,
        slidesPerGroup: 2,
        slidesPerColumn: 2,
      },
      1201: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 6,
        slidesPerColumn: 2,
      }
    }
  });

  const gallerySelect = document.querySelector('#gallery-select');
  const galleryChoices = new Choices(gallerySelect, {
    searchEnabled: false,
    duplicateItemsAllowed: false,
  });

  // country-tabs

  $(function() {
    document.querySelectorAll('.tab-list-item__country-button').forEach(function(countryBtn) {
      countryBtn.addEventListener('click', function(event) {
        const path = event.currentTarget.dataset.path;

        document.querySelectorAll('.right-block__list').forEach(function(tabContent) {
          tabContent.classList.remove('right-block__list_active');
        });
        document.querySelector(`[data-target="${path}"]`).classList.add('right-block__list_active');

        $(".accordion").accordion("refresh");
      });
    });
    $(".accordion").accordion({
      active: 'false',
      heightStyle: 'content'
    });
  });

  document.querySelectorAll('.columns__artist-button').forEach(function(countryBtn) {
    countryBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path;

      document.querySelectorAll('.columns__artist-button').forEach(function(tabBtn) {
        tabBtn.classList.remove('columns__artist-button_active');
      });

      document.querySelectorAll('.body__left-block').forEach(function(tabContent) {
        tabContent.classList.remove('body__left-block_active');
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('body__left-block_active');
      countryBtn.classList.add('columns__artist-button_active');
    });
  });

  document.querySelectorAll(".catalog__tab-list-item").forEach(item => {
    item.addEventListener("click", function() {
        let btn = this;
        btn.classList.add("catalog__tab-list-item_active");
        document.querySelectorAll(".catalog__tab-list-item").forEach(el => (el != btn) ? el.classList.remove("catalog__tab-list-item_active") : false);
    })
  })

  if (document.documentElement.clientWidth <= 800 && document.documentElement.clientWidth > 650) {
    document.querySelectorAll('.cards__swiper-slide')[2].classList.add('cards__swiper-slide_hidden');
  }

  if (window.matchMedia("(max-width: 650px)").matches) {
    document.querySelectorAll('.cards__swiper-slide_hidden').forEach(el => el.classList.add('cards__swiper-slide_visible'));
    document.querySelector('.cards__swiper-container').classList.add('slider-container');
    document.querySelector('.cards__swiper-wrapper').classList.add('swiper-wrapper');
    document.querySelectorAll('.cards__swiper-slide').forEach(el => el.classList.add('swiper-slide'));
    const swiperDevelopments = new Swiper('.cards__swiper-container', {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    document.querySelector('.category-heading').addEventListener('click', () => {
      document.querySelectorAll('.category-item').forEach(el => el.classList.toggle('category-item_visible'));
    })

    document.querySelectorAll('.category-item__label').forEach(el => {
      el.addEventListener('click', () => {
        el.parentNode.classList.toggle('category-item_active');
      })
    });

    document.querySelectorAll('.category-item').forEach(el => {
      el.addEventListener('click', () => {
        el.classList.toggle('category-item_active');
        const input = el.querySelector('.category-item__input');
        if (input.checked === false) {
          input.checked = true;
        } else {
          input.checked = false;
        }
      })
    });
  }

  document.querySelector('.cards__button').addEventListener('click', () => {
    document.querySelectorAll('.cards__swiper-slide_hidden').forEach(el => el.classList.toggle('cards__swiper-slide_visible'));
  })

  // edition

  if (window.matchMedia("(min-width: 651px)").matches) {

    const swiperEdition = new Swiper('.right-menu__swiper-container', {
      autoHeight: false,
      watchOverflow: true,

      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      breakpoints: {
        // when window width is >= px
        0: {
          slidesPerView: 1,
          spaceBetween: 34,
          slidesPerGroup: 1,
          slidesPerColumn: 1,
        },
        651: {
          slidesPerView: 2,
          spaceBetween: 34,
          slidesPerGroup: 2,
          slidesPerColumn: 1,
        },
        801: {
          slidesPerView: 2,
          spaceBetween: 49,
          slidesPerGroup: 2,
          slidesPerColumn: 1,
        },
        1201: {
          slidesPerView: 3,
          spaceBetween: 50,
          slidesPerGroup: 3,
          slidesPerColumn: 1,
        }
      }
    });
  }



})
