import axios from 'axios';
import Base from './base.controller.js';

export class User extends Base {
  login(username = this.username, password = this.password) {
    return axios.post(
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
}

export default new User();
