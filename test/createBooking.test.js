import Ajv from 'ajv';
import fs from 'fs';
import path from 'path';
import faker from 'faker';
import { DateTime } from 'luxon';
import { expect } from 'chai';
import booking from '../lib/booking.controller.js';

describe('Create Booking', function () {
  let response = null;
  const body = {
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    totalprice: parseInt(faker.commerce.price()),
    depositpaid: faker.datatype.boolean(),
    bookingdates: {
      checkin: DateTime.now().plus({ days: -10 }).toISODate(),
      checkout: DateTime.now().toISODate(),
    },
    additionalneeds: faker.vehicle.vehicle(),
  };

  before(async function () {
    response = await booking.createBooking(body);
  });

  it('should return http status code 200', function () {
    expect(response.status).to.eq(200);
    expect(response.statusText).to.eq('OK');
  })

  it('should return booking firstname', function () {
    expect(response.data.booking.firstname).to.eq(body.firstname);
  });

  it('should return booking lastname', function () {
    expect(response.data.booking.lastname).to.eq(body.lastname);
  });

  it('should return booking totalprice', function () {
    expect(response.data.booking.totalprice).to.eq(body.totalprice);
  });

  it('should return booking depositpaid', function () {
    expect(response.data.booking.depositpaid).to.eq(body.depositpaid);
  });

  it('should return booking bookingdates', function () {
    expect(response.data.booking.bookingdates.checkin).to.eq(body.bookingdates.checkin);
    expect(response.data.booking.bookingdates.checkout).to.eq(body.bookingdates.checkout);
  });

  it('should return booking additionalneeds', function () {
    expect(response.data.booking.additionalneeds).to.eq(body.additionalneeds);
  });

  it('should have valid JSON schema', function () {
    const ajv = new Ajv({ status: true, logger: console, allErrors: true, verbose: true });

    const jsonPath = path.resolve(path.join('.', 'data', 'jsonSchema', 'createBooking.json'));
    const jsonSchema = JSON.parse(fs.readFileSync(jsonPath));

    expect(ajv.validate(jsonSchema, response.data)).to.be.true;
  });
});
