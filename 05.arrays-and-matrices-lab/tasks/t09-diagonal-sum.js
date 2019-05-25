/**
 * @param numberStringsSquareMatrix {Array}
 */
function diagonalSum(numberStringsSquareMatrix) {
    let mainDiagonalSum = 0;
    for (let i = 0; i < numberStringsSquareMatrix.length; i += 1)
        mainDiagonalSum += Number.parseFloat(numberStringsSquareMatrix[i][i]);

    let secondaryDiagonalSum = 0;
    for (let i = 0; i < numberStringsSquareMatrix.length; i += 1)
        secondaryDiagonalSum += Number.parseFloat(numberStringsSquareMatrix[i][numberStringsSquareMatrix.length - 1 - i]);

    console.log(mainDiagonalSum + ' ' + secondaryDiagonalSum);
}

// diagonalSum([[3, 5, 17],
//     [-1, 7, 14],
//     [1, -8, 89]]
//
// );