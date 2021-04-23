import { expect } from 'chai';
import HealthCheck from '../lib/health.check.controller.js';

describe('Health Check', function () {
  let response = null;

  before(async function () {
    response = await HealthCheck.ping();
  });

  it('should return http status code 200', async function () {
    expect(response.status).to.eq(201);
    expect(response.statusText).to.eq('Created');
  });

  it('should return content-type header', async function () {
    expect(response.headers['content-type']).to.eq('text/plain; charset=utf-8');
  });

  it('should return valid response body', async function () {
    expect(response.data).to.eq('Created');
  });
});
