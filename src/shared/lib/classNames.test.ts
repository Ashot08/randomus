import { classNames } from './classNames';

describe(
  'classNames', () => {
    test('testName', () => {
      expect(classNames('someClassName')).toBe('someClassName');
    });
  }
);
