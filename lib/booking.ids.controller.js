import axios from 'axios';
import { CONFIG } from '../config/env.js';

export class BookingIds {
  url = CONFIG.RESTFUL_BOOKER_URL;

  headers = {
    'Content-type': 'application/json; charset=UTF-8',
  };

  async getBookingIds() {
    return await axios.get(`${this.url}/booking`, {
      headers: this.headers,
    });
  }

  async getBookingIdsWithParams(params) {
    return await axios.get(
      `${this.url}/booking`,
      {
        headers: this.headers,
      },
      {
        ...params,
      },
    );
  }
}

export default new BookingIds();
