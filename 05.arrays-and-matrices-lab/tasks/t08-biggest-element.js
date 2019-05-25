/**
 * @param matrixOfNumbers {Array}
 */
function biggestElement(matrixOfNumbers) {
    const answer = matrixOfNumbers
        .reduce((accumulator, currentArray) => accumulator.concat(currentArray)) //all arrays become one
        .reduce((accumulator, currentNumber) => Math.max(accumulator, currentNumber), -Infinity);

    console.log(answer);
}
//
// biggestElement([
//     [3, 5, 7, 12],
//     [-1, 4, 33, 2],
//     [8, 3, 0, 4]]
// );