/* eslint-disable no-underscore-dangle */
/* eslint-disable no-tabs */
class MenuItem extends HTMLElement {
  set menu(menu) {
    this._menu = menu;
    this.render();
  }

  render() {
    this.innerHTML = ` 
        <div  class="menu-grid">
					<div tabindex="0" style="background-image: url('${this._menu.pictureId}'); background-size: 100% 100%; " class="menus" alt="${this._menu.name}">
						<div class="content">
							<h3 tabindex="0">${this._menu.name}</h3>
							<h3 tabindex="0"><span tabindex="0" aria-label="bintang"  class="fa fa-star checked"></span><span tabindex="0">${this._menu.rating}</span></h3>
						</div>
					</div>
				</div>`;
  }
}

customElements.define('menu-item', MenuItem);
