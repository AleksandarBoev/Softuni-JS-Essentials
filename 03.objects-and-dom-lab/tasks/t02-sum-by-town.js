function sumByTown(arrayOfStrings) {
    const towns = {};
    for (let i = 0; i < arrayOfStrings.length; i += 2) {
        towns[arrayOfStrings[i]] === undefined
            ? towns[arrayOfStrings[i]] = Number.parseFloat(arrayOfStrings[i + 1])
            : towns[arrayOfStrings[i]] += Number.parseFloat(arrayOfStrings[i + 1]);
    }

    console.log(JSON.stringify(towns));
}

// sumByTown(['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4']);