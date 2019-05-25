function negativePositiveNumbers(arrayOfNumbers) {
    const resultArray = [];
    arrayOfNumbers.forEach(num => num < 0 ? resultArray.unshift(num) : resultArray.push(num));
    resultArray.forEach(num => console.log(num));
}