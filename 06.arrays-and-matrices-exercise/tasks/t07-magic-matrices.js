function solve(numberMatrix) {
    const findColumnSum = (numberMatrix, column) => {
        let result = 0;
        for (let i = 0; i < numberMatrix.length; i += 1)
            result += numberMatrix[i][column];

        return result;
    };

    const allSums = numberMatrix.map(array => array.reduce((accumulator, currentNumber) => accumulator + currentNumber));
    for (let i = 0; i < numberMatrix.length; i += 1) {
        allSums.push(findColumnSum(numberMatrix, i));
    }

    let result = true;
    for (let i = 1; i < allSums.length; i += 1) {
        if (allSums[i] !== allSums[1]) {
            result = false;
            break;
        }
    }

    console.log(result);
}
//
// solve([[1, 0, 0],
//     [0, 0, 1],
//     [0, 1, 0]]
// );