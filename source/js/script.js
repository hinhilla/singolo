const buttonNavigation = document.querySelector('.page-header__navigation-button');
const body = document.querySelector('.page__body');


const toToggleModalByButton = (body) => body.classList.toggle('show-modal');
buttonNavigation.addEventListener('click', () => toToggleModalByButton(body));


