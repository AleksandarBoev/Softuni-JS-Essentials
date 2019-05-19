function sumFromTo(numStr1, numStr2) {
    const num1 = Number.parseFloat(numStr1);
    const num2 = Number.parseFloat(numStr2);
    let totalSum = 0;

    for (let i = num1; i <= num2; i += 1)
        totalSum += i;

    console.log(totalSum);
}

// sumFromTo('-8', '20' );