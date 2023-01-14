/* eslint-disable class-methods-use-this */
/* eslint-disable camelcase */
import CONFIG from '../globals/config';
import '../../styles/detail-resto.sass';
// eslint-disable-next-line no-undef
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-tabs */
class DetailResto extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set detail_resto(detail_resto) {
    this._detail_resto = detail_resto.restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
          <div class="detail-resto">
            <div>
            <img tabindex="0" src="${CONFIG.BASE_IMAGE_URL}${this._detail_resto.pictureId}" alt="${this._detail_resto.name}" class="detail-resto-1" />
            </div>
            <div>
            <h2 tabindex="0" class="title-1 h2">${this._detail_resto.name}</h2>
            <p tabindex="0" class="pp" >${this._detail_resto.description}</p>
              <div class="detail-resto-2">
                <div class="title-2 detail-title" >
                <p>${this._getCategories(this._detail_resto.categories)}</p>
                </div>
                <div class="title-2 detail-title-1">
                <p tabindex="0"><span tabindex="0" aria-label="bintang" class="fa fa-star checked"></span>${this._detail_resto.rating}</p>
                </div>
                <div class="title-2 detail-title-2" >
                <span tabindex="0" aria-label="lokasi" class="fa fa-map-marker span" ></span>
                <div>
                <a tabindex="0">${this._detail_resto.city}</a>
                <p tabindex="0">${this._detail_resto.address}</p>
                </div>
                </div>
              </div>
            </div>
          </div>`;
  }

  _getCategories(restaurant) {
    let categories = '';
    restaurant.forEach((category) => {
      categories += `<p tabindex="0">${category.name}</p>`;
    });
    return categories;
  }

  renderError(message) {
    this.innerHTML = '';
    this.innerHTML += `<h2 tabindex="0" class="placeholder">${message}</h2>`;
  }
}

customElements.define('detail-resto', DetailResto);
