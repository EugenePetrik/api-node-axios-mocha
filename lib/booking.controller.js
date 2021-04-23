import axios from 'axios';
import { CONFIG } from '../config/env.js';

export class Booking {
  url = CONFIG.RESTFUL_BOOKER_URL;

  headers = {
    Accept: 'application/json',
    'Content-type': 'application/json; charset=UTF-8',
  };

  async getBooking(id) {
    return await axios.get(`${this.url}/booking/${id}`, {
      headers: this.headers,
    });
  }
}

export default new Booking();
