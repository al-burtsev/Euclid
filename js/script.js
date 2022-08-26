document.querySelector(".burger-open").addEventListener("click", function() {
  document.querySelector(".header-nav").classList.add("header-nav__active");
})
document.querySelector(".burger-close").addEventListener("click", function() {
  document.querySelector(".header-nav").classList.remove("header-nav__active");
})

let container = document.querySelector(".container_s")
let swiper = new Swiper('.decisions-swiper', {
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.decisions-pagination',
    type: 'bullets',
    clickable: true,
  },
});

let tabBtn = document.querySelectorAll('.hww-slidebar__btn');
let tabItem = document.querySelectorAll('.hww-slide');

tabBtn.forEach(function(el) {
  el.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabBtn.forEach(function(btn){ btn.classList.remove('hww-slidebar__btn--active')});
    e.currentTarget.classList.add('hww-slidebar__btn--active');

    tabItem.forEach(function(el){ el.classList.remove('hww-slide--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('hww-slide--active');
  });
});

new Accordion('.faq-accordion', {
  elementClass: 'faq-accordion__item',
});

document.querySelector(".search__btn-open").addEventListener("click", function() {
  document.querySelector(".search__form").classList.add("search__form--active");
  this.classList.add("active");
})

document.addEventListener("click", function(e) {
  let target = e.target;
  let form = document.querySelector(".search__form");
  if (!target.closest(".search")) {
  form.classList.remove("search__form--active");
    form.querySelector("input").value = "";
    document.querySelector(".search__btn-open").classList.remove("active")
  }
})