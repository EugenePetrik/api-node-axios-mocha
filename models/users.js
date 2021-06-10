import faker from 'faker';
import { CONFIG } from '../config/env.js';

export const users = {
  adminUser: {
    username: CONFIG.ADMIN_USERNAME,
    password: CONFIG.ADMIN_PASSWORD,
  },
  fakeUser: {
    username: faker.internet.email(),
    password: faker.internet.password(),
  },
};
