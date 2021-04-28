import axios from 'axios';
import Base from './base.controller.js';

export class HealthCheck extends Base {
  ping() {
    return axios.get(`${this.url}/ping`, {
      headers: this.headers,
    });
  }
}

export default new HealthCheck();
