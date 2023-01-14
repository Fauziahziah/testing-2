/* eslint-disable no-underscore-dangle */
/* eslint-disable no-restricted-syntax */
import './menu-item';

class MenuList extends HTMLElement {
  set menus(menus) {
    this._menus = menus;
    this.render();
  }

  render() {
    for (const menufood of this._menus) {
      const menusItemElement = document.createElement('menu-item');
      menusItemElement.menu = menufood;
      this.appendChild(menusItemElement);
    }
  }

  renderError(message) {
    this.innerHTML = '';
    this.innerHTML += `<h2 tabindex="0" class="placeholder">${message}</h2>`;
  }
}

customElements.define('menu-list', MenuList);
