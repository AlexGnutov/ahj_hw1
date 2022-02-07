import demo from './app';

test('Demo function test', () => {
  const value = 100;
  const result = demo(value);
  expect(result).toBe(value);
});
