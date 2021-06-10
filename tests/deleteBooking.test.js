import _ from 'lodash';
import { expect } from 'chai';
import user from '../lib/user.controller.js';
import { users } from '../models//users.js';
import booking from '../lib/booking.controller.js';

describe('Delete Booking', () => {
  let response = null;

  before(async () => {
    const userData = await user.login(users.adminUser);
    const userToken = userData.data.token;

    const bookingIds = await booking.getBookingIds();
    const bookingId = _.sample(bookingIds.data.map(({ bookingid }) => bookingid));

    response = await booking.deleteBooking({ bookingId, userToken });
  });

  it('should return http status code 200', () => {
    expect(response.status).to.eq(201);
    expect(response.statusText).to.eq('Created');
  });

  it('should return valid response body', () => {
    expect(response.data).to.eq('Created');
  });
});
