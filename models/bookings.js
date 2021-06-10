import faker from 'faker';
import { DateTime } from 'luxon';

export const booking = {
  firstname: faker.name.firstName(),
  lastname: faker.name.lastName(),
  totalprice: parseInt(faker.commerce.price()),
  depositpaid: faker.datatype.boolean(),
  bookingdates: {
    checkin: DateTime.now().plus({ days: -10 }).toISODate(),
    checkout: DateTime.now().toISODate(),
  },
  additionalneeds: faker.vehicle.vehicle(),
};
