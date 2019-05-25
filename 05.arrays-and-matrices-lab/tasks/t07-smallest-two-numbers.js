/**
 * @param numbers {Array}
 */
function smallestTwoNumbers(numbers) {
    if (numbers.length === 0)
        return;

    if (numbers.length === 1) {
        console.log(numbers[0]);
        return;
    }

    const minFunction = (accumulator, currentNumber) => Math.min(accumulator, currentNumber);

    const smallestNumber = numbers.reduce(minFunction);
    numbers.splice(numbers.indexOf(smallestNumber), 1);
    const secondSmallestNumber = numbers.reduce(minFunction);

    console.log(smallestNumber + ' ' + secondSmallestNumber);
}

// smallestTwoNumbers([30]);