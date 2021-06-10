import { CONFIG } from '../config/env.js';

export default class Base {
  constructor() {
    this.url = CONFIG.RESTFUL_BOOKER_URL;
    this.headers = {
      Accept: 'application/json',
      'Content-type': 'application/json; charset=UTF-8',
    };
  }
}
