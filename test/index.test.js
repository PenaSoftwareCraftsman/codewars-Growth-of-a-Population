const {increase_population, increase_population_percentage, nb_years} = require('./../src/index');

describe('Growth the Population', () => {
    it('Should return when 0 when the number of years nedded passed are smaller than number of the population passed', () => {
        expect(increase_population_percentage(100,2)).toBe(102);
    });

    it('Should return the population increased by 2 percent when a population and 2 as percentage are sended', () => {
        expect(increase_population(100,2,50)).toBe(152)
    });
});

describe('Number of year neded', () => {
    it('Should return 0 to "number of years nedded passed" when the number of population passed is greater than the population needed', () => {
        expect(nb_years(1000, 2, 100, 999)).toBe("It will need 0 entire years.");
    });

    it('Should return 0 to "number of years nedded passed" when the number of population passed are equal the population needed', () => {
        expect(nb_years(1000, 2, 100, 999)).toBe("It will need 0 entire years.");
    });

    it('Should return 1 to "number of years needed passed" when at the fist increase, pass the population needed', () => {
        expect(nb_years(1000, 2, 100, 1100)).toBe("It will need 1 entire years.");
    });
});