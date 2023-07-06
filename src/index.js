const increase_population_percentage = (population, percentage) =>{

    let percentage_converted = percentage / 100
    let population_increased = population + population * percentage_converted;

    return population_increased;
}

const increase_population = (population, percentage, plus) =>{
    let population_increased = increase_population_percentage(population, percentage) + plus;

    return population_increased;
}



module.exports = {
    increase_population_percentage,
    increase_population
}