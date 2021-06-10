import Ajv from 'ajv';
import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import { expect } from 'chai';
import booking from '../lib/booking.controller.js';

describe('Get Booking', () => {
  let response = null;

  before(async () => {
    const bookingIds = await booking.getBookingIds();
    const bookingId = _.sample(bookingIds.data.map(({ bookingid }) => bookingid));
    response = await booking.getBooking(bookingId);
  });

  it('should return http status code 200', () => {
    expect(response.status).to.eq(200);
    expect(response.statusText).to.eq('OK');
  });

  it('should have valid JSON schema', () => {
    const ajv = new Ajv({ status: true, logger: console, allErrors: true, verbose: true });

    const jsonPath = path.resolve(path.join('.', 'data', 'jsonSchema', 'booking.json'));
    const jsonSchema = JSON.parse(fs.readFileSync(jsonPath));

    expect(ajv.validate(jsonSchema, response.data)).to.be.true;
  });
});
