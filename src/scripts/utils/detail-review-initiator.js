/* eslint-disable camelcase */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-underscore-dangle */
import TheApiResto from '../data/the-api-resto_source';

const DetailReviewInitiator = {
  init(resto, addReview) {
    this._data = resto.restaurant;
    this._addReview = addReview;
    this._addReview.detail_review = this._data;
    this._initialSend();
  },

  _initialSend() {
    const eventSendReview = async (event) => {
      event.preventDefault();
      const nameInput = this._addReview.valueName;
      const reviewInput = this._addReview.valueReview;

      const reviewData = {
        id: this._data.id,
        name: nameInput,
        review: reviewInput,
      };

      const postReview = await TheApiResto.postReview(reviewData);
      console.log(postReview);
      this._addReview.asyncReviews = await postReview.customerReviews;
    };

    this._addReview.sendReview = eventSendReview;
  },
};

export default DetailReviewInitiator;
