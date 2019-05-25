function solve(arrayOfStrings) {
    let numberOfRotations = Number.parseInt(arrayOfStrings[arrayOfStrings.length - 1]);
    arrayOfStrings.pop();

    numberOfRotations = numberOfRotations % arrayOfStrings.length;
    for (let i = 0; i < numberOfRotations; i += 1)
        arrayOfStrings.unshift(arrayOfStrings.pop());

    console.log(arrayOfStrings.join(' '));
}

// solve(['Banana',
//     'Orange',
//     'Coconut',
//     'Apple',
//     '15']
// );