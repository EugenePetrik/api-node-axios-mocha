import Ajv from 'ajv';
import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import { expect } from 'chai';
import BookingIds from '../lib/booking.ids.controller.js';
import Booking from '../lib/booking.controller.js';

describe('Get Booking', function () {
  let response = null;
  
  before(async function () {
    const bookingId = await BookingIds.getBookingIds().then(response => {
      return _.sample(response.data.map(({ bookingid }) => bookingid));
    });

    response = await Booking.getBooking(bookingId);
  });

  it('should return http status code 200', async function () {
    expect(response.status).to.eq(200);
    expect(response.statusText).to.eq('OK');
  });

  it('should have valid JSON schema', async function () {
    const ajv = new Ajv({ status: true, logger: console, allErrors: true, verbose: true });

    const jsonPath = path.resolve(path.join('.', 'data', 'jsonSchema', 'booking.json'));
    const jsonSchema = JSON.parse(fs.readFileSync(jsonPath));

    expect(ajv.validate(jsonSchema, response.data)).to.be.true;
  });
});
