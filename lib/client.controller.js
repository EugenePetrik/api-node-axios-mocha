import axios from 'axios';
import { CONFIG } from '../config/env.js';

export class Client {
  url = CONFIG.RESTFUL_BOOKER_URL;
  username = CONFIG.ADMIN_USERNAME;
  password = CONFIG.ADMIN_PASSWORD;

  headers = {
    'Content-type': 'application/json; charset=UTF-8',
  };

  async loginAs(username = this.username, password = this.password) {
    return await axios.post(
      `${this.url}/auth`,
      {
        username,
        password,
      },
      {
        headers: this.headers,
      },
    );
  }

  async getUserToken(username = this.username, password = this.password) {
    return await axios.post(
      `${this.url}/auth`,
      {
        username,
        password,
      },
      {
        headers: this.headers,
      },
    ).then((response) => {
      return response.data.token;
    });
  }
}

export default new Client();
