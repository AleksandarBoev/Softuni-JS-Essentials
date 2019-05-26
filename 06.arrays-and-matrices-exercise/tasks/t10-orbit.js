function solve(inputArray) {
    const rows = inputArray[0];
    const cols = inputArray[1];
    const starRow = inputArray[2];
    const starCol = inputArray[3];

    const space = [];
    for (let i = 0; i < rows; i += 1) {
        const currentRow = [];
        for (let j = 0; j < cols; j += 1) {
            currentRow[j] = 0;
        }

        space.push(currentRow);
    }

    const orbit = (matrix, starRow, starCol) => {
        let orbitDistance = 1;
        matrix[starRow][starCol] = 1;

        for (let i = 0; i < Math.max(matrix.length, matrix[0].length); i += 1) { //more iterations are done than needed I think
            for (let row = starRow - orbitDistance; row <= starRow + orbitDistance; row += 1) {
                if (matrix[row] === undefined)
                    continue;

                for (let col = starCol - orbitDistance; col <= starCol + orbitDistance; col += 1) {
                    if (matrix[row][col] === undefined)
                        continue;

                    if (matrix[row][col] === 0) {
                        matrix[row][col] = orbitDistance + 1;
                    }
                }
            }

            orbitDistance++;
        }

    };

    orbit(space, starRow, starCol);
    space.forEach(array => console.log(array.join(' ')));
}

// solve([3, 3, 2, 2]);