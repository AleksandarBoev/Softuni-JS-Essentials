function solve(arrayOfNumbers) {
    let biggestNumber = -Infinity;

    arrayOfNumbers
        .filter(n => {
        if (n >= biggestNumber) {
            biggestNumber = n;
            return true;
        } else
            return false;
    }).forEach(n => console.log(n));
}

// solve([20,
//     3,
//     2,
//     15,
//     6,
//     1]
//
// );