import { cleanEnv, url, str } from 'envalid';

export const CONFIG = cleanEnv(process.env, {
  RESTFUL_BOOKER_URL: url({
    default: 'https://restful-booker.herokuapp.com',
    desc: 'API URL to be tested',
  }),
  ADMIN_USERNAME: str({
    default: 'admin',
    desc: 'Admin username',
  }),
  ADMIN_PASSWORD: str({
    default: 'password123',
    desc: 'Admin password',
  }),
});
