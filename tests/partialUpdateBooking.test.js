import Ajv from 'ajv';
import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import { expect } from 'chai';
import user from '../lib/user.controller.js';
import booking from '../lib/booking.controller.js';
import { users } from '../models/users.js';
import { booking as bookingBody } from '../models/bookings.js';

describe('Partial Update Booking', () => {
  let response = null;

  before(async () => {
    const userData = await user.login(users.adminUser);
    const userToken = userData.data.token;

    const bookingIds = await booking.getBookingIds();
    const bookingId = _.sample(bookingIds.data.map(({ bookingid }) => bookingid));

    response = await booking.partialUpdateBooking({ bookingId, bookingBody, userToken });
  });

  it('should return http status code 200', () => {
    expect(response.status).to.eq(200);
    expect(response.statusText).to.eq('OK');
  });

  it('should return booking firstname', () => {
    expect(response.data.firstname).to.eq(bookingBody.firstname);
  });

  it('should return booking lastname', () => {
    expect(response.data.lastname).to.eq(bookingBody.lastname);
  });

  it('should have valid JSON schema', () => {
    const ajv = new Ajv({ status: true, logger: console, allErrors: true, verbose: true });

    const jsonPath = path.resolve(path.join('.', 'data', 'jsonSchema', 'updateBooking.json'));
    const jsonSchema = JSON.parse(fs.readFileSync(jsonPath));

    expect(ajv.validate(jsonSchema, response.data)).to.be.true;
  });
});
