/* eslint-disable no-unused-expressions */
// import CONFIG from '../globals/config';
/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
/* eslint-disable camelcase */
// eslint-disable-next-line no-undef
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-tabs */
import '../../styles/review.sass';

class FormReview extends HTMLElement {
  set detail_review(detail_review) {
    this._detail_restaurant = detail_review;
    this._detail_review = this._detail_restaurant.customerReviews;
    this.render();
  }

  set asyncReviews(reviews) {
    this._detail_review = reviews;
    this.render();
  }

  set sendReview(eventSend) {
    this._sendReview = eventSend;
    this.render();
    this.querySelector('#addReview').reset;
  }

  get valueName() {
    return this.querySelector('#inputName').value;
  }

  get valueReview() {
    return this.querySelector('#inputReview').value;
  }

  render() {
    this.innerHTML = `
    <div class="form-review">
      <div class="width">
      <form id="addReview" name="review">
      <div class="form-grid">
          <input type="text" name="name" id="inputName" placeholder="Nama" class="form-element" />
          <textarea aria-label="isi pesan anda" id="inputReview" name="message" id="message" placeholder="isi pesan anda" class="form-area"></textarea>
      </div>
      <div class="right-align">
            <button id="elmBtnsendReview" type="submit" aria-label="kirim pesan" >kirim pesan</button>
      </div>
      </form>
      </div>
      <div class="mainn">
      <div class="containerr">
      ${this._getReviews(this._detail_review)}
      </div>
      </div>
    </div>`;

    this.querySelector('#addReview').addEventListener('submit', this._sendReview);
  }

  _getReviews(reviews) {
    let reviewItem = '';
    reviews.forEach((review) => {
      reviewItem += `
          <div class="item">
          <div class="item-1">
          <h2 tabindex="0">${review.name}</h2>
          <p tabindex="0">${review.review}</p>
          <p tabindex="0">${review.date}</p>
          </div>
          </div>`;
    });
    return reviewItem;
  }
}

customElements.define('form-review', FormReview);
