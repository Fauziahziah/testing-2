import CONFIG from '../globals/config';
import '../../styles/detail-menu.sass';
/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
/* eslint-disable camelcase */
// eslint-disable-next-line no-undef
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-tabs */
class DetailMenu extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set detail_menu(detail_menu) {
    this._detail_menu = detail_menu.restaurant.menus;
    this.render();
  }

  render() {
    this.innerHTML = `
         <div class="detail-menu-a">
         <div class="detail-menu-1">
         <p tabindex="0" class="title-1 title-detail-menu"> FOOD </p>
         <div class="detail-menu-2">
         ${this._getMenus(this._detail_menu.foods)}
         </div>
         </div>
         <div class="detail-menu-1">
         <p tabindex="0" class="title-1 title-detail-menu"> DRINK </p>
         <div class="detail-menu-2">
         ${this._getDrinks(this._detail_menu.drinks)}
         </div>
         </div>
         </div>
          
        `;
  }

  _getMenus(food) {
    let foods = '';
    food.forEach((foody) => {
      foods += `
      <p class="p">
      <img tabindex="0" class="img" src="${CONFIG.IMAGE_DRINK}" alt="${foody.name}">
      <a tabindex="0" class="a" >${foody.name}</a>
      </p>`;
    });
    return foods;
  }

  _getDrinks(drink) {
    let drinks = '';
    drink.forEach((drinky) => {
      drinks += `
      <p class="p">
      <img tabindex="0" class="img"  src="${CONFIG.IMAGE_FOOD}" alt="${drinky.name}">
      <a tabindex="0" class="a">${drinky.name}</a>
      </p>`;
    });
    return drinks;
  }

  renderError(message) {
    this.innerHTML = '';
    this.innerHTML += `<h2 tabindex="0" class="placeholder">${message}</h2>`;
  }
}

customElements.define('detail-menu', DetailMenu);
