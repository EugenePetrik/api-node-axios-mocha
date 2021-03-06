import Ajv from 'ajv';
import fs from 'fs';
import path from 'path';
import { expect } from 'chai';
import { DateTime } from 'luxon';
import booking from '../lib/booking.controller.js';

describe('Get Booking IDs', () => {
  let response = null;

  describe('All IDs', () => {
    before(async function () {
      response = await booking.getBookingIds();
    });

    it('should return http status code 200', () => {
      expect(response.status).to.eq(200);
      expect(response.statusText).to.eq('OK');
    });

    it('should return content-type header', () => {
      expect(response.headers['content-type']).to.eq('application/json; charset=utf-8');
    });

    it('should return more than one booking id', () => {
      expect(response.data.length).to.be.greaterThan(1);
    });

    it('should return booking id as a number', () => {
      const isContainCorrectAlbumId = response.data.every(({ bookingid }) => typeof bookingid === 'number');
      expect(isContainCorrectAlbumId).to.be.true;
    });

    it('should have valid JSON schema', () => {
      const ajv = new Ajv({ status: true, logger: console, allErrors: true, verbose: true });

      const jsonPath = path.resolve(path.join('.', 'data', 'jsonSchema', 'bookingIds.json'));
      const jsonSchema = JSON.parse(fs.readFileSync(jsonPath));

      expect(ajv.validate(jsonSchema, response.data)).to.be.true;
    });
  });

  describe('Filter by name', () => {
    const params = {
      firstname: 'sally',
      lastname: 'brown',
    };

    before(async () => {
      response = await booking.getBookingIdsWithParams(params);
    });

    it('should return http status code 200', () => {
      expect(response.status).to.eq(200);
      expect(response.statusText).to.eq('OK');
    });

    it('should return content-type header', () => {
      expect(response.headers['content-type']).to.eq('application/json; charset=utf-8');
    });

    it('should return more than one booking id', () => {
      expect(response.data.length).to.be.greaterThan(1);
    });

    it('should return booking id as a number', () => {
      const isContainCorrectAlbumId = response.data.every(({ bookingid }) => typeof bookingid === 'number');
      expect(isContainCorrectAlbumId).to.be.true;
    });

    it('should have valid JSON schema', () => {
      const ajv = new Ajv({ status: true, logger: console, allErrors: true, verbose: true });

      const jsonPath = path.resolve(path.join('.', 'data', 'jsonSchema', 'bookingIds.json'));
      const jsonSchema = JSON.parse(fs.readFileSync(jsonPath));

      expect(ajv.validate(jsonSchema, response.data)).to.be.true;
    });
  });

  describe('Filter by checkin/checkout', () => {
    const params = {
      checkin: DateTime.now().plus({ days: -10 }).toISODate(),
      checkout: DateTime.now().toISODate(),
    };

    before(async () => {
      response = await booking.getBookingIdsWithParams(params);
    });

    it('should return http status code 200', () => {
      expect(response.status).to.eq(200);
      expect(response.statusText).to.eq('OK');
    });

    it('should return content-type header', () => {
      expect(response.headers['content-type']).to.eq('application/json; charset=utf-8');
    });

    it('should return more than one booking id', () => {
      expect(response.data.length).to.be.greaterThan(1);
    });

    it('should return booking id as a number', () => {
      const isContainCorrectAlbumId = response.data.every(({ bookingid }) => typeof bookingid === 'number');
      expect(isContainCorrectAlbumId).to.be.true;
    });

    it('should have valid JSON schema', () => {
      const ajv = new Ajv({ status: true, logger: console, allErrors: true, verbose: true });

      const jsonPath = path.resolve(path.join('.', 'data', 'jsonSchema', 'bookingIds.json'));
      const jsonSchema = JSON.parse(fs.readFileSync(jsonPath));

      expect(ajv.validate(jsonSchema, response.data)).to.be.true;
    });
  });
});
