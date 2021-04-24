import Ajv from 'ajv';
import fs from 'fs';
import path from 'path';
import { expect } from 'chai';
import Client from '../lib/client.controller.js';

describe('Client', function () {
  let response = null;

  before(async function () {
    response = await Client.loginAs();
  });

  it('should return http status code 200', async function () {
    expect(response.status).to.eq(200);
    expect(response.statusText).to.eq('OK');
  });

  it('should return content-type header', async function () {
    expect(response.headers['content-type']).to.eq('application/json; charset=utf-8');
  });

  it('should return user token', async function () {
    expect(response.data.token).not.to.be.empty;
  });

  it('should have valid JSON schema', async function () {
    const ajv = new Ajv({ status: true, logger: console, allErrors: true, verbose: true });

    const jsonPath = path.resolve(path.join('.', 'data', 'jsonSchema', 'auth.json'));
    const jsonSchema = JSON.parse(fs.readFileSync(jsonPath));

    expect(ajv.validate(jsonSchema, response.data)).to.be.true;
  });
});
