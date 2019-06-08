function plasmaGiants(inputArray, sizeSplit) {
    let giant1Array = inputArray.slice(0, inputArray.length / 2);
    let giant2Array = inputArray.slice(inputArray.length / 2, inputArray.length);

    let counter = 1;

    const createGiant = (array, sizeSplit) => {
        const arrayOfArrays = [];
        for (let i = 0; i < array.length; i += sizeSplit) {
            const arrayToBeAdded = array.slice(i, i + sizeSplit);
            arrayOfArrays.push(arrayToBeAdded);
        }

        const arrayProducts = arrayOfArrays.map(arr => arr.reduce((acc, currentElement) => acc * currentElement, 1));

        return arrayProducts.reduce((acc, curr) => acc + curr, 0);
    };

    let giant1 = createGiant(giant1Array, sizeSplit);
    let giant2 = createGiant(giant2Array, sizeSplit);

    const looserHp = inputArray.reduce((acc, curr) => { //finding biggest number
        if (acc > curr) {
            return acc;
        } else {
            return curr;
        }
    }, -Infinity);

    const damage = inputArray.reduce((acc, curr) => { //finding smallest number
        if (acc < curr) {
            return acc;
        } else {
            return curr;
        }
    }, Infinity);

    let roundsCount = 1;
    while (giant1 > looserHp && giant2 > looserHp) {
        giant1 -= damage;
        giant2 -= damage;
        roundsCount++;
    }

    if (giant1 <= looserHp && giant2 <= looserHp) {
        console.log(`Its a draw ${giant1} - ${giant2}`);
    } else if (giant1 <= looserHp) {
        console.log(`Second Giant defeated First Giant with result ${giant2} - ${giant1} in ${roundsCount} rounds`)
    } else if (giant2 <= looserHp) {
        console.log(`First Giant defeated Second Giant with result ${giant1} - ${giant2} in ${roundsCount} rounds`)
    }
}

// plasmaGiants([4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 2);
