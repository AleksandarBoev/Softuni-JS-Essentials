/**
 * @param arrayOfStrings {Array}
 */
function populationInTowns(arrayOfStrings) {
    const processString = (str) => {
        const townTokens = str.split(' <-> ');
        return [townTokens[0], Number.parseInt(townTokens[1])];
    };

    const getTownObjByName = (arrayOfTownObjects, townName) => {
        for (let townObj of arrayOfTownObjects) {
            if (townObj['name'] === townName) {
                return townObj;
            }
        }

        return null;
    };

    const townsPopulations = [];

    arrayOfStrings.forEach(townInfo => {
        const townTokens = processString(townInfo);
        const townName = townTokens[0];
        const townPopulation = townTokens[1];

        let townObj = getTownObjByName(townsPopulations, townName);
        if (!townObj) {
            townsPopulations.push({name: townName, population: townPopulation});
        } else {
            townObj.population += townPopulation;
        }
    });

    const printTownObjFormatted = townObj => console.log(`${townObj.name} : ${townObj.population}`);

    townsPopulations.forEach(printTownObjFormatted);
}

//
// populationInTowns([
//     'Sofia <-> 1200000',
//     'Montana <-> 20000',
//     'New York <-> 10000000',
//     'Washington <-> 2345000',
//     'Las Vegas <-> 1000000']);