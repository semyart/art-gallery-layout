document.addEventListener('DOMContentLoaded', function() {

  //слайдер
  const swiper = new Swiper('.swiper-container', {
    loop: true,
  });

  //бургер
  $('.header__burger').click(function(event) {
    $('.header__burger').toggleClass('header__burger_active');
    $('.header__nav').toggleClass('header__nav_active');
    $('.header__link-button').toggleClass('header__link-button_active');
  })

  //реализация поиска
  document.querySelector('.search__img').addEventListener('click', function() {
    document.querySelector('.header__search-form').classList.toggle('header__search-form_active');
    document.querySelector('.header__logo').classList.toggle('header__logo_search');
    document.querySelector('.header__burger').classList.toggle('header__burger_search');
    document.querySelector('.header-top').classList.toggle('header-top_search');
  })

  //выпадающее меню
  document.querySelectorAll('.search-item__button').forEach(item => {

    item.addEventListener('click', function() {
      let li = this.parentElement;
      li.classList.toggle('search-item__active');
      document.querySelectorAll('.search-item').forEach(el => (el != li ) ? el.classList.remove('search-item__active') : false)
    })

    item.querySelector('.search-item__dropdown').forEach(element => {
      new SimpleBar(element, {
        scrollbarMaxSize: 28,
      });
    })

  })

})
