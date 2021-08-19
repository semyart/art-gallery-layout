document.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
  });

  document.querySelector('#first-select-button').addEventListener('click', function() {
    document.querySelector('#first-dropdown').classList.toggle('search-item__dropdown_is-active')
    document.querySelector('#first-select-button').classList.toggle('search-item__button_is-active')
    document.querySelector('#first-arrow-bottom').classList.toggle('arrow-bottom_rotate')
    document.querySelector('#first-arrow-bottom-path').classList.toggle('arrow-bottom-path_active')
  });

  document.querySelector('#second-select-button').addEventListener('click', function() {
    document.querySelector('#second-dropdown').classList.toggle('search-item__dropdown_is-active')
    document.querySelector('#second-select-button').classList.toggle('search-item__button_is-active')
    document.querySelector('#second-arrow-bottom').classList.toggle('arrow-bottom_rotate')
    document.querySelector('#second-arrow-bottom-path').classList.toggle('arrow-bottom-path_active')
  });

  document.querySelector('#third-select-button').addEventListener('click', function() {
    document.querySelector('#third-dropdown').classList.toggle('search-item__dropdown_is-active')
    document.querySelector('#third-select-button').classList.toggle('search-item__button_is-active')
    document.querySelector('#third-arrow-bottom').classList.toggle('arrow-bottom_rotate')
    document.querySelector('#third-arrow-bottom-path').classList.toggle('arrow-bottom-path_active')
  });

  document.querySelector('#fourth-select-button').addEventListener('click', function() {
    document.querySelector('#fourth-dropdown').classList.toggle('search-item__dropdown_is-active')
    document.querySelector('#fourth-select-button').classList.toggle('search-item__button_is-active')
    document.querySelector('#fourth-arrow-bottom').classList.toggle('arrow-bottom_rotate')
    document.querySelector('#fourth-arrow-bottom-path').classList.toggle('arrow-bottom-path_active')
  });

  document.querySelector('#fifth-select-button').addEventListener('click', function() {
    document.querySelector('#fifth-dropdown').classList.toggle('search-item__dropdown_is-active')
    document.querySelector('#fifth-select-button').classList.toggle('search-item__button_is-active')
    document.querySelector('#fifth-arrow-bottom').classList.toggle('arrow-bottom_rotate')
    document.querySelector('#fifth-arrow-bottom-path').classList.toggle('arrow-bottom-path_active')
  });



})

new SimpleBar(document.getElementById('first-dropdown'), {
  scrollbarMaxSize: 28,
});

new SimpleBar(document.getElementById('second-dropdown'), {
  scrollbarMaxSize: 28,
});

new SimpleBar(document.getElementById('third-dropdown'), {
  scrollbarMaxSize: 28,
});

new SimpleBar(document.getElementById('fourth-dropdown'), {
  scrollbarMaxSize: 28,
});

new SimpleBar(document.getElementById('fifth-dropdown'), {
  scrollbarMaxSize: 28,
});




