function largestNumber(...numParams) {
    console.log('The largest number is ' + Math.max.apply(null, numParams) + '.', );
}

// largestNumber(1, 2, 3);