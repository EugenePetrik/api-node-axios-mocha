import _ from 'lodash';
import { expect } from 'chai';
import user from '../lib/user.controller.js';
import booking from '../lib/booking.controller.js';

describe('Delete Booking', function () {
  let response = null;
  let bookingId = null;

  before(async function () {
    const userData = await user.login();
    const userToken = userData.data.token;

    const bookingIds = await booking.getBookingIds();
    bookingId = _.sample(bookingIds.data.map(({ bookingid }) => bookingid));

    response = await booking.deleteBooking({ bookingId, userToken });
  });

  it('should return http status code 200', function () {
    expect(response.status).to.eq(201);
    expect(response.statusText).to.eq('Created');
  });

  it('should return valid response body', function () {
    expect(response.data).to.eq('Created');
  });
});
