import Ajv from 'ajv';
import fs from 'fs';
import path from 'path';
import { expect } from 'chai';
import booking from '../lib/booking.controller.js';
import { booking as bookingBody } from '../models//bookings.js';

describe('Create Booking', () => {
  let response = null;

  before(async () => {
    response = await booking.createBooking(bookingBody);
  });

  it('should return http status code 200', () => {
    expect(response.status).to.eq(200);
    expect(response.statusText).to.eq('OK');
  });

  it('should return booking firstname', () => {
    expect(response.data.booking.firstname).to.eq(bookingBody.firstname);
  });

  it('should return booking lastname', () => {
    expect(response.data.booking.lastname).to.eq(bookingBody.lastname);
  });

  it('should return booking totalprice', () => {
    expect(response.data.booking.totalprice).to.eq(bookingBody.totalprice);
  });

  it('should return booking depositpaid', () => {
    expect(response.data.booking.depositpaid).to.eq(bookingBody.depositpaid);
  });

  it('should return booking bookingdates', () => {
    expect(response.data.booking.bookingdates.checkin).to.eq(bookingBody.bookingdates.checkin);
    expect(response.data.booking.bookingdates.checkout).to.eq(bookingBody.bookingdates.checkout);
  });

  it('should return booking additionalneeds', () => {
    expect(response.data.booking.additionalneeds).to.eq(bookingBody.additionalneeds);
  });

  it('should have valid JSON schema', () => {
    const ajv = new Ajv({ status: true, logger: console, allErrors: true, verbose: true });

    const jsonPath = path.resolve(path.join('.', 'data', 'jsonSchema', 'createBooking.json'));
    const jsonSchema = JSON.parse(fs.readFileSync(jsonPath));

    expect(ajv.validate(jsonSchema, response.data)).to.be.true;
  });
});
