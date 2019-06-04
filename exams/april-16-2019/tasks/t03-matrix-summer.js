function matrixSummer(matrix1, matrix2) {
    //TODO if the sum is >= 10, then the remainder = sum - 9 and is added to next sum. And there is a chance for the same thing to happen
    const resultMatrix = [];

    let remainder = 0;
    for (let matrixIndex = 0; matrixIndex < matrix1.length; matrixIndex += 1) {
        resultMatrix.push([]);

        for (let arrayIndex = 0; arrayIndex < matrix1[matrixIndex].length; arrayIndex += 1) {
            let sum = matrix1[matrixIndex][arrayIndex] + matrix2[matrixIndex][arrayIndex];

            resultMatrix[matrixIndex].push(sum);
        }
    }

    for (let arrayNumber = 0; arrayNumber < resultMatrix.length; arrayNumber += 1) {
        for (let arrayIndex = 0; arrayIndex < resultMatrix[arrayNumber].length; arrayIndex += 1) {
            const currentNumber = resultMatrix[arrayNumber][arrayIndex];

            if (currentNumber > 9) {
                resultMatrix[arrayNumber][arrayIndex] = 9;

                if (resultMatrix[arrayNumber][arrayIndex + 1] === undefined) {
                    resultMatrix[arrayNumber].push(currentNumber - 9);
                } else {
                    resultMatrix[arrayNumber][arrayIndex + 1] += currentNumber - 9;
                }
            }
        }
    }

    console.log(JSON.stringify(resultMatrix));
}

// matrixSummer(
//     [[9, 9], [4, 7]],
//     [[7, 1], [1, 2]]
// );