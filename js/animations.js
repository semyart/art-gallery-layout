document.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
  });

  const element = document.querySelectorAll('.top-bar__select');
  element.forEach(element => {
    const choices = new Choices(element, {
      searchEnabled: false,
      itemSelectText: '',
    });
  });
})
