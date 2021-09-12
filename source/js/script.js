const buttonNavigation = document.querySelector('.page-header__navigation-button');
console.log(buttonNavigation);
const navigation = document.querySelector('.page-header__navigation-list');
console.log(navigation);
const modal = document.querySelector('.page-header__wrapper');

const toToggleBlockByButton = (button, blockNavigation, blockWrapper) => {
  button.classList.toggle('.page-header__navigation-button--active');
  blockNavigation.classList.toggle('.page-header__navigation-list--opened');
  blockWrapper.classList.toggle('.page-header__wrapper--open-modal');
  console.log(button, blockNavigation, blockWrapper);
  console.log('клик');
}
buttonNavigation.addEventListener('click', () => {
  toToggleBlockByButton(buttonNavigation, navigation, modal);
});


