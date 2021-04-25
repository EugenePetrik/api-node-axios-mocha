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

  async getBookingIds() {
    return await axios.get(`${this.url}/booking`, {
      headers: this.headers,
    });
  }

  async getBookingIdsWithParams(params) {
    return await axios.get(
      `${this.url}/booking`,
      {
        headers: this.headers,
      },
      {
        ...params,
      },
    );
  }

  async createBooking(body) {
    return await axios.post(`${this.url}/booking`, JSON.stringify(body), {
      headers: this.headers,
    });
  }

  async updateBooking({ bookingId, body, userToken }) {
    return await axios.put(`${this.url}/booking/${bookingId}`, JSON.stringify(body), {
      headers: {
        ...this.headers,
        Cookie: `token=${userToken}`,
      },
    });
  }

  async partialUpdateBooking({ bookingId, body, userToken }) {
    return await axios.patch(`${this.url}/booking/${bookingId}`, JSON.stringify(body), {
      headers: {
        ...this.headers,
        Cookie: `token=${userToken}`,
      },
    });
  }

  async deleteBooking({ bookingId, userToken }) {
    return await axios.delete(`${this.url}/booking/${bookingId}`, {
      headers: {
        ...this.headers,
        Cookie: `token=${userToken}`,
      },
    });
  }
}

export default new Booking();
