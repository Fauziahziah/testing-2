/* eslint-disable no-underscore-dangle */
/* eslint-disable no-restricted-syntax */
import './resto-item';

class RestoList extends HTMLElement {
  set restos(restos) {
    this._restos = restos;
    this.render();
  }

  render() {
    for (const restaurant of this._restos) {
      const restoItemElement = document.createElement('resto-item');
      restoItemElement.resto = restaurant;
      this.appendChild(restoItemElement);
    }
  }

  renderError(message) {
    this.innerHTML = '';
    this.innerHTML += `<h2 tabindex="0" class="placeholder">${message}</h2>`;
  }
}

customElements.define('resto-list', RestoList);
