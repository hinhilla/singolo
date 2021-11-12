const buttonNavigation = document.querySelector('.page-header__navigation-button');
const body = document.querySelector('.page__body');
const slides = body.querySelectorAll('.slider__slide-list li');
const activeState = 'slider__slide--is-active';
const sliderButtons = body.querySelectorAll('.slider__button');


sliderButtons.forEach(setButtonsHandler);

function setButtonsHandler(sliderButton) {
  sliderButton.addEventListener('click', handleButtonClick);
}

let currentSlide = 0;

function handleButtonClick() {
  const currentAnimation = this.dataset.direction;
  const siblingButton = this.nextElementSibling || this.previousElementSibling;
  const outAnimation = siblingButton.dataset.direction + "-out";

  const prevSlide = slides[currentSlide];
  slides[currentSlide].classList.remove(activeState, currentAnimation);
  currentSlide = (currentSlide + 1) % slides.length;

  prevSlide.classList.add(outAnimation);
  slides[currentSlide].classList.add(activeState, currentAnimation);

  this.disabled = true;

  slides[currentSlide].addEventListener('animationend', () => {
    slides[currentSlide].classList.remove(currentAnimation);

    prevSlide.classList.remove(outAnimation);
    this.disabled = false;
  }, {
    once: true
  });
}








const portfolioButtons = document.querySelectorAll('.portfolio__item-button');
const portfolioList = document.querySelector('.portfolio__list');

const portfolioItems = portfolioList.querySelectorAll('.portfolio__item');
const all = document.querySelector('button[data-item=all-button]');
const webDesign = document.querySelector('button[data-item=web-design-button]');
const graphicDesign = document.querySelector('button[data-item=graphic-design-button]');
const artwork = document.querySelector('button[data-item=artwork-button]'); const webDisignDataItem = 'web-design';
const graphicDisignDataItem = 'graphic-design';
const artworkDataItem = 'artwork';
const HIDDEN_STATE = 'hidden';

const showGroupOfItems = (allItems, filter) => {
  allItems.forEach((element) => {
    if (element.dataset.item !== filter) {
      if (!element.classList.contains(HIDDEN_STATE)) {
        element.classList.add(HIDDEN_STATE);
      }
    } else {
      element.classList.remove(HIDDEN_STATE);
    }
  }
  )
}

const showGroupOfItemsOnClick = (button, dataItem) => {
  button.addEventListener('click', () => {
    showGroupOfItems(portfolioItems, dataItem);
  })
};

all.addEventListener('click', () => {
  portfolioItems.forEach((element) => {
    element.classList.remove(HIDDEN_STATE);
  })
})

showGroupOfItemsOnClick(webDesign, webDisignDataItem);
showGroupOfItemsOnClick(graphicDesign, graphicDisignDataItem);
showGroupOfItemsOnClick(artwork, artworkDataItem);
