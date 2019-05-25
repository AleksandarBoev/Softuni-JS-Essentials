function firstAndLastKNumbers(arrayOfNumbers) {
    const sliceCount = arrayOfNumbers[0];
    const realArray = arrayOfNumbers.slice(1);

    console.log(realArray.slice(0, sliceCount).join(' '));
    console.log(realArray.slice(realArray.length - sliceCount, realArray.length).join(' '));
}

// firstAndLastKNumbers([3, 6, 7, 8, 9]);

