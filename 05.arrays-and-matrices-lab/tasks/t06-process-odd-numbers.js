/**
 * @param numbers {Array}
 */
function processOddNumbers(numbers) {
    const result = [];
    for (let i = 1; i < numbers.length; i += 2)
        result.push(numbers[i]);

    console.log(result.map(n => n * 2).reverse().join(' '));
}

// processOddNumbers([3, 0, 10, 4, 7, 3]);