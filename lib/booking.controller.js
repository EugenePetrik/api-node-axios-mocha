import axios from 'axios';
import Base from './base.controller.js';

export class Booking extends Base {
  getBooking(id) {
    return axios.get(`${this.url}/booking/${id}`, {
      headers: this.headers,
    });
  }

  getBookingIds() {
    return axios.get(`${this.url}/booking`, {
      headers: this.headers,
    });
  }

  getBookingIdsWithParams(params) {
    return axios.get(
      `${this.url}/booking`,
      {
        headers: this.headers,
      },
      {
        ...params,
      },
    );
  }

  createBooking(body) {
    return axios.post(`${this.url}/booking`, JSON.stringify(body), {
      headers: this.headers,
    });
  }

  updateBooking({ bookingId, body, userToken }) {
    return axios.put(`${this.url}/booking/${bookingId}`, JSON.stringify(body), {
      headers: {
        ...this.headers,
        Cookie: `token=${userToken}`,
      },
    });
  }

  partialUpdateBooking({ bookingId, body, userToken }) {
    return axios.patch(`${this.url}/booking/${bookingId}`, JSON.stringify(body), {
      headers: {
        ...this.headers,
        Cookie: `token=${userToken}`,
      },
    });
  }

  deleteBooking({ bookingId, userToken }) {
    return axios.delete(`${this.url}/booking/${bookingId}`, {
      headers: {
        ...this.headers,
        Cookie: `token=${userToken}`,
      },
    });
  }
}

export default new Booking();
