const increase_population = (population, percentage) =>{

    let percentage_converted = percentage / 100
    let population_increased = population + population * percentage_converted;

    return population_increased;
}

module.exports = {
    increase_population
}