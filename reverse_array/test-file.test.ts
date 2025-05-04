import reverseArray from './test-file.ts';

describe('someFunction', () => {
    it('reverses the inputted array', () => {
    let arr = ['a','b','c']

      const response = reverseArray(arr);

      expect(response).toStrictEqual(['c', 'b', 'a']);
    });
  });

