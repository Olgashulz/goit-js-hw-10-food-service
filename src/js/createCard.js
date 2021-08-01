import menuTpl from '../templates/menuTpl.hbs'

export function createMenu(menuCards) {
    return menuCards.map(menuCard => menuTpl(menuCard)).join('');
}
