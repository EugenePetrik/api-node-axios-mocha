import Ajv from 'ajv';
import fs from 'fs';
import path from 'path';
import { expect } from 'chai';
import user from '../lib/user.controller.js';
import { users } from '../models/users.js';

describe('User', () => {
  let response = null;

  before(async () => {
    response = await user.login(users.adminUser);
  });

  it('should return http status code 200', () => {
    expect(response.status).to.eq(200);
    expect(response.statusText).to.eq('OK');
  });

  it('should return content-type header', () => {
    expect(response.headers['content-type']).to.eq('application/json; charset=utf-8');
  });

  it('should return user token', () => {
    expect(response.data.token).not.to.be.empty;
  });

  it('should have valid JSON schema', () => {
    const ajv = new Ajv({ status: true, logger: console, allErrors: true, verbose: true });

    const jsonPath = path.resolve(path.join('.', 'data', 'jsonSchema', 'auth.json'));
    const jsonSchema = JSON.parse(fs.readFileSync(jsonPath));

    expect(ajv.validate(jsonSchema, response.data)).to.be.true;
  });
});
