import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import '../../component/resto-list';

/* eslint-disable no-tabs */
const Favorite = {
  async render() {
    return `
    <section style="background-color:#12002F; padding-top: 100px; opacity: 0.9;" tabindex="0" class="services" id="maincontent">
    <div class="container">
    <h2 tabindex="0" style="color: white; " class="title-1">Favorite Restoran Zearesto</h2>
    </div>
    </section>
    <section class="services" id="services">
	<div class="container">
    <h2 tabindex="0" class="title-1">Cabang ZEARESTO</h2>
    <resto-list></resto-list>
    </div>
	</section>
      `;
  },

  async afterRender() {
    const restosContainer = document.querySelector('resto-list');

    try {
      const resto = await FavoriteRestoIdb.getAllResto();
      restosContainer.restos = resto;
    } catch (message) {
      restosContainer.renderError(message);
    }
  },
};

export default Favorite;
