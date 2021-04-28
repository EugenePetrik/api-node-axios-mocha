import Ajv from 'ajv';
import fs from 'fs';
import path from 'path';
import { expect } from 'chai';
import user from '../lib/user.controller.js';

describe('User', function () {
  let response = null;

  before(async function () {
    response = await user.login();
  });

  it('should return http status code 200', function () {
    expect(response.status).to.eq(200);
    expect(response.statusText).to.eq('OK');
  });

  it('should return content-type header', function () {
    expect(response.headers['content-type']).to.eq('application/json; charset=utf-8');
  });

  it('should return user token', function () {
    expect(response.data.token).not.to.be.empty;
  });

  it('should have valid JSON schema', function () {
    const ajv = new Ajv({ status: true, logger: console, allErrors: true, verbose: true });

    const jsonPath = path.resolve(path.join('.', 'data', 'jsonSchema', 'auth.json'));
    const jsonSchema = JSON.parse(fs.readFileSync(jsonPath));

    expect(ajv.validate(jsonSchema, response.data)).to.be.true;
  });
});
