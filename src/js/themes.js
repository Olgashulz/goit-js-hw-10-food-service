import { refs, Theme } from '../index';

const STOREGE_KEY = 'themeNow';
let themeNow = '';


function checkStoregeKey() {
    themeNow = localStorage.getItem(STOREGE_KEY);
    return themeNow;
}

export function checkThemeNow() {
    checkStoregeKey();

    switch (themeNow) {
        case 'light-theme':
            refs.bodyContainer.classList.add(Theme.LIGHT);
            break;
        case 'dark-theme':
            refs.bodyContainer.classList.add(Theme.DARK);
            refs.checkbox.checked = true;
            break;
        default:
            localStorage.setItem(STOREGE_KEY, Theme.LIGHT),
                refs.bodyContainer.classList.add(Theme.LIGHT);
    }
}

export function changeTheme() {
    checkStoregeKey();

    if (themeNow === 'light-theme') {
        localStorage.setItem(STOREGE_KEY, Theme.DARK);
        refs.bodyContainer.classList.replace(Theme.LIGHT, Theme.DARK);

    } else {
        localStorage.setItem(STOREGE_KEY, Theme.LIGHT);
        refs.bodyContainer.classList.replace(Theme.DARK, Theme.LIGHT);
    }
}