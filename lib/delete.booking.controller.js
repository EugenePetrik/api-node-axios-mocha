import axios from 'axios';
import { CONFIG } from '../config/env.js';

export class DeleteBooking {
  url = CONFIG.RESTFUL_BOOKER_URL;

  headers = {
    'Content-type': 'application/json',
  };

  async deleteBooking({ bookingId, userToken }) {
    return await axios.delete(`${this.url}/booking/${bookingId}`, {
      headers: {
        ...this.headers,
        Cookie: `token=${userToken}`,
      },
    });
  }
}

export default new DeleteBooking();
