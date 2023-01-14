import TheApiResto from '../../data/the-api-resto_source';
import DataRestoSource from '../../data/resto-source';
import '../../component/resto-list';
import '../../component/menu-list';
import '../../component/form-new';

/* eslint-disable no-tabs */
/* eslint-disable camelcase */
/* eslint-disable no-empty-function */
const Home = {
  async render() {
    return `
		<section class="hero" id="hero">
			<div class="container">
      <h1><span id="maincontent" tabindex="0">Restoran Zearesto</span><br class="hide-mob"/>
      <span tabindex="0">Nikmatnya Santapan, Sejuta Kesan</span></h1>
      <h3 tabindex="0">Delivery Order dan Gratis Ongkir</h3>
			</div>
		</section>
		<section id="menu" class="menu">
			<div class="container">
      <h2 tabindex="0" class="title-1">Spesiallis Menu Kami</h2>
      <menu-list></menu-list>
			</div>	
		</section>

		<section class="services" id="services">
			<div class="container">
      <h2 tabindex="0" class="title-1">Cabang ZEARESTO</h2>
      <resto-list></resto-list>
      </div>
		</section>

		<section class="contact" id="contact">
      <div class="container">
      <h2 tabindex="0">Hubungi Kami</h2>
      <form-new></form-new>
			</div>
		</section>
    `;
  },

  async afterRender() {
    const restoList = document.querySelector('resto-list');
    const menuList = document.querySelector('menu-list');

    try {
      const resto = await TheApiResto.home_resto();
      restoList.restos = resto;
    } catch (message) {
      restoList.renderError(message);
    }

    try {
      const menu = await DataRestoSource.getMenu();
      const { foods } = menu;
      menuList.menus = foods;
    } catch (message) {
      menuList.renderError(message);
    }
  },
};

export default Home;
