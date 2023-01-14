import API_ENDPOINT from '../globals/api-endpoint';

class TheApiResto {
  static async home_resto() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
    // return responseJson.restaurant;
  }

  static async postReview(review) {
    const response = await fetch(API_ENDPOINT.REVIEW, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',

      },
      body: JSON.stringify(review),
    });
    return response.json();
  }
}

export default TheApiResto;
