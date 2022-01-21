document.addEventListener('DOMContentLoaded', function () {
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
  document.querySelector('.header__search-img').addEventListener('click', () => {
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

    item.addEventListener('click', function (event) {
      const li = this.parentElement;
      li.classList.toggle('search-item__active');
      document.querySelectorAll('.search-item').forEach(el => (el != li) ? el.classList.remove('search-item__active') : false)
    })

  })

  document.querySelectorAll('.search-item__dropdown-list').forEach(element => {
    new SimpleBar(element, {
      scrollbarMaxSize: 28,
    });
  })

  // gallery

  const swiperGallery = new Swiper('.right-block__swiper-container', {
    autoHeight: false,
    watchOverflow: true,

    pagination: {
      el: '.gallery__swiper-pagination',
      type: 'fraction',
    },

    navigation: {
      nextEl: '.gallery__swiper-button-next',
      prevEl: '.gallery__swiper-button-prev',
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
        slidesPerView: 2,
        spaceBetween: 50,
        slidesPerGroup: 2,
        slidesPerColumn: 2,
      },
      1501: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3,
        slidesPerColumn: 2,
      }
    },

    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
      slideLabelMessage: 'Картина {{index}} из {{slidesLength}}',
    },
  });

  const gallerySelect = document.querySelector('#gallery-select');
  const galleryChoices = new Choices(gallerySelect, {
    searchEnabled: false,
    duplicateItemsAllowed: false,
  });

  // country-tabs

  $(function () {
    document.querySelectorAll('.catalog__country-button').forEach(function (countryBtn) {
      countryBtn.addEventListener('click', function (event) {
        const path = event.currentTarget.dataset.path;

        document.querySelectorAll('.catalog__accordion-list').forEach(function (tabContent) {
          tabContent.classList.remove('catalog__accordion-list_active');
        });
        document.querySelector(`[data-target="${path}"]`).classList.add('catalog__accordion-list_active');

        $(".accordion").accordion("refresh");
      });
    });
    $(".accordion").accordion({
      heightStyle: 'content'
    });
  });

  document.querySelectorAll('.catalog__columns-button').forEach(function (countryBtn) {
    countryBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path;

      document.querySelectorAll('.catalog__columns-button').forEach(function (tabBtn) {
        tabBtn.classList.remove('catalog__columns-button_active');
      });

      document.querySelectorAll('.catalog__left-block').forEach(function (tabContent) {
        tabContent.classList.remove('catalog__left-block_active');
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__left-block_active');
      countryBtn.classList.add('catalog__columns-button_active');
    });
  });

  document.querySelectorAll(".catalog__tab-list-item").forEach(item => {
    item.addEventListener("click", function () {
      let btn = this;
      btn.classList.add("catalog__tab-list-item_active");
      document.querySelectorAll(".catalog__tab-list-item").forEach(el => (el != btn) ? el.classList.remove("catalog__tab-list-item_active") : false);
    })
  })

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

  document.querySelector('.cards__button').addEventListener('click', function() {
    document.querySelectorAll('.cards__swiper-slide-js').forEach(el => el.classList.toggle('cards__swiper-slide_active'));
    this.remove();
  })

  // edition

  if (window.matchMedia("(min-width: 651px)").matches) {

    const swiperEdition = new Swiper('.right-menu__swiper-container', {
      autoHeight: false,
      watchOverflow: true,

      pagination: {
        el: '.edition__swiper-pagination',
        type: 'fraction',
      },

      navigation: {
        nextEl: '.edition__swiper-button-next',
        prevEl: '.edition__swiper-button-prev',
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
          slidesPerView: 2,
          spaceBetween: 60,
          slidesPerGroup: 2,
          slidesPerColumn: 1,
        },
        1501: {
          slidesPerView: 3,
          spaceBetween: 50,
          slidesPerGroup: 3,
          slidesPerColumn: 1,
        }
      },

      a11y: {
        prevSlideMessage: 'Предыдущий слайд',
        nextSlideMessage: 'Следующий слайд',
        slideLabelMessage: 'Издание {{index}} из {{slidesLength}}',
      },
    });
  } else {
    document.querySelector('.edition__slider-buttons').remove();
  }

  const partnersSwiper = new Swiper('.partners__swiper-container', {
    loop: false,

    breakpoints: {
      // when window width is >= px
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      651: {
        slidesPerView: 2,
        spaceBetween: 34,
        slidesPerGroup: 2
      },
      801: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 50,
      },
      1201: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
      }
    },

    navigation: {
      nextEl: '.partners__swiper-button-next',
      prevEl: '.partners__swiper-button-prev',
    },

    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
      slideLabelMessage: 'Компания {{index}} из {{slidesLength}}',
    },
  });

  tippy('#first-tooltip', {
    content: 'Пример современных тенденций - современная методология разработки',
    theme: 'purple',
    maxWidth: 284,
    trigger: 'click',
  });

  tippy('#second-tooltip', {
    content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
    theme: 'purple',
    maxWidth: 285,
    trigger: 'click',
  });

  tippy('#third-tooltip', {
    content: 'В стремлении повысить качество ',
    theme: 'purple',
    maxWidth: 250,
    trigger: 'click',
  });

  document.querySelectorAll('.projects__tooltip').forEach(item => item.addEventListener('click', () => {
    item.classList.toggle('projects__tooltip_active');
  }));

  // contacts

  if (window.matchMedia("(max-width: 650px)").matches) {
    const map = document.createElement('div');
    map.classList.add('contacts__map');
    map.id = 'map';
    document.querySelector('.contacts__content-address').after(map);
  }

  let center = [55.75955877956886, 37.61707877090922];
  let zoom = 15;
  if (window.matchMedia("(max-width: 1200px)").matches) {
    center = [55.75618766909688, 37.71600000852678];
    zoom = 14;
  }

  if (window.matchMedia("(max-width: 800px)").matches) {
    center = [55.75595666520723, 37.60958078613421];
    zoom = 14;

    document.querySelectorAll('.catalog__accordion-button').forEach(el => el.addEventListener('click', () => {
      document.querySelector(".body__left-block_active").scrollIntoView();
    }))
  }

  if (window.matchMedia("(max-width: 650px)").matches) {
    center = [55.75905317277174, 37.61162089171043];
    zoom = 14;
  }

  ymaps.ready(init);
  function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
      center: center,
      zoom: zoom,
      controls: [],
    }, {
      suppressMapOpenBlock: true,
      geolocationControlFloat: 'right',
    });

    var myPlacemark = new ymaps.Placemark([55.75846806898367, 37.60108849999989], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/contacts/marker.svg',
      iconImageSize: [20, 20],
    });

    if (window.matchMedia("(min-width: 1201px)").matches) {
      myMap.controls.add('zoomControl', {
        size: 'small',
        position: {
          top: '250px',
          right: '5px'
        }
      });

      myMap.controls.add('geolocationControl', {
        size: 'small',
        float: 'none',
        position: {
          top: '330px',
          right: '5px'
        }
      });
    }

    myMap.geoObjects.add(myPlacemark);
  };

  var telInput = document.querySelector('.call-form__input_tel');
  Inputmask("+7 (999) 999-99-99").mask(telInput);

  new JustValidate('.call-form', {
    rules: {
      name: {
        required: true
      },
      phone: {
        required: true,
        function: (name, value) => {
          const phone = telInput.inputmask.unmaskedvalue();
          return Number(phone) && phone.length === 10
        }
      },
    },
    submitHandler: function (form) {
      let formData = new FormData(form);
      document.querySelector('.order-modal').classList.add('modal-active');

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            document.querySelector('.order-modal').classList.add('modal-active');
          }
        }
      }

      xhr.open('POST', '../mail.php', true);
      xhr.send(formData);

      form.reset();
    },
    messages: {
      name: 'Недопустимый формат',
      phone: 'Недопустимый формат'
    },
    colorWrong: '#D11616',
  });

  // pop-up
  const swiperSlides = document.querySelector('.right-block__swiper-wrapper').querySelectorAll('.right-block__swiper-slide');
  const modal = document.querySelector('.gallery-modal');
  const body = document.querySelector('body');
  swiperSlides.forEach((el, index) => {
    el.addEventListener('click', () => {
      body.classList.add('body-blocked');
      const img = el.querySelector('.swiper-img');
      const link = img.getAttribute('src');
      modal.querySelector('img').src = link;
      modal.classList.add('modal-active');
      if (index === 2) {
        modal.querySelector('.gallery-modal__author').textContent = 'Казимир Малевич';
        modal.querySelector('.gallery-modal__picture-name').textContent = '“Женщина с граблями”';
        modal.querySelectorAll('time')[0].textContent = 1931;
        modal.querySelectorAll('time')[0].dateTime = 1931;
        modal.querySelectorAll('time')[1].textContent = 1932;
        modal.querySelectorAll('time')[1].dateTime = 1932;
        modal.querySelector('.gallery-modal__text').textContent = 'Картина из второй серии крестьянского цикла работ Казимира Малевича. Художник принялся за её создание в 1930-1931 годах, после того, как первый цикл был утерян после Берлинской и Варшавской выставок в 1927 году.';
      } else {
        modal.querySelector('.gallery-modal__author').textContent = 'Автор';
        modal.querySelector('.gallery-modal__picture-name').textContent = 'Название картины';
        modal.querySelectorAll('time')[0].textContent = 'xxxx';
        modal.querySelectorAll('time')[0].dateTime = '';
        modal.querySelectorAll('time')[1].textContent = 'xxxx';
        modal.querySelectorAll('time')[1].dateTime = '';
        modal.querySelector('.gallery-modal__text').textContent = 'Текст';
      }
    })
  })

  document.querySelectorAll('.modal-close-btn').forEach(el => el.addEventListener('click', () => {
    el.closest('.modal-active').classList.remove('modal-active');
    body.classList.remove('body-blocked');
  }));

  document.querySelectorAll('.modal').forEach(el => el.addEventListener('click', function(event) {
    if (!event.target.closest('.modal-content')) {
      this.classList.remove("modal-active");
      body.classList.remove('body-blocked');
    }
  }));

  document.querySelector('.modal-submit-button').addEventListener('click', function() {
    this.closest('.modal-active').classList.remove('modal-active');
    body.classList.remove('body-blocked');
  });

  window.addEventListener('click', e => {
    const target = e.target;
    if (document.querySelector('.search-item__active') != null && !document.querySelector('.search-item__active').contains(target)) {
      document.querySelector('.search-item__active').classList.remove('search-item__active');
      body.classList.remove('body-blocked');
    }
  })

})
