function solve(arrayOfStrings) {
    arrayOfStrings.sort((str1, str2) => {
        let comparisonResult = str1.length - str2.length;

        if (comparisonResult === 0) {
            comparisonResult = str1.localeCompare(str2);
        }

        return comparisonResult;
    }).forEach(str => console.log(str));
}

// solve(['Isacc',
//     'Theodor',
//     'Jack',
//     'Harrison',
//     'George']
// );