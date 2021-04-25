import axios from 'axios';
import { CONFIG } from '../config/env.js';

export class UpdateBooking {
  url = CONFIG.RESTFUL_BOOKER_URL;

  headers = {
    Accept: 'application/json',
    'Content-type': 'application/json',
  };

  async updateBooking({ bookingId, body, userToken }) {
    return await axios.put(`${this.url}/booking/${bookingId}`, JSON.stringify(body), {
      headers: {
        ...this.headers,
        Cookie: `token=${userToken}`,
      },
    });
  }

  async partialUpdateBooking({ bookingId, body, userToken }) {
    return await axios.patch(`${this.url}/booking/${bookingId}`, JSON.stringify(body), {
      headers: {
        ...this.headers,
        Cookie: `token=${userToken}`,
      },
    });
  }
}

export default new UpdateBooking();
