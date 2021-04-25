import axios from 'axios';
import { CONFIG } from '../config/env.js';

export class CreateBooking {
  url = CONFIG.RESTFUL_BOOKER_URL;
  username = CONFIG.ADMIN_USERNAME;
  password = CONFIG.ADMIN_PASSWORD;

  headers = {
    Accept: 'application/json',
    'Content-type': 'application/json',
  };

  async createBooking(body) {
    return await axios.post(`${this.url}/booking`, JSON.stringify(body), {
      headers: this.headers,
    });
  }
}

export default new CreateBooking();
