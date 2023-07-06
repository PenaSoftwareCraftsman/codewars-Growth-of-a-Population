const {increase_population} = require('./../src/index');

describe('Growth of a Population', () => {
    it('Should return when 0 when the number of years nedded passed are smaller than number of the population passed', () => {
        expect(increase_population(100,2)).toBe(102);
    });
});