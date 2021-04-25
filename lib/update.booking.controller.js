import axios from 'axios';
import { CONFIG } from '../config/env.js';

export class UpdateBooking {
  url = CONFIG.RESTFUL_BOOKER_URL;

  headers = {
    Accept: 'application/json',
    'Content-type': 'application/json',
  };

  async updateBooking(id, body, userToken) {
    return await axios.put(`${this.url}/booking/${id}`, JSON.stringify(body), {
      headers: {
        ...this.headers,
        Cookie: `token=${userToken}`,
      },
    });
  }
}

export default new UpdateBooking();
