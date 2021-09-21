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


const portfolioButtons = document.querySelectorAll('.portfolio__item-button');
const portfolioList = document.querySelector('.portfolio__list');

const moveArrayByOne = (array) => {
  let newArray = new Array(array.length).fill();
  newArray[0] = array[array.length - 1];
  array.forEach((element, index) => {
    if (index < array.length - 1) {
      newArray[index + 1] = element;
    }
  })
  return newArray;
}

const renderFragmentFromArray = (array) => {
  let fragment = document.createDocumentFragment();
  array.forEach((element) => {
    fragment.appendChild(element);

  })
  return fragment;
}
const showNewFragmentOnPage = (fragment, placeOnPage) => {
  placeOnPage.innerHTML = "";
  placeOnPage.appendChild(fragment);
}


portfolioButtons.forEach((portfolioButton) => {
  portfolioButton.addEventListener('click', () => {
    const portfolioItems = document.querySelectorAll('.portfolio__item');
    const moved = moveArrayByOne(portfolioItems);
    const rendered = renderFragmentFromArray(moved);
    showNewFragmentOnPage(rendered, portfolioList);
  })
})
