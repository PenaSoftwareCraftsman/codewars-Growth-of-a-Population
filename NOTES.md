# Notes

In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

At the end of the first year there will be: 
1000 + 1000 * 0.02 + 50 => 1070 inhabitants

At the end of the 2nd year there will be: 
1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

At the end of the 3rd year there will be:
1141 + 1141 * 0.02 + 50 => 1213

It will need 3 entire years.
More generally given parameters:

p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)

the function nb_year should return n number of entire years needed to get a population greater or equal to p.

aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

Examples:
nb_year(1500, 5, 100, 5000) -> 15
nb_year(1500000, 2.5, 10000, 2000000) -> 10

Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.

**Label**  
✅ done 🚧 WIP ❌ ERROR

TODO:

# Pomodoro 1 🍅:

-TEST
    - Should return the population increased by 2 percent when a population and 2 as percentage are sended ✅
    - Should return the population increased by 2 percent plus 50 when a population, 2 percent and 50 are sended ✅
    - Should return 0 to "number of years nedded passed" when the number of population passed is greater than the population needed 🚧

# Pomodoro 2 🍅:
- TEST
    - Should return 0 to "number of years nedded passed" when the number of population passed is greater than the population needed ✅
    - Should return 0 to "number of years nedded passed" when the number of population passed are equal the population needed ✅
    - Should return 1 to "number of years needed passed" when at the fist increase, pass the population needed ✅