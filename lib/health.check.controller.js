import axios from 'axios';
import { CONFIG } from '../config/env.js';

export class HealthCheck {
  url = CONFIG.RESTFUL_BOOKER_URL;

  headers = {
    'Content-type': 'application/json; charset=UTF-8',
  };

  async ping() {
    return await axios.get(`${this.url}/ping`, {
      headers: this.headers,
    });
  }
}

export default new HealthCheck();
