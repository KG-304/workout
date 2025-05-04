import { doTheWork } from './how_many_times'


describe('', () => {
    it('should return [1, 0, 0, ..., 0] if the string passed is "a"', () => {
        const response = doTheWork('abc');
      
        expect(response).toEqual([
          1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
        ]);
      });
})