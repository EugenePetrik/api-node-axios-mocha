import { expect } from 'chai';
import healthCheck from '../lib/health.check.controller.js';

describe('Health Check', () => {
  let response = null;

  before(async () => {
    response = await healthCheck.ping();
  });

  it('should return http status code 200', () => {
    expect(response.status).to.eq(201);
    expect(response.statusText).to.eq('Created');
  });

  it('should return content-type header', () => {
    expect(response.headers['content-type']).to.eq('text/plain; charset=utf-8');
  });

  it('should return valid response body', () => {
    expect(response.data).to.eq('Created');
  });
});
