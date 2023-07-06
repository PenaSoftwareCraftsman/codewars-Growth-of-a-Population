const {increase_population, increase_population_percentage} = require('./../src/index');

describe('Growth of a Population', () => {
    it('Should return when 0 when the number of years nedded passed are smaller than number of the population passed', () => {
        expect(increase_population_percentage(100,2)).toBe(102);
    });

    it('Should return the population increased by 2 percent when a population and 2 as percentage are sended', () => {
        expect(increase_population(100,2,50)).toBe(152)
    });
});