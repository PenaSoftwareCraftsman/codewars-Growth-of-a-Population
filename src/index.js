
const nb_years = (population, percentage, plus, populationNeeded) =>{
    let yearsCounter = 0;

    let population_increased = population;

    while(population_increased < populationNeeded)
    {
        yearsCounter++;
        population_increased = increase_population(population_increased, percentage, plus);
    }

    let answer = prepare_message(yearsCounter);
    return answer;
    
}

const increase_population_percentage = (population, percentage) =>{

    let percentage_converted = percentage / 100
    let population_increased = population + population * percentage_converted;

    return population_increased;
}

const increase_population = (population, percentage, plus) =>{
    let population_increased = increase_population_percentage(population, percentage) + plus;

    return population_increased;
}

const prepare_message = (years) => {
    return "It will need " + years + " entire years.";
}


module.exports = {
    increase_population_percentage,
    increase_population,
    nb_years,
}