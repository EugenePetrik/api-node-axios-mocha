import _ from 'lodash';
import { expect } from 'chai';
import Client from '../lib/client.controller.js';
import Booking from '../lib/booking.controller.js';

describe('Delete Booking', function () {
  let response = null;

  before(async function () {
    const userToken = await Client.getUserToken();

    const bookingId = await Booking.getBookingIds().then(response => {
      return _.sample(response.data.map(({ bookingid }) => bookingid));
    });

    response = await Booking.deleteBooking({ bookingId, userToken });
  });

  it('should return http status code 200', async function () {
    expect(response.status).to.eq(201);
    expect(response.statusText).to.eq('Created');
  });

  it('should return valid response body', async function () {
    expect(response.data).to.eq('Created');
  });
});
