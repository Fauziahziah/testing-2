import CONFIG from '../globals/config';

/* eslint-disable no-underscore-dangle */
/* eslint-disable no-tabs */
class RestoItem extends HTMLElement {
  set resto(resto) {
    this._resto = resto;
    this.render();
  }

  render() {
    this.innerHTML = `
	              <a style="text-decoration:none; color: inherit; cursor:pointer; " href="#/detail/${this._resto.id}">
					<div  class="service">
						<figure class="img-box">
							<img tabindex="0" src="${CONFIG.BASE_IMAGE_URL}${this._resto.pictureId}" alt="${this._resto.name}" class="img" />
						</figure>
						<p class="line"></p>
						<div class="content">
							<h3 tabindex="0" class="title-2">${this._resto.name}</h3>
							<h3 class="title-content">
							<span tabindex="0" aria-label="lokasi" class="fa fa-map-marker"></span>
							<span tabindex="0">${this._resto.city}</span>
							<span tabindex="0" aria-label="bintang" class="fa fa-star checked" style="padding-left: 20px"></span>
							<span tabindex="0">${this._resto.rating}</span>
							</h3>
							<p tabindex="0">${this._resto.description}</p>
						</div>
					</div>
				</a>`;
  }
}

customElements.define('resto-item', RestoItem);
