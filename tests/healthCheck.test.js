import { expect } from 'chai';
import healthCheck from '../lib/health.check.controller.js';

describe('Health Check', function () {
  let response = null;

  before(async function () {
    response = await healthCheck.ping();
  });

  it('should return http status code 200', function () {
    expect(response.status).to.eq(201);
    expect(response.statusText).to.eq('Created');
  });

  it('should return content-type header', function () {
    expect(response.headers['content-type']).to.eq('text/plain; charset=utf-8');
  });

  it('should return valid response body', function () {
    expect(response.data).to.eq('Created');
  });
});
