import menuCards from './menu.json';
import { createMenu } from './js/createCard';
import { checkThemeNow, changeTheme } from './js/themes';

import './sass/main.scss';
import './js/createCard';
import './js/themes';


export const refs = {
    bodyContainer: document.querySelector('body'),
    checkbox: document.getElementById('theme-switch-toggle'),
    menuList: document.querySelector('.js-menu')
};

export const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

document.addEventListener('DOMContentLoaded', checkThemeNow);
refs.checkbox.addEventListener('click', changeTheme);

const addMenu = createMenu(menuCards);
refs.menuList.insertAdjacentHTML("beforeend", addMenu);


//----------------------------------------------------------------------------------------------------------------------------
// Все в 1 файле

//import menuTpl from './templates/menuTpl.hbs'
// import menuCards from './menu.json'
// import './sass/main.scss';
// import './js/createCard';

// const refs = {
//     bodyContainer: document.querySelector('body'),
//     checkbox: document.getElementById('theme-switch-toggle'),
//     menuList: document.querySelector('.js-menu')
// };

// const Theme = {
//     LIGHT: 'light-theme',
//     DARK: 'dark-theme',
// };

// const STOREGE_KEY = 'themeNow';
// let themeNow = '';


// document.addEventListener('DOMContentLoaded', checkThemeNow);
// refs.checkbox.addEventListener('click', changeTheme);

// const addMenu = createMenu(menuCards);
// refs.menuList.insertAdjacentHTML("beforeend", addMenu);

// function checkStoregeKey() {
//     themeNow = localStorage.getItem(STOREGE_KEY);
//     return themeNow;
// }

// function checkThemeNow()  {
//     checkStoregeKey();

//     switch (themeNow) {
//         case 'light-theme':
//             refs.bodyContainer.classList.add(Theme.LIGHT);
//             break;
//         case 'dark-theme':
//             refs.bodyContainer.classList.add(Theme.DARK);
//             refs.checkbox.checked = true;
//             break;
//    default:
//             localStorage.setItem(STOREGE_KEY, Theme.LIGHT),
//             refs.bodyContainer.classList.add(Theme.LIGHT);
//     }

// }

// function changeTheme() {
//     checkStoregeKey();

//     if (themeNow === 'light-theme') {
//         localStorage.setItem(STOREGE_KEY, Theme.DARK);
//         refs.bodyContainer.classList.replace(Theme.LIGHT, Theme.DARK);

//     } else {
//         localStorage.setItem(STOREGE_KEY, Theme.LIGHT);
//         refs.bodyContainer.classList.replace(Theme.DARK, Theme.LIGHT);
//     }
// }


// function createMenu(menuCards) {
//     return menuCards.map(menuCard => menuTpl(menuCard)).join('');
// }


