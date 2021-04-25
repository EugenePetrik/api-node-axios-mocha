import Ajv from 'ajv';
import fs from 'fs';
import path from 'path';
import { expect } from 'chai';
import { DateTime } from 'luxon';
import Booking from '../lib/booking.controller.js';

describe('Get Booking IDs', function () {
  let response = null;
  
  describe('All IDs', function() {
    before(async function () {
      response = await Booking.getBookingIds();
    });
  
    it('should return http status code 200', async function () {
      expect(response.status).to.eq(200);
      expect(response.statusText).to.eq('OK');
    });
  
    it('should return content-type header', async function () {
      expect(response.headers['content-type']).to.eq('application/json; charset=utf-8');
    });
  
    it('should return more than one booking id', async function () {
      expect(response.data.length).to.be.greaterThan(1);
    });
  
    it('should return booking id as a number', async function () {
      const isContainCorrectAlbumId = response.data.every(({ bookingid }) => typeof bookingid === 'number');
      expect(isContainCorrectAlbumId).to.be.true;
    });
  
    it('should have valid JSON schema', async function () {
      const ajv = new Ajv({ status: true, logger: console, allErrors: true, verbose: true });
  
      const jsonPath = path.resolve(path.join('.', 'data', 'jsonSchema', 'bookingIds.json'));
      const jsonSchema = JSON.parse(fs.readFileSync(jsonPath));
  
      expect(ajv.validate(jsonSchema, response.data)).to.be.true;
    });
  });

  describe('Filter by name', function() {
    const params = {
      firstname: 'sally',
      lastname: 'brown',
    };

    before(async function () {
      response = await Booking.getBookingIdsWithParams(params);
    });

    it('should return http status code 200', async function () {
      expect(response.status).to.eq(200);
      expect(response.statusText).to.eq('OK');
    });
  
    it('should return content-type header', async function () {
      expect(response.headers['content-type']).to.eq('application/json; charset=utf-8');
    });
  
    it('should return more than one booking id', async function () {
      expect(response.data.length).to.be.greaterThan(1);
    });
  
    it('should return booking id as a number', async function () {
      const isContainCorrectAlbumId = response.data.every(({ bookingid }) => typeof bookingid === 'number');
      expect(isContainCorrectAlbumId).to.be.true;
    });
  
    it('should have valid JSON schema', async function () {
      const ajv = new Ajv({ status: true, logger: console, allErrors: true, verbose: true });
  
      const jsonPath = path.resolve(path.join('.', 'data', 'jsonSchema', 'bookingIds.json'));
      const jsonSchema = JSON.parse(fs.readFileSync(jsonPath));
  
      expect(ajv.validate(jsonSchema, response.data)).to.be.true;
    });
  });

  describe('Filter by checkin/checkout', function() {
    const params = {
      checkin: DateTime.now().plus({ days: -10 }).toISODate(),
      checkout: DateTime.now().toISODate(),
    };

    before(async function () {
      response = await Booking.getBookingIdsWithParams(params);
    });

    it('should return http status code 200', async function () {
      expect(response.status).to.eq(200);
      expect(response.statusText).to.eq('OK');
    });
  
    it('should return content-type header', async function () {
      expect(response.headers['content-type']).to.eq('application/json; charset=utf-8');
    });
  
    it('should return more than one booking id', async function () {
      expect(response.data.length).to.be.greaterThan(1);
    });
  
    it('should return booking id as a number', async function () {
      const isContainCorrectAlbumId = response.data.every(({ bookingid }) => typeof bookingid === 'number');
      expect(isContainCorrectAlbumId).to.be.true;
    });
  
    it('should have valid JSON schema', async function () {
      const ajv = new Ajv({ status: true, logger: console, allErrors: true, verbose: true });
  
      const jsonPath = path.resolve(path.join('.', 'data', 'jsonSchema', 'bookingIds.json'));
      const jsonSchema = JSON.parse(fs.readFileSync(jsonPath));
  
      expect(ajv.validate(jsonSchema, response.data)).to.be.true;
    });
  });
});
