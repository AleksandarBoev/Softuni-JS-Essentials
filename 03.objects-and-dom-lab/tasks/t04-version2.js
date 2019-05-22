function populationInTowns(arrayOfStrings) {
    const processString = (str) => {
        const townTokens = str.split(' <-> ');
        return [townTokens[0], Number.parseInt(townTokens[1])];
    };

    const townsObj = {};
    arrayOfStrings.forEach(townInfo => {
        const townName = processString(townInfo)[0];
        const townPopulation = processString(townInfo)[1];

        if (!townsObj[townName])
            townsObj[townName] = 0;

        townsObj[townName] += townPopulation;
    });

    for (let fieldName in townsObj) {
        console.log(`${fieldName} : ${townsObj[fieldName]}`);
    }
}


// populationInTowns([
//     'Sofia <-> 1200000',
//     'Montana <-> 20000',
//     'New York <-> 10000000',
//     'Washington <-> 2345000',
//     'Las Vegas <-> 1000000']);
