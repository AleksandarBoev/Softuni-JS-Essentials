function solve(arrayOfStrNumbers) {
    const matrixOfNumbers = [];
    for (let array of arrayOfStrNumbers) {
        matrixOfNumbers.push(array.split(' ').map(e => Number.parseFloat(e)));
    }

    let mainDiagonalSum = 0;
    for (let i = 0; i < matrixOfNumbers.length; i += 1)
        mainDiagonalSum += matrixOfNumbers[i][i];

    let secondaryDiagonalSum = 0;
    for (let i = 0; i < matrixOfNumbers.length; i += 1)
        secondaryDiagonalSum += matrixOfNumbers[i][matrixOfNumbers.length - 1 - i];

    if (mainDiagonalSum === secondaryDiagonalSum) {
        for (let row = 0; row < matrixOfNumbers.length; row += 1) {
            for (let col = 0; col < matrixOfNumbers[row].length; col += 1) {
                if ((row !== col) && (row + col !== matrixOfNumbers.length - 1)) {
                    matrixOfNumbers[row][col] = mainDiagonalSum;
                }
            }
        }
    }

    for (let array of matrixOfNumbers)
        console.log(array.join(' '));
}

// solve(['5 3 12 3 1',
//     '11 4 23 2 5',
//     '101 12 3 21 10',
//     '1 4 5 2 2',
//     '5 22 33 11 1']
// );
