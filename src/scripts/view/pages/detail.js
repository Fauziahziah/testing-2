/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-tabs */
import UrlParser from '../../routes/url-parser';
import TheApiResto from '../../data/the-api-resto_source';
import '../../component/detail-resto';
import '../../component/detail-menu';
import '../../component/form-review';

import likeButtonInitiator from '../../utils/like-button-initiator';
import detailReviewInitiator from '../../utils/detail-review-initiator';

const Detail = {
  async render() {
    return `
    <section style="background-color:#12002F; opacity: 0.9; " class="services" id="services">
			<div style="padding-bottom: 10px;" class="container">
      </div>
		</section>
    <section style="background-color: #CFD2CF; " tabindex="0" id="maincontent" class="menu">
			<div class="container">
      <detail-resto></detail-resto>
			</div>	
		</section>
    <section id="menu" class="menu">
			<div class="container">
      <h2 style="padding-bottom: 50px"  tabindex="0" class="title-1">Menu Kami</h2>
      <detail-menu></detail-menu>
			</div>	
		</section>
    <section class="contact" id="contact">
      <div class="container">
      <form-review></form-review>
			</div>
		</section>
    <div id="likeButtonContainer"></div>
    <div id="error"></div>
        `;
  },

  async afterRender() {
    const detailresto = document.querySelector('detail-resto');
    const detailmenu = document.querySelector('detail-menu');
    const container = document.querySelector('#error');
    const detailreview = document.querySelector('form-review');

    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const resto = await TheApiResto.detailResto(url.id);

      detailresto.detail_resto = resto;
      detailmenu.detail_menu = resto;

      await likeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        resto: {
          id: resto.restaurant.id,
          name: resto.restaurant.name,
          description: resto.restaurant.description,
          pictureId: resto.restaurant.pictureId,
          city: resto.restaurant.city,
          rating: resto.restaurant.rating,
        },
      });

      this._initialDetailPage(resto);
    } catch (error) {
      this._error(container);
      console.log(error);
    }
  },

  async _initialDetailPage(resto) {
    await detailReviewInitiator.init(resto, document.querySelector('form-review'));
  },

  _error(container) {
    const errorContent = '<p>data gagal</p>';
    container.innerHTML = errorContent;
  },

};

export default Detail;
