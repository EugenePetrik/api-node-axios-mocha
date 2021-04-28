import { CONFIG } from '../config/env.js';

export default class Base {
  constructor() {
    this.url = CONFIG.RESTFUL_BOOKER_URL;
    this.username = CONFIG.ADMIN_USERNAME;
    this.password = CONFIG.ADMIN_PASSWORD;
    this.headers = {
      Accept: 'application/json',
      'Content-type': 'application/json; charset=UTF-8',
    };
  }
}
