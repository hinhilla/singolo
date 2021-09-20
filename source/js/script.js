const buttonNavigation = document.querySelector('.page-header__navigation-button');
const body = document.querySelector('.page__body');


const toToggleModalByButton = (body) => body.classList.toggle('show-modal');
buttonNavigation.addEventListener('click', () => toToggleModalByButton(body));


const sliderButtonRight = document.querySelector('.slider__button-right');

let slideCurrent;
let slideNotCurrent;

sliderButtonRight.addEventListener('click', () => {
  slideCurrent = document.querySelector('.slider__slide--current');
  slideNotCurrent = document.querySelector('.slider__slide--not-current');
  slideCurrent.classList.remove('slider__slide--current');
  slideCurrent.classList.remove('animation--current');
  slideCurrent.classList.remove('animation--current-left');
  slideCurrent.classList.add('slider__slide--not-current');
  slideCurrent.classList.add('animation--not-current');
  slideNotCurrent.classList.remove('slider__slide--not-current');
  slideNotCurrent.classList.add('slider__slide--current');
  slideNotCurrent.classList.remove('animation--not-current');
  slideNotCurrent.classList.remove('animation--not-current-left');
  slideNotCurrent.classList.add('animation--current');

})

const sliderButtonLeft = document.querySelector('.slider__button-left');

sliderButtonLeft.addEventListener('click', () => {
  slideCurrent = document.querySelector('.slider__slide--current');
  slideNotCurrent = document.querySelector('.slider__slide--not-current');
  slideCurrent.classList.remove('slider__slide--current');
  slideCurrent.classList.remove('animation--current');
  slideCurrent.classList.remove('animation--current-left');
  slideCurrent.classList.add('slider__slide--not-current');
  slideCurrent.classList.add('animation--not-current-left');
  slideNotCurrent.classList.remove('slider__slide--not-current');
  slideNotCurrent.classList.add('slider__slide--current');
  slideNotCurrent.classList.remove('animation--not-current');
  slideNotCurrent.classList.remove('animation--not-current-left');
  slideNotCurrent.classList.add('animation--current-left');
})
