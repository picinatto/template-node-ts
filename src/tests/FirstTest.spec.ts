import { testEnvironment } from 'jest.config';
import { User } from '@models/User';

test('it should be ok', () => {
  const user = new User();

  user.name = 'Ricardo';

  expect(user.name).toEqual('Ricardo');
});
