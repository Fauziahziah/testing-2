/* eslint-disable camelcase */
import resto_source from '../../DATA.json';

class restoSource {
  static async getMenu() {
    const response = await resto_source;
    return response;
  }
}

export default restoSource;
