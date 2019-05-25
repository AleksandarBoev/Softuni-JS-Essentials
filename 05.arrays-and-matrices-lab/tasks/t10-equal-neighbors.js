function equalNeighbors(matrixOfStrings) {
    const countEqualNeighbors = (matrix, row, col) => {
        let counter = 0;
        const value = matrix[row][col];

        //can also be done with try {...} catch (e){}
        if (matrix[row - 1] && value === matrix[row - 1][col])
            counter++;

        if (matrix[row + 1] && value === matrix[row + 1][col])
            counter++;

        if (value === matrix[row][col - 1])
            counter++;

        if (value === matrix[row][col + 1])
            counter++;

        return counter;
    };

    let totalNeighbors = 0;
    for (let row = 0; row < matrixOfStrings.length; row += 1) {
        for (let col = 0; col < matrixOfStrings[row].length; col += 1) {
            totalNeighbors += countEqualNeighbors(matrixOfStrings, row, col);
        }
    }

    totalNeighbors /= 2;
    console.log(totalNeighbors);
}
//
// equalNeighbors([['2', '3', '4', '7', '0'],
//     ['4', '0', '5', '3', '4'],
//     ['2', '3', '5', '4', '2'],
//     ['9', '8', '7', '5', '4']]
// );